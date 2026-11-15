import { HeroSection } from "@/components/HeroSection";
import { NoticiasSection } from "@/components/NoticiasSection";
import { RibasEnMovimientoSection } from "@/components/RibasEnMovimientoSection";
import { MapaIncidenciasSection } from "@/components/MapaIncidenciasSection";
import { TramitesDestacados } from "@/components/TramitesDestacados";
import { RibasResuelveSection } from "@/components/RibasResuelveSection";
import { ParroquiasSection } from "@/components/ParroquiasSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Institucional Panorámico con Matriz 2x3 de Dependencias */}
      <HeroSection />

      {/* 2. Noticias Recientes Asimétricas con Video y Redes Sociales */}
      <NoticiasSection />

      {/* 3. Ribas en Movimiento: Visores de Cámaras / Monitores de Autopistas y Recolección en Vivo */}
      <RibasEnMovimientoSection />

      {/* 4. Reporte e Incidencias de Residuos: Mapa Interactivo Geolocalizado y Focos en Vivo */}
      <MapaIncidenciasSection />

      {/* 5. Catálogo Rápido de Trámites y Solvencias */}
      <TramitesDestacados />

      {/* 6. Módulo 1x10 de Atención Comunitaria */}
      <RibasResuelveSection />

      {/* 7. Las 5 Parroquias y Memoria Histórica */}
      <ParroquiasSection />
    </div>
  );
}
