import styled, { css } from "styled-components";

export const ExerciseName = styled.div``;
export const ExerciseData = styled.div``;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ExerciseDataItemContainer = styled.div`
  display: flex;
`;

export const ExerciseDataMyWeight = styled.div`
  margin-left: 7px;
  color: black;

  ${({ color }) =>
    color === "red"
      ? css`
          color: red;
        `
      : css`
          color: green;
        `}
`;
export const ExerciseDataMyRep = styled.div`
  margin-left: 7px;
  color: black;

  ${({ color }) =>
    color === "red"
      ? css`
          color: red;
        `
      : css`
          color: green;
        `}
`;
export const ExerciseDataItem = styled.div`
  margin-left: 7px;
  color: black;
`;

export const PrimaryContainer = styled.div``;
export const SecondaryContainer = styled.div``;
export const TertiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* margin-bottom: 6px; */
  border-bottom: 1px solid lightgrey;
`;
export const QuinaryContainer = styled.div``;
export const ButtonContainer = styled.div`
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%); */
  /* bottom: 50px; */
  display: flex;
`;
export const SmallButton = styled.button`
  background-color: black;
  height: 25px;
  width: 60px;
  color: white;
  border: none;

  &:focus {
    outline: none;
  }
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
export const P = styled.p``;
export const InputContainer = styled.div``;
export const Input = styled.input`
  /* position:fixed; */
  background-color: #e9e9e9;
  height: 25px;
  width: 110px;
  margin-left: 5px;
  border: none;
  &:focus {
    outline: none;
  }
`;
