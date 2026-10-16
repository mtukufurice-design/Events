import './LandingPage.css'

function LandingPage({ onNavigate }) {
  return (
    <div className="landing-page">

      {/* ================= NAVBAR ================= */}
      <header className="landing-navbar">
        <div className="landing-container navbar-content">

          <div className="landing-logo">
            <span className="logo-icon">E</span>
            <span>Event Management System</span>
          </div>

          <nav className="landing-nav">
            <a href="#home">Home</a>
            <a href="#events">Events</a>
            <a href="#categories">Categories</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="navbar-actions">
            <button className="login-button" onClick={() => onNavigate('login')}>
              Login
            </button>

            <button className="create-event-button" onClick={() => onNavigate('signup')}>
              Create Event
            </button>
          </div>

        </div>
      </header>


      {/* ================= HERO SECTION ================= */}
      <main>

        <section className="landing-hero" id="home">

          <div className="landing-container hero-content">

            <div className="hero-text">

              <div className="hero-badge">
                <span>●</span>
                Discover amazing events
              </div>

              <h1>
                Experience Events
                <span> Like Never Before.</span>
              </h1>

              <p>
                Discover, create and manage unforgettable events
                all in one place. From conferences and concerts
                to workshops and social gatherings.
              </p>

              <div className="hero-buttons">

                <button className="hero-primary-button">
                  Explore Events
                  <span>→</span>
                </button>

                <button className="hero-secondary-button">
                  Create an Event
                </button>

              </div>

              <div className="hero-trust">

                <div className="avatar-group">
                  <div className="avatar">A</div>
                  <div className="avatar">J</div>
                  <div className="avatar">M</div>
                  <div className="avatar">+</div>
                </div>

                <div>
                  <strong>10,000+</strong>
                  <p>Event attendees</p>
                </div>

              </div>

            </div>


            {/* Hero Visual */}
            <div className="hero-visual">

              <div className="hero-main-card">

                <div className="hero-card-image">
                  <div className="hero-card-overlay">
                    <span className="featured-label">
                      FEATURED EVENT
                    </span>
                  </div>
                </div>

                <div className="hero-card-content">

                  <div className="event-date">
                    <strong>25</strong>
                    <span>OCT</span>
                  </div>

                  <div className="hero-event-details">
                    <p>Technology</p>
                    <h3>
                      Africa Tech Innovation Summit
                    </h3>

                    <span>
                      📍 Nairobi, Kenya
                    </span>
                  </div>

                </div>

                <div className="hero-card-footer">

                  <div>
                    <span className="small-label">
                      STARTING FROM
                    </span>

                    <strong>KSh 1,500</strong>
                  </div>

                  <button>
                    View Event
                  </button>

                </div>

              </div>


              {/* Floating notification */}
              <div className="floating-notification">

                <div className="notification-icon">
                  ✓
                </div>

                <div>
                  <strong>Registration Confirmed</strong>
                  <p>Your event ticket is ready</p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CATEGORIES ================= */}
        <section
          className="categories-section"
          id="categories"
        >

          <div className="landing-container">

            <div className="section-heading">

              <div>
                <span className="section-label">
                  EXPLORE
                </span>

                <h2>
                  Find Events You'll Love
                </h2>
              </div>

              <p>
                Explore events across different categories
                and find something that matches your interests.
              </p>

            </div>


            <div className="category-grid">

              <div className="category-card">
                <div className="category-icon">
                  🎵
                </div>

                <h3>Music & Concerts</h3>

                <p>
                  Live performances and music festivals
                </p>

                <span>120+ Events →</span>
              </div>


              <div className="category-card">
                <div className="category-icon">
                  💼
                </div>

                <h3>Business</h3>

                <p>
                  Conferences, networking and workshops
                </p>

                <span>85+ Events →</span>
              </div>


              <div className="category-card">
                <div className="category-icon">
                  💻
                </div>

                <h3>Technology</h3>

                <p>
                  Tech conferences and innovation events
                </p>

                <span>65+ Events →</span>
              </div>


              <div className="category-card">
                <div className="category-icon">
                  🎨
                </div>

                <h3>Arts & Culture</h3>

                <p>
                  Art exhibitions and cultural experiences
                </p>

                <span>45+ Events →</span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= FEATURED EVENTS ================= */}
        <section
          className="featured-events-section"
          id="events"
        >

          <div className="landing-container">

            <div className="section-heading">

              <div>
                <span className="section-label">
                  DON'T MISS OUT
                </span>

                <h2>
                  Upcoming Events
                </h2>
              </div>

              <button className="view-all-button">
                View All Events →
              </button>

            </div>


            <div className="events-grid">

              {/* Event 1 */}
              <article className="event-card">

                <div className="event-card-image event-image-one">

                  <span className="event-category">
                    Technology
                  </span>

                  <button className="favorite-button">
                    ♡
                  </button>

                </div>

                <div className="event-card-content">

                  <div className="event-card-date">
                    <strong>25</strong>
                    <span>OCT</span>
                  </div>

                  <div className="event-card-details">

                    <h3>
                      Africa Tech Innovation Summit
                    </h3>

                    <p>
                      📍 Nairobi, Kenya
                    </p>

                    <div className="event-card-bottom">

                      <strong>
                        KSh 1,500
                      </strong>

                      <span>
                        450 going
                      </span>

                    </div>

                  </div>

                </div>

              </article>


              {/* Event 2 */}
              <article className="event-card">

                <div className="event-card-image event-image-two">

                  <span className="event-category">
                    Business
                  </span>

                  <button className="favorite-button">
                    ♡
                  </button>

                </div>

                <div className="event-card-content">

                  <div className="event-card-date">
                    <strong>12</strong>
                    <span>NOV</span>
                  </div>

                  <div className="event-card-details">

                    <h3>
                      Business Networking Forum
                    </h3>

                    <p>
                      📍 Eldoret, Kenya
                    </p>

                    <div className="event-card-bottom">

                      <strong>
                        KSh 800
                      </strong>

                      <span>
                        180 going
                      </span>

                    </div>

                  </div>

                </div>

              </article>


              {/* Event 3 */}
              <article className="event-card">

                <div className="event-card-image event-image-three">

                  <span className="event-category">
                    Music
                  </span>

                  <button className="favorite-button">
                    ♡
                  </button>

                </div>

                <div className="event-card-content">

                  <div className="event-card-date">
                    <strong>05</strong>
                    <span>DEC</span>
                  </div>

                  <div className="event-card-details">

                    <h3>
                      Nairobi Music Festival
                    </h3>

                    <p>
                      📍 Nairobi, Kenya
                    </p>

                    <div className="event-card-bottom">

                      <strong>
                        KSh 2,500
                      </strong>

                      <span>
                        1.2K going
                      </span>

                    </div>

                  </div>

                </div>

              </article>

            </div>

          </div>

        </section>


        {/* ================= STATISTICS ================= */}
        <section className="statistics-section">

          <div className="landing-container statistics-grid">

            <div className="stat-item">
              <strong>10K+</strong>
              <span>Active Attendees</span>
            </div>

            <div className="stat-item">
              <strong>500+</strong>
              <span>Events Created</span>
            </div>

            <div className="stat-item">
              <strong>150+</strong>
              <span>Event Organizers</span>
            </div>

            <div className="stat-item">
              <strong>25+</strong>
              <span>Event Categories</span>
            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}
        <section
          className="about-section"
          id="about"
        >

          <div className="landing-container about-content">

            <div className="about-visual">

              <div className="about-card">

                <span>EVENT MANAGEMENT</span>

                <h3>
                  Everything you need
                  to create amazing events.
                </h3>

                <div className="about-check">
                  ✓ Easy event creation
                </div>

                <div className="about-check">
                  ✓ Online registration
                </div>

                <div className="about-check">
                  ✓ Attendee management
                </div>

                <div className="about-check">
                  ✓ Event analytics
                </div>

              </div>

            </div>


            <div className="about-text">

              <span className="section-label">
                WHY EVENT MANAGEMENT SYSTEM?
              </span>

              <h2>
                One Platform.
                <span> Endless Possibilities.</span>
              </h2>

              <p>
                Event Management System makes event management simple.
                Organizers can create and manage events,
                while attendees can discover and register
                for events they love.
              </p>

              <p>
                From planning to registration and
                attendance tracking, everything is managed
                from one convenient platform.
              </p>

              <button className="about-button">
                Learn More →
              </button>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="cta-section">

          <div className="landing-container cta-content">

            <span className="section-label">
              FOR EVENT ORGANIZERS
            </span>

            <h2>
              Ready to Bring Your Event
              <span> to Life?</span>
            </h2>

            <p>
              Create your event today and start connecting
              with your audience.
            </p>

            <button className="cta-button">
              Create Your Event →
            </button>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer
        className="landing-footer"
        id="contact"
      >

        <div className="landing-container footer-content">

          <div className="footer-brand">

            <div className="landing-logo">
              <span className="logo-icon">E</span>
              <span>Event Management System</span>
            </div>

            <p>
              Your all-in-one platform for discovering,
              creating and managing amazing events.
            </p>

          </div>


          <div className="footer-column">

            <h4>Platform</h4>

            <a href="#events">Browse Events</a>
            <a href="#categories">Categories</a>
            <a href="#home">Create Event</a>
            <a href="#home">Pricing</a>

          </div>


          <div className="footer-column">

            <h4>Company</h4>

            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#home">Careers</a>
            <a href="#home">Blog</a>

          </div>


          <div className="footer-column">

            <h4>Support</h4>

            <a href="#contact">Help Center</a>
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms of Service</a>
            <a href="#contact">FAQs</a>

          </div>

        </div>


        <div className="landing-container footer-bottom">

          <p>
            © 2026 Event Management System. All rights reserved.
          </p>

          <div className="social-links">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>

        </div>

      </footer>

    </div>
  )
}

export default LandingPage