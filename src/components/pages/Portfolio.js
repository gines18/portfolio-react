import React from "react";
import Projects from "./PortfolioCard.js"
import Footer from './Footer.js'

const ProjectsData = [
  {
    image:  './images/semantic.jpg',
    title: "Improved semantic elements",
    description: "I have improved better accessibility, search engine optimization, maintainability, and browser rendering.",
    link: "https://github.com/gines18/Improved-semantic-elements",
    link2: "https://gines18.github.io/Improved-semantic-elements/",
  },
  {
    image: './images/HomeSection.jpg',
    title: "Portfolio",
    description: "This website showing my ability to use CSS Grid, a two-dimensional grid-based layout system used to built gallery. ",
    link: "https://github.com/gines18/NewPortfolio2022",
    link2: "https://gines18.github.io/NewPortfolio2022/",
  },
  {
    image: './images/readme.jpg',
    title: "Readme generator",
    description: "Create your Readme without a hassle. This app will help you to create professional and outstanding Readme. I used Node.js and npm.",
    link: "https://github.com/gines18/Generate_Readme",
    link2: "https://watch.screencastify.com/v/ygGS12QVwYs5cgao7G0A",

  },
  {
    image: './images/workSchedule.jpg',
    title: "Work Scheduling App",
    description: "Plan your work day with easy to use app. User can save meetings and plans in browser having access for it even if website is refreshed.",
    link: "https://github.com/gines18/Job-Scheduling-App",
    link2: "https://gines18.github.io/Job-Scheduling-App/",
  },
  {
    image: './images/yourlocal.jpg',
    title: "YourLocal",
    description: "As a news-hungry individual who is always on the go, you want to have access to a website with an API that provides you with the latest local news, entertainment, and weather updates based on your current location.",
    link: "https://github.com/WloMac/YourLocal",
    link2: "https://wlomac.github.io/YourLocal/",
  },
  {
    image: './images/quiz.jpg',
    title: "Quiz App With Timer",
    description: "Multiple-choice quiz that keep track of high scores and quiz-takers' initials. User have one minute to answer all questions, his high score is stored for future compare. App created using Java Script. ",
    link: "https://github.com/gines18",
    link2: "https://gines18.github.io/Quiz-App-With-Timer/",
  },
  ];

export default function Portfolio() {
return (
  <>
  <h1 className="header2">Explore projects I have made during FrontEnd Web Development bootcamp!</h1>
<div className="Portfolio">
  {ProjectsData.map((project) => (
<Projects title={project.title} image={project.image} description={project.description} link={project.link} link2={project.link2}/>
  ))}
  </div>

<div className="container">
  <div className="row d-flex justify-content-center">
<div className="col-10 col-md-8">
  <ul class="list-group">
  <li class="list-group-item active" aria-current="true">I have knowledge about:</li>
  <li class="list-group-item">HTML/CSS</li>
  <li class="list-group-item">Java Script</li>
  <li class="list-group-item">UX & Advanced CSS</li>
  <li class="list-group-item">Working with Web APIs</li>
  <li class="list-group-item">Working with ES6 and Node</li>
  <li class="list-group-item">Object-Oriented Programming</li>
  <li class="list-group-item">Modern Development with React</li>
</ul>
</div>
</div>
</div>

  
   <Footer />
   </>
);
}
