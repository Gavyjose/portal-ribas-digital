"use client";

import React from "react";
import { Phone, Clock, MapPin, ShieldAlert, Sparkles } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-[#06182a] text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Emergencias y Teléfonos */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-300">
          <div className="flex items-center gap-1.5 text-amber-400 font-medium">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Líneas de Emergencia:</span>
          </div>
          <a
            href="tel:02444174115"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            <span>0244-4174115 (Sede Central)</span>
          </a>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hover:text-white transition-colors">
            Protección Civil: <strong className="text-white">0412-4558391</strong>
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="text-rose-400 font-semibold">911 / Cuadrantes de Paz</span>
        </div>

        {/* Ubicación y Horarios */}
        <div className="flex items-center gap-4 text-slate-400 text-[11px]">
          <div className="hidden lg:flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-amber-400" />
            <span>Lun a Vie: 8:00 a.m. a 4:00 p.m.</span>
          </div>
          <span className="hidden lg:inline text-slate-600">|</span>
          <div className="flex items-center gap-1 text-slate-300">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>Casa Amarilla, La Victoria, Aragua</span>
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="flex items-center gap-1 bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20 font-medium">
            <Sparkles className="w-3 h-3" />
            <span>Cuna de la Juventud</span>
          </div>
        </div>
      </div>
    </div>
  );
}
