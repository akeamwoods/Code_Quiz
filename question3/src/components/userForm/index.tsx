import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { DatePickerInput } from "../datePickerInput";
import { Label, Form, Field, Button, ErrorText } from "./style";

interface MyFormValues {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  australianState: string;
}

const Schema = Yup.object().shape({
  firstName: Yup.string().max(50, "Maximum 50 characters"),
  lastName: Yup.string().max(50, "Maximum 50 characters").required("Required"),
  dateOfBirth: Yup.string().required("Required"),
  australianState: Yup.string().required("Required"),
});

export const UserForm: React.FC<{ onSubmit: (e: any) => void }> = ({
  onSubmit,
}) => {
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    australianState: "VIC",
  };
  const stateOptions = ["NSW", "VIC", "WA", "NT", "ACT", "TAS", "SA", "QLD"];
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.setSubmitting(false);
      }}
      validationSchema={Schema}
    >
      {({ errors, touched }) => (
        <Form>
          <Label htmlFor="firstName">First Name</Label>
          {errors.firstName && touched.firstName ? (
            <ErrorText>{errors.firstName}</ErrorText>
          ) : (
            <ErrorText>{errors.firstName}</ErrorText>
          )}
          <Field id="firstName" name="firstName" placeholder="First Name" />

          <Label htmlFor="lastName">Last Name*</Label>
          {errors.lastName && touched.lastName ? (
            <ErrorText>{errors.lastName}</ErrorText>
          ) : (
            <ErrorText>{errors.firstName}</ErrorText>
          )}
          <Field id="lastName" name="lastName" placeholder="Last Name" />

          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          {errors.dateOfBirth && touched.dateOfBirth ? (
            <ErrorText>{errors.dateOfBirth}</ErrorText>
          ) : (
            <ErrorText>{errors.dateOfBirth}</ErrorText>
          )}
          <DatePickerInput name="dateOfBirth" />

          <Label htmlFor="australianState">Date of Birth</Label>
          {errors.australianState && touched.australianState ? (
            <ErrorText>{errors.australianState}</ErrorText>
          ) : (
            <ErrorText>{errors.australianState}</ErrorText>
          )}

          <Field id="australianState" name="australianState" component="select">
            {stateOptions.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </Field>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};
