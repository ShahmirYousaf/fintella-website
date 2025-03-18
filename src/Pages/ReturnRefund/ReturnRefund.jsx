import React, { useState } from 'react';
import './ReturnPolicy.css'; // Import the CSS file for styling

const ReturnPolicy = () => {
  const [activeTab, setActiveTab] = useState('conditions');

  return (
    <div className="return-policy-container">

        <h2 className='ret-ref-head' >Returns & Refunds</h2>
      <hr className="heading-line" />

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'conditions' ? 'active' : ''}`}
          onClick={() => setActiveTab('conditions')}
        >
          Conditions for Returns
        </button>
        <button
          className={`tab ${activeTab === 'refund' ? 'active' : ''}`}
          onClick={() => setActiveTab('refund')}
        >
          Refund Policy
        </button>
      </div>

      <div className="content">
        {activeTab === 'conditions' && (
          <div className="conditions-content">
            <div className="underline"><h3>Conditions for Returns</h3></div>
            <p className='ret-ref-p'>
              At Fintella Technologies, we strive to ensure customer satisfaction. If you wish to request a return or refund, please adhere to the following conditions:
            </p>
            <ol className='ul-0l-ret-ref'>
              <li >
                <strong  className="underline">Digital Products (Courses & E-books):</strong>
                <ul className="circled-bullets ">
                  <li className='ret-ref-li' >Refunds are only applicable if the product has not been accessed, downloaded, or viewed beyond 10% of its content.</li>
                  <li className='ret-ref-li'>Courses with downloadable resources are non-refundable once the resources have been accessed.</li>
                  <li className='ret-ref-li'>If you encounter technical issues that prevent access, our support team must be contacted within 7 days of purchase for resolution or a possible refund.</li>
                </ul>
              </li>
              <li className='ret-ref-li'>
                <strong className="underline">Physical Products (Tech Gadgets, Accessories, etc.):</strong>
                <ul className="circled-bullets">
                  <li className='ret-ref-li'>The product must be unused, undamaged, and returned in its original packaging.</li>
                  <li className='ret-ref-li'>All accompanying items such as user manuals, warranty cards, invoices, and accessories must be included.</li>
                </ul>
              </li>
              <li className='ret-ref-li'>
                <strong className="underline">Packaging Guidelines:</strong>
                <ul className="circled-bullets">
                  <li className='ret-ref-li'>For physical products, return the item in its original and undamaged manufacturer’s packaging/box.</li>
                  <li className='ret-ref-li'>Avoid placing tape or stickers directly on the manufacturer’s packaging.</li>
                </ul>
              </li>
              <li className='ret-ref-li'>
                <strong className="underline">Important Instructions:</strong>
                <ul>
                  <li className='ret-ref-li'>Clearly mention your Order Number and Return Tracking Number on the return package to avoid delays or inconvenience.</li>
                </ul>
              </li>
            </ol>
            <div className="note">
              <strong>Note:</strong> If you have any questions or concerns, please contact our Customer Support Team for assistance.
            </div>
          </div>
        )}

        {activeTab === 'refund' && (
          <div className="refund-content">
            <h3 className='h3-h4-head'> Refund Policy</h3>
            <p className='ret-ref-p'>
              At Fintella Technologies, we are committed to providing quality digital products and tech-related items. If you are not satisfied with your purchase, our refund policy is designed to ensure a smooth process.
            </p>
            <hr />
            <h4 className='h3-h4-head'>Eligibility for Refunds</h4>
            <p className='ret-ref-p'>
              If your product meets the return conditions, you may choose your preferred refund method as outlined below. Refund processing times may vary based on the method selected.
            </p>
            <div className="note">
              <strong>Note:</strong> Refund processing begins once our quality check is completed.
            </div>
            <h4 className='h3-h4-head'>Modes of Refund:</h4>
            <p className='ret-ref-p'>
              Refunds will be processed through your chosen method, such as Fintella Wallet, Debit/Credit Card, Bank Transfer, Easypaisa, or JazzCash. Refunds from Cash on Delivery (COD) transactions will be credited to your Fintella Wallet. Vouchers will be emailed to your registered address and can only be redeemed once. For bank transfers, ensure your provided IBAN details are accurate and active. If your refund does not appear within the expected timeframe, please contact your respective payment service provider for assistance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReturnPolicy;