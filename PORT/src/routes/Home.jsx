import Navbar from '../components/Navbar';
import HeroSection from '../components/Home/HeroSection';
import BottomHero from '../components/Home/BottomHero';
import Showcase from '../components/Home/Showcase';
import Intro from '../components/Home/Intro';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <BottomHero />
      <Showcase />
      <Intro />
      <Footer />
    </div>
  );
}
