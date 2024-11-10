import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl" >Technologies I work with</h2>
          <p className="text-gray-500 pt-2">
           With a solid foundation in web development, specializing in HTML, CSS, and JavaScript.
           I have experience with frameworks like React and Next.js for creating dynamic, user-friendly applications.
           I am at an advanced beginner level in Tailwind CSS, which I use for efficient styling and design. Additionally, 
           I have a background in graphic design, including logo creation, branding, and designing social media graphics, and
           I hold a graphic design certificate from BanoQabil 2.0. My passion for learning keeps me updated on the latest technologies,
           enhancing my skills to contribute effectively to projects.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 text-blue text-3xl sm:text-4xl">
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Graphic Design</h2> 
              <h2 data-aos="zoom-in-up">Web Design</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
              <h2 data-aos="zoom-in-up">Logo Creation</h2>
              <h2 data-aos="zoom-in-up">UI & UX Design</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;