import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  // --- STATES ---
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [apiResponse, setApiResponse] = useState('');

  // --- VALIDATION ---
  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!message) newErrors.message = "Message is required";
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- SUBMIT HANDLER ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiResponse('');

    if (validateForm()) {
      setApiResponse("Submitting...");
      const API_URL = "https://vernanbackend.ezlab.in/api/contact-us/";
      const formData = { name, email, phone, message };

      try {
        const response = await axios.post(API_URL, formData);
        if (response.status === 200 || response.status === 201) {
          setApiResponse("Form Submitted");
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          setErrors({});

          setTimeout(() => {
            setApiResponse('');
          }, 3000);

        }
      } catch (error) {
        console.error("API Error:", error);
        setApiResponse("Error: Could not submit form.");
      }
    } else {
      setApiResponse("Please fix the errors in the form.");
    }
  };

  // --- JSX / HTML ---
  return (
    <section className="contact-container">
      
      {/* --- LEFT SIDE --- */}
      <div className="contact-info">
        <h2>Whether you have an idea, a question, or simply want to explore how V can work together, V're just a message away. Let’s catch up over coffee. Great stories always begin with a good conversation</h2>
      </div>
      
      {/* --- RIGHT SIDE --- */}
      <div className="contact-form-wrapper">
        <div className="form-header">
          <h2>Join the Story</h2>
          <p>Ready to bring your vision to life? Let's talk.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          
          <input 
            type="text" 
            placeholder="Your name*"
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
          {errors.name && <span className="error-text">{errors.name}</span>}

          <input 
            type="email" 
            placeholder="Your email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
          
          <input 
            type="tel" 
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)} 
          />

          <textarea 
            placeholder="Your message*"
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
          />
          {errors.message && <span className="error-text">{errors.message}</span>}

          <button type="submit">Submit</button>

          {apiResponse && <p className="api-response">{apiResponse}</p>}
        </form>

        {/* --- THIS IS THE SECTION YOU ARE MISSING --- */}
        {/* --- IT IS NOW ADDED --- */}
        <div className="contact-details">
          <p>vernita@varnanfilms.co.in</p>
          <p>+91 98736 84567</p>
        </div>
        {/* ------------------------------------------- */}

      </div>
    </section>
  );
}

export default ContactForm;