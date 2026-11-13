"use client";

import React from "react";
import Link from "next/link";
import {
  AlertCircle,
  Lightbulb,
  Droplet,
  Construction,
  Trees,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Search
} from "lucide-react";

export function RibasResuelveSection() {
  const categoriasIncidencia = [
    { icon: Lightbulb, nombre: "Alumbrado Público", casos: "420 atendidos" },
    { icon: Droplet, nombre: "Botes de Agua / Tuberías", casos: "385 atendidos" },
    { icon: Construction, nombre: "Vialidad y Bacheo", casos: "290 atendidos" },
    { icon: Trees, nombre: "Desmalezamiento y Poda", casos: "175 atendidos" },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Lado Izquierdo: Información y Estadísticas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
              <span>Atención Comunitaria Directa</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Ribas Resuelve: Tu voz directa con las cuadrillas municipales
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              ¿Falla en el alumbrado de tu calle? ¿Un bote de agua potable o colector caído? Reporta en menos de 2 minutos adjuntando fotos y ubicación. El sistema genera un ticket único para que hagas seguimiento a la cuadrilla de atención.
            </p>

            {/* Cuadrícula de Categorías Frecuentes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {categoriasIncidencia.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-amber-400/40 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-amber-400 mb-2" />
                    <h4 className="text-xs font-bold text-white">{cat.nombre}</h4>
                    <span className="text-[10px] text-slate-400 mt-0.5 block">
                      {cat.casos}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Métricas de Efectividad */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-amber-400">1.420+</span>
                <p className="text-[11px] text-slate-400 font-medium">Casos resueltos este mes</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-emerald-400">92%</span>
                <p className="text-[11px] text-slate-400 font-medium">Efectividad de respuesta</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-sky-400">5/5</span>
                <p className="text-[11px] text-slate-400 font-medium">Parroquias conectadas</p>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Tarjeta de Acción Rápida y Consulta de Ticket */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                  Acción Inmediata
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  ¿Tienes una incidencia en tu sector?
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Puedes registrar un nuevo reporte o consultar cómo va la atención del tuyo.
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href="/ribas-resuelve"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-rose-600/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>Crear Nuevo Reporte Comunitario</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="relative flex items-center justify-center text-xs text-slate-500 py-1">
                  <span className="bg-slate-800 px-3 z-10 font-semibold text-slate-400">o consulta tu reporte</span>
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-700"></div>
                  </div>
                </div>

                {/* Buscador de Ticket */}
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-slate-300 block">
                    Número de Ticket de Seguimiento
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ej. RIB-2026-4821"
                      className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
                    />
                    <Link
                      href="/ribas-resuelve"
                      className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-lg text-xs font-semibold shrink-0 flex items-center gap-1 transition-colors"
                    >
                      <Search className="w-3.5 h-3.5" />
                      <span>Buscar</span>
                    </Link>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Recibes este código al registrar tu reporte por la web o vía sala situacional.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/60 flex items-center gap-3 text-xs text-slate-400">
                <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Integrado con los Cuadrantes de Paz y los comités comunales del Municipio Ribas.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
