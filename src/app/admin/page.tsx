"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  AlertCircle,
  FileText,
  Truck,
  Users,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  PlusCircle,
  TrendingUp,
  Building2,
  Settings,
  Download
} from "lucide-react";
import { ZONAS_ASEO } from "@/data/aseo";

interface TicketAdmin {
  id: string;
  codigo: string;
  categoria: string;
  parroquia: string;
  sector: string;
  reportante: string;
  telefono: string;
  fecha: string;
  estado: "Pendiente" | "En Inspección" | "Cuadrilla Asignada" | "Resuelto";
  cuadrilla: string;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"sala" | "hacienda" | "gacetas" | "aseo">("sala");
  const [filtroEstado, setFiltroEstado] = useState<string>("todos");
  const [filtroParroquia, setFiltroParroquia] = useState<string>("todas");

  // Lista interactiva de tickets en la Sala Situacional
  const [tickets, setTickets] = useState<TicketAdmin[]>([
    {
      id: "1",
      codigo: "RIB-2026-4821",
      categoria: "Alumbrado Público",
      parroquia: "Castor Nieves Ríos",
      sector: "Las Mercedes, Sector 2, Calle 4",
      reportante: "Carmen Rodríguez",
      telefono: "0412-4558391",
      fecha: "Hoy 08:30 AM",
      estado: "Cuadrilla Asignada",
      cuadrilla: "Cuadrilla Eléctrica N.º 2 (Camión Cesta)"
    },
    {
      id: "2",
      codigo: "RIB-2026-4822",
      categoria: "Bote de Agua / Tubería",
      parroquia: "Juan Vicente Bolívar y Ponte",
      sector: "Casco Central, Calle Candelaria",
      reportante: "José Gregorio Peña",
      telefono: "0424-3381710",
      fecha: "Hoy 09:15 AM",
      estado: "En Inspección",
      cuadrilla: "Articulación Hidrocentro - Ribas"
    },
    {
      id: "3",
      codigo: "RIB-2026-4823",
      categoria: "Vialidad y Bacheo",
      parroquia: "Castor Nieves Ríos",
      sector: "La Mora 1, Sector 3, Calle 7",
      reportante: "Marcos Blanco",
      telefono: "0412-1316364",
      fecha: "Ayer 03:40 PM",
      estado: "Pendiente",
      cuadrilla: "Por Asignar"
    },
    {
      id: "4",
      codigo: "RIB-2026-4820",
      categoria: "Desmalezamiento / Poda",
      parroquia: "Zuata",
      sector: "Comunidad Los Budares, Av. Principal",
      reportante: "Elena Salcedo",
      telefono: "0416-5219084",
      fecha: "Ayer 11:00 AM",
      estado: "Resuelto",
      cuadrilla: "Cuadrilla Mantenimiento Zuata"
    }
  ]);

