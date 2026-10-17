import { useState } from 'react';
import { Camera, MessageCircle, ArrowRight, Menu, X } from 'lucide-react';

const WHATSAPP = '919975228000';
const INSTAGRAM = 'https://www.instagram.com/sandeep_aakanksha_st?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw';

const services = [
  ['Portrait Photography', 'Portraits that capture your personality.', 'photo-1534528741775-53994a69daeb'],
  ['Family Photography', 'Beautiful moments to cherish forever.', 'photo-1511895426328-dc8714191300'],
  ['Baby Photography', 'Tiny moments, treasured for a lifetime.', 'photo-1519689680058-324335c77eba'],
  ['Passport Photos', 'Professional photos for important documents.', 'photo-1506794778202-cad84cf45f1d']
];

const photoUrl = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

export default function App() {
  const [menu, setMenu] = useState(false);
  const [name, setName] = useState('');
  const [service, setService] = useState(services[0][0]);

  function book(e) {
    e.preventDefault();
    const message = `Hello Aakanksha Studios! My name is ${name}. I am interested in ${service}. Please share your packages.`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank');
  }

  return (
    <main>
      <header className="navbar">
        <a href="#home" className="brand">
          <span>Aakanksha</span><small>S T U D I O S</small>
        </a>
        <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          {menu ? <X /> : <Menu />}
        </button>
        <nav className={menu ? 'nav-links open' : 'nav-links'}>
          <a href="#home" onClick={() => setMenu(false)}>Home</a>
          <a href="#about" onClick={() => setMenu(false)}>Our Story</a>
          <a href="#services" onClick={() => setMenu(false)}>Services</a>
          <a href="#portfolio" onClick={() => setMenu(false)}>Portfolio</a>
          <a href="#book" className="nav-button" onClick={() => setMenu(false)}>Book a Shoot</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">CAPTURING YOUR STORY</p>
          <h1>Aakanksha<br /><em>Studios</em></h1>
          <p className="hero-text">Photography that turns moments into timeless memories.</p>
          <a className="gold-button" href="#book">Book a Photoshoot <ArrowRight size={17} /></a>
          <a className="outline-button" href="#portfolio">View Portfolio</a>
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="intro-image">
          <img src={photoUrl('photo-1516035069371-29a1b244cc32')} alt="Professional photography camera" />
        </div>
        <div>
          <p className="eyebrow">ABOUT AAKANKSHA STUDIOS</p>
          <h2>More than just <em>photography.</em></h2>
          <p>Every moment has a story. From personal portraits to family celebrations and little beginnings, we capture the memories you want to keep close.</p>
          <p>Our goal is to make you comfortable, capture genuine emotions and create photographs you will treasure for years.</p>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-title">
          <p className="eyebrow">OUR SERVICES</p>
          <h2>What we <em>do</em></h2>
          <p>Thoughtful photography for every chapter of your life.</p>
        </div>
        <div className="service-grid">
          {services.map(([title, description, image]) => (
            <article className="service-card" key={title}>
              <img src={photoUrl(image)} alt={title} loading="lazy" />
              <div className="service-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#book">Enquire <ArrowRight size={15} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio section" id="portfolio">
        <div className="section-title">
          <p className="eyebrow">A FEW FAVOURITE FRAMES</p>
          <h2>Little glimpses. <em>Big feelings.</em></h2>
        </div>
        <div className="gallery">
          {services.map(([title, , image]) => (
            <a href="#book" className="gallery-item" key={title}>
              <img src={photoUrl(image)} alt={title} loading="lazy" />
              <span>{title}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="booking section" id="book">
        <div className="booking-copy">
          <p className="eyebrow">YOUR STORY STARTS HERE</p>
          <h2>Let's create something <em>timeless.</em></h2>
          <p>Tell us what you would love to capture. We will connect with you on WhatsApp to discuss the details.</p>
          <a className="social-link" href={INSTAGRAM} target="_blank" rel="noreferrer"><span className="instagram-symbol">◎</span> Follow us on Instagram</a>
        </div>
        <form className="booking-form" onSubmit={book}>
          <h3>Book a session</h3>
          <label>Your name
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
          </label>
          <label>Choose a service
            <select value={service} onChange={(e) => setService(e.target.value)}>
              {services.map(([title]) => <option key={title}>{title}</option>)}
            </select>
          </label>
          <button className="gold-button submit-button" type="submit">Enquire on WhatsApp <ArrowRight size={17} /></button>
        </form>
      </section>

      <footer>
        <a href="#home" className="brand"><span>Aakanksha</span><small>S T U D I O S</small></a>
        <p>Every frame, a feeling.</p>
        <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp us</a>
        <p className="copyright">© {new Date().getFullYear()} Aakanksha Studios. All rights reserved.</p>
      </footer>
    </main>
  );
}
