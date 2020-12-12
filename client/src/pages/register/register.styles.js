import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Form = styled.form``;
export const ButtonContainer = styled.div`
  justify-content: center;
  display: flex;
`;
export const Container = styled.div``;
export const Input = styled.input`
  background-color: #e9e9e9;
  height: 35px;
  width: 180px;
  margin-bottom: 10px;
  border: none;
  &:focus {
    outline: none;
  }
`;
export const Label = styled.label`
  display: inline-block;
  min-width: 130px;
  /* background-color: red; */
`;
export const Button = styled.button`
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 8px;
  display: block;
  height: 40px;
  width: 120px;
  background-color: black;
  font-size: 15px;
  color: white;
  border: none;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;
