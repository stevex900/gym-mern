import React from "react";

import { Route } from "react-router-dom";
import {
  PrimaryContainer,
  SecondaryContainer,
  MainContainer,
} from "./app.styles";
import Header from "./components/header/Header";
import ArrangeTraining from "./pages/arrange-training/ArrangeTraining";
import History from "./pages/history/History";
import { useSelector } from "react-redux";
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
          <Route path="/" component={Start} exact={true} />
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
