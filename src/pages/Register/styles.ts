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
  color: ${({ theme }) => theme.colors.black100};
`;

export const Form = styled.div`
  width: 404px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;
`;

export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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

  margin-bottom: 1rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.primary};

  :hover {
    color: ${({ theme }) => theme.colors.surface};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Error = styled.label`
  color: ${({ theme }) => theme.colors.Error};
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 24px;
  text-transform: uppercase;
`;

export const GoBack = styled.button`
  display: flex;
  align-items: center;
  height: 44px;
  color: ${({ theme }) => theme.colors.black100};
  font-size: 12px;
  text-transform: uppercase;

  :hover {
    color: ${({ theme }) => theme.colors.surface};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ToggleSwitchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 44px;
  color: ${({ theme }) => theme.colors.black100};
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  padding: 10px;

  .toggle-switch {
    position: relative;
    width: 75px;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    &-checkbox {
      display: none;
    }
    label {
      display: block;
      overflow: hidden;
      cursor: pointer;
      border: 0 solid ${({ theme }) => theme.colors.gray_light};
      border-radius: 20px;
      margin: 0;
    }
    &-inner {
      display: block;
      width: 200%;
      margin-left: -100%;
      transition: margin 0.3s ease-in 0s;
      &:before,
      &:after {
        display: block;
        float: left;
        width: 50%;
        height: 34px;
        padding: 0;
        line-height: 34px;
        font-size: 14px;
        color: white;
        font-weight: bold;
        box-sizing: border-box;
      }
      &:before {
        content: "SIM";
        text-transform: uppercase;
        padding-left: 10px;
        background-color: ${({ theme }) => theme.colors.Confirm};
        color: ${({ theme }) => theme.colors.surface};
      }
    }
    &-inner:after {
      content: "NÃO";
      text-transform: uppercase;
      padding-right: 5px;
      background-color: ${({ theme }) => theme.colors.gray_light};
      color: ${({ theme }) => theme.colors.surface};
      text-align: right;
    }
    &-switch {
      display: block;
      width: 24px;
      margin: 5px;
      background: ${({ theme }) => theme.colors.surface};
      position: absolute;
      top: 0;
      bottom: 0;
      right: 40px;
      border: 0 solid ${({ theme }) => theme.colors.gray_light};
      border-radius: 20px;
      transition: all 0.3s ease-in 0s;
    }
    &-checkbox:checked + label {
      .toggle-switch-inner {
        margin-left: 0;
      }
      .toggle-switch-switch {
        right: 0px;
      }
    }
  }
`;
