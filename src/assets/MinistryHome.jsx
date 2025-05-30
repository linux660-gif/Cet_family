import React from 'react';
import { FaChild, FaUsers, FaMusic, FaHandsHelping } from 'react-icons/fa';


const MinistriesSection = () => {
  const ministries = [
    {
      id: 1,
      name: "Children's Ministry",
      icon: <FaChild />,
      description: "Engaging Bible lessons and activities for kids ages 3-12",
      meeting: "Sundays at 10:00 AM"
    },
    {
      id: 2,
      name: "Youth Group",
      icon: <FaUsers />,
      description: "Dynamic fellowship for teenagers to grow in faith",
      meeting: "Fridays at 6:00 PM"
    },
    {
      id: 3,
      name: "Worship Team",
      icon: <FaMusic />,
      description: "Leading the congregation in praise and worship",
      meeting: "Thursdays at 7:00 PM"
    },
    {
      id: 4,
      name: "Outreach Ministry",
      icon: <FaHandsHelping />,
      description: "Serving our community with Christ's love",
      meeting: "1st Saturday monthly"
    }
  ];

  return (
    <section className="ministries-section">
      <div className="section-header">
        <h2>Our Ministries</h2>
        <p>Find your place to serve and grow</p>
      </div>
      
      <div className="ministries-grid">
        {ministries.map(ministry => (
          <div key={ministry.id} className="ministry-card">
            <div className="ministry-icon">
              {ministry.icon}
            </div>
            <h3>{ministry.name}</h3>
            <p className="meeting-time">{ministry.meeting}</p>
            <p className="description">{ministry.description}</p>
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MinistriesSection;