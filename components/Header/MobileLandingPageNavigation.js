import React, { Component } from 'react';
import Link from 'next/link';
import Scrollchor from 'react-scrollchor';
import Modal from '../Modal/Modal';

class MobileLandingPageNavigation extends Component {
  render() {
    const { closeModal, MENU } = this.props;
    return (
      <Modal isOpen={true} noHeader noFooter closeModal={closeModal} className="mobile-menu-modal" backdrop="static">
        <div className="mobile-menu poppins-font">
          <Link href="/">
            <span className="logo"></span>
          </Link>
        </div>
        {MENU.map(menu => (
          <div className="mobile-menu poppins-font" key={menu.id} onClick={closeModal}>
            <Scrollchor to={menu.link} className="link" animate={{offset: -70}}>
              {menu.label}
            </Scrollchor>
          </div>
        ))}
      </Modal>
    );
  }
}

export default MobileLandingPageNavigation;