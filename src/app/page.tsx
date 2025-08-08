import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MoreAbout from './components/MoreAbout';
import Services from './components/Services';
import Packages from './components/Packages';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <MoreAbout />
      <Services />
      <Packages />
    </main>
  );
}
