import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';


const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "JUN 12",
      time: "9:00 AM - 11:00 AM",
      location: "Main Sanctuary",
      description: "Join us for praise, worship, and the Word"
    },
    {
      id: 2,
      title: "Bible Study Wednesday",
      date: "JUN 15",
      time: "7:00 PM - 8:30 PM",
      location: "Fellowship Hall",
      description: "Midweek Bible study and prayer meeting"
    },
    {
      id: 3,
      title: "Youth Fellowship",
      date: "JUN 18",
      time: "4:00 PM - 6:00 PM",
      location: "Youth Center",
      description: "Games, worship, and Bible discussion for teens"
    }
  ];

  return (
    <section className="events-section">
      <div className="section-header">
        <h2>Upcoming Events</h2>
        <p>Join us for fellowship and worship</p>
      </div>
      
      <div className="events-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-date">
              <span>{event.date}</span>
            </div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <div className="event-meta">
                <span><FaClock /> {event.time}</span>
                <span><FaMapMarkerAlt /> {event.location}</span>
              </div>
              <p>{event.description}</p>
              <button className="event-button">More Details</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="view-all">
        <button className="view-all-button">
          <FaCalendarAlt /> View Full Calendar
        </button>
      </div>
    </section>
  );
};

export default EventsSection;