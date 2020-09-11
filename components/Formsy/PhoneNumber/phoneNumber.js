import React, { Component } from 'react';
import { withFormsy } from 'formsy-react';
import PhoneInput from 'react-phone-input-2';
import { Label, FormFeedback } from 'reactstrap';
import 'react-phone-input-2/lib/style.css';
import { getFormError, resetInputValidation, validateForError } from '../Helper/helper';
import './phoneNumber.scss';

class FormsyPhoneNumber extends Component {
  state = {
    isValueInValid: false,
    error: '',
  };
  
  onChange = (value) => {
    const { onChange } = this.props;
    this.setState({
      isValueInValid: false,
      error: '',
    });

    const updatedValue = value && value[0] === '+' ? value : `+${value}`;
    resetInputValidation(this.props);
    this.props.setValue(updatedValue);
    onChange && onChange(updatedValue);
    const error = validateForError(this.props, updatedValue);
    if (error) {
      this.setState({
        isValueInValid: true,
        error,
      }, () => {
        this.props.setValue(undefined)
      });
    }
  }

  render() {
    const { name, label, formValidations, defaultValue, required, placeholder } = this.props;
    const { error } = this.state;
    const formError = getFormError(this.props, formValidations);
    const inputError = error || formError;

    return (
      <div className="phone-number">
        <Label for={name} className="form-label poppins-font">{label}</Label>
        <PhoneInput country={'in'} value={defaultValue} inputProps={{
            name,
            required,
            autoFocus: true
          }}
          onChange={this.onChange}
          placeholder={placeholder}
        />
        {inputError && <FormFeedback className="form-feedback">{inputError}</FormFeedback>}
      </div>
    );
  }
}

export default withFormsy(FormsyPhoneNumber);