  // Función para cambiar estatus de un caso
  const cambiarEstado = (id: string, nuevoEstado: TicketAdmin["estado"]) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, estado: nuevoEstado } : t))
    );
  };

  const ticketsFiltrados = tickets.filter((t) => {
    const coincideEstado = filtroEstado === "todos" || t.estado === filtroEstado;
    const coincideParroquia = filtroParroquia === "todas" || t.parroquia === filtroParroquia;
    return coincideEstado && coincideParroquia;
  });

  return (
    <div className="py-10 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Cabecera del Panel */}
        <div className="bg-[#0a2540] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Panel Administrativo Oficial
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Sala de Gestión Municipal - Ribas Digital
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Alcaldía del Municipio José Félix Ribas • Sede Casa Amarilla, La Victoria
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-white/10 px-3.5 py-2 rounded-xl text-xs font-semibold border border-white/10 text-slate-200">
              Usuario: <strong>Despacho / Operaciones</strong>
            </span>
          </div>
        </div>

        {/* Tarjetas de Métricas de la Jornada */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-xs font-semibold text-slate-500 block">Reportes 1x10 Hoy</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-black text-rose-600">28</span>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                +4 en espera
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-xs font-semibold text-slate-500 block">Cuadrillas Desplegadas</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-black text-amber-600">12</span>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                En ruta activa
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-xs font-semibold text-slate-500 block">Solvencias Emitidas</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600">64</span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                100% validadas QR
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-xs font-semibold text-slate-500 block">Unidades de Aseo Operativas</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-black text-sky-600">19</span>
              <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                Zonas A, B, C, D
              </span>
            </div>
          </div>
        </div>

        {/* Pestañas de Navegación del Panel */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200">
          <button
            onClick={() => setActiveTab("sala")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              activeTab === "sala"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white text-slate-700 hover:bg-slate-200"
            }`}
          >
            Sala Situacional (Ribas Resuelve)
          </button>
          <button
            onClick={() => setActiveTab("hacienda")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              activeTab === "hacienda"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white text-slate-700 hover:bg-slate-200"
            }`}
          >
            Hacienda & Solvencias
          </button>
          <button
            onClick={() => setActiveTab("gacetas")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              activeTab === "gacetas"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white text-slate-700 hover:bg-slate-200"
            }`}
          >
            Publicación de Gacetas
          </button>
          <button
            onClick={() => setActiveTab("aseo")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              activeTab === "aseo"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white text-slate-700 hover:bg-slate-200"
            }`}
          >
            Monitoreo de Cuadrillas de Aseo
          </button>
        </div>

        {/* Pestaña 1: Sala Situacional Ribas Resuelve */}
        {activeTab === "sala" && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Bandeja de Incidencias Comunitarias (1x10)
                </h2>
                <p className="text-xs text-slate-500">
                  Control en tiempo real de reportes vecinales y asignación de cuadrillas operativas.
                </p>
              </div>

              {/* Filtros */}
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={filtroEstado}
                  onChange={(e) => setFiltroEstado(e.target.value)}
                  className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs text-slate-800"
                >
                  <option value="todos">Todos los Estados</option>
                  <option value="Pendiente">Pendiente</option>
                  <option value="En Inspección">En Inspección</option>
                  <option value="Cuadrilla Asignada">Cuadrilla Asignada</option>
                  <option value="Resuelto">Resuelto</option>
                </select>

                <select
                  value={filtroParroquia}
                  onChange={(e) => setFiltroParroquia(e.target.value)}
                  className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs text-slate-800"
                >
                  <option value="todas">Todas las Parroquias</option>
                  <option value="Castor Nieves Ríos">Castor Nieves Ríos</option>
                  <option value="Juan Vicente Bolívar y Ponte">Juan Vicente Bolívar y Ponte</option>
                  <option value="Zuata">Zuata</option>
                  <option value="Pao de Zárate">Pao de Zárate</option>
                  <option value="Las Guacamayas">Las Guacamayas</option>
                </select>
              </div>
            </div>

            {/* Tabla de Incidencias */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Ticket</th>
                    <th className="py-3 px-4">Falla & Ubicación</th>
                    <th className="py-3 px-4">Reportante</th>
                    <th className="py-3 px-4">Cuadrilla Asignada</th>
                    <th className="py-3 px-4">Estatus Actual</th>
                    <th className="py-3 px-4 text-right">Acción Operativa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ticketsFiltrados.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-slate-900">
                        {ticket.codigo}
                      </td>
                      <td className="py-3 px-4">
                        <strong className="text-slate-900 block">{ticket.categoria}</strong>
                        <span className="text-slate-500 text-[11px] block">{ticket.sector}</span>
                        <span className="text-amber-800 text-[10px]">{ticket.parroquia}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-slate-800 font-medium block">{ticket.reportante}</span>
                        <span className="text-slate-400 text-[10px]">{ticket.telefono}</span>
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        {ticket.cuadrilla}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          ticket.estado === "Resuelto"
                            ? "bg-emerald-100 text-emerald-800"
                            : ticket.estado === "Cuadrilla Asignada"
                            ? "bg-amber-100 text-amber-800"
                            : ticket.estado === "En Inspección"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-rose-100 text-rose-800"
                        }`}>
                          {ticket.estado}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <select
                          value={ticket.estado}
                          onChange={(e) =>
                            cambiarEstado(ticket.id, e.target.value as TicketAdmin["estado"])
                          }
                          className="bg-white border border-slate-300 rounded-lg px-2 py-1 text-[11px] font-bold text-slate-700 focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="Pendiente">Pendiente</option>
                          <option value="En Inspección">En Inspección</option>
                          <option value="Cuadrilla Asignada">Cuadrilla Asignada</option>
                          <option value="Resuelto">Resuelto</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Pestaña 2: Hacienda y Solvencias */}
        {activeTab === "hacienda" && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Gestión de Trámites Tributarios y Solvencias
              </h2>
              <p className="text-xs text-slate-500">
                Revisión de solicitudes en línea de solvencias de inmuebles y patentes comerciales.
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {[
                {
                  id: "SOL-01",
                  contribuyente: "DISTRIBUIDORA VICTORIA C.A.",
                  rif: "J-30495821-0",
                  tramite: "Solvencia de Inmuebles Urbanos",
                  inmueble: "Ficha Catastral #04-02-01-U-0128",
                  estatus: "Aprobada",
                  fecha: "Hoy 10:20 AM"
                },
                {
                  id: "SOL-02",
                  contribuyente: "MARÍA JOSÉ HERNÁNDEZ",
                  rif: "V-18452123",
                  tramite: "Solvencia Derecho de Frente Residencial",
                  inmueble: "Las Mercedes, Calle 2, Casa 14",
                  estatus: "Aprobada",
                  fecha: "Hoy 09:40 AM"
                },
                {
                  id: "SOL-03",
                  contribuyente: "PANADERÍA EL RECREO C.A.",
                  rif: "J-40981723-1",
                  tramite: "Declaración Mensual de Actividades Económicas",
                  inmueble: "Casco Central La Victoria",
                  estatus: "Verificación de Pago Pendiente",
                  fecha: "Hoy 08:50 AM"
                }
              ].map((item) => (
                <div key={item.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="font-mono text-xs font-bold text-slate-900">{item.id} • {item.contribuyente}</span>
                    <p className="text-xs text-slate-600">{item.tramite} ({item.inmueble})</p>
                    <span className="text-[10px] text-slate-400">RIF: {item.rif} • Solicitado: {item.fecha}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      item.estatus === "Aprobada" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                    }`}>
                      {item.estatus}
                    </span>
                    <button
                      onClick={() => alert(`Certificado digital emitido para ${item.contribuyente}`)}
                      className="px-3 py-1.5 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold text-xs rounded-lg transition-colors"
                    >
                      Verificar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pestaña 3: Publicación de Gacetas */}
        {activeTab === "gacetas" && (
          <div className="max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-md p-6 space-y-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Registrar Nueva Gaceta Municipal
              </h2>
              <p className="text-xs text-slate-500">
                Sube o indexa una nueva ordenanza o decreto del Municipio Ribas para que esté disponible a la ciudadanía.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Gaceta municipal indexada y publicada con éxito en el portal ciudadano.");
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Número de Gaceta
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. G.M. N.º 4.299"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Tipo de Gaceta
                  </label>
                  <select className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800">
                    <option>Ordinaria</option>
                    <option>Extraordinaria</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Título de la Ordenanza o Decreto
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Ordenanza sobre Convivencia Ciudadana y Mantenimiento Urbano"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Resumen o Sumario
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe los artículos principales y alcance de la normativa..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Publicar Gaceta Oficial en Línea</span>
              </button>
            </form>
          </div>
        )}

        {/* Pestaña 4: Monitoreo de Cuadrillas de Aseo */}
        {activeTab === "aseo" && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Estado Operativo de las 4 Zonas de Recolección
              </h2>
              <p className="text-xs text-slate-500">
                Monitoreo de compactadores y trimotos en campo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ZONAS_ASEO.map((zona) => (
                <div key={zona.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">{zona.nombre}</h3>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                      En Operación
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 space-y-1">
                    <p>Coordinador: <strong>{zona.coordinador}</strong> ({zona.telefono})</p>
                    <p>Rutas activas hoy: <strong>{zona.rutas.length} sectores</strong></p>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex flex-wrap gap-1.5 text-[10px]">
                    {zona.camiones.map((c, i) => (
                      <span key={i} className="bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700">
                        {c.split("-")[0]}
                      </span>
                    ))}
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                      {zona.trimotos.length} Trimotos
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
