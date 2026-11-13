"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Landmark,
  Compass,
  MapPin,
  Sparkles,
  Users,
  Shield,
  Award,
  ChevronRight
} from "lucide-react";
import { PARROQUIAS_RIBAS } from "@/data/parroquias";

export default function MunicipioPage() {
  return (
    <div className="py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Cabecera Hero Histórica con Fondo de Agua Fotográfico del Cuartel Mariano Montilla */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl text-white p-8 sm:p-14">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/la-victoria/cuartel-montilla.jpg"
              alt="Monumento Histórico Cuartel Mariano Montilla - La Victoria, Aragua"
              fill
              priority
              className="object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06182a]/95 via-[#0c2e50]/85 to-[#06182a]/95" />
          </div>

          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Cuna de la Juventud Heroica • La Victoria</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight drop-shadow-md">
              Municipio José Félix Ribas
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed drop-shadow">
              Tierra gloriosa donde el 12 de Febrero de 1814 el General en Jefe José Félix Ribas, junto a seminaristas y estudiantes de Caracas, libró la heroica Batalla de La Victoria, inmortalizando la proclama patria:
            </p>

            <blockquote className="border-l-4 border-amber-400 pl-4 py-1.5 italic text-amber-300 text-sm sm:text-base font-bold bg-black/20 rounded-r-xl backdrop-blur-sm">
              &ldquo;No podemos optar entre vencer o morir: ¡necesario es vencer!&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Sección de Símbolos y Patrimonio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Capital: La Victoria</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fundada en el siglo XVI, La Victoria es el centro económico, histórico y universitario del eje este del estado Aragua, con conexión estratégica a la Autopista Regional del Centro.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
              <Landmark className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Patrimonio Histórico</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Alberga monumentos nacionales como la Plaza José Félix Ribas con su escultura fundida en bronce, el Cuartel Mariano Montilla, la Casa Amarilla y la Iglesia Matriz Nuestra Señora de Guadalupe.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Potencial Productivo</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Combinación armónica de un pujante parque industrial (Soco y La Mora), un comercio vivo y una sólida vocación agrícola cafetalera y frutícola en Pao de Zárate y Guacamayas.
            </p>
          </div>
        </div>

        {/* Detalle Profundo de las 5 Parroquias */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-black text-slate-900">
              Las 5 Parroquias de Ribas
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Información territorial, demográfica y centros de atención comunitaria.
            </p>
          </div>

          <div className="space-y-6">
            {PARROQUIAS_RIBAS.map((p) => (
              <div
                key={p.id}
                id={p.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4 scroll-mt-24"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
                      Demarcación Parroquial
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      {p.nombre}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                      Cabecera: {p.cabecera}
                    </span>
                    <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                      {p.poblacionAprox}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {p.descripcion}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
                    <strong className="text-slate-900 block mb-1">Vocación y Economía:</strong>
                    <span className="text-slate-600">{p.vocacion}</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
                    <strong className="text-slate-900 block mb-1">Sede de Gobierno / Atención:</strong>
                    <span className="text-slate-600">{p.sedesAtencion}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Lugares Iconicos y Referencias:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {p.lugaresIconicos.map((lugar, i) => (
                      <span
                        key={i}
                        className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg border border-slate-200"
                      >
                        📍 {lugar}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
