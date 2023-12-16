import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FcDeployment } from "react-icons/fc";
 


const Portfolioitems = (props) => {
  return (
    <div className="rounded-lg m-10 shadow-md text-center">
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="rounded-tl-lg rounded-tr-lg w-40 h-40 bg-cover bg-center bg-no-repeat transition duration-300 ease-in-out transform hover:scale-105"
      />
      <h1>{props.name}</h1>
      <div>
        <a href={props.git} target="_blank">
          <FaGithub size={30} />
        </a>
        <a href={props.deploy} target="_blank">
          <FcDeployment size={30} />
        </a>
      </div>
    </div>
  );
}

export default Portfolioitems;

