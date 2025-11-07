import { NavigationV2 } from "@/components/v2/NavigationV2";
import { HeroV2 } from "@/components/v2/HeroV2";
import { PainPointsV2 } from "@/components/v2/PainPointsV2";
import { SolutionV2 } from "@/components/v2/SolutionV2";
import { ComparisonV2 } from "@/components/v2/ComparisonV2";
import { PricingV2 } from "@/components/v2/PricingV2";
import { FAQV2 } from "@/components/v2/FAQV2";
import { FinalCTAV2 } from "@/components/v2/FinalCTAV2";
import { FooterV2 } from "@/components/v2/FooterV2";

const IndexV2 = () => {
  return (
    <div className="min-h-screen">
      <NavigationV2 />
      <HeroV2 />
      <PainPointsV2 />
      <SolutionV2 />
      <ComparisonV2 />
      <PricingV2 />
      <FAQV2 />
      <FinalCTAV2 />
      <FooterV2 />
    </div>
  );
};

export default IndexV2;
