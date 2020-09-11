import React, { Component } from 'react';
import { withFormsy } from 'formsy-react';
import _ from 'lodash';
import { FormGroup, Label, FormFeedback, InputGroup, InputGroupAddon } from 'reactstrap';
import Select from 'react-select';
import cx from 'classnames';
import { getFormError, resetInputValidation } from '../Helper/helper';
import './select.scss';

class FormsySelect extends Component {
  state = {
    isValueInValid: false,
    error: '',
  };

  onChange = (selectedOption) => {
    const { name, onChange, setValue } = this.props;
    this.setState({
      isValueInValid: false,
      error: '',
    });
    resetInputValidation(this.props);
    setValue(selectedOption);
    const { value } = selectedOption;
    onChange && onChange(name, value);
  };

  renderElement = () => {
    const { searchable, options, defaultValue, getValue } = this.props;
    const { isValueInValid } = this.state;
    const selectedValue = options.find((option) => {
      const { value } = option;
      const elementValue = getValue() && getValue().value;
      return value === elementValue || !elementValue && value === defaultValue;
    });

    return (
      <Select
        className="form-select"
        classNamePrefix="react-select"
        invalid={isValueInValid}
        options={options}
        value={selectedValue}
        onChange={this.onChange}
        simpleValue={false}
        isClearable={false}
        isSearchable={searchable}
      />
    );
  }

  render() {
    const { name, label, layout, className, formValidations } = this.props;
    const { error } = this.state;
    const formError = getFormError(this.props, formValidations);
    const element = this.renderElement();
    const inputError = error || formError;
    const formClass = cx('form-group', layout, className);

    if (layout === 'elementOnly') {
      return element;
    } else if (layout === 'horizontal') {
      return (
        <FormGroup className={formClass}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Label for={name} className="form-label poppins-font">{label}</Label>
            </InputGroupAddon>
            {element}
            {inputError && <FormFeedback className="form-feedback">{inputError}</FormFeedback>}
          </InputGroup>
        </FormGroup>
      );
    }
    
    return (
      <FormGroup className={formClass}>
        <Label for={name} className="form-label">{label}</Label>
        {element}
        {inputError && <FormFeedback className="form-feedback">{inputError}</FormFeedback>}
      </FormGroup>
    );
  }
}

export default withFormsy(FormsySelect);
