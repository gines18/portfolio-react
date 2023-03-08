import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Contact.css'


function Contact(props) {
  return (
  <>
<div className='container5'>

    <Link to="https://drive.google.com/file/d/1BG4mOlpGO58uN1uS4wHkVhoVsKtaPoqq/view?usp=sharing" target="_blank" role="button" className=" original-button text-decoration-none btn-link">
    PDF CV
    </Link>
    <Link to="https://github.com/gines18" target="_blank" role="button" className="original-button text-decoration-none btn-link">
   GitHub
    </Link>
    <Link to="https://www.linkedin.com/in/mariusz-ruczkowski" target="_blank" role="button" className="original-button text-decoration-none  btn-link">
   LinkedIn
    </Link>

</div>

    </>
  );
}

export default Contact;
