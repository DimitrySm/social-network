import React from "react";
import { connect } from "react-redux";
import { RootStateType } from "../../redux/redux-store";
import { getAuthUserDataThunkCreater } from "../../redux/authReducer";
import Header from "./Header";

type PropsType = {
  getAuthUserDataThunkCreater: () => void;
  login: null | string;
  isAuth: boolean;
};

class HeaderContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getAuthUserDataThunkCreater();
  }

  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} />;
  }
}

let mapStateToProps = (state: RootStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, {
  getAuthUserDataThunkCreater,
})(HeaderContainer);
