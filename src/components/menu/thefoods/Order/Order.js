import React, { useState, useEffect } from "react";
import styled from "./Order.module.css";

const Order = (props) => {
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    setTotalPrice(props.price * count);
  }, [count, props.price]);

  const countUp = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };
  const countDown = (event) => {
    event.preventDefault();
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const submition = () => {
    if (count !== 0) {
      props.info(count, totalPrice, props.name, props.id);
    }

    setCount(0);
  };
  return (
    <form className={styled.containeForm}>
      <div className={styled.containerUpDown}>
        <button
          className={`${styled.updownBtn} ${styled.minus}`}
          type="button"
          onClick={countDown}
        >
          -
        </button>
        <div className={`${styled.countupdown}`}>{count}</div>
        <button
          className={`${styled.updownBtn} ${styled.plus}`}
          type="button"
          onClick={countUp}
        >
          +
        </button>
      </div>
      <div>
        <p>{`Total price:${totalPrice} TL`}</p>
      </div>
      <div className={styled.orderBtn}>
        <button
          type="button"
          className={styled.orderBtnSelf}
          onClick={submition}
        >
          <h4>Sepete Gönder</h4>
        </button>
      </div>
    </form>
  );
};

export default Order;
