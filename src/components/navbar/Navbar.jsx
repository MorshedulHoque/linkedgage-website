import React from "react";
import Logo from "../../images/Linkedgagefull-white.png";

const Navbar = () => {
  return (
    <div>
      <div>
        <div></div>
        <div className="navbar bg-black text-white py-4 text-base flex">
          <div className="flex-1 justify-center">
            <a href="/">
              <img src={Logo} alt="Homepage" className="w-56 mt-2 h-auto" />
            </a>
          </div>
          <div className="flex-1"></div>
          <div className="flex-1 justify-center gap-4">
            <button className="btn btn-ghost text-lg">Home</button>
            <button className="btn btn-ghost bg-gradient-to-r from-lightBlue to-blue-950 text-white border-0 hover:from-blue-950 hover:to-blue-400 shadow-md text-lg">
              <div className="indicator">Download Extension</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
