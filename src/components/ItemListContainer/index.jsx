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

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    if (isCategoryRoute) {
      const queryResult = query(
        itemsCollection,
        where("category", "==", categoryId)
      );
      getDocs(queryResult)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log({ error }));
    } else {
      getDocs(itemsCollection)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log({ error }));
    }
  }, [categoryId]);

  // useEffect(() => {
  //   const productsPromise = new Promise((resolve, reject) =>
  //     setTimeout(() => resolve(Products), 2000)
  //   );

  //   productsPromise
  //     .then((response) => {
  //       if (isCategoryRoute) {
  //         const productsFiltered = response.filter(
  //           (product) => product.category === categoryId
  //         );
  //         setProducts(productsFiltered);
  //       } else {
  //         setProducts(response);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, [categoryId]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
