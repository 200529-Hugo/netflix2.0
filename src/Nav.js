import React, { useState, useEffect } from 'react';
import "./Nav.css";

//creates navbar
function Nav() {
  const [show, handleshow] = useState(false)

  {/* If scroll down, Nav has a background color else it has none */}
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true)
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    }
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://cdn.discordapp.com/avatars/758236815097462784/9c23cb5425fbbaffed0f0608d3d5cb71.webp?size=40"
        alt="Netflix Logo"
      />
    </div>
  )
}

export default Nav
