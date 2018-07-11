import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/BoardActions';
import Board from './Board';

class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  // componentDidMount() {
  //   const store = this.context.store;
  //   this.unsubscribe = store.subscribe(() => this.forceUpdate());
  //   //store.dispatch(actions.fetchBoards());
  // }
  //
  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  // allBoards = () => {
  //   const store = this.context.store;
  //   return store.getState().boards;
  // }

  render() {
    return (
      <div>
        <Board />
      </div>
    )
  }
}

export default BoardContainer;
