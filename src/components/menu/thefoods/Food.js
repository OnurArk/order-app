import React, { useContext } from "react";
import MenuInfo from "../../context/MenuInfo-context";
import Order from "./Order/Order";
import styled from "./Food.module.css";
const Food = () => {
  const infoFood = useContext(MenuInfo);
  // const [shopedFood, setShopedFood] = useState([]);
  const info = (orderedItems) => {
    // setShopedFood((previus) => {
    //   return [...previus, { Name: name, Count: count, Price: ttlPrice }];
    // });
    if (localStorage.getItem("ShopedFood")) {
      const item = localStorage.getItem("ShopedFood");
      localStorage.setItem("ShopedFood", JSON.stringify(orderedItems));
    } else {
      localStorage.setItem("ShopedFood", JSON.stringify(orderedItems));
    }
  };

  const foods = infoFood.foodListInfo.map((a) => (
    <li className={styled.foodListContainer} key={a.key} id={a.key}>
      <img src={a.foodImg} alt={a.foodName} className={styled.imges}></img>
      <div className={styled.foodNames}>
        <h3>{a.foodName}</h3>
        <p>{`Price: ${a.foodPrice}TL`}</p>
      </div>
      <Order
        price={a.foodPrice}
        id={a.key}
        name={a.foodName}
        info={info}
        // info={info}
      ></Order>
    </li>
  ));

  return <div>{foods}</div>;
};

export default Food;

// localStorage.setItem(`${props.name}`, {
//   TotalPrice: totalPrice,
//   Count: count,
//   key: props.id,})
