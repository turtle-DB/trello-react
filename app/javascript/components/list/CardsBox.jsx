import React from 'react';

import CardTile from './CardTile';
import PropTypes from 'prop-types';

class CardsBox extends React.Component {
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
    const listId = this.props.listId;
    const cardsData = store.getState().cards.filter(card => card.list_id === listId);



    const cardTiles = cardsData.map(data => {
      return <CardTile
        key={data.id}
        id={data.id}
        title={data.title}
        labels={data.labels}
        dueDate={data.due_date}
        description={data.description}
      />;
    });

    return (
      <div id="cards-container" data-id="list-1-cards">
        {cardTiles}
      </div>
    )
  }
}

export default CardsBox;
