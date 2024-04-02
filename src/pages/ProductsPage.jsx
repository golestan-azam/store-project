import Card from "../components/Card";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductPage.module.css";

function ProductsPage(props) {
  const products = useProducts();

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        {!products.length && <p>Loading ...</p>}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>SideBar</div>
    </div>
  );
}

export default ProductsPage;
