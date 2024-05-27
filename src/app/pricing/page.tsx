import BusinessPlan from "@/components/layout/BusinessPlan";
import Footer from "@/components/layout/Footer";
import FrequentlyAskedQuestions from "@/components/layout/FrequentlyAskedQuestions";
import Nav from "@/components/layout/Nav";
import Supercharge from "@/components/layout/Supercharge";

export default function PricingPage() {
    return (
      <>
      <Nav />
        <main>
         <BusinessPlan />
         <FrequentlyAskedQuestions />
         <Supercharge />
        </main>
      <Footer />
      </>
    );
  }
  