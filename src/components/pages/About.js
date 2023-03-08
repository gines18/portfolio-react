import React from "react";
import "./About.css"
import background3 from '../../images/child-1837375__340.webp'
import Footer from './Footer.js'



function About() {
  return (
<>
    <div className="container3">

   <img src={background3} alt="avatar"></img>
      
      <h1 className="description">Hey there! <br></br><br></br> My name is Mariusz, and I'm an aspiring frontend developer. I'm really passionate about creating beautiful and functional websites and applications that make a positive impact on people's lives.

      I've been teaching myself frontend development for the last 4 months or so, and I've learned a lot about HTML, CSS, and JavaScript. I've also experimented with various frameworks and libraries, like React and Bootstrap, and I'm excited to continue exploring new technologies and techniques. 
      <br></br>   <br></br>
      Let's have a look at my portfolio now ...
      </h1>
    </div>
    <Footer />
    </>
  );
}

export default About;
