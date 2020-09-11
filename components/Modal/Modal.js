import React from 'react';
import {
  Button,
  Modal,
  ModalBody
} from 'reactstrap';
import cx from 'classnames';
import './Modal.scss';

class CustomModal extends React.Component {
  state = {
  };

  closeModal = () => {
    const { closeModal } = this.props;
    closeModal();
  }

  saveModal = () => {
    const { closeModal, onSave } = this.props;
    if (onSave) {
      onSave();
    }
    closeModal();
  }

  renderHeader() {
    const { title, subtitle } = this.props;
    return (
      <div className="modal-header">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    );
  }

  renderCloseButton() {
    return (
      <button type="button" className="close modal-body-close" onClick={this.props.closeModal}>
        <span className="icon-clear"></span>
      </button>
    );
  }

  render() {
    const {
      children,
      className,
      isOpen,
      noHeader,
      noFooter,
      submitButtonLabel,
      backdrop = true,
    } = this.props;
    const modalClass = cx('modal-component', className);

    return (
      <Modal isOpen={isOpen} toggle={this.closeModal} className={modalClass} backdrop={backdrop}>
        <ModalBody>
          {!noHeader && this.renderHeader()}
          {this.renderCloseButton()}
          {children}
          {!noFooter && (
            <div className="modal-footer">
              <Button color="primary submit" onClick={this.saveModal}>
                {submitButtonLabel || 'Save'}
              </Button>
              <Button color="secondary cancel" onClick={this.closeModal}>
                Cancel
              </Button>
            </div>
          )}
        </ModalBody>
      </Modal>
    );
  }
}

export default CustomModal;
