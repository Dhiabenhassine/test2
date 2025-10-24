import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Select from 'react-select';

import { IMAGES } from '../constants/theme';
import Header from '../layouts/Header';
import { Link } from 'react-router-dom';

const options = [
  { value: '0', label: 'Select Service' },
  { value: '1', label: 'Strength Center' },
  { value: '2', label: 'Fitness' },
  { value: '3', label: 'Muscle Bar' },
];

const Appointment = () => {
  const form = useRef();
  const [selectedService, setSelectedService] = useState(options[0]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_hhqyjzp',  // <-- Your EmailJS Service ID
      'template_2wagxkr', // <-- Your EmailJS Template ID
      e.target,
      'zHQsZKKxjjMZ0l8u5' // <-- Your EmailJS Public Key
    ).then(
      (result) => {
        console.log(result.text);
        alert('Appointment request sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send message: ' + error.text);
      }
    );

    e.target.reset();
    setSelectedService(options[0]); // reset select
  };

  return (
    <div className="page-wraper">
      <Header />
      <div className="page-content bg-white">
        <section
          className="appointment-page"
          data-text="HEALTH"
          style={{ backgroundImage: `url(${IMAGES.BgAppoint})` }}
          
        >
          <div className="container">
            <div className="section-head">
              <span className="sub-title">Get in Touch</span>
              <h2 className="title">
                Schedule An <span>Appointment</span>
              </h2>
            </div>
            <form className="appointment-form dzForm" ref={form} onSubmit={sendEmail}>
              <p className="appointment-text">
                Hey, My Name is{" "}
                <input
                  name="name"  // <-- must match EmailJS template variable {{name}}
                  required
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />{" "}
                And I'm looking for{" "}
                <Select
                  options={options}
                  value={selectedService}
                  onChange={(option) => setSelectedService(option)}
                  isSearchable={false}
                  className="custom-react-select ms-2"
                />
                <input type="hidden" name="service" value={selectedService.label} />{" "}
                Get in consult with us at{" "}
                <input
                  name="email"  // <-- must match EmailJS template variable {{email}}
                  required
                  type="email"
                  className="form-control"
                  placeholder="Your Email ID Here"
                />
                !
              </p>


              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  required
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I hereby accept all terms and conditions.
                </label>
              </div>

              <button
                name="submit"
                type="submit"
                value="Submit"
                className="btn btn-primary btn-lg btn-skew mt-3"
              >
                <span>Appointment</span>
              </button>
            </form>
          </div>
        </section>
      </div>

      <footer className="site-footer style-1 bg-img-fix footer-action" id="footer">
        <div className="footer-bottom">
          <div className="text-center">
            <span className="copyright-text">
              Copyright © 2023{" "}
              <Link to="https://dexignzone.com/" target="_blank" rel="noreferrer">
                DexignZone
              </Link>
              . All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Appointment;
