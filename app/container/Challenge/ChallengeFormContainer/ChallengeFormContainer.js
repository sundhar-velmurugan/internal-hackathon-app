import React, { Component } from 'react';
import { connect } from 'react-redux';

import { shallowCompare } from '../../../utlis/common';

import ChallengeForm from '../../../component/ChallengeForm/ChallengeForm';

class ChallengeFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      tag: ''
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onTagChange = this.onTagChange.bind(this);
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

  render() {
    const { isEditForm, employeeId, challenge } = this.props;
    const { title, description, tag } = this.state;

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
      />
    );
  }
}

ChallengeFormContainer.defaultProps = {
  isEditForm: false,
  challenge: {}
};

const mapStateToProps = state => ({
  employeeId: state.employee.employeeId
});

export default connect(mapStateToProps)(ChallengeFormContainer);
