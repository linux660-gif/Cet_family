import React from 'react';
import { FaPlay, FaHeadphones, FaDownload } from 'react-icons/fa';


const SermonsSection = () => {
  const sermons = [
    {
      id: 1,
      title: "What then is Prayer?",
      preacher: "Michael Githinji",
      date: "May 29, 2023",
      scripture: "Hebrews 11:1-6",
      image: "/public"
    },
    {
      id: 2,
      title: "True Worshippers",
      preacher: "Fidel Kisevu",
      date: "May 22, 2023",
      scripture: "1 Corinthians 13:1-13",
      image: "/sermon2.jpg"
    }
  ];

  return (
    <section className="sermons-section">
      <div className="section-header">
        <h2>Recent Sermons</h2>
        <p>Nourish your spirit with God's Word</p>
      </div>
      
      <div className="sermons-grid">
        {sermons.map(sermon => (
          <div key={sermon.id} className="sermon-card">
            <div className="sermon-image">
              <img src={sermon.image} alt={sermon.title} />
              <div className="sermon-overlay">
                <button className="play-button"><FaPlay /></button>
              </div>
            </div>
            <div className="sermon-details">
              <h3>{sermon.title}</h3>
              <p className="preacher">{sermon.preacher}</p>
              <p className="date">{sermon.date}</p>
              <p className="scripture">{sermon.scripture}</p>
              <div className="sermon-actions">
                <button><FaPlay /> Watch</button>
                <button><FaHeadphones /> Listen</button>
                <button><FaDownload /> Notes</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="sermon-archive-link">
        <a href="/sermons">Browse Sermon Archive →</a>
      </div>
    </section>
  );
};

export default SermonsSection;