import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export const Card = ({ imageSrc, name, description, id }) => {
    return (
      <Link to={`/restaurant/${id}`} className="card"> {/* Add Link for routing */}
        <img src={imageSrc} alt={`${name} Image`} className="restaurant-image" />
        <div className="card-content">
          <h2 className="restaurant-name">{name}</h2>
          <p className="restaurant-description">{description}</p>
        </div>
      </Link>
    );
  };
