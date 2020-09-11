import React, { Component } from 'react';
import {
  Nav,
  NavItem,
} from 'reactstrap';
import Link from 'next/link';
import Avatar from '../../Avatar/Avatar';

export default class AccountSection extends Component {
  render() {
    const { user } = this.props;
    const name = user.first_name;

    return (
      <Nav className="ml-auto account-section" navbar>
        <NavItem className="account poppins-font">
          <Link href="/account">
            <a className="account-menu personal-details-tag" id="Your Account - Header">
              <span className="label personal-details-tag" id="Your Account - Header">Your Account</span>
              <Avatar className="avatar" name={name}/>
            </a>
          </Link>
        </NavItem>
      </Nav>
    );
  }
}