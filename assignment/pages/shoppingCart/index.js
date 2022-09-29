import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';
import CartTile from '../../components/CartTile/CartTile';
import { CartContext } from '../_app';
import { useRouter } from 'next/router';

const ShoppingCart = () => {
  const [displayCartItem, setDisplayCartItem] = useState();
  const [countItem, setCountItem] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem('cartItem'));
    setDisplayCartItem(temp);
    counter = {};
    let counter;
    temp?.forEach(function (obj) {
      var key = JSON.stringify(obj);
      counter[key] = (counter[key] || 0) + 1;
    });

    let index = 1;
    let cart = [];
    let currentPrice = 0;
    for (const property in counter) {
      let totalCount = counter[property];
      let item = JSON.parse(property);
      currentPrice += parseInt(totalCount) * parseInt(item.price);
      item.price = parseInt(totalCount) * parseInt(item.price);

      setTotalPrice(currentPrice);

      const newItem = { index, item, totalCount };
      cart.push(newItem);
      index++;
    }

    setCountItem(cart);
  }, []);

  const handleCheckOut = () => {
    router.push({
      pathname: '/checkoutPage',
    });
    localStorage.setItem('checkOutItem', JSON.stringify(countItem));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  };

  return (
    <div className="m-5 d-flex justify-content-center overflow-auto">
      <div className="container overflow-auto">
        <div className="d-flex justify-content-center aling-items-center overflow-auto ">
          <div className="col-4 bg-light p-3 overflow-auto">
            <h5>Image</h5>
          </div>
          <div className="justify-content-center align-items-center col-2  bg-light p-3 overflow-auto">
            <h5>Title</h5>
          </div>
          <div className="d-flex justify-content-center col-3  bg-light p-3 overflow-auto">
            <h5 className="text-start">Amount</h5>
          </div>
          <div className="d-flex justify-content-center col-3 bg-light p-3 overflow-auto">
            <h5>Total </h5>
          </div>
        </div>
        <hr />
        {countItem?.map((countItem) => (
          <CartTile key={countItem.index} countItem={countItem}></CartTile>
        ))}
        <hr />
        <div className="d-flex justify-content-end aling-items-center overflow-auto">
          <div className="col-2 bg-light  d-flex justify-content-start ">
            <h5>Total Price &nbsp; &nbsp; {totalPrice} </h5>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button onClick={handleCheckOut} className="btn btn-primary">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
