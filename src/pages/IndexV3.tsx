import { NavigationV2 } from "@/components/v2/NavigationV2";
import { HeroV3 } from "@/components/v3/HeroV3";
import { PainPointsV3 } from "@/components/v3/PainPointsV3";
import { SolutionV3 } from "@/components/v3/SolutionV3";
import { ComparisonV2 } from "@/components/v2/ComparisonV2";
import { PricingV2 } from "@/components/v2/PricingV2";
import { FAQV3 } from "@/components/v3/FAQV3";
import { FinalCTAV3 } from "@/components/v3/FinalCTAV3";
import { FooterV2 } from "@/components/v2/FooterV2";

export default function IndexV3() {
  return (
    <div className="min-h-screen">
      <NavigationV2 theme="dark" />
      <HeroV3 />
      <PainPointsV3 />
      <SolutionV3 />
      <ComparisonV2 />
      <PricingV2 segment="jovem" />
      <FAQV3 />
      <FinalCTAV3 />
      <FooterV2 />
    </div>
  );
}
