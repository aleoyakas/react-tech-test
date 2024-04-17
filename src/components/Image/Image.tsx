import { FC } from "react";
import classes from "./styles.module.css";

type Props = {
  src: string;
  alt?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
};

const Image: FC<Props> = ({ src, alt, onClick, size }) => {
  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      className={`${classes["img"]} ${classes[`img__${size}`]}`}
    />
  );
};

export default Image;
