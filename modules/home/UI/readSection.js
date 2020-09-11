import React, { Fragment } from 'react';
import { Col } from 'reactstrap';

export default (props) => {
  const { data } = props;
  const { items } = data;
  return (
    <Fragment>
      {items.map((item, index) => {
        return (
          <Col sm={4}>
            <BlogPost data={item} />
          </Col>
        )
      })}
    </Fragment>
  )
}

const BlogPost = (props) => {
  const { data } = props;
  const { index, image, name } = data;
  return (
    <div className="blog-post-item">
      <div className="image-container">
        <div className="index-container">{index}</div>
        <img src={image} className="blog-image" />
      </div>
      <div className="title-container">
        <div className="title">
          <div className="title-text">
            {name}
          </div>
          <div className="icon-chevron-right direct-icon"></div>
        </div>
      </div>
    </div>
  )
}