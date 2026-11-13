"use client";

import React from "react";
import Link from "next/link";
import {
  Newspaper,
  Calendar,
  MapPin,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { NOTICIAS_RIBAS } from "@/data/noticias";

export function NoticiasSection() {
  return (
    <section className="py-16 bg-white/85 backdrop-blur-md border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Actualidad Municipal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Noticias y Gestión en Marcha
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Sigue las acciones del gobierno municipal en asfaltado, salud, cultura y operativos de servicios públicos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NOTICIAS_RIBAS.map((noticia) => (
            <article
              key={noticia.id}
              className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-amber-500 shadow-sm hover:shadow-lg transition-all p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-3">
                  <span className="text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {noticia.categoria}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{noticia.fecha.split(",")[0]}</span>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-3 mb-2 leading-snug">
                  {noticia.titulo}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {noticia.resumen}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 text-slate-500">
                  <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
                  <span className="line-clamp-1">{noticia.parroquia}</span>
                </div>
                <span className="text-amber-700 font-semibold group-hover:underline flex items-center gap-1">
                  Leer <ArrowRight className="w-2.5 h-2.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
