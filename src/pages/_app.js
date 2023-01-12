import Theme from '../styles/theme'; 
import "./css/styles.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 