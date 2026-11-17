"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Newspaper,
  Calendar,
  MapPin,
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { NOTICIAS_RIBAS } from "@/data/noticias";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function NoticiasSection() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const noticiasSecundarias = [
    {
      id: "sec-1",
      titulo: "Inaugurado nuevo pozo de agua potable en el sector El Castaño de Zuata",
      categoria: "AGUA Y SERVICIOS",
      fecha: "03 Nov, 2026",
      imagen: "/images/la-victoria/vista-aerea.jpg",
      parroquia: "Zuata",
    },
    {
      id: "sec-2",
      titulo: "Comienzan inscripciones para los Juegos Deportivos de la Juventud 2026",
      categoria: "DEPORTES",
      fecha: "01 Nov, 2026",
      imagen: "/images/la-victoria/cuartel-montilla.jpg",
      parroquia: "Castor Nieves Ríos",
    },
    {
      id: "sec-3",
      titulo: "Operativo especial de Registro Civil para emisión de actas y fe de vida",
      categoria: "CIUDADANÍA",
      fecha: "28 Oct, 2026",
      imagen: "/images/la-victoria/casa-amarilla.jpg",
      parroquia: "Juan Vicente Bolívar",
    },
  ];

  return (
    <section id="noticias" className="py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Cabecera de Sección estilo Caracas con Tipografía Óptica Apple */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 apple-title-display">
            Noticias Recientes
          </h2>
          <p className="text-sm text-slate-600 apple-subheading">
            Sigue de cerca las obras de vialidad, jornadas sociales, cultura y despliegues de la Alcaldía de Ribas.
          </p>
        </div>

        {/* ============================================================== */}
        {/* LAYOUT ASIMÉTRICO ESTILO CARACAS: Noticia Grande + Grid 2x2   */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LADO IZQUIERDO: Noticia Principal con Imagen Protagónica */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 group flex-1 min-h-[380px] flex flex-col justify-end p-6 sm:p-8">
              <Image
                src="/images/la-victoria/casa-amarilla.jpg"
                alt="Noticia Principal Alcaldía de Ribas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {/* Máscara de degradado oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-red-600 text-white font-extrabold text-[10px] uppercase tracking-wider rounded-md">
                    SERVICIOS PÚBLICOS
                  </span>
                  <span className="text-slate-300 text-xs flex items-center gap-1 font-medium">
                    <Calendar className="w-3 h-3" />
                    12 de Noviembre, 2026
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white leading-snug group-hover:text-amber-400 transition-colors drop-shadow">
                  {NOTICIAS_RIBAS[0].titulo}
                </h3>

                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed">
                  {NOTICIAS_RIBAS[0].resumen}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-amber-400 font-bold">
                  <span className="flex items-center gap-1 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    {NOTICIAS_RIBAS[0].parroquia}
                  </span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Leer nota completa →
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Grid 2x2 (Video, Redes Sociales y Noticias Secundarias) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Tarjeta 1: Video Sala Situacional 1x10 */}
            <div className="relative rounded-2xl overflow-hidden shadow border border-slate-200 group bg-slate-900 p-4 flex flex-col justify-between min-h-[180px]">
              <Image
                src="/images/la-victoria/vista-aerea.jpg"
                alt="Video Sala Situacional Ribas Resuelve"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover object-center opacity-40 group-hover:scale-105 transition-transform"
              />
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-2 py-0.5 bg-blue-600 text-white font-black text-[9px] uppercase tracking-wider rounded flex items-center gap-1">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  VIDEO OFICIAL
                </span>
                <span className="text-[10px] text-slate-300">11 Nov 2026</span>
              </div>
              <div className="relative z-10 mt-6">
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-tight">
                  Balance Semanal 1x10: Más de 170 reportes resueltos con cuadrillas
                </h4>
                <p className="text-[10px] text-slate-300 mt-1 line-clamp-1">
                  Sala Situacional en el Despacho Municipal
                </p>
              </div>
            </div>

            {/* Tarjeta 2: Instagram / Redes Sociales */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl overflow-hidden shadow border border-rose-300 group bg-gradient-to-br from-purple-700 via-rose-600 to-amber-500 p-4 text-white flex flex-col justify-between min-h-[180px] hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md text-white font-black text-[9px] uppercase tracking-wider rounded flex items-center gap-1">
                  <InstagramIcon className="w-3 h-3" />
                  INSTAGRAM
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-white/80" />
              </div>
              <div className="mt-4">
                <span className="text-[11px] font-bold text-amber-200">@AlcaldiaDeRibas</span>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight mt-1">
                  Sigue las historias y transmisiones de los operativos en directo
                </h4>
                <p className="text-[10px] text-white/80 mt-1">
                  Canal de comunicación oficial en redes
                </p>
              </div>
            </a>

            {/* Tarjeta 3: Noticia de Asfalto */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white p-4 flex flex-col justify-between shadow-sm hover:shadow transition-all group min-h-[180px]">
              <div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 mb-2">
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-900 font-bold rounded">
                    INFRAESTRUCTURA
                  </span>
                  <span>10 Nov 2026</span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-tight">
                  {NOTICIAS_RIBAS[1].titulo}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                  {NOTICIAS_RIBAS[1].resumen}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-400">
                <span>{NOTICIAS_RIBAS[1].parroquia}</span>
                <span className="text-amber-700 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Leer →
                </span>
              </div>
            </div>

            {/* Tarjeta 4: Jornada de Salud */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white p-4 flex flex-col justify-between shadow-sm hover:shadow transition-all group min-h-[180px]">
              <div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 mb-2">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 font-bold rounded">
                    SALUD INTEGRAL
                  </span>
                  <span>08 Nov 2026</span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">
                  {NOTICIAS_RIBAS[2].titulo}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                  {NOTICIAS_RIBAS[2].resumen}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-400">
                <span>{NOTICIAS_RIBAS[2].parroquia}</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Leer →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CARRUSEL INFERIOR CON NOTICIAS COMPLEMENTARIAS Y BOTÓN         */}
        {/* ============================================================== */}
        <div className="pt-4 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {noticiasSecundarias.map((n) => (
              <div
                key={n.id}
                className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all group flex gap-3.5 items-center apple-press-subtle"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                  <Image
                    src={n.imagen}
                    alt={n.titulo}
                    fill
                    sizes="80px"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[9px] text-slate-400 font-bold uppercase mb-1">
                    <span className="text-amber-800">{n.categoria}</span>
                    <span>•</span>
                    <span>{n.fecha}</span>
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 leading-tight">
                    {n.titulo}
                  </h5>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    {n.parroquia}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Botón Central estilo Caracas con Apple Press */}
          <div className="text-center pt-2">
            <Link
              href="/gacetas"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm apple-press"
            >
              <span>Ver todas las noticias y comunicados</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
