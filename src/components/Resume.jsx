import React from 'react'
import javascriptlogo from '../assets/logo/javascript.png';
import bootscraplogo from "../assets/logo/bootscrap.png"
import tailwindlogo from "../assets/logo/tailwind.png"
import Mernlogo from "../assets/logo/MERN.png"

const Resume = () => {
  return (
    <div className=" ml-0 px-10 flex flex-col justify-center gap-6">
      <h1 class="text-indigo-500 text-4xl text-center mt-20"> RESUME</h1>
      <div>
        <h2 class="text-black text-2xl text-left font-bold">TECHNOLOGY</h2>
        <div className="flex gap-5 mt-5">
          <img src={javascriptlogo} className="h-10" />
          <img src={bootscraplogo} className="h-10" />
          <img src={tailwindlogo} className="h-10" />
          <img src={Mernlogo} className="h-10" />
        </div>
      </div>
      <h2 class="text-black text-2xl text-left mt-6 font-bold">EDUCATION</h2>
      <ol className="text-black bold text-xl mt-3 leading-8 tracking-wide">
        Full Stack Web Development, University of New Brunswick
      </ol>
      <ol className="text-black bold text-xl mt-0 leading-8 tracking-wide">
        MBA, Little Angle's College of Managment
      </ol>
      <ol className="text-black bold text-xl mt-0 leading-8 tracking-wide">
        BBIS, Little Angle's College of Management
      </ol>

      <h3 className="text-indigo-500 text-sl text-center mt-4">
        {" "}
        Download Resume:{" "}
        <a href="https://github.com/Sabinkthapa/Portfolio/tree/main/src/assets/sabinresume.pdf" target='_blank'>
          Sabin Thapa
        </a>
      </h3>
    </div>
  );
}

export default Resume;
//class="text-indigo-500 text-sl text-center"