import React, { Component, Fragment } from 'react';
import { withFormsy } from 'formsy-react';

import { FormGroup } from 'reactstrap';
import cx from 'classnames';
import _ from 'lodash';
import { toast } from 'react-toastify';

import SubmitButton from '../SubmitButton/SubmitButton';
import Loader from './../../Loader/Loader';

import FILE from './../../../assets/images/utilities/file.png';

import './fileUpload.scss';

const maxSize = 5*1000*1000;

class FileUpload extends Component {
  state = {
    uploading: false,
    deleting: false,
  };

  onUploadClick = () => {
    const { fileInput } = this.refs;
    fileInput.click();
  }

  uploadFile() {
    const { data, onUpload } = this.props;
    const { file } = this.state;
    data.append('file', this.state.file);
    if (file.size > maxSize) {
      toast.error('Max file size exceeded !!');
      return;
    }

    this.setState({
      uploading: true,
    });
    onUpload(data, this.onSuccess, this.onFailure);
  }

  onSuccess = (data) => {
    this.setState({
      uploading: false,
    });
    toast.success('File uploaded successfully.');
    const { refetchData } = this.props;
    refetchData && refetchData();
  }

  onFailure = (error) => {
    this.setState({
      uploading: false,
    });
    toast.error(error);
    const { refetchData } = this.props;
    refetchData && refetchData();
  }

  _handleImageChange = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
      });
      this.uploadFile();
    };

    // To clear currently loaded file from input
    event.target.value = null;
    reader.readAsDataURL(file);
  }

  onDeleteSuccess = (data) => {
    this.setState({
      deleting: false,
    });
    toast.success('File deleted successfully.');
    const { refetchData } = this.props;
    refetchData && refetchData();
  }

  onDeleteFailure = (error) => {
    this.setState({
      deleting: false,
    });
    toast.error(error);
    const { refetchData } = this.props;
    refetchData && refetchData();
  }

  onDeleteDoc = () => {
    this.setState({
      deleting: true,
    });
    const { deleteData, onDelete } = this.props;
    onDelete(deleteData, this.onDeleteSuccess, this.onDeleteFailure);
  }

  render() {
    const { uploading, deleting } = this.state;
    const { name, label, className, id, link, deleteDisabled, note } = this.props;
    const formClass = cx('form-group', className);

    return (
      <FormGroup className={formClass}>
        {link ?
          <div className="download-doc">
            {deleting ?
              <Loader /> :
              <Fragment>
                <a className="download-button" href={link}>
                  <img src={FILE} alt={label} className="download-image"/>
                  <span className="icon-arrow-down-thick"></span>
                </a>
                <div className="file-name">
                  <span className="name">{label}</span>
                  {!deleteDisabled && <span className="icon-cross-circle delete-icon" onClick={this.onDeleteDoc}></span>}
                </div>
              </Fragment>
            }
          </div> :
          <Fragment>
            <SubmitButton id={name} type="button" className="upload-doc-button" onClick={this.onUploadClick} loading={uploading}>
              <span className="icon-arrow-up-thick"></span>
              <span>{`Upload ${label}`}</span>
              <input type="file" ref="fileInput" className="file-input" onChange={this._handleImageChange}></input>
            </SubmitButton>
            {note && <div className="note">{note}</div>}
          </Fragment>
        }
      </FormGroup>
    );
  }
}

export default withFormsy(FileUpload);
