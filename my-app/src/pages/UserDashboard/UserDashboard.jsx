import { useMemo, useState } from 'react'
import ThemeToggle from '../../components/ThemeToggle'
import './UserDashboard.css'

const events = [
  {
    id: 1,
    title: 'Nairobi Design Week',
    category: 'Design',
    date: '18 Oct 2025',
    time: '10:00 AM',
    venue: 'The Nairobi National Museum',
    status: 'Confirmed',
    color: 'coral',
    initials: 'ND',
  },
  {
    id: 2,
    title: 'Afro House: Rooftop Sessions',
    category: 'Music',
    date: '24 Oct 2025',
    time: '6:30 PM',
    venue: 'The Social House, Lavington',
    status: 'Confirmed',
    color: 'green',
    initials: 'AH',
  },
  {
    id: 3,
    title: 'Product People Meetup',
    category: 'Business',
    date: '02 Nov 2025',
    time: '5:00 PM',
    venue: 'Ikigai, Riverside',
    status: 'Pending',
    color: 'blue',
    initials: 'PP',
  },
]

const recommendedEvents = [
  { id: 4, title: 'Nairobi Coffee Festival', category: 'Food & Drink', date: '08 Nov', venue: 'KICC', color: 'gold' },
  { id: 5, title: 'Build for Good Hackathon', category: 'Technology', date: '15 Nov', venue: 'iHub, Senteu Plaza', color: 'blue' },
]

