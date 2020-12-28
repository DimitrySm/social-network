import React from "react";
import {
  sendMessageCreater,
  updateNewMessageBodyCreater,
} from "../../redux/dialogsReducer";
import { StoreReduxType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

type PropsType = {
  store: StoreReduxType;
};

const DialogsContainer = (props: PropsType) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreater());
  };
  let onNewMessageChange = (body: string) => {
    props.store.dispatch(updateNewMessageBodyCreater(body));
  };

  return (
    <Dialogs
      updateNewMessageBodyCreater={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
};
export default DialogsContainer;
