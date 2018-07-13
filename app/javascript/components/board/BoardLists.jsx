import React from 'react';

import List from './../list/List';
import PropTypes from 'prop-types';
import AddListContainer from './AddListContainer';

class BoardLists extends React.Component {
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

  render() {
    const store = this.context.store;
    const boardId = this.props.boardId;
    const listsData = store.getState().lists.filter(list => list.board_id === boardId);

    const lists = listsData.map(data => {
      return (
            <List
              title={data.title}
              listId={data.id}
            />
      );
    });

    return (
        <main>
            <div id="list-container" className="list-container">
                <div id="existing-lists" className="existing-lists">
                    {lists}
                </div>
                <AddListContainer boardId={boardId}/>
            </div>
        </main>
    )
  }
}

export default BoardLists;
