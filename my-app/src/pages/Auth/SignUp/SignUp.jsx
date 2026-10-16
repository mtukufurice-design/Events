import { useState } from 'react'
import { authRequest } from '../../../authApi'
import './SignUp.css'

function SignUp({ onNavigate }) {
	const [showPassword, setShowPassword] = useState(false)
	const [message, setMessage] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)

	async function handleSubmit(event) {
		event.preventDefault()
		setMessage('')
		setIsSubmitting(true)
		const formData = new FormData(event.currentTarget)
		try {
			await authRequest('signup', {
				body: {
					full_name: formData.get('name'),
					email: formData.get('email'),
					password: formData.get('password'),
				},
			})
			onNavigate('login', null, 'Account created successfully')
		} catch (error) {
			setMessage(error.message)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<main className="auth-page signup-page">
			<section className="auth-intro" aria-label="Evently introduction">
				<button className="auth-brand" type="button" onClick={() => onNavigate('landing')}>Evently<span>.</span></button>
				<div className="auth-intro-content">
					<p className="auth-kicker">A world of experiences awaits</p>
					<h1>Gather good people. Create great memories.</h1>
					<p className="auth-intro-text">
						Join a community built around the events and experiences you love.
					</p>
				</div>
				<p className="auth-footnote">Discover more. Experience more.</p>
			</section>

			<section className="auth-panel">
				<div className="auth-form-wrap">
					<button className="auth-back-button" type="button" onClick={() => onNavigate('landing')}>
						<span aria-hidden="true">&larr;</span> Back to landing
					</button>
					<p className="auth-eyebrow">Get started</p>
					<h2>Create your account</h2>
					<p className="auth-subtitle">It only takes a minute to join Evently.</p>

					<form className="auth-form" onSubmit={handleSubmit}>
						<label htmlFor="signup-name">Full name</label>
						<input id="signup-name" name="name" type="text" placeholder="Your full name" autoComplete="name" required />

						<label htmlFor="signup-email">Email address</label>
						<input id="signup-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />

						<label htmlFor="signup-password">Password</label>
						<div className="password-field">
							<input
								id="signup-password"
								name="password"
								type={showPassword ? 'text' : 'password'}
								placeholder="At least 6 characters"
								minLength="8"
								autoComplete="new-password"
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

						<label className="check-label">
							<input type="checkbox" name="terms" required />
							<span>I agree to the <a href="#terms">terms and conditions</a>.</span>
						</label>

						<button className="auth-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Creating account...' : 'Create account'} <span aria-hidden="true">-&gt;</span></button>
						{message && <p className="auth-message" role="alert">{message}</p>}
					</form>

					<p className="auth-switch">Already have an account? <button type="button" onClick={() => onNavigate('login')}>Log in</button></p>
				</div>
			</section>
		</main>
	)
}

export default SignUp
