import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/BoardActions';

import BoardHeader from './BoardHeader';
import BoardLists from './BoardLists';

function Board(props) {
  return (
    <div>
      <BoardHeader />
      <BoardLists />
    </div>
  )
}

export default Board;
