import '../styles/globals.css';
import '../public/bootstrap_css/bootstrap.min.css';
import { Header } from '../components/Header/Header';
import { createContext, useState, useEffect } from 'react';

export const CountContext = createContext(0);
export const CartContext = createContext([]);
function MyApp({ Component, pageProps }) {
  const [count, setCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const countHandle = () => {
    setCount(count + 1);
  };

  const cartHandle = (item) => {
    setCartItem([...cartItem, item]);
    console.log(cartItem);
  };

  useEffect(() => {
    setCount(cartItem);
  }, [cartItem]);
  return (
    <CartContext.Provider value={{ cartItem, cartHandle }}>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </CartContext.Provider>
  );
}

export default MyApp;

{
  /* <CartContext.Consumer>
  {(value) => {
    <span
      className={(styles.badge, styles['badge-warning'], styles.lblCartCount)}
    >
      (value)
    </span>;
  }}
</CartContext.Consumer>; */
}
