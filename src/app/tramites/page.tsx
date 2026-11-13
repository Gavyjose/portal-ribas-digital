"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Search,
  CheckCircle2,
  Clock,
  Coins,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Building,
  Users
} from "lucide-react";
import { TRAMITES_MUNICIPALES, Tramite } from "@/data/tramites";

export default function TramitesPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("todas");
  const [busqueda, setBusqueda] = useState<string>("");
  const [tramiteAbierto, setTramiteAbierto] = useState<string | null>(null);

  const categorias = [
    { id: "todas", nombre: "Todos los Trámites" },
    { id: "tributos", nombre: "Hacienda y Tributos" },
    { id: "registro-civil", nombre: "Registro Civil" },
    { id: "catastro", nombre: "Catastro Municipal" },
    { id: "permisos", nombre: "Permisología y Comercio" },
  ];

  const tramitesFiltrados = TRAMITES_MUNICIPALES.filter((t) => {
    const coincideCategoria =
      categoriaSeleccionada === "todas" || t.categoria === categoriaSeleccionada;
    const coincideBusqueda =
      t.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.requisitos.some((r) => r.toLowerCase().includes(busqueda.toLowerCase()));
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con Fondo de Agua Fotográfico del Cuartel Mariano Montilla */}
        <div className="relative rounded-3xl overflow-hidden mb-10 shadow-xl text-white p-8 sm:p-12 text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/la-victoria/cuartel-montilla.jpg"
              alt="Cuartel Mariano Montilla - La Victoria, Aragua"
              fill
              priority
              className="object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06182a]/95 via-[#0c2e50]/85 to-[#06182a]/95" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <FileText className="w-3.5 h-3.5" />
              <span>Ventanilla Única • Servicios Simplificados</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow">
              Catálogo Oficial de Trámites Municipales
            </h1>
            <p className="text-sm text-slate-200 mt-2">
              Consulta los requisitos, aranceles, plazos y modalidades de solicitud para gestionar tus documentos en la Alcaldía de Ribas.
            </p>
          </div>
        </div>

        {/* Barra de Filtros y Búsqueda */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por nombre de trámite o requisito (ej. Solvencia, Registro Civil, Ficha Catastral)..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-800"
            />
          </div>

          {/* Botones de Categorías */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaSeleccionada(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  categoriaSeleccionada === cat.id
                    ? "bg-[#0a2540] text-amber-400 shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Listado de Trámites */}
        <div className="space-y-4">
          {tramitesFiltrados.length > 0 ? (
            tramitesFiltrados.map((tramite) => {
              const estaAbierto = tramiteAbierto === tramite.id;

              return (
                <div
                  key={tramite.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
                >
                  <div
                    onClick={() => setTramiteAbierto(estaAbierto ? null : tramite.id)}
                    className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          tramite.modalidad === "En línea"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-amber-100 text-amber-800"
                        }`}>
                          {tramite.modalidad}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                          {tramite.categoria.replace("-", " ")}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {tramite.titulo}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {tramite.descripcion}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 sm:self-center">
                      <div className="text-right hidden sm:block">
                        <span className="text-[11px] text-slate-400 block">Tiempo estimado</span>
                        <span className="text-xs font-semibold text-slate-700">{tramite.tiempoEstimado}</span>
                      </div>
                      <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform ${estaAbierto ? "rotate-180" : ""}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Detalle Desplegable con Requisitos */}
                  {estaAbierto && (
                    <div className="p-5 sm:p-6 bg-slate-50/70 border-t border-slate-100 space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                          <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                          <span><strong>Tiempo de respuesta:</strong> {tramite.tiempoEstimado}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                          <Coins className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span><strong>Arancel / Tasa:</strong> {tramite.costo}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                          Requisitos para la consignación:
                        </h4>
                        <ul className="space-y-1.5">
                          {tramite.requisitos.map((req, i) => (
                            <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 flex flex-wrap gap-3">
                        <Link
                          href={tramite.enlaceAccion || "/oficina-virtual"}
                          className="px-4 py-2 bg-[#0a2540] hover:bg-slate-900 text-amber-400 text-xs font-bold rounded-xl flex items-center gap-2 transition-colors shadow"
                        >
                          <ShieldCheck className="w-4 h-4" />
                          <span>Tramitar en Oficina Virtual</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-2" />
              <h3 className="text-base font-bold text-slate-700">No se encontraron trámites</h3>
              <p className="text-xs text-slate-500 mt-1">
                Intenta ajustando el término de búsqueda o seleccionando otra categoría.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
