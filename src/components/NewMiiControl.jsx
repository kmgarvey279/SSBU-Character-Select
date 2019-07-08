import React from 'react';
import NewMiiForm from './NewMiiForm';
import PropTypes from 'prop-types';
import CreateMiiQuestion from './CreateMiiQuestion';

class NewMiiControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleCreateMiiConfirmation = this.handleCreateMiiConfirmation.bind(this);
  }

  handleCreateMiiConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewMiiForm onNewMiiCreation={this.props.onNewMiiCreation}/>;
    } else {
      currentlyVisibleContent = <CreateMiiQuestion onCreateMiiConfirmation={this.handleCreateMiiConfirmation}/>
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewMiiControl.propTypes = {
  onNewMiiCreation: PropTypes.func
};

export default NewMiiControl;
