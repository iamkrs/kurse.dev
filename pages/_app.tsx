import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import GlobalStyle from "../src/components/GlobalStyle";
import { initialiseStore } from "../src/store";

function MyApp({ Component, pageProps }: AppProps) {
  const reduxStore = initialiseStore(pageProps.initialReduxState);

  return (
    <>
      <Provider store={reduxStore}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
