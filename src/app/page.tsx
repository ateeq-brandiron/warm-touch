import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OurPromise } from "@/components/sections/OurPromise";
import { Signs } from "@/components/sections/Signs";
import { Services } from "@/components/sections/Services";
import { FirstConversation } from "@/components/sections/FirstConversation";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AboutCheri } from "@/components/sections/AboutCheri";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <OurPromise />
        <Signs />
        <Services />
        <FirstConversation />
        <HowItWorks />
        <WhyChooseUs />
        <AboutCheri />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
