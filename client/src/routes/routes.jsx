import React from "react";

import {Routes, Route} from 'react-router-dom';
import Home from "../pages/public/Home";
import Trainers from "../pages/public/Trainers";
import Exercise from "../pages/public/Exercise";
import Jobs from "../pages/public/Jobs";
import Reviews from "../pages/public/Reviews";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import FAQ from "../pages/public/Faq";
import Login from "../pages/public/login";
import SignUp from "../pages/public/signup";
import KnowUs from "../components/public/KnowUs";


function RoutesClient() {
	return(
    <>
      <Routes>
        {/* public */}
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/knowus" element={<KnowUs />} />
      </Routes>
    </>
  )
}

export default RoutesClient;
