import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Articles from "./pages/Articles/Articles";

import EmotionalEating from "./pages/Articles/EmotionalEating.js";
import EmotionalRegulation from "./pages/Articles/EmotionalRegulation.js";
import Anxiety from "./pages/Articles/Anxiety.js";
import OCD from "./pages/Articles/OCD.js";
import Depression from "./pages/Articles/Depression.js";

import Contact from "./pages/Contact";
import Cbt from "./pages/Cbt";

const App = () => {
  return (
    <Router>
      <div className="header-wrapper">
        <Header />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* submenu articles */}
          <Route path="/articles" element={<Articles />} />
          <Route
            path="/articles/emotional-eating"
            element={<EmotionalEating />}
          />
          <Route
            path="/articles/emotional-regulation"
            element={<EmotionalRegulation />}
          />
          <Route path="/articles/anxiety" element={<Anxiety />} />
          <Route path="/articles/ocd" element={<OCD />} />
          <Route path="/articles/depression" element={<Depression />} />

          <Route path="/cbt" element={<Cbt />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
