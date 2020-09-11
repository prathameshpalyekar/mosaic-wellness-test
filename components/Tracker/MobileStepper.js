import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import cx from 'classnames';

const progressIconMap = {
  complete: 'icon-check',
  current: 'icon-refresh',
  incomplete: 'icon-clock',
};

export default class MobileStepper extends Component {
  state = {
    currentMenuIndex: 0,
  }

  getNextMenu = () => {
    this.setState({
      currentMenuIndex: this.state.currentMenuIndex + 1,
    });
  }

  getPreviousMenu = () => {
    this.setState({
      currentMenuIndex: this.state.currentMenuIndex - 1,
    });
  }

  render() {
    const { steps } = this.props;
    const { currentMenuIndex } = this.state;
    const showPrevMenuArrow = currentMenuIndex > 0;
    const showNextMenuArrow = currentMenuIndex < (steps.length - 1);
    return (
      <div className="stepper-container">
        <div className="navigation-icon left">
          {showPrevMenuArrow && <span onClick={this.getPreviousMenu} className="icon-chevron-left"></span>}
        </div>
        <Stepper step={steps[currentMenuIndex]} totalSteps={steps.length} />
        <div className="navigation-icon right">
          {showNextMenuArrow && <span onClick={this.getNextMenu} className="icon-chevron-right"></span>}
        </div>
      </div>
    );
  }
}

const Stepper = (props) => {
  const { step, totalSteps } = props;
  const { progress, title, description } = step;
  const iconClass = cx('icon', progressIconMap[progress]);
  const stepName = `step-${progress}`;
  const stepProgressBarClass = cx('step-progress-bar', stepName, {
    'last-item': false,
  });
  const stepTitleClass = cx('title', 'poppins-font', stepName);
  const stepDescriptionClass = cx('description', stepName);

  return (
    <div className="step-container">
      <span className="step-section">
        <span className={iconClass}></span>
        <span className={stepProgressBarClass}></span>
      </span>
      <div className={stepTitleClass}>{title}</div>
      <div className={stepDescriptionClass}>{description}</div>
    </div>
  );
}