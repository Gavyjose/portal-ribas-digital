"use client";

import React, { useState } from "react";
import {
  Truck,
  MapPin,
  Calendar,
  Clock,
  Phone,
  Search,
  CheckCircle2,
  AlertTriangle,
  Users
} from "lucide-react";
import { ZONAS_ASEO } from "@/data/aseo";

export default function AseoPage() {
  const [selectedZona, setSelectedZona] = useState<string>("todas");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const zonasFiltradas = ZONAS_ASEO.filter((z) => {
    if (selectedZona === "todas") return true;
    return z.id === selectedZona;
  });

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Mantenimiento Urbano y Ambiente</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Plan Integral de Recolección y Barrido
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Conoce el cronograma de camiones compactadores y trimotos que atienden a las comunidades de La Victoria, Las Mercedes, La Mora, Zuata y zonas industriales.
          </p>
        </div>

        {/* Buscador y Filtros */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Busca por sector, calle o urbanización (ej. Las Mercedes, La Mora 1, El Bosque, Zuata, Casco Central)..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-800"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedZona("todas")}
              className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                selectedZona === "todas"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Todas las Zonas (A, B, C y D)
            </button>
            {ZONAS_ASEO.map((z) => (
              <button
                key={z.id}
                onClick={() => setSelectedZona(z.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  selectedZona === z.id
                    ? "bg-emerald-700 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {z.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Listado de Zonas y Rutas */}
        <div className="space-y-10">
          {zonasFiltradas.map((zona) => {
            const rutasCoincidentes = zona.rutas.filter((r) => {
              if (!searchQuery.trim()) return true;
              const q = searchQuery.toLowerCase();
              return (
                r.sectores.toLowerCase().includes(q) ||
                r.dias.toLowerCase().includes(q) ||
                r.transporte.toLowerCase().includes(q)
              );
            });

            if (rutasCoincidentes.length === 0) return null;

            return (
              <div
                key={zona.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden"
              >
                {/* Cabecera de la Zona con Coordinador */}
                <div className="bg-gradient-to-r from-[#0a2540] to-[#12365c] text-white p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                      Operación Municipal
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black">{zona.nombre}</h2>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mt-2">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-amber-400" />
                        <span>Coord: <strong>{zona.coordinador}</strong></span>
                      </span>
                      <span>•</span>
                      <a
                        href={`tel:${zona.telefono.replace(/-/g, "")}`}
                        className="flex items-center gap-1 text-emerald-400 hover:underline"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{zona.telefono}</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {zona.camiones.map((c, i) => (
                      <span
                        key={i}
                        className="bg-white/10 text-slate-200 px-3 py-1 rounded-lg border border-white/10"
                      >
                        🚚 {c.split("-")[0]}
                      </span>
                    ))}
                    <span className="bg-amber-400/20 text-amber-300 px-3 py-1 rounded-lg border border-amber-400/30">
                      🛵 Trimotos: {zona.trimotos.join(", ")}
                    </span>
                  </div>
                </div>

                {/* Rutas de esta zona */}
                <div className="p-5 sm:p-6 divide-y divide-slate-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rutasCoincidentes.map((ruta, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-emerald-500 transition-all flex flex-col justify-between group shadow-sm hover:shadow"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                              {ruta.numero}
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium">
                              {ruta.transporte}
                            </span>
                          </div>

                          <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-3 flex items-start gap-1.5">
                            <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{ruta.sectores}</span>
                          </h3>

                          <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200/60">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                              <span><strong>Días:</strong> {ruta.dias}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                              <span><strong>Horario:</strong> {ruta.horario}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 pt-2 border-t border-slate-200/60 text-[10px] text-slate-500">
                          <span>Tripulación: {ruta.tripulacion}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Normas Ciudadanas de Aseo */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Normativa Ciudadana para una Ciudad Limpia</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">1. Horarios de Disposición</strong>
              Coloque sus bolsas en la acera únicamente los días correspondientes a su ruta, media hora antes de las 07:00 a.m. o en el turno asignado.
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">2. Escombros y Chatarras</strong>
              No deposite escombros ni ramas gruesas en los contenedores domiciliarios. Solicite un operativo especial de recolección en la Dirección de Servicios Públicos.
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">3. Comercios e Industrias</strong>
              Los comercios deben contar con su propio depósito interno hermético y cumplir con la tasa por servicio de recolección comercial.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
