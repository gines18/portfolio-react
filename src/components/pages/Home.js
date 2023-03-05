import React from "react";
import "./Home.css"
import background from '../../images/svg.png'
import background2 from '../../images/macbook.jpeg'


function Home() {
  return (
    <>
    <div className="container1">
    <h1>Who is FrontEnd Web developer?</h1>
    <p>Let's  find out</p>
    </div>
    <div className="container2">
   <div className="square">
    <img src={background} alt="logo"></img>
   </div>
   <p className="text">A frontend programmer is a software developer who specializes in designing and developing user interfaces and client-side functionality for websites and applications. They are responsible for creating the visual aspects of a website or application that users interact with, such as the layout, navigation, forms, and interactive features. Frontend programmers typically use HTML, CSS, and JavaScript to create dynamic and responsive web pages that are optimized for a variety of devices and browsers. They work closely with designers, project managers, and backend developers to ensure that the user interface meets the requirements and goals of the project.</p>
   </div>

    <div className="container2">
   <p className="text">There are several advantages to finding a good frontend programmer for your web development project:
<br></br>
<br></br>
Improved User Experience: A good frontend programmer can create a well-designed and intuitive user interface that enhances the user experience and makes it easy for users to navigate your website or application.
<br></br>
<br></br>
Improved Accessibility: A skilled frontend programmer can ensure that your website or application is accessible to users with disabilities, which can help to increase your user base and promote inclusivity.
<br></br>
<br></br>
Overall, a good frontend programmer can help to create a professional and engaging user interface that enhances the user experience and drives the success of your web development project.</p>
   <div className="square">
    <img src={background2} alt="logo"></img>
   </div>
   </div>
    </>
  );
}

export default Home;
