import React, { Fragment } from "react";

import About from "./Components/About/About";
import EducationList from "./Components/Education/EducationList";
import Skills from "./Components/Skills/Skills";
import ExperienceList from "./Components/Experience/ExperienceList";
import ProjectList from "./Components/Projects/ProjectList";

import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import SideElement from "./Components/UI/SideElement";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <Fragment>
      <NavBar />
      <SideElement />
      <main>
        <Hero />
        <About />
        <Skills />
        <EducationList />
        <ExperienceList />
        <ProjectList />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
