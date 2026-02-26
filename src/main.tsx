import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';

import App from './App.tsx';
import Home from './pages/home.tsx';
import About from './pages/About.tsx';
import ImportantDates from './pages/ImportantDates.tsx';
import Venue from './pages/Venue.tsx';
import Registration from './pages/Registration.tsx';
import Contact from './pages/Contact.tsx';
import CallForPapers from './pages/CallForPapers.tsx';
import Program from './pages/Program.tsx';
import PostgraduateColloquium from './pages/PostgraduateColloquium.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="call-for-papers" element={<CallForPapers />} />
          <Route path="program" element={<Program />} />
          <Route path="important-dates" element={<ImportantDates />} />
          <Route path="postgraduate-colloquium" element={<PostgraduateColloquium />} />
          <Route path="venue" element={<Venue />} />
          <Route path="registration" element={<Registration />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);