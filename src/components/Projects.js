import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

function Projects() {
  const [listProjects] = useState([
    {
      name: "Project Real-time chating in website",
      des: '"Real-time Chatting in Website" is a real-time messaging platform that facilitates instant communication among users within a website, enhancing online interaction and collaboration.',
      mission:
        "Our mission is to provide a seamless and secure communication experience, fostering connectivity and engagement in our online community through an innovative and accessible messaging solution.",
      language: "ReactJs, Mysql, NodeJs, Express, HTML, CSS, Javascript",
      images: "/project1.PNG",
    },
    {
      name: "Project e-comerce completly functional",
      des: "A comprehensive e-commerce platform offering a seamless shopping experience, from product browsing to secure checkout.",
      mission:
        "To provide a robust and reliable online shopping platform that simplifies the purchasing process for customers, offering a wide range of products, secure payment options, and exceptional customer service.",
      language: "ReactJs, Mysql, NodeJs, Express, HTML, CSS, Javascript",
      images: "/project2.PNG",
    },
    {
      name: "Project code editor online",
      des: "A tool allowing users to write, edit, and execute code in real-time within their web browser, featuring syntax highlighting and autocompletion.",
      mission:
        "To facilitate collaboration, creativity, and learning within the programming community by providing a smooth and seamless coding experience, equipping users with tools to efficiently develop and test code.",
      language: "ReactJs, Mysql, NodeJs, Express, HTML, CSS, Javascript",
      images: "/project2.PNG",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        In this section, explore a curated collection of my standout projects
        showcasing my passion and expertise in development. These projects span
        various technological domains, demonstrating my ability to tackle
        diverse challenges and deliver high-quality results.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className="images">
              <img src={value.images} alt="" />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
