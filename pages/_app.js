import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
}, []);
  return  (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp;