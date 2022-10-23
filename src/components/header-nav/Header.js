import React from "react";
import styled from "./Header.module.css";
import Brand from "./Brand/Brand";
import OrderHead from "./OrderHead/OrderHead";

const Header = () => {
  return (
    <div className={styled.navbar}>
      <div className={styled.nav}>
        <Brand></Brand>
        <OrderHead></OrderHead>
      </div>
    </div>
  );
};

export default Header;
