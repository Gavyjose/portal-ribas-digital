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
  Building2,
  Landmark,
  MapPin,
  Lock,
  User,
  ExternalLink,
  BookOpen
} from "lucide-react";
import { TRAMITES_MUNICIPALES, Tramite } from "@/data/tramites";
import { useAuth } from "@/context/AuthContext";

export default function TramitesPage() {
  const { usuario } = useAuth();
  const [dependenciaSeleccionada, setDependenciaSeleccionada] = useState<string>("todas");
  const [busqueda, setBusqueda] = useState<string>("");
  const [tramiteAbierto, setTramiteAbierto] = useState<string | null>(null);

  const dependencias = [
    { id: "todas", nombre: "Todas las Dependencias", icon: Building2 },
    { id: "tributos", nombre: "Hacienda Municipal", icon: Coins },
    { id: "catastro", nombre: "Catastro Municipal", icon: Landmark },
    { id: "permisos", nombre: "Ingeniería y Control Urbano", icon: MapPin },
    { id: "registro-civil", nombre: "Registro Civil", icon: FileText },
  ];

  const tramitesFiltrados = TRAMITES_MUNICIPALES.filter((t) => {
    const coincideDep =
      dependenciaSeleccionada === "todas" || t.categoria === dependenciaSeleccionada;
    const coincideBusqueda =
      t.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.dependencia.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.requisitos.some((r) => r.toLowerCase().includes(busqueda.toLowerCase()));
    return coincideDep && coincideBusqueda;
  });

  return (
    <div className="py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Encabezado con Fondo de Agua Fotográfico del Cuartel Mariano Montilla */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl text-white p-8 sm:p-12 text-center">
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
              <Building2 className="w-3.5 h-3.5" />
              <span>Ventanilla Única de Información Pública</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow">
              Catálogo Oficial de Trámites por Dependencias
            </h1>
            <p className="text-sm text-slate-200 mt-2">
              Consulta de acceso libre a los requisitos, bases legales, aranceles y recaudos exigidos por la Alcaldía del Municipio Ribas para cada gestión ciudadana o comercial.
            </p>
          </div>
        </div>

        {/* Banner Informativo de Acceso / Sesión */}
        {usuario ? (
          <div className="p-4 bg-emerald-50/90 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-950 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Has iniciado sesión como <strong>{usuario.nombre}</strong> ({usuario.documento}). Puedes iniciar y hacer seguimiento a cualquiera de estos trámites directamente desde tu panel.
              </span>
            </div>
            <Link
              href="/oficina-virtual/dashboard"
              className="px-4 py-2 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold rounded-xl transition-colors shrink-0 shadow flex items-center gap-1.5"
            >
              <span>Ver Mis Expedientes Activos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          <div className="p-4 bg-amber-50/90 border border-amber-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-950 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-amber-700 shrink-0" />
              <span>
                <strong>Información Pública y Abierta:</strong> Los requisitos y costos son de libre consulta. Para formalizar la solicitud de un trámite o consultar su expediente en curso, debe autenticarse con su <strong>Usuario Único</strong>.
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/login"
                className="px-3.5 py-1.5 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold rounded-xl transition-colors shadow text-center"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/registro"
                className="px-3.5 py-1.5 bg-white hover:bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-300 transition-colors text-center"
              >
                Registrarme
              </Link>
            </div>
          </div>
        )}

        {/* Barra de Filtros por Dependencia y Buscador */}
        <div className="bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar trámite por nombre, dependencia o requisito (ej. Solvencia, Cédula Catastral, Registro Civil)..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900"
            />
          </div>

          {/* Botones de Dependencias */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {dependencias.map((dep) => {
              const Icon = dep.icon;
              const isSelected = dependenciaSeleccionada === dep.id;
              return (
                <button
                  key={dep.id}
                  onClick={() => setDependenciaSeleccionada(dep.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#0a2540] text-amber-400 shadow-md ring-2 ring-amber-400/30"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{dep.nombre}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Listado de Trámites Desplegables */}
        <div className="space-y-4">
          {tramitesFiltrados.length > 0 ? (
            tramitesFiltrados.map((tramite) => {
              const estaAbierto = tramiteAbierto === tramite.id;

              return (
                <div
                  key={tramite.id}
                  className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:border-slate-300"
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
                        <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md">
                          🏛️ {tramite.dependencia}
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
                        <span className="text-[10px] text-slate-400 block font-semibold uppercase">Tiempo Estimado</span>
                        <span className="text-xs font-bold text-slate-700">{tramite.tiempoEstimado}</span>
                      </div>
                      <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform ${estaAbierto ? "rotate-180" : ""}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Ficha Completa Desplegable con Requisitos y Base Legal */}
                  {estaAbierto && (
                    <div className="p-5 sm:p-6 bg-slate-50/90 border-t border-slate-200 space-y-5 text-xs text-slate-700">
                      {/* Datos Clave */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="bg-white p-3 rounded-xl border border-slate-200">
                          <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Tiempo de Respuesta:</span>
                          <strong className="text-slate-900 flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-amber-600" />
                            <span>{tramite.tiempoEstimado}</span>
                          </strong>
                        </div>

                        <div className="bg-white p-3 rounded-xl border border-slate-200">
                          <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Costo / Arancel:</span>
                          <strong className="text-slate-900 flex items-center gap-1.5">
                            <Coins className="w-4 h-4 text-emerald-600" />
                            <span>{tramite.costo}</span>
                          </strong>
                        </div>

                        <div className="bg-white p-3 rounded-xl border border-slate-200">
                          <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Oficina de Atención:</span>
                          <strong className="text-slate-900 flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                            <span className="truncate">{tramite.ubicacionOficina}</span>
                          </strong>
                        </div>
                      </div>

                      {/* Base Legal */}
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Fundamento Jurídico:</span>
                        <p className="text-xs text-slate-800 font-medium">
                          {tramite.baseLegal}
                        </p>
                      </div>

                      {/* Recaudos y Requisitos */}
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                          Recaudos y Requisitos Obligatorios:
                        </h4>
                        <ul className="space-y-2">
                          {tramite.requisitos.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Botón de Acción Inteligente */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
                        <span className="text-[11px] text-slate-500">
                          Para formalizar esta solicitud y generar su número de expediente municipal:
                        </span>

                        {usuario ? (
                          <Link
                            href="/oficina-virtual/dashboard"
                            className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl flex items-center gap-2 shadow transition-colors"
                          >
                            <FileText className="w-4 h-4" />
                            <span>Iniciar Expediente en mi Panel</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        ) : (
                          <Link
                            href="/login"
                            className="px-5 py-2.5 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold rounded-xl flex items-center gap-2 shadow transition-colors"
                          >
                            <Lock className="w-3.5 h-3.5" />
                            <span>Iniciar Trámite con Usuario Único</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-2" />
              <h3 className="text-base font-bold text-slate-700">No se encontraron trámites</h3>
              <p className="text-xs text-slate-500 mt-1">
                Prueba ajustando el término de búsqueda o seleccionando otra dependencia.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
