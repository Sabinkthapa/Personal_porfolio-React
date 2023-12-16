import React from 'react'

const About = () => {
  return (
    <div>
      <div name="About" className="w-full h-screen bg-[rgb(243,243,243)]">
        <div className="max-w-[1000px] ml-0 px-8 flex flex-col justify-center h-96 ">
          <h1 class="text-indigo-500 text-4xl text-center mt-20"> ABOUT ME</h1>
          <h2 className="text-cyan-600 text-3xl mt-10">Sabin Thapa</h2>
          <h3 className="text-gray-600 text-2xl">Full stack Developer</h3>

          <p className="text-black italic text-xl mt-3">
            <span>
              I am a Front -end web developer, with a strong background and
              experiences of business management, added by ability to comprehend
              user behavior, preferences and business objectives while providing
              technical solution to the web application. My strengths includes
              teamwork, creativity and problem-Solving. //{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;


 