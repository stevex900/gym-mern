import React from "react";
import { useState, useEffect } from "react";
import { signin } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showMenuChangeAction } from "../../redux/actions/navigationActions";
import { showStopwatchChangeAction } from "../../redux/actions/stopwatchActions";
import { withRouter } from "react-router";
import {
  Form,
  MainContainer,
  ButtonContainer,
  Container,
  Input,
  Label,
  Button,
} from "./logIn.styles";

const LogIn = ({ history }) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const { showMenu } = menu;

  const handleShowMenu = () => {
    dispatch(showMenuChangeAction(!showMenu));
    dispatch(showStopwatchChangeAction(false));
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/");
      handleShowMenu();
    }
  }, [userInfo]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (bindValue, e) => {
    if (bindValue === "email") {
      setEmail(e.target.value);
    } else if (bindValue === "password") {
      setPassword(e.target.value);
    }
  };
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo, loading, error } = userSignin;

  const handleLogIn = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <MainContainer>
      <Form className="form" onSubmit={handleLogIn}>
        <Container>
          <h1>Sign In</h1>
        </Container>

        <Container>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={handleChange.bind(this, "email")}
          ></Input>
        </Container>
        <Container>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={handleChange.bind(this, "password")}
          ></Input>
        </Container>
        <Container>
          <Label />
          <ButtonContainer>
            <Button className="primary" type="submit">
              Sign In
            </Button>
            <Button onClick={() => history.push("/register")}>Register</Button>
          </ButtonContainer>
        </Container>
        <Container>
          <Label />
        </Container>
      </Form>
      {/* //============================================================ */}

      {/* <Link to="/register">Register </Link> */}
    </MainContainer>
  );
};

export default withRouter(LogIn);
