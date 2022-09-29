import React, { createContext, useContext, useState } from 'react';
import { CartContext } from '../../pages/_app';

const CartTile = (props) => {
  // const { countItem } = props.countItem;

  return (
    <div className="d-flex  m-3 overflow-auto justify-content-between align-items-center shadow-lg">
      <div className="justify-content-center align-items-center  container-fluid">
        <img
          src={props.countItem?.item?.imageSource}
          height="300"
          width="300"
          className="img-fluid"
        />
      </div>
      <div className="justify-content-center align-items-center  container-fluid">
        <p className="text-center">{props.countItem?.item?.title}</p>
      </div>
      <div className="d-flex justify-content-center  container-fluid">
        <h4 className="text-center">{props.countItem?.totalCount}</h4>
      </div>
      <div className=" container-fluid">
        <h4 className="text-center"> {props.countItem?.item?.price}</h4>
      </div>
    </div>
  );
};

export default CartTile;
