import React, { Component } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { GUEST_MENU, LOGGED_IN_USER_MENU } from '../../constants/menu';
import Modal from '../Modal/Modal';
import Logo from '../../assets/logo.png';

class MobileNavigation extends Component {
  render() {
    const { closeModal, isAuthenticated, user, currentRoute } = this.props;
    const MENU = isAuthenticated ? LOGGED_IN_USER_MENU : GUEST_MENU;

    return (
      <Modal isOpen={true} noHeader noFooter closeModal={closeModal} className="mobile-menu-modal" backdrop="static">
        <div className="mobile-menu poppins-font" style={{padding: '1rem'}}>
          <Link href="/">
            <a className="header-link" id="home" style={{textDecoration: 'none'}}>
              <img src={Logo} className="logo-image"/>
            </a>
          </Link>
        </div>
        {MENU.map((menu) => {
          const { id, label, link } = menu;
          const linkClass = cx('link header-link', {
            'active': link === currentRoute
          });
          return (
            <div className="mobile-menu poppins-font" key={id}>
              <Link href={link}>
                <a className={linkClass} id={id}>{label}</a>
              </Link>
            </div>
          );
        })}
      </Modal>
    );
  }
}

export default MobileNavigation;