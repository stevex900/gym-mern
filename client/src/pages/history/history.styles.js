import styled from "styled-components";

export const ComparisonContainer = styled.div`
  display: flex;
`;
export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid black;
`;
export const ExerciseData = styled.div`
  min-width: 130px;
  max-width: 130px;
  border-bottom: 1px solid lightgrey;
  /* background-color: blue; */
`;
export const ExerciseName = styled.div`
  min-width: 80px;
  max-width: 80px;
  /* background-color: red; */
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;
export const Top = styled.div`
  position: absolute;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;
export const PrimaryContainer = styled.div``;
export const ExerciseDataItem = styled.div`
  margin-left: 18px;
`;
export const ExerciseDataItemContainer = styled.div`
  display: flex;
`;
export const SecondaryContainer = styled.div``;

export const WorkoutTimeContainer = styled.div``;
export const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgrey;
`;
export const InputContainer = styled.div``;
export const QuinaryContainer = styled.div`
  margin-left: 7px;
`;

export const Form = styled.form``;
export const Input = styled.input`
  background-color: #e9e9e9;
  height: 35px;
  width: 250px;
  margin-bottom: 10px;
  border: none;
  &:focus {
    outline: none;
  }
`;
export const Textarea = styled.textarea``;
export const ButtonContainer = styled.div`
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%); */
  /* bottom: 50px; */
  display: flex;
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
