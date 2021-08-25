import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../Components/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    config: {
      initialColorMode: "dark",
    },
  });
  return (
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default MyApp;
