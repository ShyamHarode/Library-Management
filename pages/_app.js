import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../app/store";
import Layout from "../components/Layouts/Layout";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);

  if (Component.getLayout) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {Component.getLayout(<Component {...pageProps} />)}
        </PersistGate>
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
export default MyApp;
