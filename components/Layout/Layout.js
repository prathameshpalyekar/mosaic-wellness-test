import React, { Component } from 'react';
import Header from '../Header/Header';
import Head from 'next/head';
import favicon from '../../assets/favicon.png';
import Footer from '../Footer/Footer';
import 'react-bnb-gallery/dist/style.css';
import './Layout.scss';

export default class Layout extends Component {
  render() {
    const {
      pageTitle = 'Mosaic Wellness Test',
      description = '',
      keywords = '',
      categories = [],
    } = this.props;

    return (
      <div className="layout">
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={description}></meta>
          <meta name="keywords" content={keywords}></meta>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href={favicon} sizes="16x16 32x32" type="image/png"></link>
          <link async defer rel='preload' href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:200,300,400,500,600&display=swap" rel="stylesheet"></link>
          <link async defer rel='preload' href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,700&display=swap" rel="stylesheet"></link>
        </Head>
        <Header/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}