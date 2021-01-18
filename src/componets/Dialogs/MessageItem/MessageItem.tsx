import React from "react";

import s from "./MessageItem.module.css";

type MessageItemType = {
  message: string;
};

const MessageItem = (props: MessageItemType) => {
  return <div className={s.message__item}>{props.message}</div>;
};

export default MessageItem;
