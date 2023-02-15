import classes from "./Select.module.css";

interface SelectProps {
  defaultValue: string;
  options: { name: string; value: string }[];
  value: string;
  onChange(value: string): void;
}

const Select = (props: SelectProps) => {
  return (
    <select
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      className={classes.Select}
    >
      <option disabled>{props.defaultValue}</option>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
