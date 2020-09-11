import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import { METADATA } from '../constants/metadata';
import { GET_HOST_NAME } from '../lib/helpers';
import { getDataFromServer } from '../actions/data';
import Home from '../modules/home/UI/home';

class Index extends Component {
  render() {
    const { host, data } = this.props;
    const { title, description, keywords } = METADATA.HOME;

    return (
      <Layout pageTitle={title} description={description} keywords={keywords} host={host}>
        <Home data={data} />
      </Layout>
    );
  }
}

Index.getInitialProps = function(context) {
  const data = getDataFromServer();
  const host = GET_HOST_NAME(context);
  return { data, host };
}

export default Index;