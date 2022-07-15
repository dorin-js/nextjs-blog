import "../styles/global.css";
import "../styles/nprogress.css";
import NProgress from "../components/nprogress";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NProgress />
    </>
  );
}
