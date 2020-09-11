import React, { Fragment } from 'react';
import { Col } from 'reactstrap';
import cx from 'classnames';
import { useSwipeable } from 'react-swipeable';

const config = {
  delta: 10,                             // min distance(px) before a swipe starts
  preventDefaultTouchmoveEvent: false,   // preventDefault on touchmove, *See Details*
  trackTouch: true,                      // track touch input
  trackMouse: false,                     // track mouse input
  rotationAngle: 0,                      // set a rotation angle
}

const eventHandler = (event) => {
  console.log(event);
}
export default (props) => {
  const { data } = props;
  const { items } = data;
  return (
    <Fragment>
      {items.map((item, index) => {
        return (
          <Col key={index} sm={4} className="to-do-item-column">
            <TodoItems data={item} />
          </Col>
        )
      })}
    </Fragment>
  )
}



const TodoItems = (props) => {
  const { data } = props;
  const { title, subtitle, time, completed = false, onGoing = false, isMissed = false } = data;
  const timeClass = cx('time', { onGoing });
  const iconClass = completed ? 'icon-user-plus' : 'icon-arrow-left';
  const handlers = useSwipeable({ onSwiped: (eventData) => eventHandler, ...config })
  return (
    <div {...handlers} className="to-do-item-container">
      <div className="to-do-item">
        <div className="details">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
          <div className={timeClass}>{time}</div>
        </div>
        <div className="action-container">
          <div className="action">
            <span className={iconClass}></span>
          </div>
        </div>
      </div>
      {isMissed &&
        <div className="missed-warning">
          <div className="content">
            Missed your schedule ? Don't worry pick it up today.
          </div>
        </div>
      }
    </div>
  )
}