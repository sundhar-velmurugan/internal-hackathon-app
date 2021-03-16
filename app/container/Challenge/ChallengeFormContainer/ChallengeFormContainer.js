import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { shallowCompare } from '../../../utlis/common';
import { createChallenge, updateChallenge } from '../../../actions/challenge';

import ChallengeForm from '../../../component/ChallengeForm/ChallengeForm';

class ChallengeFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      tag: '',
      titleErrorMsg: '',
      descriptionErrorMsg: '',
      tagErrorMsg: ''
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onTagChange = this.onTagChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.clearFormContents = this.clearFormContents.bind(this);
    this.validateFormData = this.validateFormData.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { isEditForm } = this.props;
    if (isEditForm) {
      const { challenge } = this.props;
      const { challenge: prevChallenge } = prevProps;
      if (!shallowCompare(challenge, prevChallenge)) {
        this.setState({
          title: challenge.title,
          description: challenge.description,
          tag: challenge.tag.toString()
        });
      }
    }
  }

  onTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  onDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  onTagChange(e) {
    this.setState({
      tag: e.target.value
    });
  }

  validateFormData() {
    const { title, description, tag } = this.state;
    if (!title.length) {
      this.setState({
        titleErrorMsg: 'Title must not be empty'
      });
      return false;
    } else {
      this.setState({
        titleErrorMsg: ''
      });
    }
    if (!description.length) {
      this.setState({
        descriptionErrorMsg: 'Please enter a description'
      });
      return false;
    } else {
      this.setState({
        descriptionErrorMsg: ''
      });
    }
    if (!tag.length) {
      this.setState({
        tagErrorMsg: 'Specify tags for your challenge'
      });
      return false;
    } else {
      this.setState({
        tagErrorMsg: ''
      });
    }
    return true;
  }

  onFormSubmit() {
    if (this.validateFormData()) {
      const { title, description, tag } = this.state;
      const { employeeId, isEditForm } = this.props;
      const input = {
        title,
        description,
        tag: tag.split(','),
        upvotes: [],
        timestamp: new Date().toISOString(),
        authorId: employeeId
      };
      if (isEditForm) {
        const { challenge, updateChallenge } = this.props;
        input.id = challenge.id;
        updateChallenge && updateChallenge(input);
      } else {
        const { challenges, createChallenge } = this.props;
        input.id = challenges.length + 1;
        createChallenge && createChallenge(input);
      }
      this.props.history.push('/challenge');
    }
  }

  clearFormContents() {
    this.setState({ title: '', description: '', tag: '' });
  }

  render() {
    const { isEditForm, employeeId, challenge } = this.props;
    const { title, description, tag, titleErrorMsg, descriptionErrorMsg, tagErrorMsg } = this.state;

    const isFormDisabled = isEditForm ? employeeId !== challenge.authorId : !employeeId;
    return (
      <ChallengeForm
        isFormDisabled={isFormDisabled}
        isEditForm={isEditForm}
        title={title}
        description={description}
        tag={tag}
        onTitleChange={this.onTitleChange}
        onDescriptionChange={this.onDescriptionChange}
        onTagChange={this.onTagChange}
        onFormSubmit={this.onFormSubmit}
        clearFormContents={this.clearFormContents}
        titleErrorMsg={titleErrorMsg}
        descriptionErrorMsg={descriptionErrorMsg}
        tagErrorMsg={tagErrorMsg}
      />
    );
  }
}

ChallengeFormContainer.defaultProps = {
  isEditForm: false,
  challenge: {},
  challenges: []
};

const mapStateToProps = state => ({
  employeeId: state.employee.employeeId,
  challenges: state.challenge.challenges
});

export default withRouter(connect(mapStateToProps, { createChallenge, updateChallenge })(ChallengeFormContainer));
