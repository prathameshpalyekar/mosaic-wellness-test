import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';
import { withRouter } from 'next/router';
import '../styles/home.scss';

class Index extends Component {
  state = {
  }

  componentDidMount() {
  }

  redirect = () => {
    const { router } = this.props;
    router.push('/wine');
  }

  render() {
    return (
      <div className="home-page">
        Home page
      </div>
    );
  }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));