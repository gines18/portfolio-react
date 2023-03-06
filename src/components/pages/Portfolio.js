import React from "react";
import Projects from "./PortfolioCard.js"

const ProjectsData = [
  {
    image: "https://via.placeholder.com/150",
    title: "Improved semantic elements",
    description: "I have improved better accessibility, search engine optimization, maintainability, and improved browser rendering.",
    link: "https://github.com/gines18/Improved-semantic-elements",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Portfolio",
    description: "This portfolio showing my ability to use CSS Grid Layout.",
    link: "https://github.com/gines18/NewPortfolio2022",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Readme generator",
    description: "Create your Readme without a hassle. Node.js, npm.",
    link: "https://github.com/gines18/Generate_Readme",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Work Scheduling App",
    description: "Plan your work day with easy to use app.",
    link: "https://github.com/gines18/Job-Scheduling-App",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "YourLocal",
    description: "As a news-hungry individual who is always on the go, you want to have access to a website with an API that provides you with the latest local news, entertainment, and weather updates based on my current location.",
    link: "https://github.com/WloMac/YourLocal",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "My certificates",
    description: "In this Responsive Web Design Certification, I've learnt the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.",
    link: "https://github.com/gines18/My-certificates",
  },
  ];

export default function Portfolio() {
return (
<div className="Portfolio">
  {ProjectsData.map((project) => (
<Projects title={project.title} image={project.image} description={project.description}/>
  ))}
  </div>
);
}
