import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import ErrorModule from '../modules/Error/UI/error';
import { GET_HOST_NAME } from '../lib/helpers';

class Index extends Component {
  render() {
    const { host } = this.props;
    return (
      <Layout host={host}>
        <ErrorModule />
      </Layout>
    );
  }
}

Index.getInitialProps = (request) => {
  const { req, res } = request;
  const { url } = req;
  const host = GET_HOST_NAME(request);
  const givenPath = url.split('');
  const lastElement = givenPath.pop();
  if (lastElement === '/') {
    const newPath = givenPath.join('');
    res.writeHead(302, {Location: newPath});
    res.end();
  }
  return {
    host,
  };
};

export default Index;