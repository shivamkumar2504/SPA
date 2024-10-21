export const UserProfile = () => {
    const user = {
      name: "John Doe",
      email: "johndoe@example.com",
      bookings: [
        { restaurant: "Italian Bistro", date: "2024-10-15", time: "19:00" },
        { restaurant: "Sushi Place", date: "2024-10-20", time: "20:00" },
      ],
    };
  
    return (
      <div>
        <h1>User Profile</h1>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <h3>Your Bookings:</h3>
        <ul>
          {user.bookings.map((booking, index) => (
            <li key={index}>
              {booking.restaurant} on {booking.date} at {booking.time}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  