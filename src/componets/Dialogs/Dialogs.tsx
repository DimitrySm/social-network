import React, { ChangeEvent } from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import s from "./Dialogs.module.css";
import {
  ActionsTyps,
  DialogsDataType,
  DialogsPageType,
  MessageItemType,
} from "../../redux/store";
import {
  sendMessageCreater,
  updateNewMessageBodyCreater,
} from "../../redux/dialogsReducer";

type PropsType = {
  dialogsPage: DialogsPageType;
  dispatch: (action: ActionsTyps) => void;
};

const Dialogs = (props: PropsType) => {
  let dialogsElements = props.dialogsPage.dialogsData.map(
    (d: DialogsDataType) => <DialogItem name={d.name} id={d.id} />
  );
  let messagesElements = props.dialogsPage.messagesData.map(
    (m: MessageItemType) => <MessageItem message={m.message} />
  );

  let newMessageBody = props.dialogsPage.newMessageBody;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreater());
  };
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.currentTarget.value;
    props.dispatch(updateNewMessageBodyCreater(body));
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
