import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Experience from "@/components/Experience";
import Reservations from "@/components/Reservations";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="relative w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Experience />
      <Reservations />
      <Testimonials />
      <Footer />
      <BackToTop />
    </main>
  );
}