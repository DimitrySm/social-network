import React, { ChangeEvent } from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import s from "./Dialogs.module.css";
import {
  DialogsDataType,
  MessageItemType,
  sendMessageCreater,
  StoreType,
  updateNewMessageBodyCreater,
} from "../../redux/state";

type PropsType = {
  // dialogsPage: DialogsPageType;
  store: StoreType;
};

const Dialogs = (props: PropsType) => {
  let dialogsElements = props.store._state.dialogsPage.dialogsData.map(
    (d: DialogsDataType) => <DialogItem name={d.name} id={d.id} />
  );
  let messagesElements = props.store._state.dialogsPage.messagesData.map(
    (m: MessageItemType) => <MessageItem message={m.message} />
  );

  let newMessageBody = props.store._state.dialogsPage.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreater());
  };
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.currentTarget.value;
    props.store.dispatch(updateNewMessageBodyCreater(body));
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
