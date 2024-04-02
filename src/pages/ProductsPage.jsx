import { useProducts } from "../context/ProductContext";
import styles from "./ProductPage.module.css"

function ProductsPage(props) {
  const products = useProducts();
  console.log(products);

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        {products.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
      <div>SideBar</div>
    </div>
  );
}

export default ProductsPage;
