import { FC } from "react";
import { Link } from "react-router-dom";

import { Button } from "../Button";

import "./Navbar.css";

interface Props {
  onClick: () => void;
}

export const Navbar: FC<Props> = ({ onClick }) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <Link className="navbar-link" to="/">
            <img
              src="https://emphasoft.com/static/emphasoft_site/img/logo.svg"
              alt="logo"
            />
          </Link>
          <Button onClick={onClick}>Logout</Button>
        </div>
      </div>
    </div>
  );
};
