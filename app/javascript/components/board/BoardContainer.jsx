import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/BoardActions';
import Board from './Board';

class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch(actions.fetchBoard(+this.props.match.params.id));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  // allBoards = () => {
  //   const store = this.context.store;
  //   return store.getState().boards;
  // }

  render() {
    const store = this.context.store;
    const id = +this.props.match.params.id;
    const board = store.getState().boards.find(board => board.id === id);
    return (
      <div>
        <Board board={board}/>
      </div>
    )
  }
}

export default BoardContainer;
