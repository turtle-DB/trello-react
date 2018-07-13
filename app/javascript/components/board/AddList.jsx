import React from 'react';

export default class AddList extends React.Component {
  state = {
    title: "",
  }

  handleListSave = () => {
    this.props.onSaveClick({ title: this.state.title });
  }

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  }

  render () {
    return (
      <div id="new-list" className="new-list selected" ><span>Add a list...</span>
      <input
        value={this.state.title}
        onChange={this.handleTitleChange}
        type="text"
        placeholder="Add a list..." />
        <div>
          <input
            type="submit"
            className="button"
            value="Save"
            onClick={this.handleListSave}
          /><i className="x-icon icon"></i>
        </div>
      </div>
    )
  }
}
