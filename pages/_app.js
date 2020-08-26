import React from "react";
import LayoutComponent from "../components/Layout";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from "../theme/theme";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </ThemeProvider>
  );
}
export default App;