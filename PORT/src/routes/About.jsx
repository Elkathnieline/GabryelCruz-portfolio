import Navbar from '../components/Navbar'

export default function About() {
	return (
		<div className="flex min-h-screen flex-col bg-gradient-to-b from-[#fff8ef] to-white">
			<Navbar />
			<main className="mx-auto flex w-full max-w-5xl flex-1 items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
				<div className="rounded-3xl border border-[#f1e3d5] bg-white/80 px-6 py-10 shadow-sm backdrop-blur sm:px-10">
					<h1 className="text-3xl font-bold tracking-tight text-[#a6463f] sm:text-4xl">About Me</h1>
					<p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
						This section can be used to share a short bio, skills, or background.
					</p>
				</div>
			</main>
		</div>
	)
}
