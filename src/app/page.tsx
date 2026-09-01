import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";

// Additional sections (Our Promise, Signs It's Time, Services, How It Works,
// Why Choose Us, About Cheri, Testimonials, FAQ, Contact, Footer) are added
// here in page order as each is built.

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
    </>
  );
}
