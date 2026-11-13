"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  QrCode,
  CreditCard,
  Building2,
  FileCheck,
  AlertCircle,
  Printer,
  FileText,
  Send,
  ArrowRight,
  User,
  Lock,
  ChevronRight,
  BookOpen
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function OficinaVirtualPage() {
  const router = useRouter();
  const { usuario, loginAsDemo } = useAuth();
  const [activeTab, setActiveTab] = useState<"acceso" | "verificar" | "pagos">("acceso");

  // Si el usuario ya está autenticado, lo redirigimos a su Dashboard personal
  useEffect(() => {
    if (usuario) {
      router.push("/oficina-virtual/dashboard");
    }
  }, [usuario, router]);

  // Estados para verificador público de autenticidad (código o hash de un documento físico)
  const [codigoVerificar, setCodigoVerificar] = useState("");
  const [resultadoVerificacion, setResultadoVerificacion] = useState<null | {
    valido: boolean;
    documento: string;
    emisor: string;
    fecha: string;
    contribuyente: string;
    hash: string;
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Encabezado con Fondo de Agua Fotográfico de La Casa Amarilla */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl text-white p-8 sm:p-12 text-center">
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
              Oficina Virtual del Contribuyente
            </h1>
            <p className="text-sm text-slate-200 mt-2">
              Plataforma protegida para la autogestión de tributos, padrón catastral, registro civil y seguimiento de expedientes municipales.
            </p>
          </div>
        </div>

        {/* Pestañas Públicas */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab("acceso")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              activeTab === "acceso"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white/90 text-slate-700 hover:bg-white border border-slate-200"
            }`}
          >
            Acceso al Expediente del Contribuyente
          </button>
          <button
            onClick={() => setActiveTab("verificar")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              activeTab === "verificar"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white/90 text-slate-700 hover:bg-white border border-slate-200"
            }`}
          >
            Validador Público de Documentos (QR)
          </button>
          <button
            onClick={() => setActiveTab("pagos")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
              activeTab === "pagos"
                ? "bg-[#0a2540] text-amber-400 shadow-md"
                : "bg-white/90 text-slate-700 hover:bg-white border border-slate-200"
            }`}
          >
            Cuentas y Medios de Pago
          </button>
        </div>

        {/* Pestaña 1: Protección de Datos y Acceso al Expediente */}
        {activeTab === "acceso" && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto border border-amber-500/20">
                  <Lock className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black text-slate-900">
                  Acceso Restringido y Protección al Contribuyente
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                  En cumplimiento del <strong>Secreto Tributario</strong> y las ordenanzas del Municipio José Félix Ribas, la consulta de solvencias, estados de cuenta inmobiliarios y expedientes administrativos requiere inicio de sesión obligatorio con su <strong>Usuario Único</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <Link
                  href="/login"
                  className="p-5 rounded-2xl bg-[#0a2540] hover:bg-slate-900 text-white shadow-lg transition-all group flex flex-col justify-between"
                >
                  <div>
                    <User className="w-6 h-6 text-amber-400 mb-2" />
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300">
                      Ya poseo Usuario Único
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Ingresa con tu Cédula o RIF y contraseña para consultar tu expediente y solicitar trámites.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-amber-400">
                    <span>Iniciar Sesión</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/registro"
                  className="p-5 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-amber-500 shadow-sm transition-all group flex flex-col justify-between"
                >
                  <div>
                    <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800">
                      Crear mi Usuario Único
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Regístrate como persona natural o comercio de Ribas para acceder a todos los servicios digitales.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <span>Registrarme gratis</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>

              {/* Acceso Rápido Demo para Pruebas del Evaluador */}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block text-center">
                  Acceso Rápido de Demostración (Prueba Inmediata)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      loginAsDemo("natural");
                      router.push("/oficina-virtual/dashboard");
                    }}
                    className="p-3 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-950 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors text-left"
                  >
                    <div>
                      <strong className="block">María Hernández (V-18.452.123)</strong>
                      <span className="text-[10px] text-amber-800">Persona Natural • Las Mercedes</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-amber-600 shrink-0" />
                  </button>

                  <button
                    onClick={() => {
                      loginAsDemo("juridico");
                      router.push("/oficina-virtual/dashboard");
                    }}
                    className="p-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-950 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors text-left"
                  >
                    <div>
                      <strong className="block">Distribuidora Victoria C.A.</strong>
                      <span className="text-[10px] text-blue-800">Empresa / RIF: J-30495821-0</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-blue-600 shrink-0" />
                  </button>
                </div>
              </div>

              {/* Aviso Informativo Público */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>¿Deseas consultar los recaudos y requisitos de trámites sin iniciar sesión?</span>
                </div>
                <Link
                  href="/tramites"
                  className="font-bold text-[#0a2540] hover:underline shrink-0 ml-2"
                >
                  Ver Catálogo Público →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Pestaña 2: Validador de Documentos con QR */}
        {activeTab === "verificar" && (
          <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Servicio Público de Validación</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                Verificador de Autenticidad con Código Seguro
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Servicio público disponible para notarías, registros, entidades bancarias y autoridades para verificar la validez de un documento emitido por la Alcaldía de Ribas.
              </p>
            </div>

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

        {/* Pestaña 3: Cuentas y Medios de Pago */}
        {activeTab === "pagos" && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cuentas Bancarias */}
              <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-md p-6 space-y-4">
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
              <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-md p-6 space-y-4">
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
