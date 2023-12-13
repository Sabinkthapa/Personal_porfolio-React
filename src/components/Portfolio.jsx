import React from 'react'
import Portfolioitems from './Portfolioitems'

import { Portfoliolist } from '../helpers/Portfoliolist'


const Portfolio = () => {
  return (
    <div className="max-w-[1000px]  h-[31rem] ml-0 px-10 flex flex-col justify-center ">
      <h1 class="mt-12 text-indigo-300 text-2xl">My Projects</h1>
      <div className="w-70v min-h-[10rem] grid grid-cols-3 gap-4 place-items-center">
        {Portfoliolist.map((project) => {
          return (
            <Portfolioitems
              name={project.name}
              image={project.image}
              className="rounded-lg w-72 h-72 m-10 shadow-md flex justify-center items-center"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
