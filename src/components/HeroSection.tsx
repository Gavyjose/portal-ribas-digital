"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ShieldCheck,
  Building2,
  AlertCircle,
  Truck,
  Landmark,
  FileText,
  Play,
  Calendar,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  MapPin,
  Flame,
  Layers
} from "lucide-react";
import { TRAMITES_MUNICIPALES } from "@/data/tramites";
import { ZONAS_ASEO } from "@/data/aseo";

export function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Filtrado de trámites y zonas para la búsqueda predictiva
  const filteredTramites =
    searchTerm.trim() === ""
      ? []
      : TRAMITES_MUNICIPALES.filter(
          (t) =>
            t.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.dependencia.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 3);

  const filteredZonas =
    searchTerm.trim() === ""
      ? []
      : ZONAS_ASEO.filter(
          (z) =>
            z.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            z.rutas.some((r) =>
              r.sectores.toLowerCase().includes(searchTerm.toLowerCase())
            )
        ).slice(0, 2);

  // Servicios / Edificios Especiales estilo Alcaldía de Caracas
  const dependenciasEspeciales = [
    {
      id: "hacienda",
      sigla: "HACIENDA",
      nombre: "Pago de Impuestos",
      detalle: "Solvencias y Patentes",
      colorTag: "bg-red-700 text-white",
      borderColor: "border-red-600/60 hover:border-red-500",
      bgGradient: "from-[#0a192f]/90 via-[#0d213a]/80 to-[#1e0a12]/90",
      href: "/oficina-virtual",
      icon: ShieldCheck,
      badge: "SUMAR Ribas",
    },
    {
      id: "ribas-resuelve",
      sigla: "1x10 RIBAS",
      nombre: "Ribas Resuelve",
      detalle: "Alumbrado, Agua y Vialidad",
      colorTag: "bg-amber-600 text-white",
      borderColor: "border-amber-500/60 hover:border-amber-400",
      bgGradient: "from-[#0a192f]/90 via-[#1a1c23]/80 to-[#241407]/90",
      href: "/ribas-resuelve",
      icon: AlertCircle,
      badge: "Sala Situacional",
    },
    {
      id: "aseo",
      sigla: "ASEO URBANO",
      nombre: "Ribas Limpia y Bonita",
      detalle: "Zonas A, B, C y D • Rutas",
      colorTag: "bg-emerald-700 text-white",
      borderColor: "border-emerald-600/60 hover:border-emerald-500",
      bgGradient: "from-[#0a192f]/90 via-[#0e2722]/80 to-[#071d15]/90",
      href: "/aseo",
      icon: Truck,
      badge: "Flota Activa",
    },
    {
      id: "catastro",
      sigla: "CATASTRO",
      nombre: "Control Urbano",
      detalle: "Fichas y Permisología",
      colorTag: "bg-blue-700 text-white",
      borderColor: "border-blue-600/60 hover:border-blue-500",
      bgGradient: "from-[#0a192f]/90 via-[#0a2342]/80 to-[#051329]/90",
      href: "/tramites",
      icon: Building2,
      badge: "Inmuebles",
    },
    {
      id: "parroquias",
      sigla: "PARROQUIAS",
      nombre: "5 Parroquias",
      detalle: "La Victoria, Zuata, Pao...",
      colorTag: "bg-rose-700 text-white",
      borderColor: "border-rose-600/60 hover:border-rose-500",
      bgGradient: "from-[#0a192f]/90 via-[#1f0b14]/80 to-[#0a192f]/90",
      href: "/municipio",
      icon: Landmark,
      badge: "Territorio",
    },
    {
      id: "registro",
      sigla: "REGISTRO",
      nombre: "Registro Civil",
      detalle: "Citas y Actas Digitales",
      colorTag: "bg-purple-700 text-white",
      borderColor: "border-purple-600/60 hover:border-purple-500",
      bgGradient: "from-[#0a192f]/90 via-[#1a0f2e]/80 to-[#0a192f]/90",
      href: "/oficina-virtual/dashboard",
      icon: FileText,
      badge: "Atención Civil",
    },
  ];

  return (
    <section className="relative text-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[640px] flex items-center">
      {/* Fondo Panorámico de La Victoria con Tratamiento Atmosférico estilo Caracas */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/la-victoria/vista-aerea.jpg"
          alt="Panorámica del Municipio José Félix Ribas - La Victoria, Aragua"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Degradado y overlay con tono azul profundo para máxima legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051626]/95 via-[#08223d]/85 to-[#051626]/95 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_15%,#051626_95%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ============================================================== */}
          {/* COLUMNA IZQUIERDA: Titular, Búsqueda y CTAs estilo Caracas      */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill de la Alcaldía */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Alcaldía de José Félix Ribas</span>
            </div>

            {/* Gran Titular Hero con Tipografía Óptica Apple */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white apple-title-display drop-shadow-md">
              Transparencia, acción y comunidad al alcance de todos
            </h1>

            {/* Subtítulo */}
            <p className="text-sm sm:text-base text-slate-200 max-w-xl apple-subheading drop-shadow">
              Portal oficial de la Alcaldía del Municipio Ribas. Realiza tus
              trámites tributarios, consulta el cronograma de aseo urbano y
              reporta incidencias comunitarias en un solo lugar.
            </p>

            {/* Botones de Acción Estilo Caracas con Apple Press */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/aseo"
                className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2 transition-all apple-press group"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current text-white ml-0.5" />
                </div>
                <span>Ribas en movimiento</span>
              </Link>

              <Link
                href="#noticias"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 backdrop-blur-md transition-all flex items-center gap-2 apple-press"
              >
                <Calendar className="w-4 h-4 text-slate-300" />
                <span>Últimas noticias</span>
              </Link>
            </div>

            {/* Barra de Búsqueda Predictiva Unificada en Píldora */}
            <div className="relative max-w-xl pt-2">
              <div
                className={`relative flex items-center bg-white/95 backdrop-blur-md rounded-full shadow-2xl transition-all duration-200 border-2 p-1.5 ${
                  isFocused
                    ? "border-amber-400 ring-4 ring-amber-400/30 bg-white"
                    : "border-white/40"
                }`}
              >
                <Search className="w-5 h-5 text-slate-500 ml-3.5 shrink-0" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 250)}
                  placeholder="¿Qué información necesitas? (Ej. Solvencia, Aseo, Las Mercedes...)"
                  className="w-full py-2.5 px-3 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none bg-transparent"
                />
                <button
                  onClick={() => setIsFocused(true)}
                  className="px-5 py-2.5 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold text-xs rounded-full shadow transition-colors shrink-0"
                >
                  Buscar
                </button>
              </div>

              {/* Menú de Resultados Desplegable */}
              {isFocused && (filteredTramites.length > 0 || filteredZonas.length > 0) && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-30 text-slate-800">
                  {filteredTramites.length > 0 && (
                    <div>
                      <div className="p-2 bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b">
                        Trámites Encontrados
                      </div>
                      {filteredTramites.map((t) => (
                        <Link
                          key={t.id}
                          href={t.enlaceAccion || "/tramites"}
                          className="p-3 hover:bg-amber-50 flex items-center justify-between gap-2 border-b border-slate-100 last:border-none"
                        >
                          <div>
                            <p className="text-xs font-bold text-slate-800">{t.titulo}</p>
                            <p className="text-[10px] text-slate-500">{t.dependencia}</p>
                          </div>
                          <span className="text-[10px] bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded">
                            {t.modalidad}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}

                  {filteredZonas.length > 0 && (
                    <div>
                      <div className="p-2 bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b">
                        Rutas y Zonas de Aseo
                      </div>
                      {filteredZonas.map((z) => (
                        <Link
                          key={z.id}
                          href="/aseo"
                          className="p-3 hover:bg-emerald-50 flex items-center justify-between gap-2 border-b border-slate-100 last:border-none"
                        >
                          <div>
                            <p className="text-xs font-bold text-emerald-800">{z.nombre}</p>
                            <p className="text-[10px] text-slate-500">Coordinador: {z.coordinador}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-emerald-600" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Contador de Métricas Clave al Estilo Caracas */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 max-w-lg text-slate-300">
              <div>
                <div className="text-xl sm:text-2xl font-black text-amber-400">180K+</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Población</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400">5</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Parroquias</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-sky-400">24/7</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Ribas Resuelve</div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl sm:text-2xl font-black text-rose-400">4</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Zonas Aseo</div>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* COLUMNA DERECHA: Matriz de Edificios / Dependencias Especiales */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                DEPENDENCIAS Y SERVICIOS
              </span>
              <span className="text-[10px] text-amber-400/90 font-bold uppercase">
                Portal Oficial
              </span>
            </div>

            {/* Grid 2x3 con el diseño de credenciales oscuras y ribete rojo con Apple Press */}
            <div className="grid grid-cols-2 gap-3">
              {dependenciasEspeciales.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${item.bgGradient} p-3.5 border ${item.borderColor} shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 apple-press-subtle flex flex-col justify-between min-h-[110px]`}
                  >
                    {/* Cinta de Marca Superior */}
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-wider ${item.colorTag}`}>
                        {item.sigla}
                      </span>
                      <Icon className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform" />
                    </div>

                    {/* Contenido Principal de la Tarjeta */}
                    <div>
                      <h3 className="text-xs sm:text-sm font-black text-white group-hover:text-amber-300 transition-colors leading-tight">
                        {item.nombre}
                      </h3>
                      <p className="text-[10px] text-slate-300 line-clamp-1 mt-0.5">
                        {item.detalle}
                      </p>
                    </div>

                    {/* Pie de tarjeta con indicador */}
                    <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[9px] font-bold text-slate-400 group-hover:text-amber-400">
                      <span>{item.badge}</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
