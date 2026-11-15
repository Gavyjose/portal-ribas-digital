"use client";

import React, { useState, useEffect } from "react";
import {
  Truck,
  Clock,
  Play,
  Pause,
  MapPin,
  Phone,
  Layers,
  Compass,
  Sparkles,
  Users,
  CheckCircle2,
  AlertCircle,
  Eye,
  Info,
  Map as MapIcon,
  Globe,
  Mountain,
  Navigation
} from "lucide-react";
import { ZONAS_ASEO } from "@/data/aseo";

interface CuadrillaUbicacion {
  id: string;
  zonaId: string;
  zonaNombre: string;
  unidad: string;
  tipo: "compactador" | "trimoto" | "barrido";
  responsable: string;
  telefono: string;
  tripulacion: string;
  sectorActual: string;
  proximaParada: string;
  avanceRuta: number;
  horarioActivo: string;
  turnoValido: number[];
  posicionRelieve: { x: number; y: number };
  colorZona: string;
  queryGoogleMaps: string;
}

export function MapaRelieveAseo() {
  // Modo de mapa: Google Maps con Relieve, Satélite, Callejero o Simulador Táctico
  const [tipoMapa, setTipoMapa] = useState<"google-terreno" | "google-satelite" | "google-calles" | "simulador">("google-terreno");
  const [sectorGoogle, setSectorGoogle] = useState<string>("La+Victoria,+Aragua,+Venezuela");
  const [nombreSectorActivo, setNombreSectorActivo] = useState<string>("Vista General del Municipio Ribas");

  // Hora simulada en formato 24h
  const [horaSimulada, setHoraSimulada] = useState<number>(9);
  const [estaReproduciendo, setEstaReproduciendo] = useState<boolean>(false);
  const [zonaFiltro, setZonaFiltro] = useState<string>("todas");
  const [cuadrillaSeleccionada, setCuadrillaSeleccionada] = useState<CuadrillaUbicacion | null>(null);

  // Cuadrillas y flota georreferenciadas con enlaces a Google Maps
  const flotaRibas: CuadrillaUbicacion[] = [
    {
      id: "flota-c25",
      zonaId: "zona-a",
      zonaNombre: "Zona A (Las Mercedes)",
      unidad: "Camión C-25 IVECO",
      tipo: "compactador",
      responsable: "Chofer: Flores Alexis",
      telefono: "0424-3381710",
      tripulacion: "Rojas José, Ojeda Luis, Olivares José",
      sectorActual: "Las Mercedes, Sector 2, Calle 4",
      proximaParada: "Hospital José María Benítez",
      avanceRuta: 45,
      horarioActivo: "07:00 am a 02:00 pm",
      turnoValido: [7, 8, 9, 10, 11, 12, 13, 14],
      posicionRelieve: { x: 36, y: 38 },
      colorZona: "emerald",
      queryGoogleMaps: "Urbanizacion+Las+Mercedes,+La+Victoria,+Aragua"
    },
    {
      id: "flota-tr01",
      zonaId: "zona-a",
      zonaNombre: "Zona A (Corredor Vial)",
      unidad: "Trimoto TR-01",
      tipo: "trimoto",
      responsable: "Martínez Daniel",
      telefono: "0412-1316364",
      tripulacion: "Antonio Sosa, Sanmartín Franklin",
      sectorActual: "Av. Bicentenaria con Plaza Italia",
      proximaParada: "Peaje La Victoria / Distribuidor",
      avanceRuta: 60,
      horarioActivo: "07:00 am a 10:00 pm",
      turnoValido: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      posicionRelieve: { x: 44, y: 33 },
      colorZona: "emerald",
      queryGoogleMaps: "Avenida+Bicentenaria,+La+Victoria,+Aragua"
    },
    {
      id: "flota-c04",
      zonaId: "zona-b",
      zonaNombre: "Zona B (La Mora / Sarayauta)",
      unidad: "Camión C-04 SANY",
      tipo: "compactador",
      responsable: "Chofer: Carmona Juan",
      telefono: "0412-4558391",
      tripulacion: "Colmenares Pedro, Nieves Ángel",
      sectorActual: "Urb. La Mora 1, Calle 14",
      proximaParada: "Sarayauta y Pie de Cerro",
      avanceRuta: 35,
      horarioActivo: "07:00 am a 02:00 pm",
      turnoValido: [7, 8, 9, 10, 11, 12, 13, 14],
      posicionRelieve: { x: 26, y: 55 },
      colorZona: "amber",
      queryGoogleMaps: "Urbanizacion+La+Mora,+La+Victoria,+Aragua"
    },
    {
      id: "flota-c18",
      zonaId: "zona-c",
      zonaNombre: "Zona C (Casco Central y Soco)",
      unidad: "Camión C-18 Toronto",
      tipo: "compactador",
      responsable: "Chofer: Alexis Pérez",
      telefono: "0424-3166500",
      tripulacion: "Mendoza Carlos, Tovar Rafael, Gómez Ramón",
      sectorActual: "Calle Candelaria cruce con Soublette (Casa Amarilla)",
      proximaParada: "Plaza Ribas y Calle Rivas Dávila",
      avanceRuta: 70,
      horarioActivo: "06:00 am a 02:00 pm & 06:00 pm a 10:00 pm",
      turnoValido: [6, 7, 8, 9, 10, 11, 12, 13, 14, 18, 19, 20, 21, 22],
      posicionRelieve: { x: 53, y: 44 },
      colorZona: "blue",
      queryGoogleMaps: "Plaza+Ribas,+La+Victoria,+Aragua"
    },
    {
      id: "flota-c28",
      zonaId: "zona-d",
      zonaNombre: "Zona D (Parroquia Zuata)",
      unidad: "Camión C-28 Toronto",
      tipo: "compactador",
      responsable: "Chofer: Reinoso Luis",
      telefono: "0424-3664771",
      tripulacion: "José Figueredo y Cuadrilla Parroquial",
      sectorActual: "Zuata Centro, entrada Los Budares",
      proximaParada: "El Castaño y San José",
      avanceRuta: 55,
      horarioActivo: "07:00 am a 02:00 pm",
      turnoValido: [7, 8, 9, 10, 11, 12, 13, 14],
      posicionRelieve: { x: 78, y: 68 },
      colorZona: "rose",
      queryGoogleMaps: "Zuata,+Aragua,+Venezuela"
    }
  ];

  // Control de reproducción automática
  useEffect(() => {
    let intervalo: NodeJS.Timeout;
    if (estaReproduciendo) {
      intervalo = setInterval(() => {
        setHoraSimulada((prev) => (prev >= 21 ? 6 : prev + 1));
      }, 2500);
    }
    return () => clearInterval(intervalo);
  }, [estaReproduciendo]);

  const formatearHora = (h: number) => {
    const periodo = h >= 12 ? "PM" : "AM";
    const hora12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
    return `${hora12.toString().padStart(2, "0")}:00 ${periodo}`;
  };

  // Cuadrilla activa en la hora simulada seleccionada
  const cuadrillaEnTurno =
    flotaRibas.find((c) => c.turnoValido.includes(horaSimulada)) || flotaRibas[0];

  // Generar URL interactiva de Google Maps
  // t=p -> Terreno con Relieve topográfico real
  // t=k -> Satélite en alta resolución
  // t=m -> Mapa de calles estándar
  const obtenerUrlGoogleMaps = () => {
    const tipo =
      tipoMapa === "google-terreno"
        ? "p"
        : tipoMapa === "google-satelite"
        ? "k"
        : "m";
    return `https://maps.google.com/maps?q=${sectorGoogle}&t=${tipo}&z=14&ie=UTF8&iwloc=&output=embed`;
  };

  const saltarASector = (sectorQuery: string, nombre: string, cuadrilla?: CuadrillaUbicacion) => {
    setSectorGoogle(sectorQuery);
    setNombreSectorActivo(nombre);
    if (cuadrilla) {
      setCuadrillaSeleccionada(cuadrilla);
    }
  };

  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden mb-12 text-white">
      {/* ============================================================== */}
      {/* BARRA SUPERIOR: Switch de Google Maps y Modos                  */}
      {/* ============================================================== */}
      <div className="bg-[#06182a] p-4 sm:p-6 border-b border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
              INTEGRACIÓN OFICIAL GOOGLE MAPS • MUNICIPIO RIBAS
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
            Plataforma Geográfica: Rutas y Cuadrillas en La Victoria
          </h2>
          <p className="text-xs text-slate-300 mt-0.5">
            Explora el mapa real de Google Maps con vista de terreno en relieve, satélite y ubicación de las cuadrillas.
          </p>
        </div>

        {/* Selector de Modos de Mapa: Google Maps Terreno / Satélite / Calles / Táctico */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-800/90 rounded-2xl border border-slate-700">
          <button
            onClick={() => setTipoMapa("google-terreno")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              tipoMapa === "google-terreno"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <Mountain className="w-3.5 h-3.5 text-amber-300" />
            <span>Google Maps Relieve</span>
          </button>

          <button
            onClick={() => setTipoMapa("google-satelite")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              tipoMapa === "google-satelite"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-sky-300" />
            <span>Satélite</span>
          </button>

          <button
            onClick={() => setTipoMapa("google-calles")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              tipoMapa === "google-calles"
                ? "bg-slate-700 text-white shadow-md"
                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <MapIcon className="w-3.5 h-3.5 text-slate-300" />
            <span>Callejero</span>
          </button>

          <button
            onClick={() => setTipoMapa("simulador")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              tipoMapa === "simulador"
                ? "bg-amber-500 text-slate-950 shadow-md"
                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Simulador Vectorial</span>
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* BARRA DE HORARIO Y REPRODUCCIÓN                                */}
      {/* ============================================================== */}
      <div className="bg-[#082035] px-4 sm:px-6 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setEstaReproduciendo(!estaReproduciendo)}
            className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold transition-all shadow ${
              estaReproduciendo
                ? "bg-amber-500 text-slate-950"
                : "bg-emerald-600 text-white hover:bg-emerald-500"
            }`}
            title={estaReproduciendo ? "Pausar" : "Reproducir Despliegue"}
          >
            {estaReproduciendo ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400 font-bold uppercase">Hora Simulada:</span>
            <span className="text-base font-black text-amber-400 font-mono bg-slate-900/80 px-2.5 py-0.5 rounded-lg border border-slate-700">
              {formatearHora(horaSimulada)}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1 pl-2 border-l border-slate-700">
            {[7, 10, 14, 18].map((h) => (
              <button
                key={h}
                onClick={() => setHoraSimulada(h)}
                className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                  horaSimulada === h ? "bg-amber-400 text-slate-950" : "text-slate-400 hover:text-white"
                }`}
              >
                {formatearHora(h)}
              </button>
            ))}
          </div>
        </div>

        {/* Selector de Acceso Rápido a Sectores de Ribas en Google Maps */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-[11px]">
          <span className="text-slate-400 font-bold mr-1 shrink-0">Ir a Sector:</span>
          <button
            onClick={() => saltarASector("Urbanizacion+Las+Mercedes,+La+Victoria,+Aragua", "Urb. Las Mercedes (Zona A)", flotaRibas[0])}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-emerald-700 text-slate-200 text-[10px] font-bold shrink-0 transition-colors"
          >
            Las Mercedes
          </button>
          <button
            onClick={() => saltarASector("Plaza+Ribas,+La+Victoria,+Aragua", "Casco Central • Plaza Ribas (Zona C)", flotaRibas[3])}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-blue-700 text-slate-200 text-[10px] font-bold shrink-0 transition-colors"
          >
            Casco Central
          </button>
          <button
            onClick={() => saltarASector("Urbanizacion+La+Mora,+La+Victoria,+Aragua", "La Mora (Zona B)", flotaRibas[2])}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-amber-700 text-slate-200 text-[10px] font-bold shrink-0 transition-colors"
          >
            La Mora
          </button>
          <button
            onClick={() => saltarASector("Zona+Industrial+Soco,+La+Victoria,+Aragua", "Zona Industrial Soco", flotaRibas[3])}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-blue-700 text-slate-200 text-[10px] font-bold shrink-0 transition-colors"
          >
            Soco
          </button>
          <button
            onClick={() => saltarASector("Zuata,+Aragua,+Venezuela", "Parroquia Zuata (Zona D)", flotaRibas[4])}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-rose-700 text-slate-200 text-[10px] font-bold shrink-0 transition-colors"
          >
            Zuata
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* LIENZO DEL MAPA: GOOGLE MAPS REAL O SIMULADOR                  */}
      {/* ============================================================== */}
      <div className="relative w-full h-[460px] sm:h-[620px] bg-slate-950 overflow-hidden">
        {tipoMapa !== "simulador" ? (
          /* ============================================================ */
          /* MODO GOOGLE MAPS OFICIAL (Terreno / Satélite / Callejero)     */
          /* ============================================================ */
          <div className="relative w-full h-full">
            <iframe
              title="Google Maps La Victoria Aragua - Aseo Urbano"
              src={obtenerUrlGoogleMaps()}
              className="w-full h-full border-0 filter contrast-[1.05]"
              loading="lazy"
              allowFullScreen
            />

            {/* Badge de Sector Activo sobre Google Maps */}
            <div className="absolute top-4 left-4 z-20 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-700 shadow-xl flex items-center gap-2">
              <Navigation className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <p className="text-[10px] font-extrabold uppercase text-slate-400">Sector Enfocado en Google Maps</p>
                <p className="text-xs font-black text-white">{nombreSectorActivo}</p>
              </div>
            </div>

            {/* Guía en Esquina Superior Derecha */}
            <div className="absolute top-4 right-4 z-20 bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl border border-slate-700 shadow-xl text-[10px] text-slate-300 hidden sm:block max-w-xs">
              <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                <Mountain className="w-3.5 h-3.5 text-amber-400" />
                <span>Vista en Relieve Real (Google Maps):</span>
              </div>
              <p className="leading-relaxed text-slate-400">
                Puedes hacer zoom con la rueda del ratón y arrastrar para ver las elevaciones del Cerro La Chapa, La Cruz y el Valle del Río Aragua.
              </p>
            </div>
          </div>
        ) : (
          /* ============================================================ */
          /* MODO SIMULADOR VECTORIAL CON CUADRILLAS ANIMADAS             */
          /* ============================================================ */
          <div className="relative w-full h-full bg-[#071726]">
            {/* SVG Curvas de nivel topográficas sombreadas */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="cerroLaChapa2" cx="40%" cy="15%" r="35%">
                  <stop offset="0%" stopColor="#1a3a2a" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#071726" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="cerroLaCruz2" cx="65%" cy="60%" r="35%">
                  <stop offset="0%" stopColor="#2a1a15" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#071726" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="35%" cy="15%" r="220" fill="url(#cerroLaChapa2)" />
              <circle cx="75%" cy="70%" r="260" fill="url(#cerroLaCruz2)" />
              <path d="M 0,220 Q 300,200 600,260 T 1200,280" fill="none" stroke="#f59e0b" strokeWidth="5" strokeOpacity="0.8" />
              <path d="M 180,480 L 480,240 L 900,220" fill="none" stroke="#3b82f6" strokeWidth="4" strokeOpacity="0.9" />
              <path d="M 450,160 L 560,450" fill="none" stroke="#10b981" strokeWidth="3.5" strokeOpacity="0.85" />
              <path d="M 500,250 Q 650,380 920,530" fill="none" stroke="#ec4899" strokeWidth="3" strokeDasharray="6 4" strokeOpacity="0.75" />
            </svg>

            {flotaRibas.map((cuadrilla) => {
              const estaEnTurno = cuadrilla.turnoValido.includes(horaSimulada);
              return (
                <div
                  key={cuadrilla.id}
                  style={{ left: `${cuadrilla.posicionRelieve.x}%`, top: `${cuadrilla.posicionRelieve.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                >
                  <button
                    onClick={() => {
                      setCuadrillaSeleccionada(cuadrilla);
                      saltarASector(cuadrilla.queryGoogleMaps, cuadrilla.sectorActual, cuadrilla);
                    }}
                    className="relative group cursor-pointer"
                  >
                    {estaEnTurno && <span className="absolute -inset-2 rounded-full bg-emerald-400/30 animate-ping" />}
                    <div className="w-10 h-10 rounded-2xl bg-emerald-600 border-2 border-white flex items-center justify-center text-white shadow-xl">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded bg-black/80 text-[9px] font-bold text-white whitespace-nowrap shadow">
                      {cuadrilla.unidad}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* ============================================================== */}
        {/* TARJETA FLOTANTE CON TELEMETRÍA DE LA CUADRILLA ACTIVA        */}
        {/* ============================================================== */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:w-96 z-40 bg-slate-900/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl text-white border border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] font-black uppercase">
                {cuadrillaEnTurno.zonaNombre}
              </span>
              <span className="text-[10px] text-amber-400 font-bold">
                {cuadrillaEnTurno.horarioActivo}
              </span>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>

          <h3 className="text-sm font-black text-white leading-tight">
            {cuadrillaEnTurno.unidad}
          </h3>
          <p className="text-[11px] font-bold text-emerald-400 mt-0.5">
            {cuadrillaEnTurno.responsable}
          </p>

          <div className="mt-2 space-y-1.5 text-[11px] text-slate-300 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/80">
            <div className="flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>En recorrido ahora:</strong> {cuadrillaEnTurno.sectorActual}</span>
            </div>
            <div className="flex items-start gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
              <span><strong>Próxima parada:</strong> {cuadrillaEnTurno.proximaParada}</span>
            </div>
            <div className="flex items-start gap-1.5 text-[10px] text-slate-400">
              <Users className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span>Tripulación: {cuadrillaEnTurno.tripulacion}</span>
            </div>
          </div>

          {/* Barra de Progreso de la Cuadrilla */}
          <div className="mt-2.5">
            <div className="flex items-center justify-between text-[10px] font-bold mb-1">
              <span className="text-slate-400">Avance de Ruta:</span>
              <span className="text-emerald-400">{cuadrillaEnTurno.avanceRuta}%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${cuadrillaEnTurno.avanceRuta}%` }}
              />
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="mt-3 pt-2 border-t border-slate-800 flex items-center gap-2">
            <a
              href={`tel:${cuadrillaEnTurno.telefono.replace(/-/g, "")}`}
              className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Llamar al Coordinador ({cuadrillaEnTurno.telefono})</span>
            </a>
            <button
              onClick={() => saltarASector(cuadrillaEnTurno.queryGoogleMaps, cuadrillaEnTurno.sectorActual, cuadrillaEnTurno)}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 rounded-xl text-xs font-bold transition-colors"
              title="Centrar en Google Maps"
            >
              <Navigation className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
