import React, { Component } from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import './Footer.scss';

export default class Footer extends Component {
  BOTTOM_MENU = [{
    id: 'terms',
    label: 'Terms',
    link: '/terms',
  }, {
    id: 'contact',
    label: 'Contact Us',
    link: '/contact',
  }, {
    id: 'privacy',
    label: 'Privacy',
    link: '/privacy',
  }];

  render() {
    const BOTTOM = [this.BOTTOM_MENU];
    return (
      <div className="footer">
        <Container>
          {/* {BOTTOM.map((MENU_ROW, index) => {
            return (
              <Row key={index}>
                {MENU_ROW.map((menu) => {
                  const { label, link, id } = menu;
                  return (
                    <Col key={link} sm="3" className="offset-sm-1 footer-link poppins-font">
                      <a className="link footer-link" target="_blank" href={link} id={id}>{label}</a>
                    </Col>
                  );
                })}
              </Row>
            )
          })} */}
          <div md="12">
            <p className="copyrights ibmplex-font">© 2020. All rights Reserved.</p>
          </div>
        </Container>
      </div>
    );
  }
}