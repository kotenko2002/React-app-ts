import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import classes from "./Button.module.css";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <button className={classes.myBtn} {...rest}>
      {children}
    </button>
  );
};

export default Button;
