import React from "react";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div>
      <div className="contact p-5">
        <h1>Contact Me</h1>
        <div className="row ">
          <div className="col-md-7 p-4 ">
            <form action="" className="mb-3 ">
              <div className="row mb-3">
                <div className="col-md-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control mb-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="form-control mb-2"
                  />
                </div>
                <div className="col-md-7">
                  <textarea
                    className="form-control"
                    name=""
                    id=""
                    placeholder="Message"
                    cols={50}
                    rows={5}></textarea>
                </div>
              </div>
              <div className="">
                <button type="submit" className="btn btn-info me-2">
                  Submit
                </button>
                <button type="submit" className="btn btn-danger">
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-5 border-start p-4">
            <ul>
              <li>
                Email: <a href="saamsallvin@gmail.com">saamsallvin@gmail.com</a>
              </li>
              <li>
                Phone: <a href="saamsallvin@gmail.com">+91 91502 45248</a>
              </li>
              <li>
                Linkedin:{" "}
                <a href="saamsallvin@gmail.com">saamsallvin@gmail.com</a>
              </li>
              <li>
                Instagram:{" "}
                <a href="saamsallvin@gmail.com">saamsallvin@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
