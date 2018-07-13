export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    let { lists, ...newBoardWithoutLists } = action.board;
    //return all lists not on this board
    const currentLists = state.filter(list => list.board_id !== action.board.id);
    //returns board lists from response, without their cards property
    lists = lists.map(list => {
      const { cards, ...newListWithoutCards } = list;
      return newListWithoutCards;
    });
    //add the new lists to the old lists
    return currentLists.concat(lists);
  } else if (action.type === 'CREATE_LIST_SUCCESS') {
    return state.concat(action.list);
  }
  else {
    return state;
  }
}
