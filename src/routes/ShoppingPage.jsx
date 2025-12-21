import React from "react";
import ProductCard from "../components/ProductCard";

function ShoppingPage() {
  const [shopItems, setShopItems] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok)
          throw new Error(`Response status: ${response.status}`);
        const data = await response.json();
        setShopItems(data);
      } catch (e) {
        console.error(e.message);
      }
    }
    getData();
  }, []);

  return (
    <section className="flex flex-wrap gap-5 justify-center py-5">
        {shopItems.map(product => (
            <ProductCard 
            key={product.id}
            image={product.image} 
            title={product.title}
            category={product.category}
            price={product.price}/>
        ))}
    </section>
  );
}

export default ShoppingPage;