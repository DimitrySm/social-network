import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { setUserProfile } from "../../redux/profileReducer";
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
  setUserProfile: (profile: any) => void;
};

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
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
  setUserProfile,
};

let WhithUrlDataContainerComponet = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhithUrlDataContainerComponet);
