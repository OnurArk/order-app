import React from "react";
import styled from "./FoodOrders.module.css";

const FoodOrders = (props) => {
  // const [shopedFood, setShopedFood] = useState();
  // const choosen = localStorage.getItem();
  return (
    <div className={styled.container}>
      <div onClick={props.onCloseList} className={styled.background} />;
      <div className={styled.orderList}>
        <ul className={styled.list}>
          <li className={styled.eachList}>
            <p className={styled["Name-Food"]}>Mantı</p>
            <p className={styled.Price}>Ücret</p>
          </li>
          <li className={styled.eachList}>
            <p>Döner</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FoodOrders;
