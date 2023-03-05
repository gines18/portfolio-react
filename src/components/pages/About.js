import React from "react";
import "./About.css"
import background3 from '../../images/child-1837375__340.webp'



function About() {
  return (
<>
    <div className="container3">
      <img src={background3} alt="logo"></img>
      <h1 className="description">Hey there! My name is Mariusz, and I'm an aspiring frontend developer. I'm really passionate about creating beautiful and functional websites and applications that make a positive impact on people's lives.

      I've been teaching myself frontend development for the last 4 months or so, and I've learned a lot about HTML, CSS, and JavaScript. I've also experimented with various frameworks and libraries, like React and Bootstrap, and I'm excited to continue exploring new technologies and techniques.
      </h1>
    </div>
    </>
  );
}

export default About;
