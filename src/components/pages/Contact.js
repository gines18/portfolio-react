import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from './Learn';
import './Contact.css'
import background2 from '../../images/contact.jpeg'

function Contact(props) {
  return (
  <>
    <div className='container4'>
<img className="img1" src={background2} alt="contact"/>
    </div>

<div className='container5'>

    <Link to="learn" role="button" className=" original-button text-decoration-none btn-link">
   Contact me
    </Link>

    <Routes>
    <Route path="learn" element={<Learn />} />
    </Routes>

</div>

    </>
  );
}

export default Contact;


