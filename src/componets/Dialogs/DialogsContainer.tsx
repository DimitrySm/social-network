import { connect } from "react-redux";
import {
  ActionsTyps,
  sendMessageCreater,
  updateNewMessageBodyCreater,
} from "../../redux/dialogsReducer";
import { RootStateType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

// type PropsType = {
//   store: StoreReduxType;
// };

let mapStateToProps = (state: RootStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch: (action: ActionsTyps) => void) => {
  return {
    updateNewMessageBodyCreater: (body: string) => {
      dispatch(updateNewMessageBodyCreater(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreater());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
