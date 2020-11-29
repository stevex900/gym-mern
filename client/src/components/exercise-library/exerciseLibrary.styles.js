import styled from "styled-components";

export const Container = styled.div`
  /* background-color: pink; */
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
export const MainContainer = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
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
export const ButtonContainer = styled.div`
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%); */
  /* bottom: 50px; */
  background-color: gray;
  justify-content: center;
  display: flex;
`;

export const Top = styled.div`
  position: absolute;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
