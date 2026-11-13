"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  ShieldCheck,
  FileText,
  AlertCircle,
  Truck,
  ArrowRight,
  Sparkles,
  CheckCircle2
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
    <section className="relative bg-gradient-to-br from-[#0a2540] via-[#0e3155] to-[#06182a] text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabecera del Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Portal Digital • Municipio José Félix Ribas</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Gobierno Digital y Cercano para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">La Victoria</span> y sus 5 Parroquias
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Realiza el pago de tus tributos, solicita citas de registro civil, reporta incidencias de servicios públicos y consulta gacetas desde cualquier lugar.
          </p>

          {/* Barra de Búsqueda Predictiva Unificada */}
          <div className="relative max-w-2xl mx-auto pt-4 text-left">
            <div className={`relative flex items-center bg-white rounded-2xl shadow-2xl transition-all duration-200 border-2 ${
              isFocused ? "border-amber-500 ring-4 ring-amber-500/20" : "border-transparent"
            }`}>
              <Search className="w-5 h-5 text-slate-400 ml-4 shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                placeholder="¿Qué trámite o servicio buscas? Ej. Solvencia, Registro Civil, Aseo..."
                className="w-full py-4 px-3 text-slate-800 placeholder-slate-400 text-sm sm:text-base focus:outline-none rounded-2xl"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="mr-3 text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-2 py-1 rounded-md"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Desplegable de Resultados Rápidos de Búsqueda */}
            {isFocused && filteredTramites.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-30">
                <div className="p-2 bg-slate-50 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Trámites y Servicios Encontrados
                </div>
                <div className="divide-y divide-slate-100">
                  {filteredTramites.map((tramite) => (
                    <Link
                      key={tramite.id}
                      href={tramite.enlaceAccion || "/tramites"}
                      className="p-3.5 hover:bg-amber-50/60 transition-colors flex items-start justify-between gap-3 group text-slate-800"
                    >
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold group-hover:text-amber-700 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{tramite.titulo}</span>
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {tramite.descripcion}
                        </p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 shrink-0 font-medium self-center">
                        {tramite.modalidad}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="p-2 bg-slate-50 text-center">
                  <Link
                    href="/tramites"
                    className="text-xs font-semibold text-amber-700 hover:text-amber-800"
                  >
                    Ver catálogo completo de trámites →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4 Accesos Rápidos Principales (Tarjetas Flotantes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {/* Tarjeta 1: Oficina Virtual */}
          <Link
            href="/oficina-virtual"
            className="group relative bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-amber-400/50 rounded-2xl p-5 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-amber-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold mb-4 shadow-md group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                Oficina Virtual
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Hacienda municipal, pago de impuestos sobre inmuebles, vehículos y patente comercial.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              <span>Gestionar en línea</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Tarjeta 2: Trámites & Registro Civil */}
          <Link
            href="/tramites"
            className="group relative bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-emerald-400/50 rounded-2xl p-5 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-slate-950 font-bold mb-4 shadow-md group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                Trámites y Registro Civil
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Partidas de nacimiento, constancias de residencia, fe de vida y fichas de catastro.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
              <span>Ver requisitos y citas</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Tarjeta 3: Ribas Resuelve */}
          <Link
            href="/ribas-resuelve"
            className="group relative bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-rose-400/50 rounded-2xl p-5 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-rose-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center text-white font-bold mb-4 shadow-md group-hover:scale-110 transition-transform">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                Ribas Resuelve
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Atención 1x10 y reportes comunitarios de alumbrado, botes de agua, vialidad y poda.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-rose-400 group-hover:text-rose-300">
              <span>Hacer reporte con foto</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Tarjeta 4: Rutas de Aseo Urbano */}
          <Link
            href="/aseo"
            className="group relative bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-sky-400/50 rounded-2xl p-5 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-sky-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-slate-950 font-bold mb-4 shadow-md group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                Rutas de Aseo Urbano
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Cronograma por comunidad: descubre qué día pasa el camión o la trimoto en tu calle.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-sky-400 group-hover:text-sky-300">
              <span>Consultar mi sector</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
