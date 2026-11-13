"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ShieldCheck,
  User,
  Building2,
  Lock,
  ArrowRight,
  Sparkles,
  ChevronRight,
  AlertCircle
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login, loginAsDemo } = useAuth();
  const [documento, setDocumento] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!documento.trim()) {
      setError("Por favor ingrese su Cédula o RIF.");
      return;
    }

    login(documento, clave);
    router.push("/oficina-virtual/dashboard");
  };

  const handleDemo = (tipo: "natural" | "juridico") => {
    loginAsDemo(tipo);
    router.push("/oficina-virtual/dashboard");
  };

  return (
    <div className="py-12 min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0a2540] to-[#12365c] text-amber-400 flex items-center justify-center mx-auto shadow-md">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-slate-900">
            Usuario Único Ribas Digital
          </h1>
          <p className="text-xs text-slate-500">
            Accede a tu expediente tributario, catastro y trámites municipales en La Victoria.
          </p>
        </div>

        {error && (
          <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Cédula de Identidad o RIF
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                placeholder="Ej. V-18452123 o J-304958210"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
          >
            <span>Iniciar Sesión</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-slate-500">
          ¿No tienes usuario registrado aún?{" "}
          <Link href="/registro" className="text-amber-800 font-bold hover:underline">
            Crear Usuario Único
          </Link>
        </div>

        {/* Cuentas Demo de Prueba Rápida */}
        <div className="pt-4 border-t border-slate-200 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block text-center">
            Prueba Rápida con Cuentas Demo
          </span>
          <button
            type="button"
            onClick={() => handleDemo("natural")}
            className="w-full p-2.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-950 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-amber-600" />
              <span>María Hernández (Persona Natural)</span>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-600" />
          </button>

          <button
            type="button"
            onClick={() => handleDemo("juridico")}
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
