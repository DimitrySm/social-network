import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { getUserProfileThunkCreater } from "../../redux/profileReducer";
import { RootStateType } from "../../redux/redux-store";
import Profile from "./Profile";

type PathParamsType = {
  userId: string;
};

type PropsType = RouteComponentProps<PathParamsType> & OnPropsType;

type OnPropsType = MapStatePropsType & MapDispatchPropsType;

type MapStatePropsType = {
  profile: any;
};
type MapDispatchPropsType = {
  getUserProfileThunkCreater: (userId: string) => void;
};

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    this.props.getUserProfileThunkCreater(userId);
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
  };
};

let mapDispatchToProps = {
  getUserProfileThunkCreater: getUserProfileThunkCreater,
};

let WhithUrlDataContainerComponet = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhithUrlDataContainerComponet);
