import '../styles/globals.css';
import '../public/bootstrap_css/bootstrap.min.css';
import { Header } from '../components/Header/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
