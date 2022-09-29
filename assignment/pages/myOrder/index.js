import React, { useEffect, useState } from 'react';
import OrderTile from '../../components/OrderTile/OrderTile';

const myOrder = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('allOrders')));
    setAllOrder(JSON.parse(localStorage.getItem('allOrders')));
    console.log('state', allOrder);
  }, []);

  return (
    <div className="container">
      <h5 className="text-center m-4">All my order</h5>
      {allOrder?.map((orderList) => (
        <OrderTile allOrder={orderList}></OrderTile>
      ))}
    </div>
  );
};

export default myOrder;
