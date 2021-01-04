import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";

import Users from "./Users";

let mapStateToProps = (state: any) => {
  return {
    users: state.usersPage.users,
  };
};
let mapDispatchToProps = (dispatch: (action: any) => void) => {
  return {
    follow: (userId: any) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: any) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users: any) => {
      debugger;
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
