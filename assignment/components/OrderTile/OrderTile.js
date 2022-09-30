import Link from 'next/link';
import React from 'react';

const OrderTile = (props) => {
  // const { countItem } = props.countItem;

  return (
    <tbody>
      <tr>
        <th scope="row">
          <h6>{props.allOrder?.orderID}</h6>
        </th>
        <td>
          <p>{props.allOrder?.email}</p>
        </td>
        <td>
          <p>{props.allOrder?.price} BDT</p>
        </td>
        <td>
          <p>{props.allOrder?.date}</p>
        </td>
        <td>
          <p>{props.allOrder?.time}</p>
        </td>
        <td>
          <Link href={`/orderDetail/${props.allOrder?.orderID}`}>
            <a className="text-decoration-none">See Full order</a>
          </Link>
        </td>
      </tr>
    </tbody>
    // <div className="d-flex  m-3 overflow-auto justify-content-start shadow-lg card p-4">
    //   <h6 className="text-start">Order ID {props.allOrder.id}</h6>
    //   <h6 className="text-start">Email: {props.allOrder.email}</h6>
    //   <h6 className="text-start"> Total price: {props.allOrder.price}</h6>
    //   <h6 className="text-start"> Date: {props.allOrder.date}</h6>
    //   <h6 className="text-start"> Time: {props.allOrder.time}</h6>
    // </div>
  );
};

export default OrderTile;
