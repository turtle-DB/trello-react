import React from 'react';

import List from './../list/List';
import PropTypes from 'prop-types';

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
                <div id="new-list" className="new-list"><span>Add a list...</span>
                    <input type="text" placeholder="Add a list..." />
                    <div>
                        <input type="submit" className="button" value="Save" /><i className="x-icon icon"></i>
                    </div>
                </div>
            </div>
        </main>
    )
  }
}

export default BoardLists;
