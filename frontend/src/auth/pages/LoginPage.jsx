import React from 'react'
import dilgLogo from '../../../assets/images/dilg-logo.png'

export default function LoginPage({ onLogin }) {
	return (
		<div className="flex min-h-screen items-center justify-center bg-neutral-100 px-4 py-8">
			<div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
				<div className="mb-8 flex flex-col items-center text-center">
					<img
						src={dilgLogo}
						alt="DILG logo"
						className="mb-4 h-16 w-16 object-contain"
					/>
					<h1 className="text-2xl font-bold text-dilg-blue">Law Chat</h1>
					<p className="mt-2 text-sm text-neutral-500">
						Sign in to continue to the application
					</p>
				</div>

				<form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
					<div>
						<label
							htmlFor="email"
							className="mb-1 block text-sm font-medium text-neutral-700"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							placeholder="Enter your email"
							className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-dilg-blue"
						/>
					</div>

					<div>
						<label
							htmlFor="password"
							className="mb-1 block text-sm font-medium text-neutral-700"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							placeholder="Enter your password"
							className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-dilg-blue"
						/>
					</div>

					<button
						type="button"
						onClick={onLogin}
						className="w-full rounded-lg bg-dilg-blue px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	)
}
