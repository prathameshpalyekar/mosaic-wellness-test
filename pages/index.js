import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import { METADATA } from '../constants/metadata';
import { GET_HOST_NAME } from '../lib/helpers';
import Home from '../modules/home/UI/home';

class Index extends Component {
  render() {
    const { host } = this.props;
    const { title, description, keywords } = METADATA.HOME;

    return (
      <Layout pageTitle={title} description={description} keywords={keywords} host={host} >
        <Home />
      </Layout>
    );
  }
}

Index.getInitialProps = async function(context) {
  const host = GET_HOST_NAME(context);
  return { host };
}

export default Index;