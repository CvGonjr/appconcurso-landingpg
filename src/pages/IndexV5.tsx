import { NavigationV2 } from "@/components/v2/NavigationV2";
import { HeroV5 } from "@/components/v5/HeroV5";
import { PainPointsV5 } from "@/components/v5/PainPointsV5";
import { SolutionV5 } from "@/components/v5/SolutionV5";
import { ComparisonV2 } from "@/components/v2/ComparisonV2";
import { PricingV2 } from "@/components/v2/PricingV2";
import { FAQV5 } from "@/components/v5/FAQV5";
import { FinalCTAV5 } from "@/components/v5/FinalCTAV5";
import { FooterV2 } from "@/components/v2/FooterV2";

export default function IndexV5() {
  return (
    <div className="min-h-screen">
      <NavigationV2 theme="dark" />
      <HeroV5 />
      <PainPointsV5 />
      <SolutionV5 />
      <ComparisonV2 />
      <PricingV2 segment="familia" />
      <FAQV5 />
      <FinalCTAV5 />
      <FooterV2 />
    </div>
  );
}
