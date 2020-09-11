import React, { Component } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import { METADATA } from '../../constants/metadata';
import { GET_HOST_NAME } from '../../lib/helpers';

const Index = props => {
  const { host } = props;
  const { title, description, keywords } = METADATA.HOME;
  const router = useRouter();
  const { blog } = router.query;

  return (
    <Layout pageTitle={title} description={description} keywords={keywords} host={host}>
      Blog page
    </Layout>
  );
}

Index.getInitialProps = async function(context) {
  const host = GET_HOST_NAME(context);

  return { host };
}

export default Index;