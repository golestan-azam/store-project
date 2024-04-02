import { useState } from "react";
import { ImSearch } from "react-icons/im";

import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";

import styles from "./ProductPage.module.css";

function ProductsPage(props) {
  const products = useProducts();

  const [search, setSearch] = useState("");

  const searchHandler = () => {
    console.log("Search");
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.product}>
          {!products.length && <Loader />}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>SideBar</div>
      </div>
    </>
  );
}

export default ProductsPage;
