import FinanceHero from "../components/FinanceHero";
import FinanceFeatures from "../components/FinanceFeatures";
import FinanceRegaticSection from "../components/FinanceRegaticSection";

export default function Finance() {
  return (
    <>
      {/* Hero thoda upar */}
      <div className="-mt-16 md:-mt-22">
        <FinanceHero />
      </div>

      {/* Features section bhi upar */}
      <div className="-mt-12 md:-mt-22">
        <FinanceFeatures />
      </div>
      <FinanceRegaticSection />
    </>
  );
}
