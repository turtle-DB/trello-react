import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/ListActions';
import Board from './Board';
import AddList from './AddList';

export default class AddListContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleSaveClick = list => {
    this.context.store.dispatch(actions.createList(this.props.boardId, list))
  }

  render() {
    return (
      <AddList
        onSaveClick={this.handleSaveClick}
      />
    )
  }
}
