import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Container } from 'reactstrap';
import { withRouter } from 'next/router';
import ReadSection from './readSection';
import TodoSection from './todoSection';
import '../styles/home.scss';

const componentMap = {
  read: ReadSection,
  todo: TodoSection,
}

class Index extends Component {
  state = {
    activeTab: 'read',
  }

  componentDidMount() {
  }

  switchTab = (item) => {
    const { id } = item;
    this.setState({
      activeTab: id,
    })
  }

  render() {
    const { data = {} } = this.props;
    const items = Object.keys(data).map(key => {
      return Object.assign({}, data[key], {
        id: key
      });
    });
    const { activeTab } = this.state;
    const ActiveSection = componentMap[activeTab];
    const sectionData = data[activeTab];
    return (
      <Container className="home-page">
        <Row>
          <Col sm="12">
            Action Items
          </Col>
        </Row>
        <Row>
          {items.map((item, index) => (
            <Col key={index}>
              <div onClick={this.switchTab.bind(this, item)}>
                {item.title}
              </div>
              
            </Col>
          ))}
        </Row>
        <Row>
          <ActiveSection data={sectionData} />
        </Row>
      </Container>
    );
  }
}

export default Index;