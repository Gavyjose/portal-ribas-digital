"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Truck,
  Calendar,
  Clock,
  Phone,
  Search,
  CheckCircle,
  MapPin,
  ExternalLink
} from "lucide-react";
import { ZONAS_ASEO, RutaAseo } from "@/data/aseo";

export function AseoUrbanoSection() {
  const [selectedZona, setSelectedZona] = useState<string>("todas");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filtrado de rutas según zona y texto de búsqueda
  const rutasFiltradas = ZONAS_ASEO.flatMap((zona) => {
    if (selectedZona !== "todas" && zona.id !== selectedZona) return [];

    return zona.rutas
      .filter((ruta) => {
        if (!searchQuery.trim()) return true;
        const query = searchQuery.toLowerCase();
        return (
          ruta.sectores.toLowerCase().includes(query) ||
          ruta.dias.toLowerCase().includes(query) ||
          ruta.transporte.toLowerCase().includes(query)
        );
      })
      .map((ruta) => ({ ...ruta, zonaNombre: zona.nombre, coordinador: zona.coordinador, telefono: zona.telefono }));
  });

  return (
    <section className="py-16 bg-white/90 backdrop-blur-md border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Truck className="w-3.5 h-3.5" />
              <span>Plan Ribas Limpia y Bonita</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Cronograma de Recolección y Aseo Urbano
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Consulta las rutas, días de recolección y horarios de las cuadrillas de camiones compactadores y trimotos en cada comunidad de La Victoria.
            </p>
          </div>
          <Link
            href="/aseo"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2.5 rounded-lg transition-colors shrink-0"
          >
            <span>Ver mapa y zonas completas</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Barra de Filtros y Búsqueda */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Input de Búsqueda */}
            <div className="relative w-full sm:flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Busca tu comunidad (ej. Las Mercedes, La Mora, Zuata, El Bosque, Casco Central)..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Selector de Zonas */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <button
                onClick={() => setSelectedZona("todas")}
                className={`px-3 py-2 rounded-lg text-xs font-semibold shrink-0 transition-colors ${
                  selectedZona === "todas"
                    ? "bg-slate-900 text-white shadow"
                    : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                Todas las Zonas
              </button>
              {ZONAS_ASEO.map((z) => (
                <button
                  key={z.id}
                  onClick={() => setSelectedZona(z.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold shrink-0 transition-colors ${
                    selectedZona === z.id
                      ? "bg-emerald-700 text-white shadow"
                      : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {z.nombre.replace(" Recolección", "")}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Rutas Encontradas */}
        {rutasFiltradas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rutasFiltradas.slice(0, 6).map((ruta, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {ruta.numero}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      {ruta.zonaNombre}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors flex items-start gap-1.5 mb-3">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{ruta.sectores}</span>
                  </h3>

                  <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                      <span><strong>Días:</strong> {ruta.dias}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                      <span><strong>Horario:</strong> {ruta.horario}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-slate-600 shrink-0" />
                      <span><strong>Unidad:</strong> {ruta.transporte}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-1 text-slate-600">
                    <span>Coord: <strong>{ruta.coordinador}</strong></span>
                  </div>
                  <a
                    href={`tel:${ruta.telefono.replace(/-/g, "")}`}
                    className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1 hover:underline"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{ruta.telefono}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <Truck className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-700">No se encontraron rutas para &quot;{searchQuery}&quot;</h4>
            <p className="text-xs text-slate-500 mt-1">
              Prueba con nombres de sectores conocidos como Las Mercedes, La Mora, Zuata, o Casco Central.
            </p>
          </div>
        )}

        {/* Tip para la Comunidad */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-900">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Recomendación a los vecinos:</strong> Coloque los desechos bien embalados en su acera o contenedor 30 minutos antes del inicio del turno.
            </span>
          </div>
          <Link
            href="/aseo"
            className="font-bold text-amber-900 hover:underline shrink-0"
          >
            Ver recomendaciones y zonas →
          </Link>
        </div>
      </div>
    </section>
  );
}
