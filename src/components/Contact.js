import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
// import { Button } from "./Button";
import { Button } from "../components/Button";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_section" id='kontact'>
      <div className="pheading">Contact Me <GrContactInfo /> </div>
      <div className="contactwrapper">
        <div className="aboutme">
          <h3 className="email">
            <AiOutlineMail /> josephadeleke1914@gmail.com
          </h3>
          <h3 className="pnumber">
            <AiOutlinePhone />
            08146829072
          </h3>
          <h3 className="adress">
            <FaRegAddressCard /> Somolu Yaba Lagos, Nigeria
          </h3>
        </div>
        <div className="form">
          {/* <form action=""> */}
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />

            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label for="country">Country</label>
            <select id="country" name="country">
              <option value="nigeria">Nigeria</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>

            <label for="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              // style="height:200px"
            ></textarea>

            {/* <input type="submit" value="Submit" /> */}
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonColor="primary"
            >
              Submit
            </Button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
