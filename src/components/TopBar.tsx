"use client";

import React from "react";
import Link from "next/link";
import { Phone, Bell, ShieldAlert, Sparkles, ChevronRight } from "lucide-react";

export function TopBar() {
  const alerts = [
    {
      text: "0800-RIBAS-01 • Servicio de Atención Inmediata y Emergencias",
      link: "tel:02444174115",
    },
    {
      text: "Horario de Recolección de Residuos Zonas A y B: 07:00 AM a 02:00 PM",
      link: "/aseo",
    },
    {
      text: "Hacienda Municipal: Período activo de autoliquidación de Actividades Económicas y Solvencias",
      link: "/oficina-virtual",
    },
    {
      text: "Ribas Resuelve: 171 reportes canalizados esta semana con cuadrillas de alumbrado y vialidad",
      link: "/ribas-resuelve",
    },
    {
      text: "Protección Civil Ribas: 0412-4558391 desplegados 24 horas",
      link: "tel:04124558391",
    },
  ];

  return (
    <div className="bg-[#051a2e] text-slate-200 text-xs py-1.5 px-3 sm:px-6 border-b border-slate-800/80 shadow-inner flex items-center justify-between gap-3 overflow-hidden select-none">
      {/* Badge de Alertas estilo Caracas */}
      <div className="flex items-center gap-2 shrink-0 z-10">
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-red-600 text-white font-black text-[10px] tracking-wider uppercase rounded shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <Bell className="w-3 h-3 ml-0.5" />
          <span>ALERTAS</span>
        </div>
      </div>

      {/* Cinta Marquesina / Ticker Continuo */}
      <div className="flex-1 overflow-hidden relative group">
        <div className="animate-ticker text-[11px] font-medium text-slate-300 gap-8 py-0.5">
          {/* Primer bloque */}
          {alerts.map((al, idx) => (
            <Link
              key={`a1-${idx}`}
              href={al.link}
              className="hover:text-amber-400 transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span className="text-amber-400 font-bold">•</span>
              <span>{al.text}</span>
            </Link>
          ))}

          {/* Bloque duplicado para bucle infinito suave */}
          {alerts.map((al, idx) => (
            <Link
              key={`a2-${idx}`}
              href={al.link}
              className="hover:text-amber-400 transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span className="text-amber-400 font-bold">•</span>
              <span>{al.text}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Enlace rápido de Emergencia */}
      <div className="hidden lg:flex items-center gap-3 shrink-0 z-10 text-[11px] border-l border-slate-700/80 pl-3">
        <a
          href="tel:02444174115"
          className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
        >
          <Phone className="w-3 h-3" />
          <span>Sede Central: 0244-4174115</span>
        </a>
        <span className="text-slate-600">|</span>
        <span className="text-amber-400 font-semibold flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          <span>La Victoria</span>
        </span>
      </div>
    </div>
  );
}
