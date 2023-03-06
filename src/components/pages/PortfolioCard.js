import React from 'react'


      const Projects = (props) => {
const { title, image, description} = props;
console.log(props)
return (
      <div className="card" style={{width: "18rem"}}>
  <img src={`${image}`} className="card-img-top" alt="laptop"></img>
  <div className="card-body">
    <h5 className="card-title">{`${title}`}</h5>
    <p className="card-text">{`${description}`}</p>
    <a href="http://www.google.com" className="btn btn-primary">Open</a>
  </div>
</div>
      )}
   
  export default Projects;
