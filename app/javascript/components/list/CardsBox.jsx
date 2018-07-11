import React from 'react';

import CardTile from './CardTile';

class CardsBox extends React.Component {
  render() {
    const cardTiles = [1, 2, 3].map(ele => {
      return <CardTile />;
    });

    return (
      <div id="cards-container" data-id="list-1-cards">
        {cardTiles}
      </div>
    )
  }
}

export default CardsBox;
