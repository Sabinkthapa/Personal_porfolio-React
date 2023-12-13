import React from 'react'
// import { FaGithub } from "react-icons/fa";
// import { AiOutlineDeploymentUnit } from "react-icons/ai";
const Portfolioitems = ({image,name}) => {
  return (
    <div className="rounded-lg w-72 h-72 m-10 shadow-md flex items-center justify-center">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="rounded-tl-lg rounded-tr-lg h-48 bg-cover bg-center bg-no-repeat"
      />
      <h1>{name}</h1>
    </div>
  );
}

export default Portfolioitems;

