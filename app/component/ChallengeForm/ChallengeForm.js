import React, { Component } from 'react';

import './ChallengeForm.css';

const TITLE_MAX_LENGTH = 150;
const DESCRIPTION_MAX_LENGTH = 5000;
const TAG_MAX_LENGTH = 250;

export default class ChallengeForm extends Component {
  render() {
    const {
      isFormDisabled,
      isEditForm,
      title,
      description,
      tag,
      onTitleChange,
      onDescriptionChange,
      onTagChange
    } = this.props;
    return (
      <div className='container grid-lg'>
        <div className='columns'>
          <div className='column col-xs-6'>
            <div className='hero hero-sm bg-gray form-container'>
              <div className='hero-body'>
                <h1>{isEditForm ? 'Edit Challenge' : 'Add Challenge'}</h1>
                <form>
                  <fieldset disabled={isFormDisabled}>
                    <div className='form-group'>
                      <label className='form-label label-lg' htmlFor='challenge-title'>
                        Title
                      </label>
                      <input
                        className='form-input input-lg input-element'
                        type='text'
                        id='challenge-title'
                        placeholder='Title'
                        maxLength={TITLE_MAX_LENGTH}
                        value={title}
                        onChange={onTitleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label className='form-label label-lg' htmlFor='challenge-description'>
                        Description
                      </label>
                      <textarea
                        className='form-input input-lg'
                        id='challenge-description'
                        placeholder='Description'
                        rows='15'
                        maxLength={DESCRIPTION_MAX_LENGTH}
                        value={description}
                        onChange={onDescriptionChange}
                      ></textarea>
                    </div>
                    <div className='form-group'>
                      <label className='form-label label-lg' htmlFor='challenge-tag'>
                        Tag
                      </label>
                      <input
                        className='form-input input-lg'
                        type='text'
                        id='challenge-tag'
                        placeholder='Enter the tags as comma seperated values'
                        maxLength={TAG_MAX_LENGTH}
                        value={tag}
                        onChange={onTagChange}
                      />
                    </div>
                    <div className='form-action-button'>
                      <button className='btn btn-primary' onClick={null}>
                        Submit
                      </button>
                      <button className='btn btn-link' onClick={null}>
                        Clear
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
