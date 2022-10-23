import React, { useState } from "react";
import FoodOrders from "./FoodOrders/FoodOrders";
import styled from "./OrderHead.module.css";
import { FaShoppingCart } from "react-icons/fa";

const OrderHead = () => {
  const [isOrderListOpen, setIsOrderListOpen] = useState(null);

  const [shopedFood, setShopedFood] = useState(null);

  const orderListOpen = () => {
    setIsOrderListOpen(true);
    setShopedFood(JSON.parse(localStorage.getItem("shopedFood")));
    console.log(shopedFood);
  };
  const orderListClose = () => {
    setIsOrderListOpen(null);
  };
  return (
    <React.Fragment>
      {isOrderListOpen && (
        <FoodOrders onCloseList={orderListClose} info={shopedFood} />
      )}
      <div onClick={orderListOpen}>
        <div className={styled.myOrders}>
          <FaShoppingCart className={styled.icon} />
          <p>Your Cart</p>

          <div className={styled.sayac}></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderHead;
