import { FC, ReactNode } from "react";
import "./Button.css";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};
