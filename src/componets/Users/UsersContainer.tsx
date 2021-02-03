import React from "react";
import { connect } from "react-redux";
import { RootStateType } from "../../redux/redux-store";
import {
  followThunkCreater,
  getUsersThunkCreater,
  setCurentPageAC,
  toggleIsfollowingInProgressAC,
  unfollowThunkCreater,
  UserDataType,
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";

import Users from "./Users";

type PropsType = {
  users: Array<UserDataType>;
  followThunkCreater: (id: number) => void;
  unfollowThunkCreater: (id: number) => void;
  setCurrentPage: (curentPage: number) => void;
  toggleIsfollowingInProgress: (isFetching: boolean, userId: any) => void;
  getUsersThunkCreater: (curentPage: number, pageSize: number) => void;
  followingInProgress: any;
  pageSize: number;
  totalUsersCount: number;
  curentPage: number;
  isFetching: boolean;
};

class UsersAPIComponent extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsersThunkCreater(this.props.curentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsersThunkCreater(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          followingInProgress={this.props.followingInProgress}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          curentPage={this.props.curentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          unfollowThunkCreater={this.props.unfollowThunkCreater}
          followThunkCreater={this.props.followThunkCreater}
        />
      </>
    );
  }
}

let mapStateToProps = (state: RootStateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    curentPage: state.usersPage.curentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

let mapDispatchToProps = {
  followThunkCreater: followThunkCreater,
  unfollowThunkCreater: unfollowThunkCreater,
  setCurrentPage: setCurentPageAC,
  toggleIsfollowingInProgress: toggleIsfollowingInProgressAC,
  getUsersThunkCreater: getUsersThunkCreater,
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent);

export default UsersContainer;
