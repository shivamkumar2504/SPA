
import { Card } from './Card'; 
import '.././css/Rest.css';
import restaurant1 from '.././img/restaurant1.jpg';
import restaurant2 from '.././img/restaurant2.jpeg';
import restaurant3 from '.././img/restaurant3.jpeg';
import restaurant4 from '.././img/restaurant4.jpg';
import restaurant5 from '.././img/restaurant5.jpg';
import restaurant6 from '.././img/restaurant6.jpeg';

export const Rest = () => {
    const restaurants = [
      {
        id: 1,
        imageSrc: restaurant1,
        name: 'The Gourmet Kitchen',
        description: 'Experience the finest culinary delights with our seasonal dishes.',
      },
      {
        id: 2,
        imageSrc: restaurant2,
        name: 'Culinary Heaven',
        description: 'A taste of heaven in every bite.',
      },
      {
        id: 3,
        imageSrc: restaurant3,
        name: 'Taste of Italy',
        description: 'Authentic Italian cuisine crafted with passion.',
      },
      {
        id: 4,
        imageSrc: restaurant4,
        name: 'Sushi Paradise',
        description: 'Fresh and delicious sushi made to perfection.',
      },
      {
        id: 5,
        imageSrc: restaurant5,
        name: 'Spicy Fiesta',
        description: 'Bring the heat with our spicy dishes.',
      },
      {
        id: 6,
        imageSrc: restaurant6,
        name: 'Sweet Treats',
        description: 'Desserts that are a treat for the senses.',
      },
    ];
  
    return (
      <div className="restaurant-container">
        {restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            imageSrc={restaurant.imageSrc}
            name={restaurant.name}
            description={restaurant.description}
            id={restaurant.id} // Pass the ID to the Card
          />
        ))}
      </div>
    );
  };