function UserDashboard({ onNavigate, onLogout, userEmail, theme, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('Overview')
  const [eventFilter, setEventFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [savedEvents, setSavedEvents] = useState([])
  const displayName = userEmail
    ? userEmail.split('@')[0].replace(/[._-]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
    : 'Guest attendee'
  const initials = displayName.split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase()

  const visibleEvents = useMemo(() => events.filter((event) => {
    const matchesFilter = eventFilter === 'All' || event.status === eventFilter
    const searchText = `${event.title} ${event.category} ${event.venue}`.toLowerCase()
    return matchesFilter && searchText.includes(query.toLowerCase())
  }), [eventFilter, query])

  function toggleSaved(id) {
    setSavedEvents((current) => current.includes(id)
      ? current.filter((savedId) => savedId !== id)
      : [...current, id])
  }

  return (
    <main className="user-dashboard">
      <aside className="dashboard-sidebar">
        <button className="dashboard-brand" type="button" onClick={() => onNavigate?.('landing')} aria-label="Evently home">
          <span className="dashboard-brand-mark">E</span>
          <span>evently<span className="brand-period">.</span></span>
        </button>

        <div className="sidebar-label">YOUR SPACE</div>
        <nav className="dashboard-nav" aria-label="Dashboard navigation">
          {[
            ['Overview', '01'],
            ['My tickets', '02'],
            ['Saved events', '03'],
            ['Explore events', '04'],
          ].map(([label, number]) => (
            <button
              className={`dashboard-nav-item${activeSection === label ? ' is-active' : ''}`}
              key={label}
              type="button"
              onClick={() => setActiveSection(label)}
            >
              <span className="nav-number">{number}</span>
              <span>{label}</span>
              {label === 'Saved events' && savedEvents.length > 0 && <span className="nav-count">{savedEvents.length}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <span className="help-mark" aria-hidden="true">?</span>
            <div><strong>Need a hand?</strong><span>Visit our help centre</span></div>
            <span className="help-arrow" aria-hidden="true">↗</span>
          </div>
          <button className="sidebar-profile" type="button" onClick={() => setActiveSection('Profile')}>
            <span className="profile-avatar">{initials}</span>
            <span className="profile-copy"><strong>{displayName}</strong><span>{userEmail || 'Attendee account'}</span></span>
            <span className="profile-menu" aria-hidden="true">···</span>
          </button>
        </div>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-topbar">
          <div className="breadcrumb"><span>My space</span><span aria-hidden="true">/</span><strong>{activeSection}</strong></div>
          <div className="topbar-actions">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <label className="dashboard-search">
              <span aria-hidden="true">⌕</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search your events" aria-label="Search your events" />
              <kbd>/</kbd>
            </label>
            <button className="notification-button" type="button" aria-label="Notifications">
              <span aria-hidden="true">♧</span><i />
            </button>
            <button className="logout-button" type="button" onClick={onLogout}>Log out <span aria-hidden="true">↗</span></button>
          </div>
        </header>

        <div className="dashboard-content">
          <section className="welcome-row">
            <div>
              <p className="dashboard-eyebrow">SUNDAY, OCTOBER 12, 2025 <span>·</span> NAIROBI, KE</p>
              <h1>Welcome, {displayName}<span>.</span></h1>
              <p className="welcome-subtitle">A little something to look forward to.</p>
            </div>
            <button className="discover-button" type="button" onClick={() => setActiveSection('Explore events')}>
              <span aria-hidden="true">＋</span> Discover events
            </button>
          </section>

          <section className="dashboard-stats" aria-label="Your event activity">
            <article className="stat-item"><span className="stat-label">UPCOMING</span><strong>03</strong><span className="stat-note"><i className="stat-dot coral-dot" /> events on your calendar</span></article>
            <article className="stat-item"><span className="stat-label">ATTENDED THIS YEAR</span><strong>08</strong><span className="stat-note"><i className="stat-dot green-dot" /> memories made so far</span></article>
            <article className="stat-item"><span className="stat-label">SAVED FOR LATER</span><strong>{String(savedEvents.length + 2).padStart(2, '0')}</strong><span className="stat-note"><i className="stat-dot gold-dot" /> good things to explore</span></article>
          </section>

          <section className="events-section">
            <div className="section-heading-row">
              <div><p className="dashboard-eyebrow">YOUR CALENDAR</p><h2>Coming up</h2></div>
              <button className="text-action" type="button" onClick={() => setActiveSection('My tickets')}>View all tickets <span aria-hidden="true">→</span></button>
            </div>

            <div className="event-toolbar">
              <div className="event-filters" role="group" aria-label="Filter tickets">
                {['All', 'Confirmed', 'Pending'].map((filter) => (
                  <button key={filter} className={eventFilter === filter ? 'filter-active' : ''} type="button" onClick={() => setEventFilter(filter)}>{filter}</button>
                ))}
              </div>
              <span className="event-count">{visibleEvents.length} EVENTS</span>
            </div>

            <div className="event-list">
              {visibleEvents.map((event) => (
                <article className="event-row" key={event.id}>
                  <div className={`event-monogram ${event.color}`}>{event.initials}</div>
                  <div className="event-info">
                    <span className="event-category">{event.category}</span>
                    <h3>{event.title}</h3>
                    <p>{event.date}<span>·</span>{event.time}<span>·</span>{event.venue}</p>
                  </div>
                  <span className={`event-status ${event.status.toLowerCase()}`}><i />{event.status}</span>
                  <button className="ticket-action" type="button" aria-label={`View ticket for ${event.title}`} onClick={() => setActiveSection('My tickets')}>View ticket <span aria-hidden="true">↗</span></button>
                </article>
              ))}
              {visibleEvents.length === 0 && <p className="empty-events">No events match your search and filter.</p>}
            </div>
          </section>

          <section className="recommendations-section">
            <div className="section-heading-row recommendations-heading">
              <div><p className="dashboard-eyebrow">PICKED FOR YOU</p><h2>Worth stepping out for</h2></div>
              <button className="text-action" type="button" onClick={() => setActiveSection('Explore events')}>Explore all <span aria-hidden="true">→</span></button>
            </div>
            <div className="recommendation-grid">
              {recommendedEvents.map((event) => (
                <article className="recommendation-item" key={event.id}>
                  <div className={`recommendation-art ${event.color}`}><span>{event.category}</span><strong>{event.title}</strong><span className="art-date">{event.date}</span></div>
                  <div className="recommendation-meta"><span>{event.venue}</span><button type="button" onClick={() => toggleSaved(event.id)} aria-label={`${savedEvents.includes(event.id) ? 'Remove' : 'Save'} ${event.title}`} aria-pressed={savedEvents.includes(event.id)}>{savedEvents.includes(event.id) ? '♥' : '♡'}</button></div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default UserDashboard