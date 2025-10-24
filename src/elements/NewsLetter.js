import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const NewsLetter = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'YOUR_TEMPLATE_ID', e.target, process.env.APP_MAILCHIMP_API_KEY)
      .then((result) => console.log(result.text))
      .catch((error) => console.log(error.text));
    e.target.reset();
    Swal.fire({
      title: 'Good job!',
      text: 'Form successfully submitted',
      icon: 'success',
    });
  };

  return (
    <div className="inner-content">
      <h2>Subscribe To Our Newsletter</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="email" name="dzEmail" placeholder="Your Email Address" required />
        <button type="submit">Subscribe Now</button>
      </form>
    </div>
  );
};

export default NewsLetter;
