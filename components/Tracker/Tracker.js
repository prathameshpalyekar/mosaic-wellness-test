import React, { Component } from 'react';
import {
  Row,
  Col,
  Container,
} from 'reactstrap';
import { isMobile } from "react-device-detect";
import DesktopStepper from './DesktopStepper';
import MobileStepper from './MobileStepper';
import cx from 'classnames';
import './Tracker.scss';

const progressIconMap = {
  complete: 'icon-check',
  current: 'icon-refresh',
  incomplete: 'icon-clock',
};

export default (props) => (
  <div>
    {isMobile ? <MobileView {...props} /> : <DesktopView {...props} />}
  </div>
)

class MobileView extends Component{
  render() {
    const { title, description, steps, hideTitle } = this.props;
    const updatedSteps = [];
    let lastStep = true;
    steps.forEach(step => {
      const { status } = step;
      const tempStep = Object.assign({}, step);
      tempStep.progress = status ? 'complete' : lastStep ? 'current' : 'incomplete';
      updatedSteps.push(tempStep);
      lastStep = status;
    });
    const totalSteps = updatedSteps.length;

    return (
      <div className="mobile-tracker-container">
        {updatedSteps.map((step, index) => {
          const { progress, title, description, component, note } = step;
          const iconClass = cx('icon', progressIconMap[progress]);
          const stepName = `step-${progress}`;
          const stepProgressBarClass = cx('step-progress-bar', stepName, {
            'last-item': index === (totalSteps - 1),
          });
          const stepTitleClass = cx('title', 'poppins-font', stepName);
          const stepDescriptionClass = cx('description', stepName);

          return (
            <div className="mobile-step">
              <div key={index} className="mobile-step-container">
                <div className = "mobile-step-section">
                  <div className={iconClass}></div>
                  <div className={stepTitleClass}>{title}</div>
                </div>
                <div className={stepDescriptionClass}>{description}</div>
                <div className={stepDescriptionClass}>{note}</div>
                <div>{component}</div>
              </div>
              <div className={stepProgressBarClass}></div>
            </div>
          );
        })}
      </div>
    );
  }    
}

class DesktopView extends Component {
  render() {
    const { title, description, steps, hideTitle } = this.props;
    const updatedSteps = [];
    let lastStep = true;
    steps.forEach(step => {
      const { status } = step;
      const tempStep = Object.assign({}, step);
      tempStep.progress = status ? 'complete' : lastStep ? 'current' : 'incomplete';
      updatedSteps.push(tempStep);
      lastStep = status;
    });
    const totalSteps = updatedSteps.length;

    return (
      <div className="tracker-container">
        {updatedSteps.map((step, index) => {
          const { progress, title, description, component, note } = step;
          const iconClass = cx('icon', progressIconMap[progress]);
          const stepName = `step-${progress}`;
          const stepProgressBarClass = cx('step-progress-bar', stepName, {
            'last-item': index === (totalSteps - 1),
          });
          const stepTitleClass = cx('title', 'poppins-font', stepName);
          const stepDescriptionClass = cx('description', stepName);

          return (
            <div key={index} className="step-container">
              <div className="step-icon-section">
                <div className={iconClass}></div>
                <div className={stepProgressBarClass}></div>
              </div>
              <div className="step-info">
                <div className={stepTitleClass}>{title}</div>
                <div className={stepDescriptionClass}>{description}</div>
                <div className={stepDescriptionClass}>{note}</div>
                <div>{component}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

// Note: Desktop and Mobile stepper code could be merged.

// export default Tracker;