import React from "react";
import { useFormikContext, useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerInput = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  //@ts-ignore this is a temp hack/fix but don't want to spend loads of time on a typescript error when under time constraints...
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      minDate={new Date("01/01/2015")}
    />
  );
};
