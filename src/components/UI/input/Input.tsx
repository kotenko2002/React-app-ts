import React from "react";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import classes from "./Input.module.css";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = (props: InputProps) => {
  return <input {...props} className={classes.Input} />;
};

export default Input;
