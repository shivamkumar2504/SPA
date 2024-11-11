import React from 'react';
import "./app.css";
import { BrowserRouter , Routes , Route , Link, Outlet } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { FindRestaurant } from './components/FindRestaurant';
import { Reservations } from './components/Reservations';
import { Offers } from './components/Offers';
import { Footer } from './components/Footer';
import { Rest } from './components/Rest';
import { Rest1 } from './components/Rest1';
import { Rest2 } from './components/Rest2';
import { Rest3 } from './components/Rest3';
import { Rest4 } from './components/Rest4';
import { Rest5 } from './components/Rest5';
import { Rest6 } from './components/Rest6';
import logo from './assets/logo.png';
import down from './assets/down.png';


function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/find-restaurant" element={<FindRestaurant />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/Rest" element={<Rest />} />
          <Route path="/restaurant/1" element={<Rest1 />} />
          <Route path="/restaurant/2" element={<Rest2 />} />
          <Route path="/restaurant/3" element={<Rest3 />} />
          <Route path="/restaurant/4" element={<Rest4 />} />
          <Route path="/restaurant/5" element={<Rest5 />} />
          <Route path="/restaurant/6" element={<Rest6 />} />
          <Route path="*" element={<ErrorLandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

function Layout() {
  return <div className="container">
  <div className="navbar">
      <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
        <img src={logo} alt="dineReserve" style={{ width: "70px", cursor: "pointer" }} />
      <span style={{color:"white",fontSize:"20px"}}>Dine Reserve</span>
      </div>
      <div style={{display:"flex",gap:"50px"}}>
        <div><Link className="link" to="/">Home</Link></div>
        <div className="more">
        <button className="more-button">More</button>
        <div className="dropdown-content">
          <Link className="link" to="/find-restaurant">Find a Restaurant</Link>
          <Link className="link" to="/reservations">Reservations</Link>
          <Link className="link" to="/offers">Offers/Promotions</Link>
        </div>
      </div>
        <div><Link className="link" to="/login">Log In</Link></div>
        <div style={{marginRight:"30px"}}><Link className="link" to="/signup">Sign Up</Link></div>
      
      
      </div>
    </div>
      <div style={{height:"80vh",marginBottom:"500px",paddingTop:"50px"}}>
        <Outlet />
      </div>
      <Footer />
  </div>
}


function ErrorLandingPage() {
  return <div>
    <h1>Page Not Found</h1>
  </div>
}
export default App
