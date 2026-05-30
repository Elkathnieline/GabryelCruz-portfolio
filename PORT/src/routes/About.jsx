import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHeader from '../components/About/AboutHeader'
import Meet from '../components/About/Meet'
import Journey from '../components/About/Journey'

export default function About() {
	return (
		<div className="flex min-h-screen flex-col bg-gradient-to-b from-[#fff8ef] to-white">
			<Navbar />
			<AboutHeader />
			<Meet />
			<Journey />
			<Footer />
		</div>
	)
}
