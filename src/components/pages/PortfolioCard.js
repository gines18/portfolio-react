import React from 'react'
import background from '../../images/svg.png'

class Welcome extends React.Component {
    render() {
      return <> 
      
      <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={background} alt="laptop"></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="http://www.google.com" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      
      </>

    }
  }
  export default Welcome;
