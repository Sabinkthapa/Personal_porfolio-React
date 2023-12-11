import React from 'react'
import { FaBars,FaTimes, FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
const Navbar = () => {
  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-9 bg-[rgb(18,10,10)] text-gray-500">
      <div>
        <ul className="flex">
          <li>About me</li>
          <li>porfolio</li>
          <li>Resume</li>
          <li>Contact me</li>
        </ul>
      </div>

      <div className="flex fixed flex-col top-[70%] left-0">
        <ul>
          <li>
            <a
              href="/"
              className="mr-9 text-neutral-800 dark:md:hover:bg-blue-600"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a href="/" className="mr-9 text-neutral-800">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a href="/" className="mr-9 text-neutral-800">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
