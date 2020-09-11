import React, { Component } from 'react';
import _ from 'lodash';
import cx from 'classnames';
import { withFormsy } from 'formsy-react';
import { FormGroup, Label } from 'reactstrap';
import Slider from 'rc-slider';
import { NUM_DIFFERENTIATION } from '../../../lib/helpers';
import './slider.scss';
import 'rc-slider/assets/index.css';

class FormsySlider extends Component {
  onChange = (value) => {
    const { name, onChange, setValue } = this.props;
    setValue(value);
    onChange && onChange(name, value);
  };

  componentDidMount() {
    const { defaultValue, setValue } = this.props;
    setValue(defaultValue);
  }

  renderElement = () => {
    const { min, max, defaultValue, getValue } = this.props;

    return (
      <Slider
        min={min}
        max={max}
        defaultValue={defaultValue}
        handle={this.handle}
        className="form-slider"
        onChange={this.onChange}
        value={getValue() || 0}
      />
    );
  }

  render() {
    const { name, title, subTitle, layout, className, showRange = true, min, max, children } = this.props;
    const element = this.renderElement();
    const formClass = cx('slider-form-group', className);
    const average = (min + max) / 2;

    if (layout === 'elementOnly') {
      return element;
    }

    return (
      <FormGroup className={formClass}>
        <Label for={name} className="form-label">
          <span className="heading poppins-font">{title}</span>
          <span className="subtitle poppins-font">{subTitle}</span>
        </Label>
        <div className="value">{children}</div>
        {element}
        {showRange &&
          <div className="range-container">
            <div className="left-value">{NUM_DIFFERENTIATION(min)}</div>
            <div className="center-value">{NUM_DIFFERENTIATION(average)}</div>
            <div className="right-value">{NUM_DIFFERENTIATION(max)}</div>
          </div>
        }
      </FormGroup>
    );
  }
}

export default withFormsy(FormsySlider);
