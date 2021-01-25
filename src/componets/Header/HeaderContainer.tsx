import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import { RootStateType } from "../../redux/redux-store";
import Header from "./Header";

type PropsType = {
  setAuthUserData: (
    id: null | string,
    email: null | string,
    login: null | string
  ) => void;
  login: null | string;
  isAuth: boolean;
};

class HeaderContainer extends React.Component<PropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        debugger;
        if (response.data.resultCode === 0) {
          debugger;
          let { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }

  render() {
    return (
      <Header
        isAuth={this.props.isAuth}
        login={this.props.login}
        setAuthUserData={this.props.setAuthUserData}
      />
    );
  }
}

let mapStateToProps = (state: RootStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
