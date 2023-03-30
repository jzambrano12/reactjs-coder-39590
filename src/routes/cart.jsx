import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../context";

function Cart() {
  const { productsAdded } = useContext(Context);
  const db = getFirestore();

  function updateOrder(productId, finalStock) {
    const itemRef = doc(db, "items", productId);
    updateDoc(itemRef, { stock: finalStock }).catch((error) =>
      console.log({ error })
    );
  }

  function sendOrder() {
    const total = productsAdded.reduce(
      (acc, product) => acc + product.quantity * product.precio,
      0
    );

    const order = {
      buyer: { name: "Jorge", email: "ejemplo@ejemplo.com", phone: "0000000" },
      items: productsAdded,
      total,
    };

    const collectionRef = collection(db, "orders");

    addDoc(collectionRef, order)
      .then((response) => {
        const orderId = response.id;

        productsAdded.map((product) => {
          const finalStock = product.stock - product.quantity;
          updateOrder(product.id, finalStock);
        });
      })
      .catch((error) => console.log({ error }));
  }

  return (
    <Container className="route-container">
      {productsAdded.map((product) => (
        <div>
          <span>Name: {product.title}</span>
          <br />
          <span>Quantity: {product.quantity}</span>
        </div>
      ))}

      <button onClick={sendOrder}>Pagar</button>
    </Container>
  );
}

export default Cart;
