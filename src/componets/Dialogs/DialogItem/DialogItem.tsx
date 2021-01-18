import React from "react";
import { NavLink } from "react-router-dom";
import { DialogsDataType } from "../../../redux/dialogsReducer";
import s from "./DialogItem.module.css";

const DialogItem = (props: DialogsDataType) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog__item}>
      <NavLink to={path} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
