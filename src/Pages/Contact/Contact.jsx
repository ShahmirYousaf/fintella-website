import React, { useState } from "react";
import './Contact.css'; // Import your CSS file for styling
import Navbar from "../../Components/Navbar/Navbar";
import emailjs from '@emailjs/browser';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faGavel, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../Components/Navbar/Footer/Footer";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS with dynamic data
    emailjs
      .send(
        "service_rdfmj29",  // Replace with your EmailJS service ID
        "template_vxs2lqg",  // Replace with your EmailJS template ID
        {
          from_name: formData.name,     // Pass the name from form
          from_email: formData.email,   // Pass the email from form
          to_name: "Fintella Technologies",    // Replace with the recipient's name or static value
          message: formData.message +"\n Phone Number: "+formData.num +"\n Email: "+formData.email,    // Pass the message from form
              // Pass the phone number from form
          reply_to: formData.email, 
             // Set the reply-to email as the sender's email
        },
        "kPkphabOhD2Df5ayK"  // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text); // Success message
          setStatusMessage("Your message has been sent successfully!");
          console.log(formData.num,"number") 
          // Alert the user
          alert("Your message has been sent successfully!");

          // Reset the form data
          setFormData({
            name: "",
            email: "",
            message: "",
            company: "",
            num: ""
          });
        },
        (error) => {
          console.log(error.text); // Error message
          setStatusMessage("Oops! Something went wrong, please try again.");
        }
      );
  };  
    
    
  
  
  return (
    <>
    <Navbar/>
    <div className="contact-page">
      
        <h1 className="header-container">Keep In Touch with Us</h1>

      <div className="contact-container">
      
        <div className="contact-form">
          <h3>Send A Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
            <label htmlFor="email">Company</label>
              <input
                type="company"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
            <label htmlFor="num">Phone Number</label>
              <input
                type="number"
                id="num"
                name="num"
                value={formData.num}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button className="custom-button" type="submit" >Send Message</button>
          </form>
        </div>
        <div className="contact-info">
      <h3>Contact Details</h3>

      <p>
       
          <div className="contact-icon-wrapper">
            <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon phone-icon" />
            <strong>Phone: </strong> 
            <div className="text-wrapper">03295480567</div>
          </div>
    
        
      </p>

      <p>
      <div className="contact-icon-wrapper">
        
          
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon email-icon" /><strong>Email: </strong>
            <div className="text-wrapper">Ceofintella@gmail.com</div>
          </div>
        
        
      </p>

      <p>
      <div className="contact-icon-wrapper">
        
          
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon address-icon" />
            <strong> Address: </strong>
        <div className="text-wrapper">Flat 4 4th floor Al Mubarak arcade Gulberg greens Islamabad</div>
        </div>
      </p>

     
      
    </div>


      </div>
    </div>
    

    <div>
    <Footer/>
    </div>
    </>
    
    
    
  );
}

export default ContactPage;