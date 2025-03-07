import React from 'react';
import './Privacypolicy.css'; // Import the associated CSS file for styling
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Navbar/Footer/Footer';

function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="privacy-policy-container">
        <header className="privacy-policy-header">
          <h1>Privacy Policy</h1>
        </header>

        <section className="privacy-policy-content">
          <h2>Introduction</h2>
          <p>
            At Rapid IT Solutions, your privacy is our top priority. This Privacy Policy outlines how we collect, use, protect, and manage your personal information. By using our website and services, you agree to the practices described in this policy.
          </p>

          <h2>Information We Collect</h2>
          <h3>1. Personal Information</h3>
          <p>We may collect the following personal information:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
          </ul>

          <h3>2. Non-Personal Information</h3>
          <p>We may also gather non-personal information such as:</p>
          <ul>
            <li>Browser type</li>
            <li>IP address</li>
            <li>Device information</li>
            <li>Browsing behavior on our website</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>The information we collect is used for the following purposes:</p>
          <ol>
            <li>To provide and enhance our services.</li>
            <li>To respond to inquiries and support requests.</li>
            <li>To process payments and deliver solutions.</li>
            <li>To improve our website’s functionality and user experience.</li>
            <li>To send promotional offers, updates, or newsletters (you may opt-out at any time).</li>
          </ol>

          <h2>How We Protect Your Information</h2>
          <p>We implement industry-standard measures to ensure your data is secure, including encryption, firewalls, and secure storage practices.</p>

          <h2>Third-Party Links</h2>
          <p>Our website may contain links to external sites. We are not responsible for the privacy practices of these third-party websites. We recommend reviewing their privacy policies before providing any personal information.</p>

          <h2>Updates to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with a revised effective date. We encourage you to review this policy periodically.</p>

          <h2>Contact Us</h2>
          <div className="contact-info">
            <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at:</p>
            <p><strong>Fintella Technologies</strong></p>
            <p>Flat 4 4th floor Al Mubarak arcade Gulberg greens Islamabad</p>
            <p><strong>Phone:</strong> 03295480567</p>
            <p><strong>Email:</strong> Ceofintella@gmail.com</p>
          </div>
        </section>
      </div>
      
    </>
  );
}

export default PrivacyPolicy;
