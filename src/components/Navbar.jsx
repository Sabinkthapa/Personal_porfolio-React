import React from 'react'

import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="width:calc(100% - 60px) h-20 flex justify-center items-center px-8 bg-[rgb(18,10,10)] text-white">
      <div>
        <ul className="flex">
          <li >
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/Resume">Resume</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;


 