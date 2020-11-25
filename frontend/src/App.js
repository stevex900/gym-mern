import React, { useState, useEffect } from "react";
import Navigation from "./components/navigation/Navigation";
import { Route } from "react-router-dom";
import {
  PrimaryContainer,
  SecondaryContainer,
  MainContainer,
} from "./app.styles";
import Header from "./components/header/Header";
import ArrangeTraining from "./pages/arrange-training/ArrangeTraining";
import History from "./pages/history/History";
import { useDispatch, useSelector } from "react-redux";
import Start from "./pages/start/Start";
import ViewTraining from "./pages/view-training/ViewTraining";
import LogIn from "./pages/login/LogIn";
import "./App.css";
import Register from "./pages/register/Register";

const App = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <>
      <MainContainer>
        <PrimaryContainer>
          <Header />
        </PrimaryContainer>
        <SecondaryContainer>
          <Route path="/:id" component={Start} exact={true} />
          <Route path="/arrangetraining/:id" component={ArrangeTraining} />
          {/* <Route path="/viewtraining" component={ViewTraining} /> */}
          {userInfo && (
            <Route path="/viewtraining/:id" component={ViewTraining} />
          )}
          <Route path="/history/:id" component={History} />
          <Route path="/login" component={LogIn} />
          <Route path="/register" component={Register} />
        </SecondaryContainer>
      </MainContainer>
    </>
  );
};

export default App;
