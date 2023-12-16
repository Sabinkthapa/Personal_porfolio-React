import React from 'react'
import Portfolioitems from './Portfolioitems'

import { Portfoliolist } from '../helpers/Portfoliolist'


const Portfolio = () => {
  return (
    <div className="max-w-[2000px] bg-[rgb(243,243,243)] h-[50rem] ml-0 px-10 flex flex-col justify-center ">
      <h1 className="text-indigo-500 text-4xl text-center mt-15">PORTFOLIO</h1>
      <div className="w-50v min-h-[8rem] grid grid-cols-3 gap-2 place-items-center">
        {Portfoliolist.map((project) => {
          return <Portfolioitems name={project.name} image={project.image} git={project.github} deploy={project.deploy} />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
