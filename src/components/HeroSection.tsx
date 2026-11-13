"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ShieldCheck,
  FileText,
  AlertCircle,
  Truck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MapPin
} from "lucide-react";
import { TRAMITES_MUNICIPALES } from "@/data/tramites";

export function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredTramites = searchTerm.trim() === ""
    ? []
    : TRAMITES_MUNICIPALES.filter((t) =>
        t.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 4);

  return (
    <section className="relative text-white pt-14 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[580px] flex items-center">
      {/* Fondo Fotográfico de La Victoria con efecto "Fondo de Agua / Overlay" */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/la-victoria/cuartel-montilla.jpg"
          alt="Cuartel Histórico Mariano Montilla - La Victoria, Aragua"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Máscara de degradado profundo para garantizar máximo contraste y elegancia institucional */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06182a]/95 via-[#0a2540]/85 to-[#06182a]/90 backdrop-blur-[1px]" />
        {/* Viñeta radial para concentrar la luz en el centro */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#06182a_90%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Cabecera del Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Portal Oficial • La Victoria • Municipio José Félix Ribas</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-md">
            Gobierno Digital y Cercano para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">La Victoria</span> y sus 5 Parroquias
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Realiza el pago de tus tributos, solicita citas de registro civil, reporta incidencias de servicios públicos y consulta gacetas desde cualquier lugar.
          </p>

          {/* Barra de Búsqueda Predictiva Unificada */}
          <div className="relative max-w-2xl mx-auto pt-4 text-left">
            <div className={`relative flex items-center bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl transition-all duration-200 border-2 ${
              isFocused ? "border-amber-400 ring-4 ring-amber-400/30 bg-white" : "border-white/40"
            }`}>
              <Search className="w-5 h-5 text-slate-500 ml-4 shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                placeholder="¿Qué trámite o servicio buscas? Ej. Solvencia, Registro Civil, Aseo..."
                className="w-full py-4 px-3 text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none rounded-2xl bg-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="mr-3 text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2 py-1 rounded-md"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Desplegable de Resultados Rápidos de Búsqueda */}
            {isFocused && filteredTramites.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-30">
                <div className="p-2.5 bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Trámites y Servicios Encontrados
                </div>
                <div className="divide-y divide-slate-100">
                  {filteredTramites.map((tramite) => (
                    <Link
                      key={tramite.id}
                      href={tramite.enlaceAccion || "/tramites"}
                      className="p-3.5 hover:bg-amber-50/80 transition-colors flex items-start justify-between gap-3 group text-slate-800"
                    >
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold group-hover:text-amber-800 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{tramite.titulo}</span>
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {tramite.descripcion}
                        </p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 shrink-0 font-bold self-center">
                        {tramite.modalidad}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="p-2.5 bg-slate-50 text-center">
                  <Link
                    href="/tramites"
                    className="text-xs font-bold text-amber-700 hover:text-amber-800"
                  >
                    Ver catálogo completo de trámites →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4 Accesos Rápidos Principales (Tarjetas Flotantes con Glassmorphism) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {/* Tarjeta 1: Oficina Virtual */}
          <Link
            href="/oficina-virtual"
            className="group relative bg-[#0a2540]/60 hover:bg-[#0a2540]/80 backdrop-blur-md border border-white/20 hover:border-amber-400 rounded-2xl p-5 transition-all duration-300 transform hover:-translate-y-1 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                Oficina Virtual
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Hacienda municipal, pago de impuestos sobre inmuebles, vehículos y patente comercial.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300">
              <span>Gestionar en línea</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Tarjeta 2: Trámites & Registro Civil */}
          <Link
            href="/tramites"
            className="group relative bg-[#0a2540]/60 hover:bg-[#0a2540]/80 backdrop-blur-md border border-white/20 hover:border-emerald-400 rounded-2xl p-5 transition-all duration-300 transform hover:-translate-y-1 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-slate-950 font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                Trámites y Registro Civil
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Partidas de nacimiento, constancias de residencia, fe de vida y fichas de catastro.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
              <span>Ver requisitos y citas</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Tarjeta 3: Ribas Resuelve */}
          <Link
            href="/ribas-resuelve"
            className="group relative bg-[#0a2540]/60 hover:bg-[#0a2540]/80 backdrop-blur-md border border-white/20 hover:border-rose-400 rounded-2xl p-5 transition-all duration-300 transform hover:-translate-y-1 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center text-white font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                Ribas Resuelve
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Atención 1x10 y reportes comunitarios de alumbrado, botes de agua, vialidad y poda.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-rose-400 group-hover:text-rose-300">
              <span>Hacer reporte con foto</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Tarjeta 4: Rutas de Aseo Urbano */}
          <Link
            href="/aseo"
            className="group relative bg-[#0a2540]/60 hover:bg-[#0a2540]/80 backdrop-blur-md border border-white/20 hover:border-sky-400 rounded-2xl p-5 transition-all duration-300 transform hover:-translate-y-1 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-slate-950 font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                Rutas de Aseo Urbano
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Cronograma por comunidad: descubre qué día pasa el camión o la trimoto en tu calle.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-sky-400 group-hover:text-sky-300">
              <span>Consultar mi sector</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
