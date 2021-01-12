import { connect } from "react-redux";
import { RootStateType } from "../../redux/store";
import {
  ActionsTyps,
  followAC,
  setUsersAC,
  unfollowAC,
  UserDataType,
} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state: RootStateType) => {
  return {
    users: state.usersPage.users,
  };
};
let mapDispatchToProps = (dispatch: (action: ActionsTyps) => void) => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users: Array<UserDataType>) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
