import "./App.css";
import Router from "./routes";

import { ThemeProvider } from "styled-components";
import theme from "./global/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
