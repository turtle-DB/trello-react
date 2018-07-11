import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/BoardActions';

import BoardHeader from './BoardHeader';

function Board(props) {
  return (
    <div>
      <BoardHeader />
    </div>
  )
}

export default Board;
