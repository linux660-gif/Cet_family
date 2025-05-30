import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "This church has been a spiritual home for my family. The teachings have transformed our lives.",
      author: "Sarah M.",
      role: "Member for 5 years"
    },
    {
      id: 2,
      quote: "I found hope and community when I needed it most. The love here is genuine and life-changing.",
      author: "David W.",
      role: "New Believer"
    },
    {
      id: 3,
      quote: "Our children are growing in faith through the amazing children's ministry programs.",
      author: "The Johnson Family",
      role: "Young Family"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="testimonials-section">
      <div className="section-header">
        <h2>Stories of Faith</h2>
        <p>What God is doing in our community</p>
      </div>
      
      <div className="testimonial-container">
        <button className="nav-button prev" onClick={prevTestimonial}>
          <FaChevronLeft />
        </button>
        
        <div className="testimonial-card">
          <FaQuoteLeft className="quote-icon" />
          <p className="testimonial-text">{testimonials[currentIndex].quote}</p>
          <div className="testimonial-author">
            <h4>{testimonials[currentIndex].author}</h4>
            <p>{testimonials[currentIndex].role}</p>
          </div>
        </div>
        
        <button className="nav-button next" onClick={nextTestimonial}>
          <FaChevronRight />
        </button>
      </div>
      
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;