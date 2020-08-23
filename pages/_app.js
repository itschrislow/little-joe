import React from "react";
import LayoutComponent from "../components/Layout";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <CSSReset />
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </ThemeProvider>
  );
}
export default App;