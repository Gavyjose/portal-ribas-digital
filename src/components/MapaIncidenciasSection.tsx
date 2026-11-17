"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Flame,
  Layers,
  AlertCircle,
  CheckCircle2,
  Clock,
  Send,
  Truck,
  Filter,
  Eye,
  ChevronDown,
  Navigation,
  Compass,
  Globe,
  Mountain,
  Map as MapIcon,
  Sparkles
} from "lucide-react";

interface PuntoFoco {
  id: string;
  sector: string;
  parroquia: string;
  estado: "critico" | "en_atencion" | "atendido";
  descripcion: string;
  hora: string;
  cuadrilla: string;
  queryGoogle: string;
  coordenadas: { x: number; y: number };
}

export function MapaIncidenciasSection() {
  const [modoVisualizacion, setModoVisualizacion] = useState<"calles" | "terreno" | "satelite" | "calor">("calles");
  const [parroquiaSeleccionada, setParroquiaSeleccionada] = useState<string>("todas");
  const [puntoActivo, setPuntoActivo] = useState<PuntoFoco | null>(null);

  // Focos georreferenciados en el Municipio José Félix Ribas
  const focos: PuntoFoco[] = [
    {
      id: "foco-1",
      sector: "Las Mercedes, Sector 2, Calle 4",
      parroquia: "Castor Nieves Ríos",
      estado: "en_atencion",
      descripcion: "Acumulación de restos vegetales y bolsas en acera",
      hora: "Hoy 08:45 AM",
      cuadrilla: "Camión C-25 IVECO en ruta",
      queryGoogle: "Urbanizacion+Las+Mercedes,+La+Victoria,+Aragua",
      coordenadas: { x: 38, y: 35 }
    },
    {
      id: "foco-2",
      sector: "Av. Bicentenaria frente a Plaza Italia",
      parroquia: "Castor Nieves Ríos",
      estado: "atendido",
      descripcion: "Despeje de desechos comerciales en isla central",
      hora: "Hoy 07:15 AM",
      cuadrilla: "Trimoto TR-01 (Recolectado)",
      queryGoogle: "Avenida+Bicentenaria,+La+Victoria,+Aragua",
      coordenadas: { x: 48, y: 42 }
    },
    {
      id: "foco-3",
      sector: "Casco Central, Calle Candelaria c/c Soublette",
      parroquia: "Juan Vicente Bolívar y Ponte",
      estado: "atendido",
      descripcion: "Vaciado de contenedores comerciales (Casa Amarilla)",
      hora: "Hoy 06:30 AM",
      cuadrilla: "Cuadrilla de Barrido Matutino",
      queryGoogle: "Plaza+Ribas,+La+Victoria,+Aragua",
      coordenadas: { x: 55, y: 50 }
    },
    {
      id: "foco-4",
      sector: "Ciudad Socialista La Mora, Bloque 12",
      parroquia: "Castor Nieves Ríos",
      estado: "en_atencion",
      descripcion: "Residuos domésticos acumulados en punto verde",
      hora: "Hoy 09:10 AM",
      cuadrilla: "Camión C-04 SANY asignado",
      queryGoogle: "Urbanizacion+La+Mora,+La+Victoria,+Aragua",
      coordenadas: { x: 30, y: 65 }
    },
    {
      id: "foco-5",
      sector: "Zuata Centro, entrada Los Budares",
      parroquia: "Zuata",
      estado: "atendido",
      descripcion: "Recolección comunitaria completada",
      hora: "Ayer 04:00 PM",
      cuadrilla: "Camión Toronto C-18",
      queryGoogle: "Zuata,+Aragua,+Venezuela",
      coordenadas: { x: 75, y: 72 }
    },
    {
      id: "foco-6",
      sector: "Zona Industrial Soco, Calle Principal",
      parroquia: "Juan Vicente Bolívar y Ponte",
      estado: "en_atencion",
      descripcion: "Despeje de material de embalaje en calzada",
      hora: "Hoy 10:20 AM",
      cuadrilla: "Supervisión Zona C",
      queryGoogle: "Zona+Industrial+Soco,+La+Victoria,+Aragua",
      coordenadas: { x: 62, y: 30 }
    }
  ];

  const focosFiltrados = focos.filter((f) => {
    if (parroquiaSeleccionada === "todas") return true;
    return f.parroquia === parroquiaSeleccionada;
  });

  const conteoCriticos = focosFiltrados.filter((f) => f.estado === "critico").length;
  const conteoEnAtencion = focosFiltrados.filter((f) => f.estado === "en_atencion").length;
  const conteoAtendidos = focosFiltrados.filter((f) => f.estado === "atendido").length;

  // Generar URL dinámica de Google Maps según la parroquia seleccionada o el foco activo
  const obtenerUrlGoogleMaps = () => {
    let query = "La+Victoria,+Aragua,+Venezuela";

    if (puntoActivo) {
      query = puntoActivo.queryGoogle;
    } else if (parroquiaSeleccionada === "Castor Nieves Ríos") {
      query = "Urbanizacion+Las+Mercedes,+La+Victoria,+Aragua";
    } else if (parroquiaSeleccionada === "Juan Vicente Bolívar y Ponte") {
      query = "Plaza+Ribas,+La+Victoria,+Aragua";
    } else if (parroquiaSeleccionada === "Zuata") {
      query = "Zuata,+Aragua,+Venezuela";
    } else if (parroquiaSeleccionada === "Pao de Zárate") {
      query = "Pao+de+Zarate,+Aragua,+Venezuela";
    } else if (parroquiaSeleccionada === "Las Guacamayas") {
      query = "Las+Guacamayas,+Aragua,+Venezuela";
    }

    const mapType =
      modoVisualizacion === "satelite"
        ? "k"
        : modoVisualizacion === "terreno"
        ? "p"
        : "m";

    return `https://maps.google.com/maps?q=${query}&t=${mapType}&z=14&ie=UTF8&iwloc=&output=embed`;
  };

  return (
    <section id="mapa-incidencias" className="py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Cabecera estilo Caracas con Tipografía Óptica Apple */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Integración Google Maps en Vivo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 apple-title-display">
            Reporte e Incidencias de Residuos
          </h2>
          <p className="text-sm text-slate-600 apple-subheading">
            Visualiza los focos de acumulación de residuos reportados por la comunidad en Google Maps. Cada punto representa un sector que requiere o ha recibido la atención de las cuadrillas de Ribas Limpia y Bonita.
          </p>
        </div>

        {/* Layout en dos columnas: Panel de Control (Izquierda) + Google Maps (Derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ============================================================== */}
          {/* PANEL DE CONTROL IZQUIERDO CON APPLE GLASS                     */}
          {/* ============================================================== */}
          <div className="lg:col-span-4 apple-glass-card rounded-3xl p-6 space-y-6 shadow-md">
            {/* Título de Tarjeta con Badge EN VIVO */}
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-emerald-600" />
                <h3 className="font-extrabold text-slate-900 text-sm">
                  Focos de Residuos
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-black text-[9px] uppercase tracking-wider flex items-center gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                EN VIVO
              </span>
            </div>

            {/* Contadores Numéricos de Estados con Apple Press Subtle */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-white/90 p-3 rounded-2xl border border-rose-200/80 shadow-xs apple-press-subtle">
                <span className="text-2xl font-black text-rose-600 block">
                  {conteoCriticos}
                </span>
                <span className="text-[10px] font-bold text-slate-600 uppercase">
                  Focos Activos
                </span>
              </div>
              <div className="bg-white/90 p-3 rounded-2xl border border-amber-200/80 shadow-xs apple-press-subtle">
                <span className="text-2xl font-black text-amber-500 block">
                  {conteoEnAtencion}
                </span>
                <span className="text-[10px] font-bold text-slate-600 uppercase">
                  En Atención
                </span>
              </div>
              <div className="bg-white/90 p-3 rounded-2xl border border-emerald-200/80 shadow-xs apple-press-subtle">
                <span className="text-2xl font-black text-emerald-600 block">
                  {conteoAtendidos}
                </span>
                <span className="text-[10px] font-bold text-slate-600 uppercase">
                  Resueltos Hoy
                </span>
              </div>
            </div>

            {/* Selector de Modo de Visualización (Control Segmentado Apple) */}
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                Capa de Google Maps
              </span>
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100/90 rounded-2xl border border-slate-200/70">
                <button
                  onClick={() => setModoVisualizacion("calles")}
                  className={`py-2 rounded-xl text-[11px] font-bold transition-all duration-120 apple-press flex items-center justify-center gap-1 ${
                    modoVisualizacion === "calles"
                      ? "bg-[#0a2540] text-amber-400 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <MapIcon className="w-3 h-3" />
                  <span>Calles</span>
                </button>
                <button
                  onClick={() => setModoVisualizacion("satelite")}
                  className={`py-2 rounded-xl text-[11px] font-bold transition-all duration-120 apple-press flex items-center justify-center gap-1 ${
                    modoVisualizacion === "satelite"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Globe className="w-3 h-3" />
                  <span>Satélite</span>
                </button>
                <button
                  onClick={() => setModoVisualizacion("terreno")}
                  className={`py-2 rounded-xl text-[11px] font-bold transition-all duration-120 apple-press flex items-center justify-center gap-1 ${
                    modoVisualizacion === "terreno"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Mountain className="w-3 h-3" />
                  <span>Relieve</span>
                </button>
              </div>
            </div>

            {/* Selector de Parroquia con re-enfoque automático en Google Maps */}
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                Explorar Parroquia en Google Maps
              </span>
              <div className="relative">
                <select
                  value={parroquiaSeleccionada}
                  onChange={(e) => {
                    setParroquiaSeleccionada(e.target.value);
                    setPuntoActivo(null);
                  }}
                  className="w-full bg-white border border-slate-200 rounded-2xl py-2.5 px-3.5 text-xs font-bold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer shadow-sm"
                >
                  <option value="todas">Todas las 5 Parroquias (La Victoria General)</option>
                  <option value="Castor Nieves Ríos">Castor Nieves Ríos (Las Mercedes / La Mora)</option>
                  <option value="Juan Vicente Bolívar y Ponte">Juan Vicente Bolívar y Ponte (Casco Histórico)</option>
                  <option value="Zuata">Zuata (San José / Los Budares)</option>
                  <option value="Pao de Zárate">Pao de Zárate</option>
                  <option value="Las Guacamayas">Las Guacamayas</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Lista de Focos de Residuos Monitoreados */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                Focos Activos en este Sector:
              </span>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {focosFiltrados.map((foco) => (
                  <button
                    key={foco.id}
                    onClick={() => setPuntoActivo(foco)}
                    className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all flex items-start justify-between gap-2 ${
                      puntoActivo?.id === foco.id
                        ? "bg-amber-50 border-amber-400 text-amber-950 shadow-sm"
                        : "bg-white border-slate-200 hover:bg-slate-100/80 text-slate-800"
                    }`}
                  >
                    <div>
                      <p className="font-bold text-[11px] leading-tight line-clamp-1">{foco.sector}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{foco.cuadrilla}</p>
                    </div>
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1 ${
                      foco.estado === "critico"
                        ? "bg-rose-600"
                        : foco.estado === "en_atencion"
                        ? "bg-amber-500"
                        : "bg-emerald-600"
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Leyenda de Estados de Incidencia estilo Caracas */}
            <div className="space-y-1.5 pt-2 border-t border-slate-200 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600 shrink-0"></span>
                <span className="font-bold text-slate-800 text-[11px]">Crítico:</span>
                <span className="text-slate-500 text-[10px]">Acumulación alta</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
                <span className="font-bold text-slate-800 text-[11px]">En atención:</span>
                <span className="text-slate-500 text-[10px]">Cuadrilla en sitio</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
                <span className="font-bold text-slate-800 text-[11px]">Atendido:</span>
                <span className="text-slate-500 text-[10px]">Recolectado</span>
              </div>
            </div>

            {/* Botón Verde Prominente: Reportar basura sin recoger con Apple Press */}
            <div className="pt-2">
              <Link
                href="/ribas-resuelve"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 apple-press"
              >
                <Send className="w-4 h-4" />
                <span>Reportar basura sin recoger</span>
              </Link>
            </div>
          </div>

          {/* ============================================================== */}
          {/* MAPA GOOGLE MAPS REAL CON TELEMETRÍA Y ENFOQUE (DERECHA)        */}
          {/* ============================================================== */}
          <div className="lg:col-span-8 bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative min-h-[580px] flex flex-col justify-between">
            {/* Barra superior de herramientas sobre Google Maps con Apple Glass Dark */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
              <div className="apple-glass-dark px-4 py-2 rounded-2xl text-xs font-bold text-white shadow-xl flex items-center gap-2 pointer-events-auto">
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span>
                  {puntoActivo
                    ? `Enfoque: ${puntoActivo.sector}`
                    : `Municipio José Félix Ribas • ${parroquiaSeleccionada === "todas" ? "La Victoria General" : parroquiaSeleccionada}`}
                </span>
              </div>
              <div className="apple-glass-dark px-3 py-1.5 rounded-full text-[10px] font-bold text-emerald-400 shadow-xl flex items-center gap-1.5 pointer-events-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Google Maps en Vivo</span>
              </div>
            </div>

            {/* Contenedor Iframe de Google Maps */}
            <div className="relative w-full h-[450px] sm:h-[580px] bg-slate-950">
              <iframe
                title="Google Maps La Victoria - Focos de Residuos"
                src={obtenerUrlGoogleMaps()}
                className="w-full h-full border-0 filter contrast-[1.05]"
                loading="lazy"
                allowFullScreen
              />

              {/* Ficha Flotante del Foco Seleccionado con Apple Glass Card */}
              {puntoActivo && (
                <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-80 z-30 apple-glass-card rounded-2xl shadow-2xl p-4 text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-150">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full text-white shadow-xs ${
                      puntoActivo.estado === "critico"
                        ? "bg-rose-600"
                        : puntoActivo.estado === "en_atencion"
                        ? "bg-amber-500"
                        : "bg-emerald-600"
                    }`}>
                      {puntoActivo.estado === "critico"
                        ? "Foco Crítico"
                        : puntoActivo.estado === "en_atencion"
                        ? "Cuadrilla en Atención"
                        : "Atendido / Limpio"}
                    </span>
                    <button
                      onClick={() => setPuntoActivo(null)}
                      className="text-slate-400 hover:text-slate-700 text-xs font-bold p-1 apple-press rounded-lg"
                    >
                      ✕
                    </button>
                  </div>

                  <h4 className="font-black text-xs text-slate-900 leading-snug">
                    {puntoActivo.sector}
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1">
                    {puntoActivo.descripcion}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-slate-100 space-y-1 text-[10px] text-slate-600">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-700">
                      <Truck className="w-3.5 h-3.5 shrink-0" />
                      <span>{puntoActivo.cuadrilla}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>Reporte: {puntoActivo.hora}</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <Link
                      href="/aseo"
                      className="block text-center w-full py-2 bg-[#0a2540] hover:bg-slate-900 text-amber-400 rounded-xl text-[11px] font-bold transition-all apple-press shadow-xs"
                    >
                      Ver Rutas del Sector →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Pie de mapa con información de sincronización */}
            <div className="bg-[#081829] px-6 py-3 text-slate-400 text-xs flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-slate-800">
              <span className="text-[11px] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Georreferenciación oficial de aseo con Google Maps • Ribas Limpia y Bonita</span>
              </span>
              <span className="text-[10px] text-slate-500">
                Coordenadas oficiales de La Victoria, Estado Aragua
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
