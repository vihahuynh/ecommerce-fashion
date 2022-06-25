import { useState } from "react";
import styled from "styled-components";

import { mobile } from "../responsive";
import { login } from "../services/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/821415/pexels-photo-821415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "70%" })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  max-width: 100%;
  margin: 10px 0px;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 10px 0px;
  &:disabled {
    color: teal;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, {
      username,
      password,
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input placeholder="username" onChange={handleUsername} />
          <Input
            type="password"
            placeholder="password"
            onChange={handlePassword}
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong!</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
