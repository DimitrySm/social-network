import { connect } from "react-redux";
import {
  ActionsTyps,
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from "../../../redux/profileReducer";
import { RootStateType } from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

let mapStateToProps = (state: RootStateType) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch: (action: ActionsTyps) => void) => {
  return {
    updateNewPostText: (text: string | undefined) => {
      let action = updateNewPostTextActionCreater(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreater());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
