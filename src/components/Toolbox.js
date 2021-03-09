import React from "react";
import "./Toolbox.css";
import { BsTools } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

const data = [
  "JavaScript",
  "Node.js",
  "React.js",
  "React Native",
  "AngularJs",
  "HTML",
  "CSS",
  "Bootstrap 4",
  "GraphQL",
  "MongoDB",
  "Sequelize",
  "SQL",
  "OOP",
  "Python",
  "Excel",
  "PowerBI",
];
const sdata = ["Team Player", "Creativity", "Fast-Learning", "Time Management"];

function Toolbox() {
  return (
    <>
      <section className="tbox">
        <h1 className="tbox_heading">
          Technical Toolbox <BsTools />
        </h1>
        <div className="tbox_container">
          <div className="tcool">
            {data.map((tool, index) => (
              <div className="tool">{tool} </div>
            ))}
          </div>
        </div>
      </section>
      <section className="tbox">
        <h1 className="tbox_heading">
          Soft Skills <GiSkills />
        </h1>
        <div className="tbox_container">
          <div className="tcool">
            {sdata.map((tool, index) => (
              <div className="tool">{tool} </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Toolbox;
