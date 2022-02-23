import React from "react";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="text-center">
        <h1>Contact Us</h1>
        <p>Please fill out the form with your questions</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {/* NAME INPUT */}
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
            <div className="line"></div>
            {/* PHONE INPUT */}
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              phone="phone"
            />
            <div className="line"></div>

            {/* EMAIL INPUT */}
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              email="Email"
            />
           

        
            <div className="line"></div>
          </div>
          <div className="col-md-6 col-xs-12">
            {/* Subject */}
            <textarea
              type="text"
              className="form-control"
              placeholder="Subject"
              email="Subject"
            ></textarea>
            <div className="line"></div>
            <br></br>
            <button className="btn-main-offer contact-btn" type="submit">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
