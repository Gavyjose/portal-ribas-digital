"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  Clock,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Building,
  UserCheck
} from "lucide-react";
import { TRAMITES_MUNICIPALES } from "@/data/tramites";

export function TramitesDestacados() {
  const tramites = TRAMITES_MUNICIPALES.slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Autogestión y Simplificación</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Trámites Ciudadanos Más Solicitados
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Accede a la información clara de requisitos, costos y tiempos de entrega para gestionar tus documentos sin intermediarios.
            </p>
          </div>
          <Link
            href="/tramites"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-4 py-2.5 rounded-lg transition-colors shrink-0"
          >
            <span>Ver todos los trámites</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tramites.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-lg transition-all p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    t.modalidad === "En línea"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}>
                    {t.modalidad}
                  </span>
                  <span className="text-[11px] text-slate-400 capitalize">
                    {t.categoria}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 mb-2">
                  {t.titulo}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {t.descripcion}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.tiempoEstimado}</span>
                </div>

                <Link
                  href={t.enlaceAccion || "/tramites"}
                  className="w-full mt-2 py-2 px-3 bg-white group-hover:bg-blue-600 text-slate-700 group-hover:text-white border border-slate-300 group-hover:border-blue-600 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <span>Iniciar Solicitud</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
