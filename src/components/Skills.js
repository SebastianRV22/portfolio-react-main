import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faVuejs,
  faLaravel,
  faPython,
  faNodeJs,
  faGithub,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "Proficient in HTML, adept at crafting clean and semantic markup for modern web development. Skilled in creating responsive and accessible web interfaces.",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "Skilled in CSS, adept at creating visually appealing and responsive designs. Experienced in utilizing CSS preprocessors and frameworks to streamline styling workflows.",
      icon: faCss3,
    },
    {
      name: "Javascript",
      des: "Experienced in JavaScript, capable of building dynamic and interactive web applications. Proficient in leveraging JavaScript frameworks and libraries for efficient development.",
      icon: faJs,
    },
    {
      name: "ReactJs",
      des: "Proficient in React, skilled at building scalable and reusable components for modern web applications. Experienced in state management and component-based architecture.",
      icon: faReact,
    },
    {
      name: "SQL",
      des: "Proficient in SQL, capable of designing and optimizing database schemas and writing complex queries. Experienced in relational database management systems.",
      icon: faDatabase,
    },
    {
      name: "Node",
      des: "Skilled in Node.js, capable of building efficient and scalable server-side applications. Experienced in asynchronous programming and event-driven architecture.",
      icon: faNodeJs,
    },
    {
      name: "Express",
      des: "Proficient in Express.js, adept at building robust and scalable backend APIs. Experienced in middleware integration and route handling.",
      icon: faNode,
    },
    {
      name: "Python",
      des: "Experienced in Python, proficient in writing clean and efficient code for a variety of applications. Skilled in utilizing Python libraries and frameworks for rapid development.",
      icon: faPython,
    },
    {
      name: "GitHub",
      des: "Proficient in GitHub for version control and collaborative development. Skilled in Git commands, branching, merging, and repository management. Experienced in using GitHub features like pull requests and project boards for effective collaboration.",
      icon: faGithub,
    },
  ]);
  return (
    <section className="skills" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        My skills include javascript, html, css, node, express, sql, react,
        python, backed by hands-on experience in real-world projects. I am
        committed to continuous learning and ongoing improvement to stay abreast
        of the latest technologies and market trends. My focus is on delivering
        robust and efficient solutions tailored to the specific needs of each
        project. I am excited to apply my skills to tackle new challenges and
        contribute to the success of future endeavors.
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div
            className={"item "}
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
