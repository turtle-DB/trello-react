import React from 'react';

import BoardHeader from './BoardHeader';
import BoardLists from './BoardLists';

function Board(props) {
  return (
    <div>
      <BoardHeader title={props.board.title}/>
      <BoardLists />
    </div>
  )
}

export default Board;
