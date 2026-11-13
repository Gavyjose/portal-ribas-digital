"use client";

import React from "react";
import { X, Printer, ShieldCheck, QrCode, CheckCircle2, Award } from "lucide-react";

interface CertificadoProps {
  contribuyente: string;
  identificacion: string;
  inmueble: string;
  parroquia: string;
  vigencia: string;
  hash: string;
  onClose: () => void;
}

export function CertificadoSolvenciaModal({
  contribuyente,
  identificacion,
  inmueble,
  parroquia,
  vigencia,
  hash,
  onClose,
}: CertificadoProps) {
  const imprimirDocumento = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-300 overflow-hidden my-8">
        {/* Barra superior de control (no se imprime) */}
        <div className="bg-[#0a2540] text-white px-6 py-3.5 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Documento Oficial Certificado con Validez Digital</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={imprimirDocumento}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hoja de Certificado Oficial (formato carta para imprimir) */}
        <div className="p-8 sm:p-12 text-slate-900 bg-white relative print:p-0 print:m-0 print:border-none">
          {/* Marca de Agua de Fondo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
            <Award className="w-96 h-96 text-slate-950" />
          </div>

          {/* Membrete Institucional */}
          <div className="text-center space-y-1 pb-6 border-b-2 border-slate-900">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-600">
              República Bolivariana de Venezuela • Estado Aragua
            </p>
            <h2 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#0a2540]">
              Alcaldía del Municipio José Félix Ribas
            </h2>
            <p className="text-[11px] font-semibold text-amber-800 uppercase">
              Dirección de Hacienda y Administración Tributaria Municipal
            </p>
            <p className="text-[9px] text-slate-500">
              Sede Administrativa: Casa Amarilla, Calle Candelaria c/c Soublette, La Victoria
            </p>
          </div>

          {/* Título del Certificado */}
          <div className="my-6 text-center space-y-1">
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-3 py-0.5 rounded-full uppercase">
              Registro Digital N.º RIB-SOLV-2026-0849
            </span>
            <h1 className="text-lg sm:text-xl font-extrabold uppercase text-slate-900 tracking-wide pt-2">
              Certificado de Solvencia Municipal
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Impuesto sobre Inmuebles Urbanos y Actividades Municipales
            </p>
          </div>

          {/* Cuerpo Legal */}
          <div className="space-y-4 text-xs sm:text-sm text-slate-800 leading-relaxed text-justify">
            <p>
              La <strong>Dirección de Hacienda y Administración Tributaria del Municipio José Félix Ribas del Estado Aragua</strong>, en uso de las atribuciones legales conferidas por la Ley Orgánica del Poder Público Municipal y la Ordenanza Tributaria vigente, hace constar por medio del presente documento que el contribuyente:
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <span className="text-slate-500 block text-[10px] font-semibold uppercase">Contribuyente / Razón Social:</span>
                  <strong className="text-slate-900">{contribuyente}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] font-semibold uppercase">Cédula de Identidad / RIF:</span>
                  <strong className="text-slate-900 font-mono">{identificacion}</strong>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200">
                <div>
                  <span className="text-slate-500 block text-[10px] font-semibold uppercase">Identificación Catastral:</span>
                  <strong className="text-slate-900">{inmueble}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] font-semibold uppercase">Jurisdicción Parroquial:</span>
                  <strong className="text-slate-900">{parroquia}</strong>
                </div>
              </div>
            </div>

            <p>
              Ha dado cabal cumplimiento a las obligaciones tributarias causadas correspondientes al ejercicio fiscal en curso, encontrándose en condición de: <strong className="text-emerald-700 uppercase">SOLVENTE</strong>.
            </p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs flex items-center justify-between text-emerald-900">
              <span className="flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Vigencia del Documento:</span>
              </span>
              <strong className="font-semibold">{vigencia}</strong>
            </div>
          </div>

          {/* Sellos, Firmas y Código QR */}
          <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Código QR y Hash */}
            <div className="sm:col-span-5 flex items-center gap-3">
              <div className="w-16 h-16 bg-slate-100 border border-slate-300 rounded-xl p-1 flex items-center justify-center shrink-0">
                <QrCode className="w-14 h-14 text-slate-900" />
              </div>
              <div className="space-y-0.5 text-[9px] text-slate-500 leading-tight">
                <span className="font-bold text-slate-700 block">Verificación Digital QR</span>
                <span>Escanee para verificar autenticidad en el portal alcaldiaderibas.gob.ve</span>
                <span className="font-mono text-[8px] text-slate-400 block truncate max-w-[140px]">
                  Hash: {hash.slice(0, 24)}...
                </span>
              </div>
            </div>

            {/* Firma Digital del Director */}
            <div className="sm:col-span-7 text-center pt-4 sm:pt-0">
              <div className="inline-block border-t border-slate-800 px-6 pt-1 text-[11px]">
                <strong className="text-slate-900 block font-bold">Lic. Dirección de Hacienda Municipal</strong>
                <span className="text-slate-600 text-[10px] block">Alcaldía del Municipio José Félix Ribas</span>
                <span className="text-[9px] text-emerald-700 font-semibold">Firmado Electrónicamente con Hash SHA-256</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
