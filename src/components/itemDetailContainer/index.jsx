import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", params.id);

    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => console.log({ error }));
  }, []);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
