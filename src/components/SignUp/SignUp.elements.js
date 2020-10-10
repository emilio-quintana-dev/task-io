import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 600px;
  min-height: 600px;
  text-align: center;
  margin: 50px auto;
  border-radius: 10px;
  padding-bottom: 32px;
`;

export const FormSignUp = styled.form`
  display: flex;
  flex-basis: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const FormInputs = styled.div`
  margin-bottom: 0.5rem;
  width: 80%;
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: #fff;
`;

export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
`;

export const FormButton = styled.button`
  width: 80%;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
  );
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
`;

export const ErrorMsg = styled.p`
  color: red;
  margin: 10px 0px;
`;

export const FormLogIn = styled.span`
  margin-top: 10px;
  color: #fff;
`;

export const FormLink = styled(Link)`
  text-decoration: none;
  color: rgb(39, 176, 255);
`;
