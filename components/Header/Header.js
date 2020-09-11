import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import Link from 'next/link';
import Router from 'next/router';
import cx from 'classnames';
import { GUEST_MENU, LOGGED_IN_USER_MENU } from '../../constants/menu';
import MobileNavigation from './MobileNavigation';
import Logo from '../../assets/logo.png';
import './Header.scss';

class Index extends Component {
  state = {
    isCollapsed: true,
    showMenu: false,
    categoryId: '',
  };

  componentDidMount() {
    const { route } = Router;
    this.setState((state) => {
      return {
        currentRoute: route,
      };
    });
  }

  toggle = () => {
    this.setState((state) => {
      const { isCollapsed } = this.state;
      return {
        isCollapsed: !isCollapsed,
      };
    });
  }

  showDropDownMenu = (id) => {
    this.setState({
      showMenu: true,
      categoryId: id,
    })
  }

  hideDropDownMenu = () => {
    this.setState({
      showMenu: false,
      categoryId: ''
    })
  }

  render() {
    const { isCollapsed, currentRoute, showMenu } = this.state;
    const { isAuthenticated, user } = this.props;
    const MENU = isAuthenticated ? LOGGED_IN_USER_MENU : GUEST_MENU;

    return (
      <Fragment>
      <Navbar dark expand="lg" sticky={'top'} className="header" id="global-header">
        <div className="container navigation-conatiner">
          <NavbarBrand href="/" className="header-link" id="home">
            <img src={Logo} className="logo-image"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={false} navbar>
            <Nav className="" navbar>
              {MENU.map((menu) => {
                const { id, label, link } = menu;
                const linkClass = cx('link header-link', {
                  'active': link === currentRoute
                });
                return (
                  <NavItem className="menu poppins-font" key={id}>
                    <Link href={menu.link}>
                      <a id={id} className={linkClass}>{label}</a>
                    </Link>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
          {!isCollapsed &&
            <MobileNavigation
              isAuthenticated={isAuthenticated}
              user={user}
              closeModal={this.toggle}
              currentRoute={currentRoute}
            />
          }
        </div>
      </Navbar>
      </Fragment>
    );
  }
}



const mapStateToProps = state => ({
  user: state.user.data,
  isAuthenticated: state.user.isAuthenticated,
  isAuthenticating: state.user.fetching,
  // cart: state.cart.data,
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
