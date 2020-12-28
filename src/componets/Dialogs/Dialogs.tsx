import React, { ChangeEvent } from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import s from "./Dialogs.module.css";
import {
  DialogsDataType,
  DialogsPageType,
  MessageItemType,
} from "../../redux/store";

type PropsType = {
  dialogsPage: DialogsPageType;
  updateNewMessageBodyCreater: (body: string) => void;
  sendMessage: () => void;
};

const Dialogs = (props: PropsType) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((d: DialogsDataType) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messagesData.map((m: MessageItemType) => (
    <MessageItem message={m.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
    // props.dispatch(sendMessageCreater());
  };
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.currentTarget.value;
    props.updateNewMessageBodyCreater(body);
    // props.dispatch(updateNewMessageBodyCreater(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
