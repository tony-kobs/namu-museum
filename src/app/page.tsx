import { Events } from "@/components/Events/Events";
import { Footer } from "@/components/Footer/Footer";
import { Gallery } from "@/components/Gallery/Gallery";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Subscribe } from "@/components/Subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Events />
        <Gallery />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
