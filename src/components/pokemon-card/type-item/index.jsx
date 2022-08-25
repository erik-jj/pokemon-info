import React from "react";
import styles from "./item.module.css";
const TypeItem = ({ props }) => {
  const { type } = props;
  return (
    <>
      <p className={`${styles["type-icon"]} ${styles["type-"+type]}`}>
        {type}
      </p>
    </>
  );
};

export default TypeItem;
