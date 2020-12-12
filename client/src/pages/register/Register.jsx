import React, { useState } from "react";
import { register } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import {
  Form,
  MainContainer,
  ButtonContainer,
  Container,
  Input,
  Label,
  Button,
} from "./register.styles";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const userRegister = useSelector((state) => state.userRegister);
  // const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <MainContainer>
      {" "}
      <Form onSubmit={submitHandler}>
        <Container>
          <h1>Create Account</h1>
        </Container>

        <Container>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Input>
        </Container>
        <Container>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </Container>
        <Container>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </Container>
        <Container>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Input>
        </Container>
        <Container>
          <Label />
          <ButtonContainer>
            <Button className="primary" type="submit">
              Register
            </Button>
          </ButtonContainer>
        </Container>
        <Container>
          <Label />
        </Container>
      </Form>
    </MainContainer>
  );
};

export default Register;
