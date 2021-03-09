import React from "react";
import Typical from "react-typical";
import "./BioSection.css";

function BioSection() {
  return (
    <div className="bio__section" id="bioo">
      <div className="bio__container">
        <div className="bio__text ">
          <div className="bio-text">
            <h1>
              <span>Hi,</span> I'm IFEOLUWA
            </h1>
          </div>
          <h1 className="heading">
            I'm a {""}
            <Typical
              steps={[
                "web developer 💻️",
                1000,
                "mobile app developer 📱️",
                1000,
                "freelancer 😎️",
                1000,
                "designer 🎨️",
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </h1>
          <h1 className="overview">
            I am a fast-learning developer with 3 years of experience, hard
            worker and a team player who is proficient in JavaScript and
            multimedia Web tools. Excels at learning new technologies and
            applying them to develop well-structured code, and also a
            collaborative team player with great communication skills.
          </h1>
        </div>
        <div className="bio__image ">
          <div className="image_wrapper">
            <img className="img" src="images/imj1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioSection;
