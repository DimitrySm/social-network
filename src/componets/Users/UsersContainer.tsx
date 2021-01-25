import React from "react";
import { connect } from "react-redux";
import { userAPI } from "../../api/api";
import { RootStateType } from "../../redux/redux-store";
import {
  followAC,
  setCurentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleIsFetchingtAC,
  unfollowAC,
  UserDataType,
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";

import Users from "./Users";

type PropsType = {
  users: Array<UserDataType>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserDataType>) => void;
  setCurrentPage: (curentPage: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
  pageSize: number;
  totalUsersCount: number;
  curentPage: number;
  isFetching: boolean;
};

class UsersAPIComponent extends React.Component<PropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    userAPI
      .getUsers(this.props.curentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    userAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          curentPage={this.props.curentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
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
  };
};

let mapDispatchToProps = {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurentPageAC,
  setTotalUsersCount: setTotalUsersCountAC,
  toggleIsFetching: toggleIsFetchingtAC,
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent);
export default UsersContainer;
