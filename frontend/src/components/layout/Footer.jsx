export default function Footer() {
	return (
		<footer className="p-4 flex items-center justify-between text-neutral-600">
			<div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
				<div>
					<p className="font-semibold text-neutral-700">JurisGPT Assistant</p>
					<p className="text-xs text-neutral-500">
						Responses are for internal guidance only and should be reviewed before official use.
					</p>
				</div>

				<div className="flex flex-wrap items-center gap-2 text-xs">
					<span className="rounded-full border border-neutral-400 px-3 py-1">
						Status: Ready
					</span>
					<span className="rounded-full border border-neutral-400 px-3 py-1">
						Knowledge Base: 24 Files
					</span>
					<span className="rounded-full border border-neutral-400 px-3 py-1">
						Last Sync: Today
					</span>
				</div>

				<div className="text-xs text-neutral-500 md:text-right">
					<p>DILG - CAR Legal Support Workspace</p>
					<p>Version 0.1</p>
				</div>
			</div>
		</footer>
	)
}
