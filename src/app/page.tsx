import { Header, Footer, WhatsAppButton } from "@/components/layout";
import {
  Hero,
  Services,
  Trust,
  Emergencies,
  About,
  Testimonials,
  FAQ,
  CTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Trust />
        <Emergencies />
        <About />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
