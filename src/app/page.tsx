import Benefits from "@/components/layout/Benefits";
import Customers from "@/components/layout/Customers";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Info from "@/components/layout/Info";
import Integrations from "@/components/layout/Integrations";
import Nav from "@/components/layout/Nav";
import News from "@/components/layout/News";
import Results from "@/components/layout/Results";
import Supercharge from "@/components/layout/Supercharge";


export default function Home() {
  return (
    <>
    <Nav />
      <main>
        <Hero />
        <Benefits />
        <Info />
        <Integrations />
        <News />
        <Results />
        <Customers />
        <Supercharge />
      </main>
    <Footer />
    </>
  );
}
