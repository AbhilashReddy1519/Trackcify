import React from "react";

import {Routes, Route} from 'react-router-dom';
import Home from "../pages/public/home";
import WhatIsTrackcify from "../pages/public/whatisTrackcify";
import Trainers from "../pages/public/trainers";
import Exercise from "../pages/public/exercise";
import Jobs from "../pages/public/jobs";
import Reviews from "../pages/public/reviews";
import About from "../pages/public/about";
import Contact from "../pages/public/contact";
import FAQ from "../pages/public/faq";

function RoutesClient() {
	return(
    <>
      <Routes>
        {/* public */}
        <Route path="/" element={<Home />} />
        <Route path="/trackcify" element={<WhatIsTrackcify />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  )
}

export default RoutesClient;
