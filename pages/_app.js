import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../app/store";
import Layout from "../components/Layouts/Layout";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <Provider store={store}>
        {Component.getLayout(<Component {...pageProps} />)}
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
