import React from "react";
import styled from "./Menu.module.css";
import Food from "./thefoods/Food";

const Menu = () => {
  return (
    <div className={styled.container}>
      <ul>
        <Food />
      </ul>
    </div>
  );
};

export default Menu;
