import React from "react";
import classes from "./Button.module.css";

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <button className={classes.myBtn} {...rest}>
      {children}
    </button>
  );
};

export default Button;

// // export interface ButtonProps
// //    {}

// export const ButtonPrimary: React.FC<ButtonProps> = (props) => {
//   const { children, ...rest } = props;

//   return <button {...rest}>{children}</button>;
// };
