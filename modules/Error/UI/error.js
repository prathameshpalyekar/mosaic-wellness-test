import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Link from 'next/link';
import Logo from '../../../assets/logo.png';
import '../styles/styles.scss';

class Error extends Component {
  render() {
    const {
      title = 'Under Construction!',
      description = 'Coming soon...',
    } = this.props;
    const link = '/';

    return (
      <div className="error-container">
        <Container>
          <Row>
            <Col sm="12">
              <img src={Logo} style={{height: '10rem'}}/>
              <h2 className="title poppins-font">{title}</h2>
              <h3 className="description">{description}</h3>
              <h4 className="link">
                <Link href={link}>
                  <a className="home-link">Go back to home.</a>
                </Link>
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Error;