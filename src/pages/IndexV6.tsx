import { NavigationV2 } from "@/components/v2/NavigationV2";
import { HeroV6 } from "@/components/v6/HeroV6";
import { PainPointsV6 } from "@/components/v6/PainPointsV6";
import { SolutionV6 } from "@/components/v6/SolutionV6";
import { ComparisonV2 } from "@/components/v2/ComparisonV2";
import { PricingV2 } from "@/components/v2/PricingV2";
import { FAQV6 } from "@/components/v6/FAQV6";
import { FinalCTAV6 } from "@/components/v6/FinalCTAV6";
import { FooterV2 } from "@/components/v2/FooterV2";

export default function IndexV6() {
  return (
    <div className="min-h-screen">
      <NavigationV2 theme="dark" />
      <HeroV6 />
      <PainPointsV6 />
      <SolutionV6 />
      <ComparisonV2 />
      <PricingV2 segment="maduro" />
      <FAQV6 />
      <FinalCTAV6 />
      <FooterV2 />
    </div>
  );
}
