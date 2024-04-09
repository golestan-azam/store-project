import { MdDeleteOutline } from "react-icons/md";

import { shortenText } from "../helper/helper";

import styles from "./BasketCart.module.css";

function BasketCard({ data, clickHandler }) {
  const { image, title, quantity, price } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <p>{(quantity * price).toFixed(2)} $</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}

        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
