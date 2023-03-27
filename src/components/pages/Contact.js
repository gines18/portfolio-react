import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from './Learn';
import './Contact.css'
import background2 from '../../images/contact.jpeg'
import Footer from './Footer.js'

function Contact(props) {
  return (
  <>
<div class="card border-0">
<h1 className="header">Crafting beautiful digital experiences, one pixel at a time.</h1>
<div className="contact-container">
<h1>E-mail:</h1>
<p>ruczkowski.m@gmail.com</p>
</div>
  <div class="card-body">
<div className='container5'>
    <Link to="learn" role="button" className=" original-button text-decoration-none btn-link">
   Helpful links
    </Link>
    <Routes>
    <Route path="learn" element={<Learn />} />
    </Routes>
</div>
  </div>
</div>


    <div className='container4'>
<img className="img1" src={background2} alt="contact"/>
    </div>
<br></br>
<Footer />
    </>
  );
}

export default Contact;


