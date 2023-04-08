import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

// Lista de productos
import ItemList from "../ItemList";

function ItemListContainer({ categoryId, isCategoryRoute }) {
  const [products, setProducts] = useState([]);

  const getDocsFromFirebase = async (collection) => {
    await getDocs(collection)
      .then((snapshot) => {
        const docs = snapshot.docs;
        setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => console.log({ error }));
  };

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    if (isCategoryRoute) {
      const queryResult = query(
        itemsCollection,
        where("category", "==", categoryId)
      );

      getDocsFromFirebase(queryResult);
    } else {
      getDocsFromFirebase(itemsCollection);
    }
  }, [categoryId]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
