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

export default class DesktopStepper extends Component {
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
    const displaySteps = steps.slice(currentMenuIndex, currentMenuIndex + 4);
    const showPrevMenuArrow = currentMenuIndex > 0;
    const showNextMenuArrow = currentMenuIndex < (displaySteps.length - 2) && (displaySteps.length < steps.length);
    return (
      <div className="stepper-container">
        <div className="navigation-icon left">
          {showPrevMenuArrow && <span onClick={this.getPreviousMenu} className="icon-chevron-left"></span>}
        </div>
        <Stepper steps={displaySteps} totalSteps={steps.length} />
        <div className="navigation-icon right">
          {showNextMenuArrow && <span onClick={this.getNextMenu} className="icon-chevron-right"></span>}
        </div>
      </div>
    );
  }
}

const Stepper = (props) => {
  const { steps, totalSteps } = props;
  const stepWidth = steps.length < 4 ? (12 / steps.length) : 3;
  return (
    <Row className="stepper-section">
      {steps.map((step, index) => {
        const { progress, title, description } = step;
        const iconClass = cx('icon', progressIconMap[progress]);
        const stepName = `step-${progress}`;
        const stepProgressBarClass = cx('step-progress-bar', stepName, {
          'last-item': index === (totalSteps - 1),
        });
        const stepTitleClass = cx('title', 'poppins-font', stepName);
        const stepDescriptionClass = cx('description', stepName);

        return (
          <Col sm={stepWidth} key={index} className="step-column">
            <div className="step-container">
              <span className="step-section">
                <span className={iconClass}></span>
                <span className={stepProgressBarClass}></span>
              </span>
              <div className={stepTitleClass}>{title}</div>
              <div className={stepDescriptionClass}>{description}</div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}