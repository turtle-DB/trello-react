import React from 'react';

function CardTile(props) {
    const labels = props.labels.map(label => {
      return (
        <div className={`card-label ${label} colorblindable`}></div>
      );
    });

    return (
      <div className="card-background">
        <div className="card "><i className="edit-toggle edit-icon sm-icon"></i>
          <div className="card-info">
            {labels}
            <p>{props.title}</p>
          </div>
          <div className="card-icons"><i className="clock-icon sm-icon overdue-recent completed">Aug 4</i><i className="description-icon sm-icon"></i><i className="comment-icon sm-icon"></i>
          </div>
        </div>
      </div>
    )
}

export default CardTile;
