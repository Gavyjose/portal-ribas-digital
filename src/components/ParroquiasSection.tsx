"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Users,
  Compass,
  Landmark,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { PARROQUIAS_RIBAS } from "@/data/parroquias";

export function ParroquiasSection() {
  const [activeTab, setActiveTab] = useState(PARROQUIAS_RIBAS[0].id);
  const activeParroquia = PARROQUIAS_RIBAS.find((p) => p.id === activeTab) || PARROQUIAS_RIBAS[0];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Territorio Municipal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Nuestras 5 Parroquias: Historia, Gente y Futuro
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            El Municipio José Félix Ribas se extiende desde el dinámico valle urbano de La Victoria y Las Mercedes hasta las fértiles tierras de Pao de Zárate, Zuata y Las Guacamayas.
          </p>
        </div>

        {/* Pestañas de Selección de Parroquia */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {PARROQUIAS_RIBAS.map((p) => {
            const isSelected = p.id === activeTab;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all shadow-sm ${
                  isSelected
                    ? "bg-[#0a2540] text-amber-400 ring-2 ring-amber-400/50 shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {p.nombre.replace("Parroquia ", "")}
              </button>
            );
          })}
        </div>

        {/* Ficha Interactiva de la Parroquia Seleccionada */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Información Detallada */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full">
                  Cabecera: {activeParroquia.cabecera}
                </span>
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  <span>Población aprox: {activeParroquia.poblacionAprox}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                {activeParroquia.nombre}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeParroquia.descripcion}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-amber-600" />
                    <span>Vocación Productiva</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {activeParroquia.vocacion}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>Módulo de Atención</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {activeParroquia.sedesAtencion}
                  </p>
                </div>
              </div>

              {/* Lugares Icónicos */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Sitios Emblemáticos y de Interés
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeParroquia.lugaresIconicos.map((lugar, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-slate-100 hover:bg-amber-50 text-slate-700 px-3 py-1 rounded-lg border border-slate-200 transition-colors"
                    >
                      {lugar}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Panel Lateral de Acción */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#0a2540] to-[#0e3155] rounded-2xl p-6 text-white space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Landmark className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold">Atención en {activeParroquia.nombre.replace("Parroquia ", "")}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Descubre los operativos comunales, las rutas de aseo específicas y los proyectos de asfaltado e iluminación en esta demarcación.
              </p>

              <div className="pt-2 space-y-2">
                <Link
                  href={`/municipio#${activeParroquia.id}`}
                  className="w-full py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow"
                >
                  <span>Conocer más historia y turismo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/aseo"
                  className="w-full py-2.5 px-3 bg-white/10 hover:bg-white/15 text-white font-medium text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-white/10"
                >
                  <span>Ver aseo urbano en esta parroquia</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
