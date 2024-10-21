export const Offers = () => {
    const sampleOffers = [
      { description: "20% off your first booking!" }
    ];
  
    return (
      <div>
        <h1>Offers & Promotions</h1>
        <h3>Current Offers:</h3>
        <ul>
          {sampleOffers.map((offer, index) => (
            <li key={index}>{offer.description}</li>
          ))}
        </ul>
      </div>
    );
  };
  