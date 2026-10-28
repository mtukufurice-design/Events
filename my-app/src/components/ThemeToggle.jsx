import './ThemeToggle.css'

function ThemeToggle({ theme, onToggle, compact = false }) {
  const isBlackBlueRed = theme === 'black-blue-red'

  return (
    <button
      type="button"
      className={`theme-toggle-btn ${compact ? 'is-compact' : ''}`}
      onClick={onToggle}
      aria-label={`Current theme: ${isBlackBlueRed ? 'Black, Blue & Red' : 'Classic Warm'}. Click to switch theme.`}
      title={`Click to switch to ${isBlackBlueRed ? 'Classic Warm' : 'Black, Blue & Red'} theme`}
    >
      <span className="theme-toggle-indicators" aria-hidden="true">
        {isBlackBlueRed ? (
          <>
            <span className="theme-indicator-dot blue" />
            <span className="theme-indicator-dot red" />
          </>
        ) : (
          <span className="theme-indicator-dot warm" />
        )}
      </span>

      <span className="theme-toggle-text">
        {isBlackBlueRed ? 'Black & Blue' : 'Classic'}
      </span>

      <span className="theme-toggle-tag">
        {isBlackBlueRed ? '+ Red' : 'Theme'}
      </span>
    </button>
  )
}

export default ThemeToggle

