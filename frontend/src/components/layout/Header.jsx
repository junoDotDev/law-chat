import React from 'react'
import dilgLogo from '../../../assets/images/dilg-logo.png'

export default function Header() {
	return (
		<header className="p-4 flex items-center justify-between text-neutral-600">

				<div className="flex items-center gap-3">
					<img
						src={dilgLogo}
						alt="DILG logo"
						className="h-8 w-8 shrink-0 object-contain"
					/>
					<div className="leading-none">
						<h1 className="text-[13px] font-medium tracking-[0.01em] text-neutral-600 sm:text-[15px]">
							Department of the Interior
						</h1>
						<p className="text-[13px] font-medium tracking-[0.01em] text-neutral-600 sm:text-[15px]">
							and Local Government - CAR
						</p>
					</div>
				</div>
	
				<div className="flex items-center gap-2 sm:gap-3">
					<div className="text-right leading-tight">
						<p className="text-[11px] font-semibold text-neutral-700 sm:text-[12px]">
							John Doe
						</p>
						<p className="text-[10px] font-medium text-neutral-400 sm:text-[11px]">
							Admin
						</p>
					</div>
					<img
						src={dilgLogo}
						alt="User avatar"
						className="h-8 w-8 shrink-0 object-contain"
					/>
				</div>
		</header>
	)
}
