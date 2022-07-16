import "../styles/global.css";
import "../styles/nprogress.css";
import NProgress from "../components/nprogress";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <NProgress />
    </>
  );
}
