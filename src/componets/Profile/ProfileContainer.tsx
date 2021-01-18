import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { RootStateType } from "../../redux/redux-store";

import Profile from "./Profile";

type PropsType = {
  setUserProfile: (profile: any) => void;
  profile: any;
};

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

let mapStateToProps = (state: RootStateType) => {
  return {
    profile: state.profilePage.profile,
  };
};

let mapDispatchToProps = {
  setUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
