import React from "react";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div>
      <div className="contact p-5 " id="contact">
        <div className="container-md">
          <h1 className="heading">Contact Me</h1>
          <div className="row d-flex justify-content-center">
            <ul className="d-flex p-4 flex-wrap justify-content-center">
              <li>
                Email:{" "}
                <a className="contact-link" href="saamsallvin@gmail.com">
                  saamsallvin@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a className="contact-link" href="">
                  +91 91502 45248
                </a>
              </li>
              <li>
                Linkedin:{" "}
                <a
                  className="contact-link"
                  href="https://www.linkedin.com/in/saam-sheron/">
                  https://www.linkedin.com/in/saam-sheron/
                </a>
              </li>
            </ul>

            <div className="col-md-7 p-4 ">
              <form action="" className="mb-3 ">
                <div className="mb-3">
                  <div className="row ">
                    <div className="col-md-4">
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control mb-3 me-3 col-md-1"
                      />
                    </div>
                    <div className="col-md-4">
                      {" "}
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control mb-3 me-3 col-md-4"
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control mb-3 col-md-4"
                      />
                    </div>
                  </div>
                  <textarea
                    className="form-control"
                    name=""
                    id=""
                    placeholder="Message"
                    cols={50}
                    rows={5}></textarea>
                </div>

                <div className="">
                  <button type="submit" className="btn  ">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
