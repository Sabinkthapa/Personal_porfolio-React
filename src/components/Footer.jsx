import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer p-3 flex justify-center gap-x-7 bg-neutral-50 text-neutral-content fixed bottom-0 w-full">
      <a href="https://github.com/sabinkthapa/">
        GitHub <FaGithub size={30} />
      </a>
      <a href="www.linkedin.com/in/sabin-thapa-42715892">
        Linkedin <FaLinkedin size={30} />
      </a>
      <a href="www.gmail.com">
        Email <HiOutlineMail size={30} />
      </a>
    </footer>
  );
}

export default Footer


