import React from 'react';

const OrderTile = (props) => {
  // const { countItem } = props.countItem;

  console.log(props.allOrder);

  return (
    <div className="d-flex  m-3 overflow-auto justify-content-start shadow-lg card p-4">
      <h6 className="text-start">Order ID {props.allOrder.id}</h6>
      <h6 className="text-start">Email: {props.allOrder.email}</h6>
      <h6 className="text-start">Phone: {props.allOrder.phone}</h6>
      <h6 className="text-start"> Total price: {props.allOrder.price}</h6>
    </div>
  );
};

export default OrderTile;
