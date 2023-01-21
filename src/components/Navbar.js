import React, { useEffect, useState } from "react";
import { NavCenter, NavContainer } from "../styles/Navbar.styles";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { menu } from "../data/menu";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  console.log(navbar);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavContainer navbar={navbar}>
        <NavCenter>
          <div className="nav-header">
            <h3>
              Christian<span>Calle</span>
            </h3>
            <button className="nav-btn" onClick={() => setIsOpen(!isOpen)}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            {menu.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </NavCenter>
      </NavContainer>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
  return <div>Navbar</div>;
};

export default Navbar;
