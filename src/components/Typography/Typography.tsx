import { FC } from "react";
import classes from "./styles.module.css";
import React from "react";

type Props = {
  children: string;
  component: "h1" | "h2" | "h3" | "p" | "span";
};

const Typography: FC<Props> = ({ children, component }) => {
  return React.createElement(
    component,
    { className: `${classes.typography} ${classes.typography}__${component}` },
    children
  );
};

export default Typography;
