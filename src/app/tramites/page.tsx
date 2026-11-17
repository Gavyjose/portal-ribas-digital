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
  ChevronDown,
  Building2,
  Landmark,
  MapPin,
  Lock,
  Sparkles,
  Download,
  ListOrdered,
  CheckSquare,
  Square,
  Zap,
  PhoneCall
} from "lucide-react";
import { TRAMITES_MUNICIPALES } from "@/data/tramites";
import { MOMENTOS_VIDA } from "@/data/momentosVida";
import { useAuth } from "@/context/AuthContext";

export default function TramitesPage() {
  const { usuario } = useAuth();

  // Modo de visualización: "momentos" (estilo LifeSG) o "catalogo" (tradicional)
  const [modoVista, setModoVista] = useState<"momentos" | "catalogo">("momentos");

  // Filtros del catálogo tradicional
  const [dependenciaSeleccionada, setDependenciaSeleccionada] = useState<string>("todas");
  const [busqueda, setBusqueda] = useState<string>("");
  const [tramiteAbierto, setTramiteAbierto] = useState<string | null>(null);

  // Momento de vida seleccionado para ver en detalle
  const [momentoActivo, setMomentoActivo] = useState<string>("abrir-negocio");

  // Estado interactivo de requisitos marcados (Checklist ciudadano)
  const [requisitosMarcados, setRequisitosMarcados] = useState<Record<string, boolean>>({});

  const toggleRequisito = (idReq: string) => {
    setRequisitosMarcados((prev) => ({
      ...prev,
      [idReq]: !prev[idReq],
    }));
  };

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

  const momentoSeleccionadoData = MOMENTOS_VIDA.find((m) => m.id === momentoActivo) || MOMENTOS_VIDA[0];

  // Cálculo de progreso de requisitos para el momento de vida activo
  const totalRequisitosMomento = momentoSeleccionadoData.pasos.reduce(
    (acc, paso) => acc + paso.requisitos.length,
    0
  );
  const requisitosListosMomento = momentoSeleccionadoData.pasos.reduce(
    (acc, paso, pasoIdx) =>
      acc +
      paso.requisitos.filter((_, reqIdx) => requisitosMarcados[`${momentoActivo}-${pasoIdx}-${reqIdx}`]).length,
    0
  );
  const porcentajePreparacion = totalRequisitosMomento > 0
    ? Math.round((requisitosListosMomento / totalRequisitosMomento) * 100)
    : 0;

  return (
    <div className="py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Encabezado con Cuartel Mariano Montilla */}
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
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Plataforma Digital de Trámites y Servicios</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow apple-title-display">
              Trámites Ciudadanos del Municipio Ribas
            </h1>
            <p className="text-sm text-slate-200 mt-2 max-w-2xl mx-auto">
              Gestiona tus requerimientos de forma ágil, clara y sin intermediarios. Información oficial sobre requisitos, plazos de respuesta y aranceles legales.
            </p>
          </div>
        </div>

        {/* Banner Informativo de Acceso / Sesión */}
        {usuario ? (
          <div className="p-4 bg-emerald-50/90 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-950 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Has iniciado sesión como <strong>{usuario.nombre}</strong> ({usuario.documento}). Puedes iniciar y hacer seguimiento a cualquiera de tus trámites directamente desde tu panel personal.
              </span>
            </div>
            <Link
              href="/oficina-virtual/dashboard"
              className="px-4 py-2 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold rounded-xl transition-colors shrink-0 shadow flex items-center gap-1.5 apple-press"
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
                <strong>Información Pública y Abierta:</strong> Consulta libre de requisitos y recaudos. Para formalizar la solicitud y obtener tu número de radicación oficial, ingresa con tu <strong>Usuario Único</strong>.
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/login"
                className="px-3.5 py-1.5 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold rounded-xl transition-colors shadow text-center apple-press"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/registro"
                className="px-3.5 py-1.5 bg-white hover:bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-300 transition-colors text-center apple-press"
              >
                Registrarme
              </Link>
            </div>
          </div>
        )}

        {/* Selector de Modo: Momentos de Vida vs Catálogo Tradicional */}
        <div className="bg-white/90 backdrop-blur-md p-2 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setModoVista("momentos")}
              className={`flex-1 sm:flex-none px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 apple-press-subtle ${
                modoVista === "momentos"
                  ? "bg-[#0a2540] text-amber-400 shadow-sm ring-1 ring-amber-400/30"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Por Momentos de Vida (Recomendado)</span>
              <span className="hidden md:inline-block text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded-md font-semibold">
                Nuevo
              </span>
            </button>
            <button
              onClick={() => setModoVista("catalogo")}
              className={`flex-1 sm:flex-none px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 apple-press-subtle ${
                modoVista === "catalogo"
                  ? "bg-[#0a2540] text-amber-400 shadow-sm ring-1 ring-amber-400/30"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              <ListOrdered className="w-4 h-4 text-blue-400" />
              <span>Catálogo Tradicional por Dependencia</span>
            </button>
          </div>

          <span className="text-xs text-slate-500 px-3 hidden lg:block text-right">
            Inspirado en los mejores estándares de Gobierno Digital (GOV.UK & Singapur LifeSG)
          </span>
        </div>

        {/* ========================================================
            VISTA 1: POR MOMENTOS DE VIDA (ESTILO LIFESG / GOV.UK)
           ======================================================== */}
        {modoVista === "momentos" && (
          <div className="space-y-8">
            {/* Tarjetas de Selección de Momentos de Vida */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {MOMENTOS_VIDA.map((momento) => {
                const isSelected = momentoActivo === momento.id;
                return (
                  <button
                    key={momento.id}
                    onClick={() => setMomentoActivo(momento.id)}
                    className={`text-left p-5 rounded-2xl border transition-all relative flex flex-col justify-between apple-press-subtle ${
                      isSelected
                        ? "bg-[#0a2540] text-white border-blue-500 shadow-lg ring-2 ring-blue-500/30"
                        : "bg-white/95 text-slate-900 border-slate-200 hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    {momento.destacado && (
                      <span className="absolute -top-2.5 right-4 px-2 py-0.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-[10px] rounded-full uppercase tracking-wider shadow">
                        Más Solicitado
                      </span>
                    )}

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl">{momento.icono}</span>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                          isSelected
                            ? "bg-blue-400/20 text-blue-300 border border-blue-400/30"
                            : "bg-slate-100 text-slate-600"
                        }`}>
                          {momento.badge}
                        </span>
                      </div>
                      <div>
                        <h3 className={`text-base font-bold leading-snug ${isSelected ? "text-white" : "text-slate-900"}`}>
                          {momento.titulo}
                        </h3>
                        <p className={`text-xs mt-1 line-clamp-2 ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                          {momento.subtitulo}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/20 flex items-center justify-between text-[11px]">
                      <span className={isSelected ? "text-amber-400 font-semibold" : "text-slate-500"}>
                        {momento.tiempoTotal}
                      </span>
                      <span className={`font-bold flex items-center gap-1 ${isSelected ? "text-white" : "text-blue-600"}`}>
                        Explorar <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Panel Detallado del Momento de Vida Activo */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
              {/* Cabecera del Momento */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{momentoSeleccionadoData.icono}</span>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-md">
                      {momentoSeleccionadoData.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight apple-title-display">
                    {momentoSeleccionadoData.titulo}
                  </h2>
                  <p className="text-sm text-slate-600">
                    {momentoSeleccionadoData.descripcion}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col gap-2 shrink-0 sm:min-w-[280px]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Tiempo total estimado:</span>
                    <strong className="text-slate-900 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      {momentoSeleccionadoData.tiempoTotal}
                    </strong>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Costos o Aranceles:</span>
                    <strong className="text-slate-900 flex items-center gap-1 text-right">
                      <Coins className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{momentoSeleccionadoData.costoEstimado}</span>
                    </strong>
                  </div>

                  {/* Barra de Preparación Ciudadana */}
                  <div className="mt-2 pt-2 border-t border-slate-200 space-y-1">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-600 font-semibold">Tu lista de recaudos:</span>
                      <span className="text-blue-600 font-bold">{porcentajePreparacion}% listo</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
                        style={{ width: `${porcentajePreparacion}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Guía Paso a Paso con Checklist Interactivo */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <ListOrdered className="w-5 h-5 text-blue-600" />
                    <span>Ruta Integrada de Gestión (Paso a Paso)</span>
                  </h3>
                  <span className="text-xs text-slate-500 hidden sm:block">
                    Marca los requisitos que ya posees para preparar tu expediente
                  </span>
                </div>

                <div className="space-y-4">
                  {momentoSeleccionadoData.pasos.map((paso, pasoIdx) => (
                    <div
                      key={paso.numero}
                      className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-white to-slate-50/50 hover:border-slate-300 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-xl bg-[#0a2540] text-amber-400 font-black flex items-center justify-center text-sm shrink-0 shadow-sm">
                            {paso.numero}
                          </span>
                          <div>
                            <h4 className="text-base font-bold text-slate-900">
                              {paso.titulo}
                            </h4>
                            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 mt-0.5">
                              <Building2 className="w-3.5 h-3.5 text-slate-400" />
                              {paso.dependencia}
                            </span>
                          </div>
                        </div>

                        <span className="self-start sm:self-auto text-[11px] font-bold px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-600" />
                          {paso.tiempo}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 mb-3 pl-11">
                        {paso.descripcion}
                      </p>

                      {/* Recaudos del Paso con Checkboxes Interactivos */}
                      <div className="pl-11 pt-2 border-t border-slate-100">
                        <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                          Recaudos exigidos para este paso:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {paso.requisitos.map((req, reqIdx) => {
                            const reqId = `${momentoActivo}-${pasoIdx}-${reqIdx}`;
                            const isChecked = !!requisitosMarcados[reqId];

                            return (
                              <button
                                key={reqIdx}
                                type="button"
                                onClick={() => toggleRequisito(reqId)}
                                className={`text-left p-2.5 rounded-xl border text-xs transition-all flex items-start gap-2 apple-press-subtle ${
                                  isChecked
                                    ? "bg-emerald-50/80 border-emerald-300 text-emerald-950 font-medium"
                                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                                }`}
                              >
                                {isChecked ? (
                                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                ) : (
                                  <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                )}
                                <span className={isChecked ? "line-through opacity-80" : ""}>{req}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documentos y Formularios Descargables */}
              {momentoSeleccionadoData.documentosDescargables && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Download className="w-4 h-4 text-blue-600" />
                    <span>Planillas y Formularios Oficiales para Descarga Directa:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {momentoSeleccionadoData.documentosDescargables.map((doc, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs hover:border-slate-300 transition-colors"
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <FileText className="w-4 h-4 text-red-500 shrink-0" />
                          <span className="font-medium text-slate-800 truncate">{doc.nombre}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0 pl-2">
                          {doc.formato} • {doc.tamano}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Botón de Acción Principal */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                <div className="text-xs text-slate-500 text-center sm:text-left">
                  <span>¿Tienes dudas sobre los recaudos de este momento de vida?</span>
                  <a
                    href="https://wa.me/584124558391?text=Hola,%20tengo%20dudas%20sobre%20el%20trámite%20en%20el%20Municipio%20Ribas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
                  >
                    <PhoneCall className="w-3 h-3" />
                    Consultar por WhatsApp
                  </a>
                </div>

                {usuario ? (
                  <Link
                    href="/oficina-virtual/dashboard"
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors apple-press"
                  >
                    <Zap className="w-4 h-4 text-amber-300" />
                    <span>Iniciar Expediente Digital Unificado</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="w-full sm:w-auto px-6 py-3 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors apple-press"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Iniciar con mi Usuario Único</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            VISTA 2: CATÁLOGO TRADICIONAL POR DEPENDENCIA
           ======================================================== */}
        {modoVista === "catalogo" && (
          <div className="space-y-6">
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
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-2 apple-press-subtle ${
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
                                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl flex items-center gap-2 shadow transition-colors apple-press"
                              >
                                <FileText className="w-4 h-4" />
                                <span>Iniciar Expediente en mi Panel</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            ) : (
                              <Link
                                href="/login"
                                className="px-5 py-2.5 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold rounded-xl flex items-center gap-2 shadow transition-colors apple-press"
                              >
                                <Lock className="w-4 h-4" />
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
        )}
      </div>
    </div>
  );
}
