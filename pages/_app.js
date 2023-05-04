import GlobalStyle from "../styles";
import { SWRConfig, useSWRConfig } from "swr";

const fetcher = (URL) => fetch("data.json").then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
