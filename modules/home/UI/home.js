import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Container } from 'reactstrap';
import cx from 'classnames';
import ReadSection from './readSection';
import TodoSection from './todoSection';
import '../styles/home.scss';

const componentMap = {
  read: ReadSection,
  todo: TodoSection,
}

class Index extends Component {
  state = {
    activeTab: 'todo',
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
            <div className="heading">Action Items</div>
          </Col>
        </Row>
        <Row className="tab-cell-container">
          {items.map((item, index) => {
            const tabClass = cx('tab-cell', {
              'active': item.id === activeTab,
            });
            return (
              <Col key={index}>
                <div className={tabClass} onClick={this.switchTab.bind(this, item)}>
                  {item.title}
                </div>
              </Col>
            )
          })}
        </Row>
        <Row>
          <ActiveSection data={sectionData} />
        </Row>
      </Container>
    );
  }
}

export default Index;