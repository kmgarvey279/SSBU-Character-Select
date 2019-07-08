import React from 'react';
import PropTypes from 'prop-types';

function CreateMiiQuestion(props){
  return (
    <div>
      <p>Enter your custom mii infomation, and they will be added to the list!</p>
      <button onClick={props.onCreateMiiConfirmation}>Yes</button>
    </div>
  );
}

CreateMiiQuestion.propTypes = {
  onCreateMiiConfirmation: PropTypes.func
};

export default CreateMiiQuestion;
