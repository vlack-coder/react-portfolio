import React, { useEffect, useState } from "react";
import "./Project.css";
import { AiFillFolderOpen } from "react-icons/ai";
import { Button } from "../components/Button";
import { Projekts } from "./ProjectData";
import { Link } from "react-router-dom";
import Modal from "react-modal";
// import Modal from "./Modal";

const ProductItem = ({ img, title, link, techUsed, about }) => {
  const [showModal, setIsOpen] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // !showModal && document.body.style.overflow = 'unset'
  }, [showModal]);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      boxShadow: " 0 5px 16px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px",
      outline: "none",
      border: "none",

      // zIndex: 10000000,
    },
    overlay: {
      zIndex: 1000,
      // backgroundColor: "#00000",
      backgroundColor: "rgba(109, 97, 97, 0.758)",
      backgroundColor: "rgba(28, 34, 55, 0.91)",

      // backgroundColor: "#000",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="pitemscontain" id="projects">
      <img className="imagee" src={img} alt="okay" />
      <div className="titlee">
        <h1>{title}</h1>
      </div>
      <div className="overlayed">
        <h1>{title}</h1>
        <div>
          {/* <Link
            // to={{ pathname: link }}
            className="linked btn-link"
            target="_blank"
            rel="noreferrer"
            // style={{ textDecoration: "none"}}
          > */}
          <Button
            onClick={() => openModal()}
            className="btn "
            buttonStyle="btn--outline"
          >
            View
          </Button>
          {/* </Link> */}
        </div>

        {showModal ? (
          <Modal
            isOpen={showModal}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            preventScroll={false}
            // preventScroll={true}
            // showModal
            // setShowModal
          >
            <div className="modal_container">
              <div className="modal_image_cont">
                <img className="images" src={img} alt="okay" />
              </div>

              <div className="modal_content">
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    flexDirection: "column-reverse",
                  }}
                >
                  <div className="techUsed_cont">
                    <p className="techUsed_cont_title">Technology used</p>
                    <div className="techUsed_cont_items">
                      {techUsed.map((t) => (
                        <p className="techUsed" key={t}>
                          {t}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="linked_to">
                    <p style={{ fontStyle: "italic", textAlign: "center" }}>
                      {about}
                    </p>
                    <Link
                      to={{ pathname: link }}
                      // className="linked"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none", alignSelf: "center" }}
                      className="link_button"
                    >
                      <button>Link</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        ) : null}
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
