import React, { useEffect, useState } from "react";
import logoimg from "../assets/images/supra.jpg";
import "../assets/css/style.css";
import { toast } from "react-toastify";

const Header = () => {
  const [responsiveHeder, setResponsiveHeder] = useState(false);
  return (
    <>
      <div className="header">
        <div className="imgcontainer">
          <img src={logoimg} alt="logo" />
        </div>
        <div className="listcontainer">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Blogs</li>
            <li>Contact</li>
            <li>
              {" "}
              <input type="search" placeholder="Search here" />
            </li>
            <li>
              {" "}
              <button onClick={() => toast.info("Comming soon!")}>
                Sign In
              </button>
            </li>
          </ul>
          <div
            className={responsiveHeder === false ? "threebars" : "crossbars"}
            onClick={() => setResponsiveHeder(!responsiveHeder)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/* {responsiveHeder && ( */}
      <div
        className="responsiveheaderblock"
        open={responsiveHeder ? true : undefined}
      >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Blogs</li>
          <li>Contact</li>

          <li>
            {" "}
            <button onClick={() => toast.info("Comming soon!")}>Sign In</button>
          </li>
        </ul>
      </div>
      {/* )} */}
    </>
  );
};

export default Header;
