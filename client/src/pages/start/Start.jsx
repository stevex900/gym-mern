import React from "react";
import { MainContainer, Container, H1 } from "./start.styles";
import { ReactComponent as GymFav } from "../../assets/gym2.svg";
const Start = () => {
  return (
    <MainContainer>
      <Container>
        <H1>WORKOUT</H1>
        <GymFav />
        <H1>NOTEBOOK</H1>
      </Container>
    </MainContainer>
  );
};

export default Start;
