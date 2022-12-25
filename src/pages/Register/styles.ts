import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  font-family: "Montserrat", sans-serif;
  font-family: "Libre Baskerville", serif;
  font-size: 1rem;
  font-weight: normal;
  color: var(--black100);
`;

export const Form = styled.div`
  width: 404px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;
`;

export const Title = styled.label`
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

export const SubTitle = styled.label`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 24px;
  text-transform: uppercase;
`;

export const Body = styled.form`
  display: flex;
  flex-direction: column;

  width: 404px;

  margin-bottom: 0.5rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  color: var(--primary);
`;
