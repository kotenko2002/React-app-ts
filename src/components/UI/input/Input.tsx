import classes from "./Input.module.css";

interface InputProps {
  type?: "text" | "number";
  placeholder?: string;
}

const Input = (props: InputProps) => {
  return <input {...props} className={classes.Input} />;
};

export default Input;
