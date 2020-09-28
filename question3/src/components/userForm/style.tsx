import styled from "styled-components";
import { Form as FormikForm, Field as FormikField } from "formik";

export const Label = styled.label`
  display: flex;
  margin: 10px 0 5px 0;
`;

export const Button = styled.button`
  display: flex;
  margin-top: 10px;
  padding: 5px 10px;
`;

export const Form = styled(FormikForm)``;

export const Field = styled(FormikField)``;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.8em;
  padding: 0;
  margin: 0;
`;
