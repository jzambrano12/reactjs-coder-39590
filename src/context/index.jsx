import { createContext, useState } from "react";

export const Context = createContext();
export function CustomProvider({ children }) {
  const [productsAdded, setProductsAdded] = useState([]);

  function onAdd(product, quantity) {
    const isAlreadyAdded = isInCart(product);

    if (isAlreadyAdded) {
      const productToModify = productsAdded.find(
        (productsAdded) => productsAdded.id === product.id
      );

      const productModified = {
        ...productToModify,
        quantity: productToModify.quantity + quantity,
      };

      setProductsAdded((prevState) =>
        prevState.map((productsAdded) =>
          productsAdded.id === product.id ? productModified : productsAdded
        )
      );
    } else {
      setProductsAdded((prevState) =>
        prevState.concat({ ...product, quantity })
      );
    }
  }

  function removeItem(itemId) {}
  function clear() {}

  function isInCart(product) {
    return productsAdded.some((productAdded) => productAdded.id === product.id);
  }

  // Funciones, Cualquier tipo de variable (numeros, objetos, arrays, etc.), Estados de React (useState)
  return (
    <Context.Provider value={{ productsAdded, onAdd }}>
      {children}
    </Context.Provider>
  );
}
