import { HeroSection } from "@/components/HeroSection";
import { TramitesDestacados } from "@/components/TramitesDestacados";
import { RibasResuelveSection } from "@/components/RibasResuelveSection";
import { AseoUrbanoSection } from "@/components/AseoUrbanoSection";
import { ParroquiasSection } from "@/components/ParroquiasSection";
import { NoticiasSection } from "@/components/NoticiasSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TramitesDestacados />
      <RibasResuelveSection />
      <AseoUrbanoSection />
      <ParroquiasSection />
      <NoticiasSection />
    </div>
  );
}
