import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="main-heading">TECHNOLOGY INTEGRATION PARTNER</h1>
            <h3>"Where transactions transform opportunities"</h3>
            <p>
            Break barriers, unlock opportunities, and turn every transaction
            into a milestone for success with our seamless single api solution.
            </p>
            <a href="#services" className="btn">
              Get Started
            </a>
          </div>
          <div className="hero-image">
            <img src={`${process.env.PUBLIC_URL}/assets/main.jpg`} alt="Hero" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <div className="about-us-content">
          <div className="about-us-image">
            <img src={`${process.env.PUBLIC_URL}/assets/aboutus.jpg`} alt="About Us" />
          </div>
          <div className="about-us-text">
            <h2>Fintella Technologies <br />About Us</h2>
            <p>
            Fintella Technologies leads the way in financial solutions, revolutionizing how businesses manage pay-ins and pay-outs. We provide advanced Software Development, IT Solutions, and Digital Transformation services, such as Data Processing, API Integrations, and Custom Software.
              Our goal is to simplify and improve payment processes, enabling organizations to prioritize their key objectives. With proficiency in Technology Services, Consultancy, and Training, we transform every transaction into a chance for growth and success.
              Collaborate with Fintella Technologies to streamline your pay-ins and pay-outs and discover new opportunities for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Services</h2>
        <h4>We Are Trusted By The Best</h4>
        <p>
          Join industry leaders who rely on us for unmatched service and
          dependability.
        </p>

        <div className="service-box">
          <div className="service-content">
            <img src={`${process.env.PUBLIC_URL}/assets/service.jpg`} alt="Service" className="service-image" />
            <div className="service-text">
              <h3>Deposits</h3>
              <p>
                Technology crafted to simplify end-to-end payment processes.
              </p>
              <ul>
                <li>Best-in-class success rate</li>
                <li>Tailored checkout experience for your customers</li>
                <li>Round-the-clock integration and customer support</li>
                <li>Plugins, Widgets, APIs, and SDKs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-grid">
          <div className="service-card">
            <i className="bi bi-link-45deg service-icon"></i>
            <h3>Pay Now Link</h3>
            <p>Share your payment link with customers through email, SMS, messenger, chatbot, and more, and receive payments instantly.</p>
          </div>
          <div className="service-card">
            <i className="bi bi-arrow-repeat service-icon"></i>
            <h3>Recurring Payments</h3>
            <p>Automated recurring payments across multiple payment methods.</p>
          </div>
          <div className="service-card">
            <i className="bi bi-shield-lock service-icon"></i>
            <h3>Secure Payment Token</h3>
            <p>Share your payment link with customers through email, SMS, messenger, chatbot, and more, and receive payments instantly.</p>
          </div>
          <div className="service-card">
            <i className="bi bi-cart service-icon"></i>
            <h3>Personalized Checkout</h3>
            <p>Branded checkouts designed to provide your customers with an exceptional user experience.</p>
          </div>
          <div className="service-card">
            <i className="bi bi-gear service-icon"></i>
            <h3>Unified API Integration</h3>
            <p>Automated recurring payments across multiple payment methods.</p>
          </div>
          <div className="service-card">
            <i className="bi bi-receipt service-icon"></i>
            <h3>Automated Billing</h3>
            <p>Simplify recurring payments with automated invoicing and on-time collections.</p>
          </div>
        </div>
      </section>

      {/* Working With Leading Brands Section */}
      <section className="brands">
        <h2>Working With Leading Brands</h2>
        <div className="brands-grid">
          <img src={`${process.env.PUBLIC_URL}/assets/easypaisa.png`} alt="Easypaisa" />
          <img src={`${process.env.PUBLIC_URL}/assets/jazzcash.png`} alt="JazzCash" />
         
        </div>
      </section>

    </div>
  );
};

export default Home;