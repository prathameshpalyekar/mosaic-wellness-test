import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import Link from 'next/link';
import {Router, useRouter} from 'next/router';
import cx from 'classnames';
import Scrollchor from 'react-scrollchor';
import { REIT_MENU, INFO_MENU, REALESTATE_MENU, CROWDFUNDING_MENU, VIAANTE_MENU } from '../../constants/menu';
import MobileLandingPageNavigation from './MobileLandingPageNavigation';
import './Header.scss';

const LANDING_PAGE_MENU = {
  reits: REIT_MENU,
  info: INFO_MENU,
  commercialrealestate: REALESTATE_MENU,
  propertycrowdfunding: CROWDFUNDING_MENU,
  viaante: VIAANTE_MENU
};

export default class Index extends Component {
  state = {
    isCollapsed: true,
  };

  componentDidMount() {
    const { route } = Router;
    this.setState((state) => {
      return {
        currentRoute: route,
      };
    });
  }
  
  getQueryString = () => {
    const router = useRouter();
    const { landingPage } = router.query;
    return landingPage;
  }

  toggle = () => {
    this.setState((state) => {
      const { isCollapsed } = state;
      return {
        isCollapsed: !isCollapsed,
      };
    });
  }

  render() {
    const { isCollapsed } = this.state;
    const { routename } = this.props;
    const MENU = LANDING_PAGE_MENU[routename];

    return (
      <Navbar className="header" dark expand="lg" sticky={'top'}>
        <div className="container">
          <NavbarBrand>
            <Link href="/">
              <span className="logo"></span>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={false} navbar>
            <Nav navbar>
              {MENU.map((menu) => (
                <NavItem className="menu poppins-font" key={menu.id}>
                  <Scrollchor to={menu.link} className="link" animate={{offset: -70}}>
                    {menu.label}
                  </Scrollchor>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
          {!isCollapsed && <MobileLandingPageNavigation MENU={MENU} closeModal={this.toggle}/>}
        </div>
      </Navbar>
    );
  }
}

