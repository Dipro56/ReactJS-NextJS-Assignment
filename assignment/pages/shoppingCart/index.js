import { useEffect, useState } from 'react';
import CartTile from '../../components/CartTile/CartTile';

const ShoppingCart = () => {
  const [displayCartItem, setDisplayCartItem] = useState();
  useEffect(() => {
    setDisplayCartItem(JSON.parse(localStorage.getItem('cartItem')));
  }, []);

  console.log(displayCartItem);
  return (
    <div className="m-5 d-flex justify-content-center">
      <div className="container">
        <div className="d-flex justify-content-center aling-items-center">
          <div className="col-3 bg-light p-3">
            <h5>Image</h5>
          </div>
          <div className="justify-content-center align-items-center col-2 bg-light p-3">
            <h5>Title</h5>
          </div>
          <div className="d-flex justify-content-center col-5 bg-light p-3">
            <h5>Amount</h5>
          </div>
          <div className="col-2 bg-light p-3">
            <h5>Total </h5>
          </div>
        </div>
        <hr />
        {displayCartItem?.map((displayCartItem) => (
          <CartTile
            key={displayCartItem.id}
            displayCartItem={displayCartItem}
          ></CartTile>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
