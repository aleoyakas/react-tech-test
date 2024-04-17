import { FC } from "react";
import Typography from "../Typography";
import classes from "./styles.module.css";

type Props = {
  children: string;
  onClick: () => void;
  isActive: boolean;
};

const Button: FC<Props> = ({ children, onClick, isActive }) => (
  <button onClick={onClick} className={classes.button} aria-selected={isActive}>
    <Typography component="span">{children}</Typography>
  </button>
);

export default Button;
