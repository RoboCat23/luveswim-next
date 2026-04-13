import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import LuvePromise from "@/components/LuvePromise";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-navy focus:font-700"
        style={{ fontWeight: 700 }}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <LuvePromise />
        <WhyUs />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
