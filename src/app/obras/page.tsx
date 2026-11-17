"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  HardHat,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  MapPin,
  TrendingUp,
  Droplets,
  Zap,
  Flame,
  Award,
  ArrowRight,
  Eye,
  MessageSquare,
  ShieldCheck,
  Send,
  X,
  Sparkles,
  Users,
  Compass
} from "lucide-react";
import {
  OBRAS_PUBLICAS,
  PARROQUIAS_RIBAS,
  CATEGORIAS_OBRAS,
  RESUMEN_GLOBAL_OBRAS,
  ObraPublica
} from "@/data/obrasPublicas";

export default function ObrasPage() {
  const [parroquiaFiltro, setParroquiaFiltro] = useState<string>("todas");
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>("todas");
  const [busqueda, setBusqueda] = useState<string>("");

  // Estado para el visor interactivo Antes / Después por obra (obraId -> 'antes' | 'despues')
  const [vistaFoto, setVistaFoto] = useState<Record<string, "antes" | "despues">>({});

  // Estado para el modal de auditoría ciudadana
  const [obraParaAuditoria, setObraParaAuditoria] = useState<ObraPublica | null>(null);
  const [comentarioVecino, setComentarioVecino] = useState<string>("");
  const [calificacionVecino, setCalificacionVecino] = useState<number>(5);
  const [nombreVecino, setNombreVecino] = useState<string>("");
  const [comunidadVecino, setComunidadVecino] = useState<string>("");
  const [auditoriaEnviada, setAuditoriaEnviada] = useState<boolean>(false);

  const toggleFoto = (obraId: string) => {
    setVistaFoto((prev) => ({
      ...prev,
      [obraId]: prev[obraId] === "antes" ? "despues" : "antes",
    }));
  };

  const obrasFiltradas = OBRAS_PUBLICAS.filter((obra) => {
    const coincideParroquia =
      parroquiaFiltro === "todas" || obra.parroquiaId === parroquiaFiltro;
    const coincideCategoria =
      categoriaFiltro === "todas" || obra.categoria === categoriaFiltro;
    const coincideBusqueda =
      obra.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      obra.subtitulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      obra.ubicacion.toLowerCase().includes(busqueda.toLowerCase()) ||
      obra.parroquiaNombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      obra.comunidadVeedora.toLowerCase().includes(busqueda.toLowerCase());

    return coincideParroquia && coincideCategoria && coincideBusqueda;
  });

  const handleEnviarAuditoria = (e: React.FormEvent) => {
    e.preventDefault();
    setAuditoriaEnviada(true);
    setTimeout(() => {
      setAuditoriaEnviada(false);
      setObraParaAuditoria(null);
      setComentarioVecino("");
      setNombreVecino("");
      setComunidadVecino("");
    }, 2500);
  };

  return (
    <div className="py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Encabezado Principal con Imagen de Fondo */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl text-white p-8 sm:p-12 text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/la-victoria/vista-aerea.jpg"
              alt="Vista panorámica de La Victoria y las 5 Parroquias"
              fill
              priority
              className="object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06182a]/95 via-[#0c2e50]/85 to-[#06182a]/95" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Ribas Transparente • Rendición de Cuentas Ciudadana</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow apple-title-display">
              Monitor de Obras Públicas en las 5 Parroquias
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mt-2 max-w-2xl mx-auto font-medium">
              Conoce en tiempo real el destino de los tributos y recursos públicos: porcentaje de avance, contratos, cuadrillas comunitarias y comparativa fotográfica de antes y después.
            </p>
          </div>
        </div>

        {/* Tablero de Indicadores Globales (KPIs de Gestión Transparente) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase text-slate-400 block">Proyectos Activos</span>
              <strong className="text-xl sm:text-2xl font-black text-slate-900">
                {RESUMEN_GLOBAL_OBRAS.totalObras} Obras
              </strong>
              <span className="text-[10px] text-emerald-600 font-bold block">
                {RESUMEN_GLOBAL_OBRAS.obrasCulminadas} ya culminadas
              </span>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase text-slate-400 block">Plan Asfalto</span>
              <strong className="text-xl sm:text-2xl font-black text-slate-900">
                {RESUMEN_GLOBAL_OBRAS.toneladasAsfalto}
              </strong>
              <span className="text-[10px] text-slate-500 font-semibold block">Toneladas colocadas</span>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase text-slate-400 block">Pozos de Agua</span>
              <strong className="text-xl sm:text-2xl font-black text-slate-900">
                {RESUMEN_GLOBAL_OBRAS.pozosReactivados} Pozos
              </strong>
              <span className="text-[10px] text-emerald-600 font-bold block">100% operativos</span>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase text-slate-400 block">Iluminación LED</span>
              <strong className="text-xl sm:text-2xl font-black text-slate-900">
                {RESUMEN_GLOBAL_OBRAS.luminariasInstaladas}
              </strong>
              <span className="text-[10px] text-slate-500 font-semibold block">Lámparas instaladas</span>
            </div>
          </div>
        </div>

        {/* Barra de Filtros Interactivos (Parroquia, Categoría y Buscador) */}
        <div className="bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar obra por calle, sector, cuadrilla o consejo comunal veedor..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900"
            />
          </div>

          {/* Filtro por Parroquias de Ribas */}
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Filtrar por Parroquia:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {PARROQUIAS_RIBAS.map((parr) => {
                const isSelected = parroquiaFiltro === parr.id;
                return (
                  <button
                    key={parr.id}
                    onClick={() => setParroquiaFiltro(parr.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 apple-press-subtle ${
                      isSelected
                        ? "bg-[#0a2540] text-amber-400 shadow-sm ring-2 ring-amber-400/30"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    <span>{parr.icono}</span>
                    <span>{parr.nombre}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filtro por Categoría de Obra */}
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Filtrar por Tipo de Infraestructura:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {CATEGORIAS_OBRAS.map((cat) => {
                const isSelected = categoriaFiltro === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setCategoriaFiltro(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all flex items-center gap-1.5 apple-press-subtle ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <span>{cat.icono}</span>
                    <span>{cat.nombre}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Listado de Obras con Comparador Antes / Después */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <HardHat className="w-5 h-5 text-amber-500" />
              <span>Obras Registradas ({obrasFiltradas.length})</span>
            </h2>
            <span className="text-xs text-slate-500 hidden sm:block">
              Haz clic en "Ver Antes / Después" para comprobar los cambios físicos
            </span>
          </div>

          {obrasFiltradas.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {obrasFiltradas.map((obra) => {
                const modoFoto = vistaFoto[obra.id] || "despues";
                const fotoAMostrar = modoFoto === "antes" ? obra.fotoAntes : obra.fotoDespues;

                return (
                  <div
                    key={obra.id}
                    className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Imagen con Toggle Antes / Después */}
                      <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                        <Image
                          src={fotoAMostrar}
                          alt={obra.titulo}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Badges de Parroquia y Estado */}
                        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
                          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-amber-400" />
                            {obra.parroquiaNombre}
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold">
                            {obra.iconoCategoria} {obra.categoriaNombre}
                          </span>
                        </div>

                        {/* Botón Interactivo Toggle Antes / Después */}
                        <div className="absolute top-3 right-3">
                          <button
                            onClick={() => toggleFoto(obra.id)}
                            className="px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white text-slate-900 text-xs font-black shadow-lg backdrop-blur-md transition-all flex items-center gap-1.5 apple-press"
                          >
                            <Eye className="w-3.5 h-3.5 text-blue-600" />
                            <span>
                              {modoFoto === "despues" ? "Ver Estado Inicial" : "Ver Avance Actual"}
                            </span>
                          </button>
                        </div>

                        {/* Indicador de qué foto se está visualizando */}
                        <div className="absolute bottom-3 left-3">
                          <span className={`text-[11px] font-black uppercase px-2.5 py-1 rounded-lg shadow-sm ${
                            modoFoto === "despues"
                              ? "bg-emerald-500 text-slate-950"
                              : "bg-amber-400 text-slate-950"
                          }`}>
                            {modoFoto === "despues" ? "📸 Foto de Obra en Progreso / Culminada" : "⚠️ Foto del Estado Inicial Previo"}
                          </span>
                        </div>

                        {/* Porcentaje de Avance flotante */}
                        <div className="absolute bottom-3 right-3 text-right">
                          <span className="text-2xl font-black text-white drop-shadow">
                            {obra.porcentajeAvance}%
                          </span>
                        </div>
                      </div>

                      {/* Barra de Progreso Físico */}
                      <div className="w-full bg-slate-200 h-2">
                        <div
                          className={`h-full transition-all duration-500 ${
                            obra.porcentajeAvance === 100
                              ? "bg-emerald-500"
                              : "bg-gradient-to-r from-blue-600 to-indigo-600"
                          }`}
                          style={{ width: `${obra.porcentajeAvance}%` }}
                        />
                      </div>

                      {/* Contenido Descriptivo de la Obra */}
                      <div className="p-6 space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                              obra.estado === "culminada"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-blue-100 text-blue-800"
                            }`}>
                              {obra.estadoNombre}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">
                              📅 {obra.fechaInicio} — {obra.fechaEstimada}
                            </span>
                          </div>
                          <h3 className="text-lg font-black text-slate-900 leading-snug">
                            {obra.titulo}
                          </h3>
                          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                            {obra.descripcion}
                          </p>
                        </div>

                        {/* Métricas de Impacto Físico */}
                        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
                          {obra.metricas.map((met, idx) => (
                            <div key={idx} className="bg-slate-50 p-2 rounded-xl text-center border border-slate-100">
                              <span className="text-[10px] text-slate-400 block font-semibold uppercase truncate">
                                {met.label}
                              </span>
                              <strong className="text-xs font-bold text-slate-800 block truncate">
                                {met.valor}
                              </strong>
                            </div>
                          ))}
                        </div>

                        {/* Datos de Transparencia Municipal */}
                        <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-200 text-xs space-y-1.5">
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-slate-500 font-medium">Fuente de Financiamiento:</span>
                            <span className="font-bold text-slate-800 text-right">{obra.fuenteFinanciamiento}</span>
                          </div>
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-slate-500 font-medium">Cuadrilla Responsable:</span>
                            <span className="font-semibold text-slate-700 text-right">{obra.cuadrilla}</span>
                          </div>
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-slate-500 font-medium">Beneficiarios Directos:</span>
                            <span className="font-bold text-blue-700 text-right">{obra.beneficiariosDirectos}</span>
                          </div>
                          <div className="flex items-start justify-between gap-2 pt-1 border-t border-slate-200">
                            <span className="text-slate-500 font-medium">Veeduría Social:</span>
                            <span className="font-semibold text-emerald-800 text-right truncate">
                              👥 {obra.comunidadVeedora}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Botón de Acción Ciudadana: Veeduría / Auditoría Vecinal */}
                    <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2">
                      <span className="text-[11px] text-slate-500 hidden sm:block">
                        ¿Vives en esta zona? Ejerce tu derecho a la contraloría social:
                      </span>
                      <button
                        onClick={() => setObraParaAuditoria(obra)}
                        className="w-full sm:w-auto px-4 py-2 bg-[#0a2540] hover:bg-slate-900 text-amber-400 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm apple-press"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Dejar Reporte o Calificación Vecinal</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200">
              <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-2" />
              <h3 className="text-base font-bold text-slate-700">No se encontraron obras con los filtros seleccionados</h3>
              <p className="text-xs text-slate-500 mt-1">
                Prueba seleccionando "Todas las Parroquias" o ajustando los términos de búsqueda.
              </p>
            </div>
          )}
        </div>

        {/* Modal de Auditoría y Veeduría Ciudadana */}
        {obraParaAuditoria && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-scaleUp">
              <button
                onClick={() => setObraParaAuditoria(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Contraloría Social Ciudadana</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Buzón de Veeduría: {obraParaAuditoria.titulo}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Ubicación: {obraParaAuditoria.ubicacion} ({obraParaAuditoria.parroquiaNombre})
                  </p>
                </div>

                {auditoriaEnviada ? (
                  <div className="py-8 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200 p-4">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-base font-bold text-emerald-950">
                      ¡Agradecemos tu participación vecinal!
                    </h4>
                    <p className="text-xs text-emerald-800">
                      Tu reporte ha sido remitido a la Dirección de Ingeniería Municipal y a la Sala Situacional 1x10 para su verificación.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEnviarAuditoria} className="space-y-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Tu Nombre o Representación Comunal (Opcional):
                      </label>
                      <input
                        type="text"
                        value={nombreVecino}
                        onChange={(e) => setNombreVecino(e.target.value)}
                        placeholder="Ej. Vecino Calle Loreto / Consejo Comunal"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        ¿Cómo evalúas la calidad y rapidez de esta obra?
                      </label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((estrella) => (
                          <button
                            key={estrella}
                            type="button"
                            onClick={() => setCalificacionVecino(estrella)}
                            className={`w-9 h-9 rounded-xl font-black text-sm flex items-center justify-center transition-all ${
                              estrella <= calificacionVecino
                                ? "bg-amber-400 text-slate-950 shadow-sm"
                                : "bg-slate-100 text-slate-400"
                            }`}
                          >
                            ★
                          </button>
                        ))}
                        <span className="text-xs font-bold text-slate-600 ml-2">
                          {calificacionVecino === 5 ? "Excelente" : calificacionVecino >= 4 ? "Buena" : "Regular"}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Tu Observación o Propuesta para la Cuadrilla:
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={comentarioVecino}
                        onChange={(e) => setComentarioVecino(e.target.value)}
                        placeholder="Escribe aquí si observas algún bote de agua, necesidad de demarcación adicional o agradecimiento a los trabajadores..."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setObraParaAuditoria(null)}
                        className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-1.5 apple-press"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Enviar Observación</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
