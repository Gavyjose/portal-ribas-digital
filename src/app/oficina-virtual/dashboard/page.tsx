"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Building2,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Printer,
  ChevronRight,
  ArrowRight,
  LogOut,
  Send,
  Layers,
  MapPin,
  Coins,
  QrCode,
  Download,
  PlusCircle
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { CertificadoSolvenciaModal } from "@/components/CertificadoSolvenciaModal";
import { TRAMITES_MUNICIPALES } from "@/data/tramites";

export default function ContribuyenteDashboardPage() {
  const { usuario, logout, loginAsDemo, iniciarTramite } = useAuth();
  const [activeTab, setActiveTab] = useState<"tramites" | "hacienda" | "catastro" | "civil" | "nuevo">("tramites");
  const [modalCertificado, setModalCertificado] = useState(false);

  // Formulario de nuevo trámite
  const [nuevoTramiteTitulo, setNuevoTramiteTitulo] = useState(TRAMITES_MUNICIPALES[0].titulo);
  const [nuevoTramiteCat, setNuevoTramiteCat] = useState(TRAMITES_MUNICIPALES[0].categoria);
  const [nuevoTramiteCodigo, setNuevoTramiteCodigo] = useState<string | null>(null);

  if (!usuario) {
    return (
      <div className="py-16 min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md w-full mx-4 bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-2xl p-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black text-slate-900">
              Usuario Único Ribas Digital
            </h1>
            <p className="text-xs text-slate-600 leading-relaxed">
              Inicia sesión con tu cédula o RIF para consultar tu historial tributario, avance de trámites y expedientes catastrales.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <Link
              href="/login"
              className="w-full py-3.5 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
            >
              <span>Ingresar con mis Credenciales</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/registro"
              className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center justify-center transition-colors"
            >
              Registrar Nuevo Contribuyente
            </Link>
          </div>

          {/* Acceso Rápido Demo */}
          <div className="pt-4 border-t border-slate-200 space-y-2 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block text-center">
              Acceso Rápido de Prueba (Demo)
            </span>
            <button
              onClick={() => loginAsDemo("natural")}
              className="w-full p-2.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-950 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-amber-600" />
                <span>María Hernández (Persona Natural)</span>
              </div>
              <ChevronRight className="w-4 h-4 text-amber-600" />
            </button>
            <button
              onClick={() => loginAsDemo("juridico")}
              className="w-full p-2.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-950 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>Distribuidora Victoria C.A. (Empresa)</span>
              </div>
              <ChevronRight className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleCrearTramite = (e: React.FormEvent) => {
    e.preventDefault();
    const codigo = iniciarTramite(nuevoTramiteTitulo, nuevoTramiteCat);
    setNuevoTramiteCodigo(codigo);
    setActiveTab("tramites");
  };

  return (
    <div className="py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Cabecera del Perfil Único del Contribuyente */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl text-white p-6 sm:p-10">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/la-victoria/casa-amarilla.jpg"
              alt="Casa Amarilla - La Victoria, Aragua"
              fill
              priority
              className="object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06182a]/95 via-[#0a2540]/85 to-[#06182a]/95" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                {usuario.tipo === "juridico" ? (
                  <Building2 className="w-8 h-8" />
                ) : (
                  <User className="w-8 h-8" />
                )}
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                    {usuario.tipo === "juridico" ? "Contribuyente Jurídico / Comercio" : "Contribuyente Natural"}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-200">
                    {usuario.documento}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  {usuario.nombre}
                </h1>

                <p className="text-xs text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{usuario.direccion}</span>
                </p>
              </div>
            </div>

            {/* Estado de Solvencia & Botón de Salir */}
            <div className="flex flex-wrap md:flex-col items-center md:items-end gap-3 shrink-0">
              <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-3.5 py-1.5 rounded-xl text-xs font-bold backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Solvente con el Municipio Ribas</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setModalCertificado(true)}
                  className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow flex items-center gap-1.5 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Certificado Digital</span>
                </button>

                <button
                  onClick={logout}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors border border-white/10"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Salir</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal de Certificado */}
        {modalCertificado && (
          <CertificadoSolvenciaModal
            contribuyente={usuario.nombre}
            identificacion={usuario.documento}
            inmueble={usuario.inmuebles[0]?.fichaCatastral || "04-02-01-U-0128"}
            parroquia={usuario.parroquia}
            vigencia="Hasta el 31 de Diciembre de 2026"
            hash="8f4b9c1d2e3a5f60718293a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4"
            onClose={() => setModalCertificado(false)}
          />
        )}

        {/* Notificación de Trámite Recién Creado */}
        {nuevoTramiteCodigo && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between text-xs text-emerald-950">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                ¡Trámite registrado con éxito! Tu nuevo expediente es: <strong>{nuevoTramiteCodigo}</strong>. Puedes ver su avance a continuación.
              </span>
            </div>
            <button
              onClick={() => setNuevoTramiteCodigo(null)}
              className="text-emerald-800 hover:underline font-bold"
            >
              Cerrar
            </button>
          </div>
        )}

        {/* Selector de Pestañas del Dashboard */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          <button
            onClick={() => setActiveTab("tramites")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              activeTab === "tramites"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white/80 hover:bg-white text-slate-700 border border-slate-200"
            }`}
          >
            Avance de Mis Trámites ({usuario.tramites.length})
          </button>
          <button
            onClick={() => setActiveTab("hacienda")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              activeTab === "hacienda"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white/80 hover:bg-white text-slate-700 border border-slate-200"
            }`}
          >
            Mi Hacienda Municipal
          </button>
          <button
            onClick={() => setActiveTab("catastro")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              activeTab === "catastro"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white/80 hover:bg-white text-slate-700 border border-slate-200"
            }`}
          >
            Mis Inmuebles & Catastro ({usuario.inmuebles.length})
          </button>
          <button
            onClick={() => setActiveTab("civil")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              activeTab === "civil"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white/80 hover:bg-white text-slate-700 border border-slate-200"
            }`}
          >
            Documentos Registro Civil ({usuario.documentosCivil.length})
          </button>
          <button
            onClick={() => setActiveTab("nuevo")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all flex items-center gap-1.5 ${
              activeTab === "nuevo"
                ? "bg-emerald-700 text-white shadow-md"
                : "bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200"
            }`}
          >
            <PlusCircle className="w-4 h-4" />
            <span>Iniciar Nuevo Trámite</span>
          </button>
        </div>

        {/* Pestaña 1: Avance de Mis Trámites (Líneas de Tiempo) */}
        {activeTab === "tramites" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Expedientes Digitales en Curso e Histórico
                </h2>
                <p className="text-xs text-slate-500">
                  Monitorea en tiempo real el porcentaje de avance y las observaciones de los analistas de la Alcaldía de Ribas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {usuario.tramites.map((tr) => (
                <div
                  key={tr.id}
                  className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-black text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                          {tr.codigo}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          tr.estatus === "Completado"
                            ? "bg-emerald-100 text-emerald-800"
                            : tr.estatus === "Firma Digital"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {tr.estatus}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">
                        {tr.titulo}
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        Iniciado: {tr.fechaInicio} • Última actualización: {tr.ultimaActualizacion}
                      </p>
                    </div>

                    <div className="sm:text-right shrink-0">
                      <span className="text-2xl font-black text-slate-900">{tr.progreso}%</span>
                      <span className="text-[10px] text-slate-400 block">Completado</span>
                    </div>
                  </div>

                  {/* Barra de Progreso Visual */}
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        tr.progreso === 100
                          ? "bg-emerald-500"
                          : tr.progreso >= 70
                          ? "bg-amber-500"
                          : "bg-blue-600"
                      }`}
                      style={{ width: `${tr.progreso}%` }}
                    />
                  </div>

                  {/* Observaciones del Analista Municipal */}
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block text-[11px] uppercase">Nota del Expediente:</strong>
                      <span>{tr.observaciones}</span>
                    </div>
                  </div>

                  {tr.documentoDescargable && (
                    <div className="flex justify-end pt-1">
                      <button
                        onClick={() => setModalCertificado(true)}
                        className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Descargar Certificado Aprobado (PDF)</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pestaña 2: Mi Hacienda Municipal */}
        {activeTab === "hacienda" && (
          <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Estado de Cuenta Consolidado en Hacienda
              </h2>
              <p className="text-xs text-slate-500">
                Supervisión de obligaciones tributarias municipales y autoliquidación en línea.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="text-xs font-bold text-slate-500 block">Impuesto Inmobiliario (Derecho de Frente)</span>
                <span className="text-xl font-black text-emerald-700">Solvente (Al Día)</span>
                <p className="text-[11px] text-slate-500">Próxima liquidación: Enero 2027</p>
              </div>

              {usuario.tipo === "juridico" && (
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                  <span className="text-xs font-bold text-slate-500 block">Patente de Actividades Económicas</span>
                  <span className="text-xl font-black text-emerald-700">Activa & Declarada</span>
                  <p className="text-[11px] text-slate-500">Licencia: {usuario.licenciaComercial}</p>
                </div>
              )}

              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="text-xs font-bold text-slate-500 block">Tasa de Aseo Urbano y Disposición</span>
                <span className="text-xl font-black text-emerald-700">Conformada</span>
                <p className="text-[11px] text-slate-500">Zona de Recolección Asignada</p>
              </div>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
              <div className="space-y-0.5">
                <strong className="block text-sm">¿Deseas reportar un comprobante de pago bancario?</strong>
                <p className="text-slate-600">Puedes conciliar transferencias o Pago Móvil C2P en cualquier momento.</p>
              </div>
              <Link
                href="/oficina-virtual"
                className="px-4 py-2 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold rounded-xl shrink-0 transition-colors shadow text-center"
              >
                Ir a Pagos y Cuentas
              </Link>
            </div>
          </div>
        )}

        {/* Pestaña 3: Mis Inmuebles y Catastro */}
        {activeTab === "catastro" && (
          <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Padrón Inmobiliario Catastral a su Nombre
              </h2>
              <p className="text-xs text-slate-500">
                Inmuebles residenciales, comerciales o industriales registrados ante la Dirección de Catastro de Ribas.
              </p>
            </div>

            <div className="space-y-4">
              {usuario.inmuebles.map((inm, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-900 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                        Ficha: {inm.fichaCatastral}
                      </span>
                      <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                        {inm.tipo}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {inm.direccion}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Parroquia: {inm.parroquia} • Avalúo Municipal: <strong>{inm.avaluoBs}</strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert(`Solicitud de actualización de ficha catastral ${inm.fichaCatastral} generada.`)}
                      className="px-3.5 py-2 bg-[#0a2540] hover:bg-slate-900 text-amber-400 rounded-xl text-xs font-bold transition-colors shadow"
                    >
                      Actualizar Ficha
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pestaña 4: Mis Documentos del Registro Civil */}
        {activeTab === "civil" && (
          <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Archivo Digital de Registro Civil
              </h2>
              <p className="text-xs text-slate-500">
                Certificaciones legales, actas y constancias emitidas con código QR verificable.
              </p>
            </div>

            <div className="space-y-4">
              {usuario.documentosCivil.length > 0 ? (
                usuario.documentosCivil.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                          {doc.codigoVerificacion}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          Emitido: {doc.fechaEmision}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {doc.tipo}
                      </h3>
                      <p className="text-xs text-slate-500">
                        Titular: <strong>{doc.titular}</strong> • Hash SHA-256 verificado
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => alert(`Descarga iniciada para el documento ${doc.codigoVerificacion}`)}
                        className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Descargar PDF</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-xs text-slate-500">
                  No posees documentos de registro civil emitidos aún en este perfil.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Pestaña 5: Solicitar Nuevo Trámite */}
        {activeTab === "nuevo" && (
          <div className="max-w-2xl bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Solicitud Guiada con tu Usuario Único
              </h2>
              <p className="text-xs text-slate-500">
                Tus datos de identificación y domicilio se precargan automáticamente para agilizar la gestión.
              </p>
            </div>

            <form onSubmit={handleCrearTramite} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Trámite que deseas solicitar
                </label>
                <select
                  value={nuevoTramiteTitulo}
                  onChange={(e) => {
                    const sel = TRAMITES_MUNICIPALES.find((t) => t.titulo === e.target.value);
                    setNuevoTramiteTitulo(e.target.value);
                    if (sel) setNuevoTramiteCat(sel.categoria);
                  }}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800"
                >
                  {TRAMITES_MUNICIPALES.map((t) => (
                    <option key={t.id} value={t.titulo}>
                      {t.titulo} ({t.modalidad})
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <span className="font-bold text-slate-700 block uppercase text-[10px]">Datos Vinculados a su Usuario Único:</span>
                <p><strong>Solicitante:</strong> {usuario.nombre}</p>
                <p><strong>Identificación:</strong> {usuario.documento}</p>
                <p><strong>Teléfono:</strong> {usuario.telefono}</p>
                <p><strong>Parroquia:</strong> {usuario.parroquia}</p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Generar Expediente Digital</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
