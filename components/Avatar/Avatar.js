import React, { Component } from 'react';
import cx from 'classnames';
import './Avatar.scss';

export default class Avatar extends Component {
  render() {
    const { name = '', className } = this.props;
    const initial = name[0];
    const avatarClass = cx('avatar-section', className);

    return (
      <span className={avatarClass}>
        {initial ?
          <span className="avatar">{initial}</span> :
          <span className="user-icon icon-user-circle"></span>
        }
      </span>
    )
  }
}