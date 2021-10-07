import { wrapper } from "../store";
import "../styles/globals.css";
import app from "../firebaseApp";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
