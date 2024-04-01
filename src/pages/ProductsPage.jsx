import { useProducts } from "../context/ProductContext";

function ProductsPage(props) {
  const products = useProducts();
  console.log(products);
  return <div>ProductsPage</div>;
}

export default ProductsPage;
