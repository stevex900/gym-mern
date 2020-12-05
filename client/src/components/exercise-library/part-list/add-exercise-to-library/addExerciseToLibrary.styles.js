import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Button = styled.button`
  margin-left: 4px;
  margin-right: 4px;
  /* margin-top: 8px; */
  display: block;
  height: 40px;
  width: 120px;
  background-color: black;
  font-size: 15px;
  color: white;
  border: none;
  margin-bottom: 3px;
  &:focus {
    outline: none;
  }
`;
export const Input = styled.input`
  background-color: #e9e9e9;
  height: 35px;
  width: 250px;
  margin-bottom: 3px;
  border: none;
  &:focus {
    outline: none;
  }
`;
