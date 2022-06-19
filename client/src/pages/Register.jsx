import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/7760567/pexels-photo-7760567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "70%" })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  max-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${mobile({ maxWidth: "100%", margin: "5px 0", padding: "7px" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  ${mobile({ marginBottom: "10px" })}
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  ${mobile({ margin: "10px 0px" })}
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
