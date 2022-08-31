import "../styles/globals.css";
import MyProvider from "../context/provider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MyProvider>
        <Component {...pageProps} />
      </MyProvider>
    </>
  );
}

export default MyApp;
