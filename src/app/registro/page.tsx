"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  User,
  Building2,
  Mail,
  Phone,
  MapPin,
  Lock,
  ArrowRight
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function RegistroPage() {
  const router = useRouter();
  const { registrarUsuario } = useAuth();

  const [tipo, setTipo] = useState<"natural" | "juridico">("natural");
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [parroquia, setParroquia] = useState("Castor Nieves Ríos");
  const [direccion, setDireccion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registrarUsuario({
      tipo,
      nombre,
      documento,
      email,
      telefono,
      parroquia,
      direccion
    });
    router.push("/oficina-virtual/dashboard");
  };

  return (
    <div className="py-12 min-h-[85vh] flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-10 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0a2540] to-[#12365c] text-amber-400 flex items-center justify-center mx-auto shadow-md">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-slate-900">
            Registro de Usuario Único Ribas Digital
          </h1>
          <p className="text-xs text-slate-500">
            Crea tu perfil ciudadano o comercial para gestionar trámites y acceder a tu expediente municipal.
          </p>
        </div>

        {/* Selector de Tipo de Contribuyente */}
        <div className="grid grid-cols-2 gap-3 p-1 bg-slate-100 rounded-2xl">
          <button
            type="button"
            onClick={() => setTipo("natural")}
            className={`py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              tipo === "natural"
                ? "bg-white text-slate-900 shadow"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <User className="w-4 h-4 text-amber-600" />
            <span>Persona Natural (V/E)</span>
          </button>

          <button
            type="button"
            onClick={() => setTipo("juridico")}
            className={`py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              tipo === "juridico"
                ? "bg-white text-slate-900 shadow"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Building2 className="w-4 h-4 text-blue-600" />
            <span>Empresa / Comercio (J/G)</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                {tipo === "juridico" ? "Razón Social de la Empresa" : "Nombre y Apellido Completo"}
              </label>
              <input
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder={tipo === "juridico" ? "Ej. Panadería La Estación C.A." : "Ej. Carlos Eduardo Pérez"}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                {tipo === "juridico" ? "RIF Jurídico" : "Cédula de Identidad"}
              </label>
              <input
                type="text"
                required
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                placeholder={tipo === "juridico" ? "J-12345678-0" : "V-12345678"}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Teléfono de Contacto (WhatsApp)
              </label>
              <input
                type="tel"
                required
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="0412-1234567"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Parroquia de Domicilio
              </label>
              <select
                value={parroquia}
                onChange={(e) => setParroquia(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900"
              >
                <option>Castor Nieves Ríos</option>
                <option>Juan Vicente Bolívar y Ponte</option>
                <option>Zuata</option>
                <option>Pao de Zárate</option>
                <option>Las Guacamayas</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Sector y Dirección Fiscal
              </label>
              <input
                type="text"
                required
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                placeholder="Urb., calle, edificio o casa"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Contraseña de Acceso
            </label>
            <input
              type="password"
              required
              placeholder="Crea una contraseña segura"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
          >
            <span>Crear Mi Usuario Único y Acceder</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
          ¿Ya tienes cuenta registrada?{" "}
          <Link href="/login" className="text-amber-800 font-bold hover:underline">
            Inicia Sesión aquí
          </Link>
        </div>
      </div>
    </div>
  );
}
