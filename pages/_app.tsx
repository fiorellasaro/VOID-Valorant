import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import { mantineTheme } from "../styles/mantineTheme";
import "../styles/globals.css";
import store from "@/store";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Provider store={store}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
          <Component {...pageProps} />
        </MantineProvider>
      </Provider>
    </>
  );
}
