import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import s from "./Dialogs.module.css";
import {
  DialogsDataType,
  DialogsPageType,
  MessageItemType,
} from "../../redux/state";

type PropsType = {
  dialogsPage: DialogsPageType;
};

const Dialogs = (props: PropsType) => {
  let dialogsElements = props.dialogsPage.dialogsData.map(
    (d: DialogsDataType) => <DialogItem name={d.name} id={d.id} />
  );
  let messagesElements = props.dialogsPage.messagesData.map(
    (m: MessageItemType) => <MessageItem message={m.message} />
  );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
