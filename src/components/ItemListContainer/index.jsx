import { useEffect, useState } from "react";
import Products from "../../mocks/products";

// Lista de productos
import ItemList from "../ItemList";

function ItemListContainer({ categoryId, isCategoryRoute }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Products), 2000)
    );

    productsPromise
      .then((response) => {
        if (isCategoryRoute) {
          const productsFiltered = response.filter(
            (product) => product.category === categoryId
          );
          setProducts(productsFiltered);
        } else {
          setProducts(response);
        }
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
