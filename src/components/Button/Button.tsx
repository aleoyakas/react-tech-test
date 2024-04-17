import { FC } from "react";
import Typography from "../Typography";
import classes from "./styles.module.css";

type Props = {
  children: string;
  onClick: () => void;
};

const Button: FC<Props> = ({ children, onClick }) => (
  <button onClick={onClick} className={classes.button}>
    <Typography component="span">{children}</Typography>
  </button>
);

export default Button;
