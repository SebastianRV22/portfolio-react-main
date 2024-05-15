import React, { useRef } from "react";
import CustomHook from "./CustomHook";
function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
          MY NAME IS <span>SEBASTIAN RIVERA</span>
        </div>
        <div className="des">
          {/* 30 */}
          Hi there! I'm Sebastian, a passionate junior developer, My focus lies
          in continuous learning and creative problem-solving. Through my
          portfolio, I aim to showcase exciting projects and demonstrate my
          ability to contribute effectively in collaborative teams. I'm eager to
          tackle new challenges and expand my skills in the field of software
          development. Welcome to my world of code and creativity!
        </div>

        <a
          href="/cvingles.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="animation active "
        >
          Download My CV
        </a>
        <a
          href="/cvespañol.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="animation active "
        >
          Download My CV (español)
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="/avatar.jpg" alt="" />
          <div className="info">
            <div>Developer</div>
            <div>Sebastian Rivera</div>
            <div>2024</div>
            <div>Male</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
