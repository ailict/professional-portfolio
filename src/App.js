import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/header";
import AboutMe from "./components/about";
import Projects from "./components/projects";
import Resume from "./components/resume";
import ReachOut from "./components/ReachOut";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <main>
          <div className="container">
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/ReachOut" component={ReachOut} />
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;