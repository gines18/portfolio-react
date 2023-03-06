import React from 'react'
import "./Portfolio.css"
import { Link } from 'react-router-dom';

      const Projects = (props) => {
const { title, image, description, link} = props;

return (
      <div className="card-container">
      <div className="card" style={{width: "18rem"}}>
  <img src={`${image}`} className="card-img-top" alt="laptop"></img>
  <div className="card-body">
    <h5 className="card-title">{`${title}`}</h5>
    <p className="card-text">{`${description}`}</p>
    
    <Link target="_blank" to = {`${link}`} ><button className="btn btn-primary">Open</button></Link>
  </div>
</div>
</div>
      )}
   
  export default Projects;
