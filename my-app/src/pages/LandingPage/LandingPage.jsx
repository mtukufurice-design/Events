import './LandingPage.css'
import ThemeToggle from '../../components/ThemeToggle'
import DepthCarousel from '../../components/DepthCarousel'
function LandingPage({ onNavigate, theme, onToggleTheme }) {
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
            <a href="#home">Start</a>
            <a href="#events">Discover</a>
            <a href="#categories">Browse by Type</a>
            <a href="#about">Our Story</a>
            <a href="#contact">Get in Touch</a>
          </nav>

          <div className="navbar-actions">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <button className="login-button" onClick={() => onNavigate('login')}>
              Sign In
            </button>

            <button className="create-event-button" onClick={() => onNavigate('signup')}>
              Host an Event
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
                Meet the people who inspire you
              </div>

              <h1>
                Make Every Event
                <span> an Unforgettable Experience.</span>
              </h1>

              <p>
                Plan your next outing, discover inspiring gatherings, and organize conferences, concerts, workshops, and more—all in one place.
              </p>

              <div className="hero-buttons">

                <button className="hero-primary-button">
                  Browse Events
                  <span>→</span>
                </button>

                <button className="hero-secondary-button">
                  Organize an Event
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
                  <p>People attending events</p>
                </div>

              </div>

            </div>


            {/* Hero Visual */}
            <div className="hero-visual">

              <div className="hero-main-card">

                <div className="hero-card-image">
                  <div className="hero-card-overlay">
                    <span className="featured-label">
                      EVENT SPOTLIGHT
                    </span>
                  </div>
                </div>

                <div className="hero-card-content">

                  <div className="event-date">
                    <strong>25</strong>
                    <span>OCT</span>
                  </div>

                  <div className="hero-event-details">
                    <p>Tech & Innovation</p>
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
                      TICKETS FROM
                    </span>

                    <strong>KSh 1,500</strong>
                  </div>

                  <button>
                    See Event
                  </button>

                </div>

              </div>


              {/* Floating notification */}
              <div className="floating-notification">

                <div className="notification-icon">
                  ✓
                </div>

                <div>
                  <strong>You're all registered</strong>
                  <p>Your ticket is ready to use</p>
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
                  FIND YOUR NEXT EXPERIENCE
                </span>

                <h2>
                  Discover Something You'll Enjoy
                </h2>
              </div>

              <p>
                Browse a range of event styles and choose an experience
                that suits what you love.
              </p>

            </div>


            <div className="category-grid">

              <div className="category-card">
                <div className="category-icon">
                  🎵
                </div>

                <h3>Concerts & Music</h3>

                <p>
                  Concerts, live shows, and festival days
                </p>

                <span>120+ Experiences →</span>
              </div>


              <div className="category-card">
                <div className="category-icon">
                  💼
                </div>

                <h3>Business</h3>

                <p>
                  Industry meetups, conferences, and learning sessions
                </p>

                <span>85+ Experiences →</span>
              </div>


              <div className="category-card">
                <div className="category-icon">
                  💻
                </div>

                <h3>Technology</h3>

                <p>
                  New ideas, technology talks, and innovation showcases
                </p>

                <span>65+ Experiences →</span>
              </div>


              <div className="category-card">
                <div className="category-icon">
                  🎨
                </div>

                <h3>Arts & Culture</h3>

                <p>
                  Creative showcases, exhibitions, and cultural events
                </p>

                <span>45+ Experiences →</span>
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
                  SAVE YOUR SPOT
                </span>

                <h2>
                  Coming Up Soon
                </h2>
              </div>

              <button className="view-all-button">
                See Every Event →
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
                      Kenya seven's Rugby
                    </h3>

                    <p>
                      📍 Nairobi, Kenya
                    </p>

                    <div className="event-card-bottom">

                      <strong>
                        KSh 1000
                      </strong>

                      <span>
                        4590 attending
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
                      University of Eldoret 17th Graduation
                    </h3>

                    <p>
                      📍 Eldoret, Kenya
                    </p>

                    <div className="event-card-bottom">

                      <strong>
                        KSh 800
                      </strong>

                      <span>
                        1800 attending
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
                        1.2K attending
                      </span>

                    </div>

                  </div>

                </div>

              </article>

            </div>

          </div>

        </section>


        {/* ================= EVENT VIBES CAROUSEL ================= */}
        <section className="carousel-section">

          <div className="landing-container">

            <div className="carousel-section-header">
              <span className="section-label">THE EXPERIENCE</span>
              <h2>Concerts, Clubs, Drinks & More</h2>
              <p>
                Drag, scroll or use arrow keys to browse the vibe — then show up and live it.
              </p>
            </div>

            <DepthCarousel
              autoplay={true}
              autoplayDelay={3500}
              cardWidth={300}
              cardHeight={400}
              spread={95}
              depth={230}
              tilt={20}
              blur={5}
              falloff={0.22}
              visibleCards={4}
            />

          </div>

        </section>


        {/* ================= STATISTICS ================= */}
        <section className="statistics-section">

          <div className="landing-container statistics-grid">

            <div className="stat-item">
              <strong>10K+</strong>
              <span>People Taking Part</span>
            </div>

            <div className="stat-item">
              <strong>500+</strong>
              <span>Events Hosted</span>
            </div>

            <div className="stat-item">
              <strong>150+</strong>
              <span>Organizers on the Platform</span>
            </div>

            <div className="stat-item">
              <strong>25+</strong>
              <span>Ways to Explore</span>
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
                  All the tools
                  for events worth remembering.
                </h3>

                <div className="about-check">
                  ✓ Simple event setup
                </div>

                <div className="about-check">
                  ✓ Web-based sign-ups
                </div>

                <div className="about-check">
                  ✓ Guest coordination
                </div>

                <div className="about-check">
                  ✓ Attendance insights
                </div>

              </div>

            </div>


            <div className="about-text">

              <span className="section-label">
                WHAT MAKES EVENT MANAGEMENT SYSTEM DIFFERENT?
              </span>

              <h2>
                A Single Place.
                <span> So Many Possibilities.</span>
              </h2>

              <p>
                Event Management System takes the hassle out of planning.
                Hosts can publish and oversee gatherings, while guests
                find and sign up for the events that excite them.
              </p>

              <p>
                Handle the whole journey—from getting organized and accepting
                registrations to keeping track of guests—all from one platform.
              </p>

              <button className="about-button">
                Discover More →
              </button>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="cta-section">

          <div className="landing-container cta-content">

            <span className="section-label">
              MADE FOR EVENT HOSTS
            </span>

            <h2>
              Have an Idea for an Event?
              <span> Make It Happen.</span>
            </h2>

            <p>
              Set up your event and start bringing your community together.
            </p>

            <button className="cta-button">
              Start Planning →
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
              Find, host, and coordinate memorable experiences
              with everything together in one place.
            </p>

          </div>


          <div className="footer-column">

            <h4>Explore</h4>

            <a href="#events">Find Events</a>
            <a href="#categories">Event Types</a>
            <a href="#home">Host an Event</a>
            <a href="#home">Plans & Pricing</a>

          </div>


          <div className="footer-column">

            <h4>About Us</h4>

            <a href="#about">Who We Are</a>
            <a href="#contact">Reach Out</a>
            <a href="#home">Join Our Team</a>
            <a href="#home">Latest News</a>

          </div>


          <div className="footer-column">

            <h4>We're Here to Help</h4>

            <a href="#contact">Support Center</a>
            <a href="#contact">Privacy Information</a>
            <a href="#contact">Terms & Conditions</a>
            <a href="#contact">Common Questions</a>

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