import React, { Component } from 'react';
import {
  Nav,
  NavItem,
} from 'reactstrap';
import SignUpModal from '../../../modules/account/UI/signup';
import LoginModal from '../../../modules/account/UI/login';
import SignUpSuccessModal from '../../../modules/account/UI/verificationLinkModal';
import ForgotPasswordModal from '../../../modules/account/UI/forgotPassword';

export default class LoginSection extends Component {
  state = {
    showSignUpForm: false,
    showLoginForm: false,
    successType: 'SIGNUP_SUCCESS',
  }

  openSignUpForm = () => {
    this.setState({
      showSignUpForm: true,
      showLoginForm: false,
      showForgotPasswordForm: false,
    });
  }

  closeSignUpForm = () => {
    this.setState({
      showSignUpForm: false,
    });
  }

  openLogInForm = () => {
    this.setState({
      showSignUpForm: false,
      showLoginForm: true,
    });
  }

  closeLoginForm = () => {
    this.setState({
      showLoginForm: false,
    })
  }

  openSignUpSuccessForm = (successType) => {
    this.setState({
      showSignUpForm: false,
      showForgotPasswordForm: false,
      showSignUpSuccess: true,
      successType: successType || 'SIGNUP_SUCCESS',
    });
  }

  closeSignUpSuccessForm = () => {
    this.setState({
      showSignUpSuccess: false,
    });
  }

  openForgotPasswordForm = () => {
    this.setState({
      showForgotPasswordForm: true,
      showLoginForm: false,
    });
  }

  closeForgotPasswordForm = () => {
    this.setState({
      showForgotPasswordForm: false,
    });
  }

  render() {
    const { showSignUpForm, showLoginForm, showSignUpSuccess, showForgotPasswordForm, successType } = this.state;

    return (
      <Nav className="ml-auto login-section" navbar>
        <NavItem className="login poppins-font">
          <span className="login-button user-entry-exit-tag" id="Login" onClick={this.openLogInForm}>Login</span>
        </NavItem>
        <NavItem className="signup poppins-font">
          <span className="signup-button  user-entry-exit-tag" id="SignUp" onClick={this.openSignUpForm}>SignUp</span>
        </NavItem>
        {showSignUpForm &&
          <SignUpModal
            closeModal={this.closeSignUpForm}
            openLogInForm={this.openLogInForm}
            openSignUpSuccessForm={this.openSignUpSuccessForm}
          />
        }
        {showLoginForm &&
          <LoginModal
            closeModal={this.closeLoginForm}
            openSignUpForm={this.openSignUpForm}
            openForgotPasswordForm={this.openForgotPasswordForm}
          />
        }
        {showSignUpSuccess &&
          <SignUpSuccessModal
            type={successType}
            closeModal={this.closeSignUpSuccessForm}
          />
        }
        {showForgotPasswordForm &&
          <ForgotPasswordModal
            closeModal={this.closeForgotPasswordForm}
            openSignUpForm={this.openSignUpForm}
            openSignUpSuccessForm={this.openSignUpSuccessForm}
          />
        }
      </Nav>
    );
  }
}