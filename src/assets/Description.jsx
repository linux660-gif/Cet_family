import React, { useEffect } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Kariuki",
      position: "Senior Pastor",
      description: "Spirit-led visionary guiding the church with wisdom and compassion.",
      image: "https://randomuser.me/api/portraits/men/43.jpg"
    },
    {
      id: 2,
      name: "Linus Ngugi",
      position: "Associate Pastor",
      description: "Dedicated to teaching the Word and mentoring the next generation.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Annet Wangui",
      position: "Church Secretary",
      description: "Organized and passionate about church communication and documentation.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 4,
      name: "Liz Victory",
      position: "Worship Leader",
      description: "Brings the congregation closer to God through music and worship.",
      image: "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
      id: 5,
      name: "Micheal Githinji",
      position: "Prayer Coordinator",
      description: "Leads intercessory teams and cultivates a prayer-driven environment.",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      id: 6,
      name: "Veronicah Mwangi",
      position: "Treasurer",
      description: "Manages church finances with integrity and transparency.",
      image: "https://randomuser.me/api/portraits/women/88.jpg"
    }
  ];

  useEffect(() => {
    const cards = document.querySelectorAll('.team-card');
    cards.forEach(card => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    });
  }, []);

  return (
    <section className="team-section">
      <div className="ourTeamHeader">
        <h2>Meet Our Church Leadership</h2>
        <p>Faithful stewards guiding our spiritual and community mission</p>
      </div>
      
      <div className="team-row">
        {teamMembers.map((member, index) => (
          <div 
            key={member.id}
            className="team-card"
            style={{
              animationDelay: `${index * 0.1}s`,
              opacity: 0,
              transform: 'translateY(20px)'
            }}
          >
            <div className="card-image">
              <img src={member.image} alt={member.name} />
              <div className="card-social">
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaEnvelope /></a>
              </div>
            </div>
            <div className="card-content">
              <h3>{member.name}</h3>
              <p className="position">{member.position}</p>
              <p className="description">{member.description}</p>
              <a href="#" className="card-button">Contact</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
