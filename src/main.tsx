import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import theme from "./theme";

createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
);
