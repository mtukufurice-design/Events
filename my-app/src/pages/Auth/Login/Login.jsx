import { useState } from 'react'
import { authRequest } from '../../../authApi'
import ThemeToggle from '../../../components/ThemeToggle'
import './Login.css'

function Login({ onNavigate, notice, theme, onToggleTheme }) {
	const [showPassword, setShowPassword] = useState(false)
	const [message, setMessage] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)

	async function handleSubmit(event) {
		event.preventDefault()
		setMessage('')
		setIsSubmitting(true)
		const formData = new FormData(event.currentTarget)
		try {
			const result = await authRequest('login', {
				body: {
					identifier: formData.get('identifier'),
					password: formData.get('password'),
				},
			})
			localStorage.setItem('authToken', result.token)
			const isAdmin = result.user.role === 'admin' || result.user.is_superuser
			onNavigate(isAdmin ? 'adminDashboard' : 'dashboard', result.user)
		} catch (error) {
			setMessage(error.message)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<main className="auth-page login-page">
			<section className="auth-intro" aria-label="Evently introduction">
				<button className="auth-brand" type="button" onClick={() => onNavigate('landing')}>Evently<span>.</span></button>
				<div className="auth-intro-content">
					<p className="auth-kicker">Your next experience starts here</p>
					<h1>Make time for the moments that matter.</h1>
					<p className="auth-intro-text">
						Find the events you will be talking about long after the lights go down.
					</p>
				</div>
				<p className="auth-footnote">Discover more. Experience more.</p>
			</section>

			<section className="auth-panel">
				<div className="auth-form-wrap">
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '34px' }}>
						<button className="auth-back-button" type="button" onClick={() => onNavigate('landing')} style={{ marginBottom: 0 }}>
							<span aria-hidden="true">&larr;</span> Back to landing
						</button>
						<ThemeToggle theme={theme} onToggle={onToggleTheme} compact={true} />
					</div>
					<p className="auth-eyebrow">Welcome back</p>
					<h2>Log in to Evently</h2>
					<p className="auth-subtitle">Enter your email or username to continue.</p>

					<form className="auth-form" onSubmit={handleSubmit}>
						{notice && <p className="auth-message" role="status">{notice}</p>}
						<label htmlFor="login-identifier">Email or username</label>
						<input id="login-identifier" name="identifier" type="text" placeholder="you@example.com or username" autoComplete="username" required />
						<label htmlFor="login-password">Password</label>
						<div className="password-field">
							<input
								id="login-password"
								name="password"
								type={showPassword ? 'text' : 'password'}
								placeholder="Enter your password"
								autoComplete="current-password"
								required
							/>
							<button
								className="password-toggle"
								type="button"
								onClick={() => setShowPassword((visible) => !visible)}
								aria-label={showPassword ? 'Hide password' : 'Show password'}
							>
								{showPassword ? 'Hide' : 'Show'}
							</button>
						</div>

						<button className="auth-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Signing in...' : 'Continue'} <span aria-hidden="true">-&gt;</span></button>
						{message && <p className="auth-message" role="alert">{message}</p>}
					</form>

					<p className="auth-switch">New to Evently? <button type="button" onClick={() => onNavigate('signup')}>Create an account</button></p>
				</div>
			</section>
		</main>
	)
}

export default Login
