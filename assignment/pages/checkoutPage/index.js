import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

const checkoutPage = () => {
  const [orderSummery, setOrderSummery] = useState();
  const [price, setPrice] = useState();
  // const [orderUpdate, setOrderUpdate] = useState([]);

  const router = useRouter();

  // const [orderUpdate, setOrderUpdate] = useState([]);

  const emailRef = useRef('');
  const phoneRef = useRef('');
  const addressRef = useRef('');

  const handleOrderSubmit = (event) => {
    event.preventDefault();
    let id;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const address = addressRef.current.value;
    // setOrderUpdate([orderDetail]);
    //current order
    let order = [];
    const temp = JSON.parse(localStorage.getItem('allOrders'));
    console.log('temp', temp);
    if (temp) {
      id = temp.length + 1;
      // order = [...temp, orderDetail];
    } else {
      id = 1;
      // order = [orderDetail];
    }
    const orderDetail = { email, phone, address, orderSummery, price, id };
    if (id > 1) order = [...temp, orderDetail];
    else order = [orderDetail];

    localStorage.setItem('allOrders', JSON.stringify(order));
    router.push({
      pathname: '/myOrder',
    });
    // else setOrderUpdate(orderUpdate);
  };

  useEffect(() => {
    setOrderSummery(JSON.parse(localStorage.getItem('checkOutItem')));
    setPrice(JSON.parse(localStorage.getItem('totalPrice')));
    //current
    // const oldOrders = JSON.parse(localStorage.getItem('currentOrder'));
    // if (oldOrders) setOrderUpdate(JSON.parse(localStorage.getItem('currentOrder')));
    // console.log('orderUpdate', orderUpdate);
    // setOrderUpdate(JSON.parse(localStorage.getItem('currentOrder')));
    // console.log('orderUpdate', orderUpdate);
  }, []);

  // useEffect(() => {
  //   //all order
  // console.log('all order', JSON.parse(localStorage.getItem('allOrders')));
  //   localStorage.setItem('allOrders', JSON.stringify(orderUpdate));
  // }, [orderUpdate]);
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card col-lg-6 col-md-10 col-sm-12 p-5">
        <form onSubmit={handleOrderSubmit}>
          <div className="form-group mt-4 mb-3">
            <h5>Email</h5>
            <input
              ref={emailRef}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="text"
              className="form-control shadow w-100"
              name="email"
              required
            />
          </div>

          <div className="form-group mt-4 mb-3">
            <h5>Phone</h5>
            <input
              ref={phoneRef}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              type="number"
              className="form-control shadow w-100"
              name="phone"
              required
            />
          </div>

          <div className="form-group mt-4 mb-3">
            <h5>Address</h5>
            <input
              ref={addressRef}
              id="outlined-basic"
              label="Address"
              variant="outlined"
              type="text"
              className="form-control shadow w-100"
              name="address"
              required
            />
          </div>
          <hr />
          <h5>Order summery</h5>
          <div className="d-flex justify-content-between">
            <div className="me-5">
              <h6>Name</h6>
            </div>
            <div className="ms-5 me-5">
              <h6>Amount</h6>
            </div>
          </div>
          {orderSummery?.map((product) => (
            <div className="d-flex justify-content-between">
              <div className="me-5">{product.item.title}</div>
              <div className="ms-5 me-5">{`${product.totalCount} * ${product.item.price}`}</div>
            </div>
          ))}
          <hr />
          <div>
            <div className="d-flex justify-content-between">
              <div className="me-5">Net Total</div>
              <div className="ms-5 me-5">{price}</div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-2 w-100 fs-5 rounded-3"
          >
            Place order
          </button>
        </form>
      </div>
    </div>
  );
};

export default checkoutPage;
