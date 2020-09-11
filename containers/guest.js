import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import Loader from '../components/Loader/Loader';

class Guest extends Component {
  state = {
    verifyingAuth: true,
    stopLoader: false,
  }

  componentDidMount() {
    const { isAuthenticated, verifyingAuth } = this.props;
    if (!isAuthenticated && !verifyingAuth) {
      this.setState({
        stopLoader: false,
      });
    }
  }

  componentDidUpdate() {
    const { router, isAuthenticated, verifyingAuth } = this.props;
    const { stopLoader } = this.state;
    if (isAuthenticated) {
      router.push('/');
      return;
    }

    if (!verifyingAuth && !stopLoader) {
      this.setState({
        verifyingAuth: false,
        stopLoader: true,
      });
    }
  }

  redirectToHome = () => {
    const { router } = this.props;
    router.push('/');
  }

  openSignUpForm = () => {
    const { router } = this.props;
    router.push('/account/signup');
  }

  openForgotPasswordForm = () => {
    const { router } = this.props;
    router.push('/account/forgot-password');
  }

  openLogInForm = () => {
    const { router } = this.props;
    router.push('/account/login');
  }

  render() {
    const { verifyingAuth } = this.state;
    const { isAuthenticated, Layout, ...rest } = this.props;

    if (verifyingAuth) {
      return (
        <Loader />
      )
    }

    return (
      <Layout
        {...rest}
        redirectToHome={this.redirectToHome}
        openSignUpForm={this.openSignUpForm}
        openLogInForm={this.openLogInForm}
        openForgotPasswordForm={this.openForgotPasswordForm}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: state.user.isAuthenticated,
  verifyingAuth: state.user.verifyingAuth,
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Guest));