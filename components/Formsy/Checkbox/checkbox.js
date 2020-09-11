import React, { Component } from 'react';
import { withFormsy } from 'formsy-react';
import _ from 'lodash';
import { Input, FormGroup, Label, FormFeedback } from 'reactstrap';
import { getFormError, resetInputValidation } from '../Helper/helper';
import './checkbox.scss';

class FormsyCheckbox extends Component {
  state = {
    isValueInValid: false,
    error: '',
  };

  componentDidMount() {
    const { defaultValue, setValue } = this.props;
    defaultValue && setValue(defaultValue);
  }

  onChange = (event) => {
    const { name, checked } = event.currentTarget;
    const { onChange, setValue } = this.props;

    this.setState({
      isValueInValid: false,
      error: '',
    });

    resetInputValidation(this.props);
    const targetValue = checked ? 'on' : '';
    setValue(targetValue);
    onChange && onChange(name, checked);
  }

  renderElement = (isFormError) => {
    const { name, defaultValue, getValue } = this.props;
    const { isValueInValid } = this.state;

    return (
      <Input
        className="form-input"
        invalid={isValueInValid || isFormError}
        name={name}
        type="checkbox"
        onChange={this.onChange}
        checked={!!getValue() || _.isUndefined(getValue()) && defaultValue || false}
      />
    );
  }

  render() {
    const { layout, formValidations, children } = this.props;
    const { error } = this.state;
    const formError = getFormError(this.props, formValidations);
    const element = this.renderElement(!!formError);
    const inputError = error || formError;

    const CheckboxElement = () => (
      <Label className="checkbox-container">
        {element}
        <span className="checkmark"></span>
      </Label>
    )

    if (layout === 'elementOnly') {
      return <CheckboxElement />
    }

    const CheckBoxLabel = () => (
      <div className="label-container">
        {children}
      </div>
    );

    return (
      <FormGroup check inline className="checkbox-form-container">
        <div className="inner-form-container">
          {layout === 'right' && <CheckBoxLabel />}
          <CheckboxElement />
          {layout !== 'right' && <CheckBoxLabel />}
        </div>
      </FormGroup>
    );
  }
}

export default withFormsy(FormsyCheckbox);