import React, { Fragment } from "react";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import SideElement from "./Components/UI/SideElement";

import "./App.css";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import ExperienceList from "./Components/Experience/ExperienceList";
import ProjectList from "./Components/Projects/ProjectList";

function App() {
  return (
    <Fragment>
      <NavBar />
      <SideElement />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceList />
        <ProjectList />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
