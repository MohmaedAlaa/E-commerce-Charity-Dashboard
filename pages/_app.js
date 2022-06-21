import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../services/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  return (
    <>
      <Provider store={store}>
        {router.pathname === "/login" ||
        router.pathname === "/forgotPassword" ||
        router.pathname === "/createAccountP1" ||
        router.pathname === "/createAccountP2" ||
        router.pathname === "/createAccountP3"
         ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </Provider>
    </>
  );
}

export default MyApp;