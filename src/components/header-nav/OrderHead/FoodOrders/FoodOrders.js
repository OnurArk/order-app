import React from "react";
import styled from "./FoodOrders.module.css";

const FoodOrders = (props) => {
  const items = props.info.map((foods) => {
    return (
      <li className={styled.eachList} key={foods.Key}>
        <p className={styled["Name-Food"]}>{foods.Name}</p>
        <p className={styled.Price}>{`${foods.Price}TL`}</p>
      </li>
    );
  });
  return (
    <div className={styled.container}>
      <div onClick={props.onCloseList} className={styled.background} />;
      <div className={styled.orderList}>
        <ul className={styled.list}>
          {items.length > 0 ? items : "You Need To Buy Food!"}
        </ul>
      </div>
    </div>
  );
};

export default FoodOrders;
