import '../styles/base/globals.scss';
import LayOut from '../components/layOut';

function MyApp({ Component, pageProps }) {
  return (
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
  );
}

export default MyApp;
