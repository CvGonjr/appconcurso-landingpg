import { NavigationV2 } from "@/components/v2/NavigationV2";
import { HeroV4 } from "@/components/v4/HeroV4";
import { PainPointsV4 } from "@/components/v4/PainPointsV4";
import { SolutionV4 } from "@/components/v4/SolutionV4";
import { ComparisonV2 } from "@/components/v2/ComparisonV2";
import { PricingV2 } from "@/components/v2/PricingV2";
import { FAQV4 } from "@/components/v4/FAQV4";
import { FinalCTAV4 } from "@/components/v4/FinalCTAV4";
import { FooterV2 } from "@/components/v2/FooterV2";

export default function IndexV4() {
  return (
    <div className="min-h-screen">
      <NavigationV2 theme="dark" />
      <HeroV4 />
      <PainPointsV4 />
      <SolutionV4 />
      <ComparisonV2 />
      <PricingV2 segment="profissional" />
      <FAQV4 />
      <FinalCTAV4 />
      <FooterV2 />
    </div>
  );
}
