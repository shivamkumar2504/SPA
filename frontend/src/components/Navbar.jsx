import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">Dine-Reserve</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
        </div>
      </nav>
    </>
  );
};

export default Navbar;