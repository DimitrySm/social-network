import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
type PropsType = {
  setAuthUserData: (
    id: null | string,
    email: null | string,
    login: null | string
  ) => void;
  login: null | string;
  isAuth: boolean;
};

const Header = (props: PropsType) => {
  return (
    <header className={s.header}>
      <img
        src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
        alt="logo"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
