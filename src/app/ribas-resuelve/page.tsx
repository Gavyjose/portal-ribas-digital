"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  AlertCircle,
  Lightbulb,
  Droplet,
  Construction,
  Trees,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  Camera,
  Search,
  ShieldCheck,
  Send,
  ArrowRight
} from "lucide-react";

export default function RibasResuelvePage() {
  const [tab, setTab] = useState<"nuevo" | "seguimiento">("nuevo");

  // Formulario
  const [categoria, setCategoria] = useState("Alumbrado Público");
  const [parroquia, setParroquia] = useState("Castor Nieves Ríos");
  const [sector, setSector] = useState("");
  const [direccion, setDireccion] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // Ticket Generado
  const [ticketGenerado, setTicketGenerado] = useState<null | {
    codigo: string;
    categoria: string;
    parroquia: string;
    sector: string;
    fecha: string;
    estado: string;
  }>(null);

  // Búsqueda de Ticket
  const [codigoBusqueda, setCodigoBusqueda] = useState("");
  const [ticketEncontrado, setTicketEncontrado] = useState<null | {
    codigo: string;
    categoria: string;
    parroquia: string;
    sector: string;
    fecha: string;
    etapaActual: number; // 1, 2, 3 o 4
    descripcionEtapa: string;
    cuadrillaAsignada: string;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevoCodigo = `RIB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    setTicketGenerado({
      codigo: nuevoCodigo,
      categoria,
      parroquia,
      sector: sector || "Sector Centro",
      fecha: new Date().toLocaleDateString("es-VE", { day: "numeric", month: "long", year: "numeric" }),
      estado: "Registrado en Sala Situacional"
    });
  };

  const handleBuscarTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!codigoBusqueda.trim()) return;

    // Resultado realista de búsqueda
    setTicketEncontrado({
      codigo: codigoBusqueda.toUpperCase(),
      categoria: "Alumbrado Público y Sustitución de Luminarias",
      parroquia: "Castor Nieves Ríos",
      sector: "Las Mercedes, Sector 2, Calle 4",
      fecha: "08 de Noviembre de 2026",
      etapaActual: 3,
      descripcionEtapa: "Cuadrilla N.º 2 de Mantenimiento Eléctrico en ruta con camión cesta",
      cuadrillaAsignada: "Ing. Carlos Mendoza (Servicios Públicos Ribas)"
    });
  };

  return (
    <div className="py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con Fondo de Agua Fotográfico: Cuartel y Símbolos de Ribas */}
        <div className="relative rounded-3xl overflow-hidden mb-10 shadow-xl text-white p-8 sm:p-12 text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/la-victoria/cuartel-castillo.jpg"
              alt="Monumento y Cuartel de La Victoria - Aragua"
              fill
              priority
              className="object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06182a]/95 via-[#2a0812]/85 to-[#06182a]/95" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
              <span>Atención Comunitaria Directa • Sistema 1x10</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow">
              Ribas Resuelve: Reportes de Servicios Públicos
            </h1>
            <p className="text-sm text-slate-200 mt-2">
              Canal directo para reportar averías en alumbrado, agua potable, colectores caídos, bacheo o acumulación de desechos en tu comunidad.
            </p>
          </div>
        </div>

        {/* Pestañas */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setTab("nuevo")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              tab === "nuevo"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Crear Nuevo Reporte
          </button>
          <button
            onClick={() => setTab("seguimiento")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              tab === "seguimiento"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Consultar Estatus de mi Ticket
          </button>
        </div>

        {/* Tab 1: Formulario de Nuevo Reporte */}
        {tab === "nuevo" && (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10">
            {!ticketGenerado ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">
                    Registrar Incidencia Comunitaria
                  </h2>
                  <p className="text-xs text-slate-500">
                    Por favor completa los detalles para enviar la solicitud a la Sala Situacional Municipal.
                  </p>
                </div>

                {/* Tipo de Incidencia */}
                <div>
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 block">
                    1. Tipo de Servicio o Falla
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      { nombre: "Alumbrado Público", icon: Lightbulb },
                      { nombre: "Bote de Agua / Tubería", icon: Droplet },
                      { nombre: "Vialidad y Huecos", icon: Construction },
                      { nombre: "Desmalezamiento / Poda", icon: Trees },
                      { nombre: "Aseo Urbano", icon: Truck },
                      { nombre: "Otro Servicio", icon: AlertCircle },
                    ].map((item) => {
                      const Icon = item.icon;
                      const isSel = categoria === item.nombre;
                      return (
                        <button
                          type="button"
                          key={item.nombre}
                          onClick={() => setCategoria(item.nombre)}
                          className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all text-xs font-semibold ${
                            isSel
                              ? "bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-500/20"
                              : "border-slate-200 hover:bg-slate-50 text-slate-700"
                          }`}
                        >
                          <Icon className={`w-4 h-4 shrink-0 ${isSel ? "text-rose-600" : "text-slate-400"}`} />
                          <span>{item.nombre}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Ubicación */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-800 mb-1 block">
                      Parroquia
                    </label>
                    <select
                      value={parroquia}
                      onChange={(e) => setParroquia(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      <option>Castor Nieves Ríos</option>
                      <option>Juan Vicente Bolívar y Ponte</option>
                      <option>Zuata</option>
                      <option>Pao de Zárate</option>
                      <option>Las Guacamayas</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 mb-1 block">
                      Sector / Comunidad
                    </label>
                    <input
                      type="text"
                      required
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      placeholder="Ej. Las Mercedes Sector 2, La Mora 1..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>

                {/* Dirección Exacta */}
                <div>
                  <label className="text-xs font-bold text-slate-800 mb-1 block">
                    Punto de Referencia y Dirección Exacta
                  </label>
                  <input
                    type="text"
                    required
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    placeholder="Calle, número de casa, poste cercano o frente a qué local..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                {/* Descripción Detallada */}
                <div>
                  <label className="text-xs font-bold text-slate-800 mb-1 block">
                    Descripción del Problema
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder="Explica brevemente la situación, desde cuándo ocurre y cuántas familias afecta..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                {/* Datos del Ciudadano */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                  <div>
                    <label className="text-xs font-bold text-slate-800 mb-1 block">
                      Nombre y Apellido
                    </label>
                    <input
                      type="text"
                      required
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Tu nombre completo"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-800 mb-1 block">
                      Teléfono de Contacto (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      required
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="0412-1234567"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-rose-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Reporte a la Sala Situacional</span>
                </button>
              </form>
            ) : (
              /* Ticket Generado con Éxito */
              <div className="text-center space-y-6 py-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    ¡Reporte Registrado Exitosamente!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Tu caso ha sido asignado al equipo operativo de la Dirección de Servicios Públicos.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-xs font-medium text-slate-500">Número de Ticket:</span>
                    <span className="text-base font-black font-mono text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      {ticketGenerado.codigo}
                    </span>
                  </div>
                  <div className="text-xs text-slate-700 space-y-1.5">
                    <p><strong>Falla reportada:</strong> {ticketGenerado.categoria}</p>
                    <p><strong>Parroquia:</strong> {ticketGenerado.parroquia}</p>
                    <p><strong>Comunidad:</strong> {ticketGenerado.sector}</p>
                    <p><strong>Fecha:</strong> {ticketGenerado.fecha}</p>
                    <p><strong>Estatus:</strong> <span className="text-amber-700 font-bold">{ticketGenerado.estado}</span></p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setCodigoBusqueda(ticketGenerado.codigo);
                      setTab("seguimiento");
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold text-xs rounded-xl transition-all shadow"
                  >
                    Ver Línea de Tiempo del Ticket
                  </button>
                  <button
                    onClick={() => setTicketGenerado(null)}
                    className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all"
                  >
                    Hacer Otro Reporte
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Seguimiento de Ticket */}
        {tab === "seguimiento" && (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Línea de Tiempo y Seguimiento de Incidencias
              </h2>
              <p className="text-xs text-slate-500">
                Ingresa el código del ticket recibido para conocer en qué fase se encuentra la atención de la cuadrilla.
              </p>
            </div>

            <form onSubmit={handleBuscarTicket} className="flex gap-2">
              <input
                type="text"
                required
                value={codigoBusqueda}
                onChange={(e) => setCodigoBusqueda(e.target.value)}
                placeholder="Ej. RIB-2026-4821"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 font-mono"
              />
              <button
                type="submit"
                className="px-6 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold text-xs sm:text-sm rounded-xl shrink-0 transition-all flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Consultar</span>
              </button>
            </form>

            {ticketEncontrado && (
              <div className="pt-6 border-t border-slate-200 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block uppercase">Caso Activo</span>
                    <h3 className="text-base font-bold text-slate-900">{ticketEncontrado.codigo}</h3>
                    <p className="text-xs text-slate-600">{ticketEncontrado.categoria}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-400 block">Ubicación</span>
                    <span className="text-xs font-semibold text-slate-700">{ticketEncontrado.sector}</span>
                  </div>
                </div>

                {/* Línea de Tiempo de los 4 Pasos */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Estatus del Proceso en Cuadrilla
                  </h4>

                  <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                    {/* Paso 1 */}
                    <div className="relative">
                      <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <h5 className="text-xs font-bold text-slate-900">1. Reporte Recibido y Validado</h5>
                      <p className="text-[11px] text-slate-500 mt-0.5">Ingresado al sistema digital y verificado por la Sala Situacional.</p>
                    </div>

                    {/* Paso 2 */}
                    <div className="relative">
                      <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <h5 className="text-xs font-bold text-slate-900">2. Inspección Técnica y Material Asignado</h5>
                      <p className="text-[11px] text-slate-500 mt-0.5">Se coordinó la disposición de repuestos o luminarias LED.</p>
                    </div>

                    {/* Paso 3 */}
                    <div className="relative">
                      <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold animate-pulse">
                        3
                      </div>
                      <h5 className="text-xs font-bold text-amber-700">3. Cuadrilla en Despliegue Operativo (En Curso)</h5>
                      <p className="text-xs text-slate-700 mt-0.5 font-medium">{ticketEncontrado.descripcionEtapa}</p>
                      <p className="text-[10px] text-slate-500 mt-1">Responsable: {ticketEncontrado.cuadrillaAsignada}</p>
                    </div>

                    {/* Paso 4 */}
                    <div className="relative opacity-40">
                      <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center text-xs font-bold">
                        4
                      </div>
                      <h5 className="text-xs font-bold text-slate-600">4. Trabajo Concluido y Validación Ciudadana</h5>
                      <p className="text-[11px] text-slate-400 mt-0.5">Cierre del ticket con fotografía de confirmación.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
