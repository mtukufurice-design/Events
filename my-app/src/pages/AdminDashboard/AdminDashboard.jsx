import './AdminDashboard.css'

function AdminDashboard({ account, onLogout }) {
  const displayName = account?.email?.split('@')[0] || 'Administrator'

  return (
    <main className="admin-dashboard">
      <aside className="admin-sidebar">
        <a className="admin-brand" href="/" aria-label="Evently home">evently<span>.</span></a>
        <p className="admin-sidebar-label">ADMINISTRATION</p>
        <nav className="admin-nav" aria-label="Admin navigation">
          <a className="admin-nav-link is-active" href="#overview">Overview</a>
          <a className="admin-nav-link" href="#events">Events</a>
          <a className="admin-nav-link" href="#users">Users</a>
          <a className="admin-nav-link" href="#reports">Reports</a>
        </nav>
        <div className="admin-sidebar-bottom">
          <span className="admin-avatar">{displayName.slice(0, 1).toUpperCase()}</span>
          <span className="admin-account"><strong>{displayName}</strong><span>Administrator</span></span>
        </div>
      </aside>

      <section className="admin-main" id="overview">
        <header className="admin-topbar">
          <div><span className="admin-breadcrumb">Workspace /</span> Overview</div>
          <button className="admin-logout" type="button" onClick={onLogout}>Log out <span aria-hidden="true">↗</span></button>
        </header>

        <div className="admin-content">
          <p className="admin-eyebrow">EVENTLY CONTROL ROOM</p>
          <h1>Good to see you, {displayName}<span>.</span></h1>
          <p className="admin-intro">Here is the latest snapshot of your event platform.</p>

          <section className="admin-stats" aria-label="Platform summary">
            <article className="admin-stat"><span>Published events</span><strong>24</strong><small><i className="admin-dot coral" /> 4 added this month</small></article>
            <article className="admin-stat"><span>Registered users</span><strong>1,284</strong><small><i className="admin-dot green" /> 12% from last month</small></article>
            <article className="admin-stat"><span>Tickets booked</span><strong>3,602</strong><small><i className="admin-dot gold" /> Across all events</small></article>
          </section>

          <section className="admin-activity" id="events">
            <div className="admin-section-heading"><div><p className="admin-eyebrow">PLATFORM ACTIVITY</p><h2>Recent overview</h2></div><span className="admin-live"><i /> LIVE</span></div>
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead><tr><th>EVENT</th><th>DATE</th><th>ATTENDEES</th><th>STATUS</th></tr></thead>
                <tbody>
                  <tr><td><strong>Nairobi Design Week</strong><span>Design</span></td><td>18 Oct 2025</td><td>248</td><td><span className="admin-status published">Published</span></td></tr>
                  <tr><td><strong>Afro House: Rooftop Sessions</strong><span>Music</span></td><td>24 Oct 2025</td><td>186</td><td><span className="admin-status published">Published</span></td></tr>
                  <tr><td><strong>Product People Meetup</strong><span>Business</span></td><td>02 Nov 2025</td><td>74</td><td><span className="admin-status draft">Draft</span></td></tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default AdminDashboard