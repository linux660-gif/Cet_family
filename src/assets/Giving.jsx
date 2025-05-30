import React, { useState } from 'react';
import { FaDonate, FaChurch, FaHandHoldingHeart } from 'react-icons/fa';


const GivingSection = () => {
  const [activeTab, setActiveTab] = useState('tithe');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log({ type: activeTab, amount });
  };

  return (
    <section className="giving-section">
      <div className="section-header">
        <h2>Give With Cheerful Heart</h2>
        <p>"Each of you should give what you have decided in your heart to give..." <br />2 Corinthians 9:7</p>
      </div>
      
      <div className="giving-container">
        <div className="giving-tabs">
          <button 
            className={`tab-button ${activeTab === 'tithe' ? 'active' : ''}`}
            onClick={() => setActiveTab('tithe')}
          >
            <FaChurch /> Tithe
          </button>
          <button 
            className={`tab-button ${activeTab === 'offering' ? 'active' : ''}`}
            onClick={() => setActiveTab('offering')}
          >
            <FaDonate /> Offering
          </button>
          <button 
            className={`tab-button ${activeTab === 'missions' ? 'active' : ''}`}
            onClick={() => setActiveTab('missions')}
          >
            <FaHandHoldingHeart /> Missions
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="giving-form">
          <div className="form-group">
            <label>Amount (KES)</label>
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
            />
          </div>
          
          <div className="payment-options">
            <h4>Payment Method</h4>
            <div className="options-grid">
              <label className="payment-option">
                <input type="radio" name="payment" defaultChecked />
                <span>M-Pesa</span>
              </label>
              <label className="payment-option">
                <input type="radio" name="payment" />
                <span>Credit Card</span>
              </label>
              <label className="payment-option">
                <input type="radio" name="payment" />
                <span>Bank Transfer</span>
              </label>
            </div>
          </div>
          
          <button type="submit" className="give-button">
            Give Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default GivingSection;