"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  QrCode,
  Calendar,
  CreditCard,
  Building2,
  FileCheck,
  AlertCircle,
  Copy,
  Printer,
  FileText,
  Send,
  ArrowRight,
  User
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { CertificadoSolvenciaModal } from "@/components/CertificadoSolvenciaModal";

export default function OficinaVirtualPage() {
  const { usuario } = useAuth();
  const [activeTab, setActiveTab] = useState<"solvencia" | "verificar" | "citas" | "pagos">("solvencia");

  // Estados para consulta de solvencia
  const [tipoDoc, setTipoDoc] = useState("V");
  const [numDoc, setNumDoc] = useState("");
  const [mostrarModalCertificado, setMostrarModalCertificado] = useState(false);
  const [resultadoSolvencia, setResultadoSolvencia] = useState<null | {
    contribuyente: string;
    identificacion: string;
    inmueble: string;
    parroquia: string;
    estado: "Solvente" | "Con Deuda";
    vigencia: string;
    hash: string;
    codigoQR: string;
  }>(null);

  // Estados para verificador
  const [codigoVerificar, setCodigoVerificar] = useState("");
  const [resultadoVerificacion, setResultadoVerificacion] = useState<null | {
    valido: boolean;
    documento: string;
    emisor: string;
    fecha: string;
    contribuyente: string;
    hash: string;
  }>(null);

  // Estados para agendamiento de citas
  const [citaGenerada, setCitaGenerada] = useState<null | {
    codigoCita: string;
    nombre: string;
    tramite: string;
    parroquia: string;
    fecha: string;
    hora: string;
  }>(null);

  // Estados para reporte de pago bancario
  const [pagoRegistrado, setPagoRegistrado] = useState<null | {
    comprobante: string;
    banco: string;
    referencia: string;
    monto: string;
    concepto: string;
    fecha: string;
  }>(null);

  const consultarSolvencia = (e: React.FormEvent) => {
    e.preventDefault();
    if (!numDoc.trim()) return;

    setResultadoSolvencia({
      contribuyente: tipoDoc === "J" ? "DISTRIBUIDORA VICTORIA C.A." : "MARÍA JOSÉ HERNÁNDEZ",
      identificacion: `${tipoDoc}-${numDoc}`,
      inmueble: "FICHA CAT. #04-02-01-U-0128",
      parroquia: "Castor Nieves Ríos (Las Mercedes)",
      estado: "Solvente",
      vigencia: "Hasta el 31 de Diciembre de 2026",
      hash: "8f4b9c1d2e3a5f60718293a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4",
      codigoQR: "https://alcaldiaderibas.gob.ve/verificar/8f4b9c1d"
    });
  };

  const verificarDocumento = (e: React.FormEvent) => {
    e.preventDefault();
    if (!codigoVerificar.trim()) return;

    setResultadoVerificacion({
      valido: true,
      documento: "Certificado de Solvencia Municipal de Inmuebles Urbanos",
      emisor: "Dirección de Hacienda y Administración Tributaria - Alcaldía de Ribas",
      fecha: "10 de Noviembre de 2026",
      contribuyente: "COMERCIAL LA VICTORIA 2020 C.A. (RIF: J-40891234-5)",
      hash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    });
  };

  const solicitarCita = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value;
    const tramite = (form.elements.namedItem("tramite") as HTMLSelectElement).value;
    const parroquia = (form.elements.namedItem("parroquia") as HTMLSelectElement).value;

    setCitaGenerada({
      codigoCita: `CITA-RIB-${Math.floor(1000 + Math.random() * 9000)}`,
      nombre,
      tramite,
      parroquia,
      fecha: "Próximo Martes, 18 de Noviembre de 2026",
      hora: "08:30 a.m."
    });
  };

  const reportarPago = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const banco = (form.elements.namedItem("banco") as HTMLSelectElement).value;
    const referencia = (form.elements.namedItem("referencia") as HTMLInputElement).value;
    const monto = (form.elements.namedItem("monto") as HTMLInputElement).value;
    const concepto = (form.elements.namedItem("concepto") as HTMLSelectElement).value;

    setPagoRegistrado({
      comprobante: `REC-RIB-${Math.floor(100000 + Math.random() * 900000)}`,
      banco,
      referencia,
      monto,
      concepto,
      fecha: new Date().toLocaleDateString("es-VE", { day: "numeric", month: "long", year: "numeric" })
    });
  };

  return (
    <div className="py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con Fondo de Agua Fotográfico de La Casa Amarilla */}
        <div className="relative rounded-3xl overflow-hidden mb-10 shadow-xl text-white p-8 sm:p-12 text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/la-victoria/casa-amarilla.jpg"
              alt="Casa Amarilla - Sede de la Alcaldía de Ribas"
              fill
              priority
              className="object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06182a]/95 via-[#0a2540]/85 to-[#06182a]/95" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Oficina Virtual de Ribas • Sede Casa Amarilla</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow">
              Autogestión Tributaria y Registro Civil Digital
            </h1>
            <p className="text-sm text-slate-200 mt-2">
              Verifica solvencias con código QR, consulta tu estado de cuenta municipal, reporta pagos bancarios y programa citas presenciales sin hacer filas.
            </p>
          </div>
        </div>

        {/* Banner de Usuario Único */}
        {usuario ? (
          <div className="mb-8 p-4 bg-emerald-50/90 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-950 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Sesión activa como <strong>{usuario.nombre}</strong> ({usuario.documento}). Puedes consultar tu estado de cuenta, historial catastral y avance de expedientes en tu panel personal.
              </span>
            </div>
            <Link
              href="/oficina-virtual/dashboard"
              className="px-4 py-2 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold rounded-xl transition-colors shrink-0 shadow flex items-center gap-1.5"
            >
              <span>Ir a Mi Panel y Trámites</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          <div className="mb-8 p-4 bg-amber-50/90 border border-amber-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-950 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <User className="w-5 h-5 text-amber-700 shrink-0" />
              <span>
                <strong>¿Posees Usuario Único?</strong> Inicia sesión para autocompletar tus datos, consultar tu padrón de inmuebles y hacer seguimiento al avance de tus solicitudes.
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
                Registrarse
              </Link>
            </div>
          </div>
        )}

        {/* Selector de Pestañas */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab("solvencia")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              activeTab === "solvencia"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Consulta de Solvencia
          </button>
          <button
            onClick={() => setActiveTab("verificar")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              activeTab === "verificar"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Validador de Documentos (QR)
          </button>
          <button
            onClick={() => setActiveTab("citas")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              activeTab === "citas"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Citas de Registro Civil
          </button>
          <button
            onClick={() => setActiveTab("pagos")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              activeTab === "pagos"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Cuentas y Reporte de Pagos
          </button>
        </div>

        {/* Contenido Pestaña 1: Consulta de Solvencia */}
        {activeTab === "solvencia" && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Consulta de Solvencia Municipal en Línea
            </h2>
            <p className="text-xs text-slate-600 mb-6">
              Ingresa la cédula o RIF del contribuyente para verificar el estatus ante la Dirección de Hacienda de Ribas.
            </p>

            <form onSubmit={consultarSolvencia} className="space-y-4">
              <div className="flex gap-2">
                <select
                  value={tipoDoc}
                  onChange={(e) => setTipoDoc(e.target.value)}
                  className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="V">V- (Venezolano)</option>
                  <option value="J">J- (Jurídico/Empresa)</option>
                  <option value="E">E- (Extranjero)</option>
                  <option value="G">G- (Gubernamental)</option>
                </select>
                <input
                  type="text"
                  required
                  value={numDoc}
                  onChange={(e) => setNumDoc(e.target.value)}
                  placeholder="Número de documento (ej. 18452123 o 304958210)"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Consultar Estatus Tributario</span>
              </button>
            </form>

            {/* Resultado de la Solvencia */}
            {resultadoSolvencia && (
              <div className="mt-8 pt-6 border-t-2 border-dashed border-slate-200 space-y-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-emerald-800 uppercase flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{resultadoSolvencia.estado}</span>
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-900 bg-emerald-200/60 px-2 py-0.5 rounded">
                      {resultadoSolvencia.vigencia}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs text-slate-800">
                    <p><strong>Contribuyente:</strong> {resultadoSolvencia.contribuyente}</p>
                    <p><strong>Documento:</strong> {resultadoSolvencia.identificacion}</p>
                    <p><strong>Inmueble / Referencia:</strong> {resultadoSolvencia.inmueble}</p>
                    <p><strong>Ubicación:</strong> {resultadoSolvencia.parroquia}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-emerald-200 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-600">
                      <QrCode className="w-6 h-6 text-slate-800 shrink-0" />
                      <span className="font-mono text-[10px] text-slate-500">Hash: {resultadoSolvencia.hash.slice(0, 16)}...</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setMostrarModalCertificado(true)}
                      className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Ver e Imprimir Certificado</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Modal de Certificado Oficial Imprimible */}
        {mostrarModalCertificado && resultadoSolvencia && (
          <CertificadoSolvenciaModal
            contribuyente={resultadoSolvencia.contribuyente}
            identificacion={resultadoSolvencia.identificacion}
            inmueble={resultadoSolvencia.inmueble}
            parroquia={resultadoSolvencia.parroquia}
            vigencia={resultadoSolvencia.vigencia}
            hash={resultadoSolvencia.hash}
            onClose={() => setMostrarModalCertificado(false)}
          />
        )}

        {/* Contenido Pestaña 2: Validador de Documentos con QR */}
        {activeTab === "verificar" && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Verificador de Autenticidad con Código Seguro
            </h2>
            <p className="text-xs text-slate-600 mb-6">
              Valida la legalidad de cualquier constancia, solvencia o documento con sello digital emitido por la Alcaldía del Municipio José Félix Ribas.
            </p>

            <form onSubmit={verificarDocumento} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">
                  Código de Validación o Hash del Documento
                </label>
                <input
                  type="text"
                  required
                  value={codigoVerificar}
                  onChange={(e) => setCodigoVerificar(e.target.value)}
                  placeholder="Ej. RIB-SOLV-2026-9481 o pega el hash SHA-256"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <FileCheck className="w-4 h-4" />
                <span>Validar Documento Oficial</span>
              </button>
            </form>

            {resultadoVerificacion && (
              <div className="mt-8 pt-6 border-t border-slate-200 bg-slate-50 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Documento Oficial Válido y Registrado</span>
                </div>
                <div className="text-xs text-slate-700 space-y-1">
                  <p><strong>Tipo:</strong> {resultadoVerificacion.documento}</p>
                  <p><strong>Emisor:</strong> {resultadoVerificacion.emisor}</p>
                  <p><strong>Fecha de Emisión:</strong> {resultadoVerificacion.fecha}</p>
                  <p><strong>Titular:</strong> {resultadoVerificacion.contribuyente}</p>
                  <p className="font-mono text-[10px] text-slate-500 pt-1">
                    Hash Verificado: {resultadoVerificacion.hash}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Contenido Pestaña 3: Citas de Registro Civil */}
        {activeTab === "citas" && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Agendamiento Digital de Citas - Registro Civil
            </h2>
            <p className="text-xs text-slate-600 mb-6">
              Selecciona tu parroquia y el trámite de registro civil para obtener tu turno de atención preferencial.
            </p>

            <form onSubmit={solicitarCita} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1 block">
                  Nombre Completo del Solicitante
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  placeholder="Ej. Carmen Rodríguez"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 mb-1 block">
                    Trámite a Realizar
                  </label>
                  <select
                    name="tramite"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option>Copia Certificada de Acta de Nacimiento</option>
                    <option>Constancia de Residencia</option>
                    <option>Constancia de Fe de Vida</option>
                    <option>Presentación de Niños / Nacimiento</option>
                    <option>Celebración de Matrimonio Civil</option>
                    <option>Acta de Defunción</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 mb-1 block">
                    Parroquia de Residencia
                  </label>
                  <select
                    name="parroquia"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option>Castor Nieves Ríos (Las Mercedes)</option>
                    <option>Juan Vicente Bolívar y Ponte (Casco Central)</option>
                    <option>Zuata</option>
                    <option>Pao de Zárate</option>
                    <option>Las Guacamayas</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Generar Turno de Atención</span>
              </button>
            </form>

            {citaGenerada && (
              <div className="mt-8 pt-6 border-t border-slate-200 bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-900 uppercase">
                    Comprobante de Turno Asignado
                  </span>
                  <span className="text-xs font-mono font-bold bg-amber-200 text-amber-950 px-2 py-0.5 rounded">
                    {citaGenerada.codigoCita}
                  </span>
                </div>
                <div className="text-xs text-slate-800 space-y-1">
                  <p><strong>Solicitante:</strong> {citaGenerada.nombre}</p>
                  <p><strong>Trámite:</strong> {citaGenerada.tramite}</p>
                  <p><strong>Lugar de Presentación:</strong> Sede Parroquial {citaGenerada.parroquia}</p>
                  <p><strong>Fecha y Hora:</strong> {citaGenerada.fecha} a las {citaGenerada.hora}</p>
                </div>
                <div className="text-[11px] text-amber-900 bg-white/70 p-2.5 rounded-lg border border-amber-200">
                  Por favor, asista 10 minutos antes con su cédula de identidad laminada y los recaudos solicitados.
                </div>
              </div>
            )}
          </div>
        )}

        {/* Contenido Pestaña 4: Medios de Pago y Reporte de Pagos */}
        {activeTab === "pagos" && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cuentas Bancarias */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-600" />
                  <span>Cuentas Bancarias Autorizadas</span>
                </h3>

                {/* Banco de Venezuela */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900">Banco de Venezuela</h4>
                    <span className="text-[9px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                      Cuenta Corriente
                    </span>
                  </div>
                  <p className="font-mono text-xs font-bold text-slate-800 select-all">
                    0102-0428-11-0000045892
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Alcaldía Municipio José Félix Ribas | RIF: G-20000384-2
                  </p>
                </div>

                {/* Banesco */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900">Banesco Banco Universal</h4>
                    <span className="text-[9px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                      Cuenta Corriente
                    </span>
                  </div>
                  <p className="font-mono text-xs font-bold text-slate-800 select-all">
                    0134-0372-52-3721014820
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Alcaldía Municipio José Félix Ribas | RIF: G-20000384-2
                  </p>
                </div>

                {/* Pago Móvil */}
                <div className="p-3.5 rounded-xl border border-amber-300 bg-amber-50 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs">
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Pago Móvil C2P Institucional</span>
                  </div>
                  <p className="text-xs text-slate-800">
                    Banco de Venezuela (0102) • Tel: <strong>0412-4558391</strong>
                  </p>
                  <p className="text-[10px] text-slate-600">RIF: G-20000384-2</p>
                </div>
              </div>

              {/* Formulario de Reporte de Pago */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>Reportar Comprobante de Pago</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Ingresa los datos de tu transferencia o Pago Móvil para conciliar tu trámite de forma automática.
                </p>

                <form onSubmit={reportarPago} className="space-y-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Concepto del Tributo o Tasa
                    </label>
                    <select
                      name="concepto"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:ring-2 focus:ring-amber-500"
                    >
                      <option>Impuesto sobre Inmuebles Urbanos (Derecho de Frente)</option>
                      <option>Patente de Actividades Económicas</option>
                      <option>Tasa Administrativa de Catastro</option>
                      <option>Aseo Urbano Comercial</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">
                        Banco Emisor
                      </label>
                      <select
                        name="banco"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-2 text-xs text-slate-800"
                      >
                        <option>Banco de Venezuela</option>
                        <option>Banesco</option>
                        <option>Mercantil</option>
                        <option>BNC</option>
                        <option>Bancaribe</option>
                        <option>Otro Banco</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">
                        Número de Referencia
                      </label>
                      <input
                        type="text"
                        name="referencia"
                        required
                        placeholder="Ej. 984512"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Monto Pagado (Bs.)
                    </label>
                    <input
                      type="text"
                      name="monto"
                      required
                      placeholder="Ej. 1.250,00"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Registrar y Validar Referencia</span>
                  </button>
                </form>

                {pagoRegistrado && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 space-y-1">
                    <div className="flex items-center justify-between font-bold">
                      <span className="text-emerald-800 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Pago Recibido</span>
                      </span>
                      <span className="font-mono bg-emerald-200/70 px-2 py-0.5 rounded text-[10px]">
                        {pagoRegistrado.comprobante}
                      </span>
                    </div>
                    <p className="text-[11px]">
                      Referencia <strong>{pagoRegistrado.referencia}</strong> por <strong>Bs. {pagoRegistrado.monto}</strong> asociada exitosamente a {pagoRegistrado.concepto}.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
