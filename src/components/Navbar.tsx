"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  FileText,
  AlertCircle,
  Truck,
  BookOpen,
  Landmark,
  ShieldCheck,
  User,
  LogOut,
  ChevronRight,
  Sparkles,
  MapPin,
  Compass
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownAlcaldia, setDropdownAlcaldia] = useState(false);
  const [dropdownMunicipio, setDropdownMunicipio] = useState(false);
  const pathname = usePathname();
  const { usuario, logout } = useAuth();

  const closeDropdowns = () => {
    setDropdownAlcaldia(false);
    setDropdownMunicipio(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md text-slate-800 shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Institucional estilo Alcaldía de Caracas */}
          <Link
            href="/"
            onClick={closeDropdowns}
            className="flex items-center gap-3.5 group select-none"
          >
            {/* Emblema con Estrella y Colores Patrios de Ribas */}
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a2540] to-[#123961] p-0.5 shadow flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0a2540] rounded-[10px] flex items-center justify-center">
                <Building2 className="w-6 h-6 text-amber-400" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-black text-white shadow">
                ★
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0a2540] uppercase">
                  RIBAS
                </span>
                <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.2 rounded uppercase">
                  Alcaldía
                </span>
              </div>
              <span className="text-[11px] font-bold text-slate-600 tracking-tight leading-none">
                Municipio José Félix Ribas
              </span>
              <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                La Victoria • Estado Aragua
              </span>
            </div>
          </Link>

          {/* Menú de Navegación de Escritorio */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Inicio */}
            <Link
              href="/"
              onClick={closeDropdowns}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                pathname === "/"
                  ? "text-blue-700 bg-blue-50/80"
                  : "text-slate-700 hover:text-[#0a2540] hover:bg-slate-100"
              }`}
            >
              Inicio
            </Link>

            {/* Dropdown Alcaldía */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownAlcaldia(true)}
              onMouseLeave={() => setDropdownAlcaldia(false)}
            >
              <button
                className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors ${
                  pathname.startsWith("/admin") || dropdownAlcaldia
                    ? "text-blue-700 bg-blue-50/80"
                    : "text-slate-700 hover:text-[#0a2540] hover:bg-slate-100"
                }`}
              >
                <span>Alcaldía</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {dropdownAlcaldia && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 mt-0 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase text-slate-400 border-b border-slate-100">
                    Estructura y Despacho
                  </div>
                  <Link
                    href="/admin"
                    onClick={closeDropdowns}
                    className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                  >
                    <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <div>
                      <div className="font-bold">Sala Situacional 1x10</div>
                      <div className="text-[10px] text-slate-400">Panel administrativo municipal</div>
                    </div>
                  </Link>
                  <Link
                    href="/oficina-virtual"
                    onClick={closeDropdowns}
                    className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                    <div>
                      <div className="font-bold">Hacienda y Tributos</div>
                      <div className="text-[10px] text-slate-400">Patentes, vehículos y solvencias</div>
                    </div>
                  </Link>
                  <Link
                    href="/aseo"
                    onClick={closeDropdowns}
                    className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
                  >
                    <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <div className="font-bold">Servicios Públicos</div>
                      <div className="text-[10px] text-slate-400">Plan Ribas Limpia y Bonita</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Dropdown Municipio */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownMunicipio(true)}
              onMouseLeave={() => setDropdownMunicipio(false)}
            >
              <button
                className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors ${
                  pathname === "/municipio" || dropdownMunicipio
                    ? "text-blue-700 bg-blue-50/80"
                    : "text-slate-700 hover:text-[#0a2540] hover:bg-slate-100"
                }`}
              >
                <span>Municipio</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {dropdownMunicipio && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 mt-0 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase text-slate-400 border-b border-slate-100">
                    Territorio e Historia
                  </div>
                  <Link
                    href="/municipio"
                    onClick={closeDropdowns}
                    className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                  >
                    <Landmark className="w-4 h-4 text-amber-600 shrink-0" />
                    <div>
                      <div className="font-bold">Historia y Símbolos</div>
                      <div className="text-[10px] text-slate-400">Batalla del 12 de Febrero de 1814</div>
                    </div>
                  </Link>
                  <Link
                    href="/municipio#parroquias"
                    onClick={closeDropdowns}
                    className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  >
                    <Compass className="w-4 h-4 text-blue-600 shrink-0" />
                    <div>
                      <div className="font-bold">Las 5 Parroquias</div>
                      <div className="text-[10px] text-slate-400">Castor Nieves, Zuata, Bolívar, Pao y Guacamayas</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Trámites */}
            <Link
              href="/tramites"
              onClick={closeDropdowns}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                pathname === "/tramites"
                  ? "text-blue-700 bg-blue-50/80"
                  : "text-slate-700 hover:text-[#0a2540] hover:bg-slate-100"
              }`}
            >
              Trámites
            </Link>

            {/* Ribas Resuelve */}
            <Link
              href="/ribas-resuelve"
              onClick={closeDropdowns}
              className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                pathname === "/ribas-resuelve"
                  ? "text-rose-700 bg-rose-50"
                  : "text-slate-700 hover:text-rose-700 hover:bg-rose-50/60"
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
              <span>Ribas Resuelve</span>
            </Link>

            {/* Aseo Urbano */}
            <Link
              href="/aseo"
              onClick={closeDropdowns}
              className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                pathname === "/aseo"
                  ? "text-emerald-700 bg-emerald-50"
                  : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60"
              }`}
            >
              <Truck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Aseo Urbano</span>
            </Link>

            {/* Gacetas */}
            <Link
              href="/gacetas"
              onClick={closeDropdowns}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                pathname === "/gacetas"
                  ? "text-blue-700 bg-blue-50/80"
                  : "text-slate-700 hover:text-[#0a2540] hover:bg-slate-100"
              }`}
            >
              Gacetas
            </Link>

            {/* Botón Principal Oficina Virtual / Usuario Único */}
            <div className="ml-3 pl-3 border-l border-slate-200 flex items-center gap-2">
              {usuario ? (
                <div className="flex items-center gap-1.5">
                  <Link
                    href="/oficina-virtual/dashboard"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
                  >
                    <User className="w-3.5 h-3.5" />
                    <span className="max-w-[120px] truncate">{usuario.nombre.split(" ")[0]}</span>
                  </Link>
                  <button
                    onClick={logout}
                    title="Cerrar sesión"
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <Link
                  href="/oficina-virtual"
                  className="px-4 py-2 rounded-xl bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold text-xs shadow-sm hover:shadow transition-all flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Oficina Virtual</span>
                </Link>
              )}
            </div>
          </nav>

          {/* Menú Móvil Botón */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href={usuario ? "/oficina-virtual/dashboard" : "/oficina-virtual"}
              className="px-3 py-1.5 bg-[#0a2540] text-amber-400 font-bold text-xs rounded-xl shadow flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{usuario ? usuario.nombre.split(" ")[0] : "Oficina"}</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 focus:outline-none"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2.5 rounded-xl font-bold text-xs text-slate-800 hover:bg-slate-100"
          >
            <span>Inicio</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
          <Link
            href="/tramites"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2.5 rounded-xl font-bold text-xs text-slate-800 hover:bg-slate-100"
          >
            <span>Trámites y Servicios</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
          <Link
            href="/oficina-virtual"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2.5 rounded-xl font-bold text-xs text-amber-900 bg-amber-50"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Oficina Virtual (Solvencias)</span>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-600" />
          </Link>
          <Link
            href="/ribas-resuelve"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2.5 rounded-xl font-bold text-xs text-rose-800 hover:bg-rose-50"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>Ribas Resuelve (1x10)</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
          <Link
            href="/aseo"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2.5 rounded-xl font-bold text-xs text-emerald-800 hover:bg-emerald-50"
          >
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-600" />
              <span>Aseo Urbano (Zonas A, B, C, D)</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
          <Link
            href="/municipio"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2.5 rounded-xl font-bold text-xs text-slate-800 hover:bg-slate-100"
          >
            <span>El Municipio y las 5 Parroquias</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
          <Link
            href="/gacetas"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2.5 rounded-xl font-bold text-xs text-slate-800 hover:bg-slate-100"
          >
            <span>Gacetas Oficiales</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>

          <div className="pt-3 border-t border-slate-200 mt-2">
            {usuario ? (
              <div className="space-y-2">
                <Link
                  href="/oficina-virtual/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-3 bg-emerald-600 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow"
                >
                  <User className="w-4 h-4" />
                  <span>Mi Expediente ({usuario.nombre})</span>
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 px-3 text-center text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-bold"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-3 bg-[#0a2540] text-amber-400 font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow"
              >
                <User className="w-4 h-4" />
                <span>Ingresar con Cédula o RIF</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
