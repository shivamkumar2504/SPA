import '.././css/hp.css';
import wall from '.././img/wall3.png';
import { Link } from 'react-router-dom';
export const HomePage = () => {
  return <div className="home" style={{ backgroundImage: `url(${wall})`}}>
  <div className="headerContainer">
    <span style={{fontSize:"70px",color:"white"}}>Dine Reserve</span>
    <p>Best Restaurants In India</p>
    <Link to="/Rest">
      <button>BOOK NOW</button>
    </Link>
  </div>
</div>
};

