import React from 'react';
import { Button } from 'reactstrap';
import './SubmitButton.scss';

export default (props) => {
  const { id = 'action-button', type, disabled, className, loading, children, onClick } = props;
  return (
      <Button type={type} className={className} disabled={disabled || loading} id={id} onClick={onClick}>
        {loading ? <LOADER /> : children}
      </Button>
  );
}

const LOADER = () => (
  <div className="loader">Loading...</div>
);
