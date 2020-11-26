import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  left: 0;
  z-index: -1;
  background-color: white;
`;

export const PrimaryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-top: 50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  /* background-color: green; */
  width: 100%;
  align-items: center;
`;
export const SecondaryContainer = styled.div`
  margin-bottom: 50px;
  max-width: 50%;
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TertiaryContainer = styled.div`
  display: flex;
`;
export const QuaternaryContainer = styled.div``;
export const P = styled.p``;
export const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 30px;
  border: none;
  margin-bottom: 2px;
  &:focus {
    outline: none;
  }

  min-height: 40px;
  min-width: 40px;
  margin-left: 40px;
  margin-right: 40px;
`;
export const Span = styled.span`
  font-size: 30px;
`;
