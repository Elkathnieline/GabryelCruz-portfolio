import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Errorpage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#fff8ef] to-white">
      <Navbar />
      <main className="mx-auto flex w-full max-w-3xl flex-1 items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#f1e3d5] bg-white/80 px-6 py-12 shadow-sm backdrop-blur sm:px-10">
          <h1 className="text-5xl font-black tracking-tight text-[#a6463f] sm:text-7xl">404</h1>
          <h2 className="mt-3 text-2xl font-semibold text-slate-800 sm:text-3xl">Page not found</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">The page you are looking for does not exist.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#f78fb6] px-6 py-3 text-sm font-medium text-[#2d1e1c] transition hover:bg-[#f47faa] sm:text-base"
          >
            Return home
          </Link>
        </div>
      </main>
    </div>
  )
}