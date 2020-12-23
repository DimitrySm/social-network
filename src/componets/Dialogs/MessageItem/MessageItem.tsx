import React from "react";
import { MessageItemType } from "../../../redux/store";
import s from "./MessageItem.module.css";

const MessageItem = (props: MessageItemType) => {
  return <div className={s.message__item}>{props.message}</div>;
};

export default MessageItem;
