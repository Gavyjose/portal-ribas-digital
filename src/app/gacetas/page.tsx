"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Search,
  Download,
  Calendar,
  FileText,
  Filter,
  CheckCircle2
} from "lucide-react";
import { GACETAS_RIBAS } from "@/data/noticias";

export default function GacetasPage() {
  const [tipoFiltro, setTipoFiltro] = useState<string>("todas");
  const [busqueda, setBusqueda] = useState<string>("");

  const gacetasFiltradas = GACETAS_RIBAS.filter((g) => {
    const coincideTipo = tipoFiltro === "todas" || g.tipo === tipoFiltro;
    const coincideTexto =
      g.numero.toLowerCase().includes(busqueda.toLowerCase()) ||
      g.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      g.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return coincideTipo && coincideTexto;
  });

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Transparencia y Marco Jurídico</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Archivo Digital de Gacetas y Ordenanzas
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Consulta los instrumentos jurídicos, reformas tributarias, reglamentos y decretos oficiales aprobados por el Concejo y la Alcaldía de Ribas.
          </p>
        </div>

        {/* Buscador y Filtro */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por número de gaceta, materia o palabra clave (ej. Catastro, Aseo, Actividades Económicas)..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTipoFiltro("todas")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                tipoFiltro === "todas"
                  ? "bg-[#0a2540] text-amber-400 shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Todas las Gacetas
            </button>
            <button
              onClick={() => setTipoFiltro("Extraordinaria")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                tipoFiltro === "Extraordinaria"
                  ? "bg-amber-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Extraordinarias
            </button>
            <button
              onClick={() => setTipoFiltro("Ordinaria")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                tipoFiltro === "Ordinaria"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Ordinarias
            </button>
          </div>
        </div>

        {/* Listado de Gacetas */}
        <div className="space-y-4">
          {gacetasFiltradas.length > 0 ? (
            gacetasFiltradas.map((g, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-500 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-black text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      {g.numero}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      g.tipo === "Extraordinaria"
                        ? "bg-amber-100 text-amber-900"
                        : "bg-blue-100 text-blue-900"
                    }`}>
                      {g.tipo}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{g.fecha}</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-1">
                    {g.titulo}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {g.descripcion}
                  </p>
                </div>

                <div className="shrink-0 pt-2 md:pt-0">
                  <button
                    onClick={() => alert(`Iniciando descarga de ${g.numero} en formato PDF.`)}
                    className="w-full md:w-auto px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow"
                  >
                    <Download className="w-4 h-4 text-amber-400" />
                    <span>Descargar PDF</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-2" />
              <h3 className="text-base font-bold text-slate-700">No se encontraron gacetas</h3>
              <p className="text-xs text-slate-500 mt-1">
                Prueba con otro término de búsqueda.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
