import React, { createContext, useContext, useState } from 'react';

const CartTile = (props) => {
  const { title, price, imageSource } = props.displayCartItem;

  return (
    <div className="d-flex row m-3 overflow-auto justify-content-center align-items-center shadow-lg">
      <div className="col-3 container-fluid">
        <img src={imageSource} className="img-fluid" />
      </div>
      <div className="justify-content-center align-items-center col-2 container-fluid">
        <h5>{title}</h5>
      </div>
      <div className="d-flex justify-content-center col-5 container-fluid">
        <button className="me-2 btn btn-primary">-</button>
        <h4>2</h4>
        <button className="ms-2 btn btn-primary">+</button>
      </div>
      <div className="col-2 container-fluid">
        <h4>{price}</h4>
      </div>
    </div>
  );
};

export default CartTile;
