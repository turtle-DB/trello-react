import { createStore as cs, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import boardsReducer from '../reducers/BoardsReducer';
import cardsReducer from '../reducers/CardsReducer';
import listsReducer from '../reducers/ListsReducer';

function reducer(state = {}, action) {
  return {
    boards: boardsReducer(state.boards, action),
    cards: cardsReducer(state.cards, action),
    lists: listsReducer(state.lists, action),
  };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export function createStore(initialState = {}) {
  return cs(reducer, initialState, composeEnhancers(applyMiddleware(ReduxThunk)));
}
