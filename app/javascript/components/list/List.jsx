import React from 'react';

import CardsBox from './CardsBox';

class List extends React.Component {
  render() {
    return (
      <div className="list-wrapper">
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>
              <p className="list-title">Stuff to try (this is a list)</p>
            </div>
            <div className="add-dropdown add-top">
              <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
              <div className="add-options"><span>...</span>
              </div>
            </div>
            <CardsBox />
            <div className="add-dropdown add-bottom">
              <div className="card"><div className="card-info"></div><textarea name="add-card"></textarea><div className="members"></div></div>
              <a className="button">Add</a><i className="x-icon icon"></i>
              <div className="add-options"><span>...</span>
              </div>
            </div>
            <div className="add-card-toggle" data-position="bottom">Add a card...</div>
          </div>
        </div>
      </div>
    )
  }
}

export default List;
