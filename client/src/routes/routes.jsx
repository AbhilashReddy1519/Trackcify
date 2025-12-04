import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from '../pages/public/Home.jsx';
import Trainers from '../pages/public/Trainers.jsx';
import Exercise from '../pages/public/Exercise.jsx';
import Jobs from '../pages/public/Jobs.jsx';
import Reviews from '../pages/public/Reviews.jsx';
import About from '../pages/public/About.jsx';
import Contact from '../pages/public/Contact.jsx';
import FAQ from '../pages/public/Faq.jsx';
import Login from '../pages/public/Login.jsx';
import SignUp from '../pages/public/Signup.jsx';
import KnowUs from '../components/public/KnowUs.jsx';

function RoutesClient() {
  return (
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
  );
}

export default RoutesClient;
