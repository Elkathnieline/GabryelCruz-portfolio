import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryHeader from '../components/Gallery/GalleryHeader'
import WorkGallery from '../components/Gallery/WorkGallery'

export default function Gallery() {
	return (
		<div className="flex min-h-screen flex-col bg-gradient-to-b from-[#fff8ef] to-white">
			<Navbar />
			<GalleryHeader />
			<WorkGallery />
			<Footer />
		</div>
	)
}
