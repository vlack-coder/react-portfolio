import React, { useState } from "react";
import "./Project.css";
import { AiFillFolderOpen } from "react-icons/ai";
import { Button } from "../components/Button";
import { Projekts } from "./ProjectData";
import { Link } from "react-router-dom";
// import Modal from "./Modal";

const ProductItem = ({ img, title, link }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="pitemscontain" id="projects">
      <img className="imagee" src={img} alt="okay" />
      <div className="titlee">
        <h1>{title}</h1>
      </div>
      <div className="overlayed">
        <h1>{title}</h1>
        <div>
          <Link
            to={{ pathname: link }}
            className="linked btn-link"
            target="_blank"
            rel="noreferrer"
            // style={{ textDecoration: "none"}}
          >
            <Button className="btn " buttonStyle="btn--outline">
              Link
            </Button>
          </Link>
        </div>

        {/* { showModal? <Modal showModal setShowModal/> : null} */}
      </div>
    </div>
  );
};

function Project() {
  return (
    <section className="pcontainer">
      <h1 className="pheading">
        Projects <AiFillFolderOpen />
      </h1>
      <div className="projects">
        {Projekts.map((item, index) => (
          <ProductItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Project;
