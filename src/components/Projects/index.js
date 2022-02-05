import React from 'react';

function Projects() {
    return (
<section id="projects" class="projects">
      <h2 class="section-title primary-border">Projects</h2>
      <div class="flexbox-container">

            <div class="flexbox-item flexbox-item-1">
                <p> Run Buddy</p>
                <a href="https://ailict.github.io/run-buddy/">
                    <img src="../../../public/images/runbuddy.jpg"></img>
                </a>            
            </div>

            <div class="flexbox-item flexbox-item-2">
                <a href="https://github.com/ailict/robot-gladitors">Robot Gladiators link out to Github, not yet a live page</a>
            </div>

            <div class="flexbox-item flexbox-item-3">
                <a href="https://github.com/ailict/datenightgenerator">Date Night Generator</a>
            </div>

            <div class="flexbox-item flexbox-item-4">
                <a href="https://band-gogh.herokuapp.com/">Band Gogh</a>
            </div>
      </div>
    </section>
    );
}

export default Projects;
