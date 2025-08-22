import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductPreview from "@/components/ProductPreview";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProductPreview />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
