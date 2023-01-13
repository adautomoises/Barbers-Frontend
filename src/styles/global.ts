import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }
  
  h1 {
    font-family: "Libre Baskerville", "Montserrat", sans-serif;
  }

  main {
    color: ${({ theme }) => theme.colors.black100};
  }
  
  body,
button {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.surface};
}

button {
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.gray_light};
  background: none;
  height: 44px;
  padding: 10px;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
}

button:hover {
  border: 1px solid transparent;
}
`;
