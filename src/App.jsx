import { useState } from 'react';
import './App.css';
import { BsTelephone, BsGeoAlt, BsEnvelope, BsArrowRightCircle } from 'react-icons/bs';

// import metalLogo from './assets/metal-scrap-logo.svg'; 

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //  validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    
    //  send the data to a server or email service EmailJS
  
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setError('');
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Reset the submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const jobTypes = [
    'Metal recycling and scrap removal',
    'Demolition debris cleanup',
    'Industrial scrap collection',
    'Car and vehicle scrapping',
    'Copper, aluminum, and brass recycling',
    'Electronic waste disposal',
    'Construction site cleanup',
    'Junk and waste removal services'
  ];

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">

          {/* <img src={metalLogo} alt="J & J Scrapers CML Logo" className="logo" /> */}
          
          <h1>J & J Scrapers CML</h1>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <BsGeoAlt className="icon" />
            <span>111 Debbie LN, Hohenwald, TN 38462</span>
          </div>
          <div className="contact-item">
            <BsTelephone className="icon" />
            <span>(931) 300-6864</span>
          </div>
          <div className="contact-item">
            <BsEnvelope className="icon" />
            <span>contact@jjscrapers.com</span>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h2>Professional Metal Scrapping Services</h2>
            <p>We provide reliable and efficient metal scrapping solutions for residential and commercial clients throughout Hohenwald and surrounding areas.</p>
            <button className="cta-button" onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}>
              Request a Quote
            </button>
          </div>
        </section>

        <section className="services-section" id="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            {jobTypes.map((job, index) => (
              <div className="service-card" key={index}>
                <BsArrowRightCircle className="service-icon" />
                <p>{job}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact-form">
          <h2>Contact Us</h2>
          <p>Have a question or need a quote? Send us a message and we'll get back to you as soon as possible.</p>
          
          {submitted ? (
            <div className="success-message">
              <h3>Thank you for your message!</h3>
              <p>We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {error && <div className="error-message">{error}</div>}
              <div className="form-group">
                <label htmlFor="name">Name *</label>
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
                <label htmlFor="email">Email *</label>
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
                <label htmlFor="phone">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          )}
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>J & J Scrapers CML</h3>
            <p>Your trusted partner for metal recycling and scrapping services in Hohenwald, TN.</p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>111 Debbie LN</p>
            <p>Hohenwald, TN 38462</p>
            <p>(931) 300-6864</p>
            <p>contact@jjscrapers.com</p>
          </div>
          <div className="footer-section">
            <h3>Hours</h3>
            <p>Monday - Friday: 8am - 5pm</p>
            <p>Saturday: 9am - 2pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} J & J Scrapers CML. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;