import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="portfolio-react">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/portfolio-react/" element={<Home />} />
          <Route path="/portfolio-react/about" element={<About />} />
          <Route path="/portfolio-react/portfolio" element={<Portfolio />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/portfolio-react/contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

