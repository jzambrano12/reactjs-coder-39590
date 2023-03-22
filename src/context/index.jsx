import { createContext, useState } from "react";

export const Context = createContext();
export function CustomProvider({ children }) {
  const [itemsAddedQuantity, setItemsAddedQuantity] = useState([]);

  const onAdd = () => {
    setItemsAddedQuantity((oldState) => oldState.concat({}));
  };

  const onRemove = () => {
    const temp_cart = itemsAddedQuantity.slice(1);
    setItemsAddedQuantity(temp_cart);
  };

  const value = {
    itemsAddedQuantity,
    onAdd,
    onRemove,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
