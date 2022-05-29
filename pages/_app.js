import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../styles/Header.module.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
}, []);
  return <Component {...pageProps} />
}

export default MyApp