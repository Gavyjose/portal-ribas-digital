"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Building2,
  FileText,
  AlertCircle,
  Truck,
  BookOpen,
  Landmark,
  ShieldCheck,
  ChevronRight,
  User,
  LogOut
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { usuario, logout } = useAuth();

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Trámites", href: "/tramites", icon: FileText },
    {
      name: usuario ? "Mi Expediente" : "Oficina Virtual",
      href: usuario ? "/oficina-virtual/dashboard" : "/oficina-virtual",
      icon: ShieldCheck,
      highlight: true
    },
    { name: "Ribas Resuelve", href: "/ribas-resuelve", icon: AlertCircle },
    { name: "Aseo Urbano", href: "/aseo", icon: Truck },
    { name: "Gacetas", href: "/gacetas", icon: BookOpen },
    { name: "El Municipio", href: "/municipio", icon: Landmark },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0a2540] text-white shadow-lg border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo e Identidad Institucional */}
          <Link href="/" className="flex items-center gap-3.5 group">
            {/* Emblema Gráfico Simbólico de Ribas */}
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-0.5 shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0a2540] rounded-[10px] flex items-center justify-center p-1.5">
                <Building2 className="w-6 h-6 text-amber-400" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-600 rounded-full border border-white flex items-center justify-center text-[8px] font-bold text-white">
                ★
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">
                  República Bolivariana de Venezuela
                </span>
              </div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
                Alcaldía de José Félix Ribas
              </span>
              <span className="text-[11px] text-slate-300 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                La Victoria • Estado Aragua • Cuna de la Juventud
              </span>
            </div>
          </Link>

          {/* Menú de Navegación de Escritorio */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;

              if (link.highlight) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`ml-2 px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all shadow-md ${
                      isActive
                        ? "bg-amber-400 text-[#0a2540] ring-2 ring-white/50"
                        : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 hover:shadow-amber-500/25"
                    }`}
                  >
                    {Icon && <Icon className="w-3.5 h-3.5" />}
                    <span>{link.name}</span>
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? "bg-white/10 text-amber-400 font-semibold"
                      : "text-slate-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{link.name}</span>
                </Link>
              );
            })}

            {/* Usuario Único: Estado de Autenticación */}
            <div className="ml-2 pl-2 border-l border-white/10 flex items-center gap-2">
              {usuario ? (
                <div className="flex items-center gap-2">
                  <Link
                    href="/oficina-virtual/dashboard"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 hover:bg-emerald-500/30 transition-colors text-xs font-bold"
                  >
                    <User className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="max-w-[110px] truncate">{usuario.nombre.split(" ")[0]}</span>
                  </Link>
                  <button
                    onClick={logout}
                    title="Cerrar sesión"
                    className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="px-3 py-1.5 rounded-lg border border-amber-400/40 text-amber-300 hover:bg-amber-400/10 text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Ingresar</span>
                </Link>
              )}
            </div>
          </nav>

          {/* Botón de Menú Móvil */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href={usuario ? "/oficina-virtual/dashboard" : "/login"}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-md shadow flex items-center gap-1"
            >
              <User className="w-3.5 h-3.5" />
              <span>{usuario ? usuario.nombre.split(" ")[0] : "Ingresar"}</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#06182a] border-t border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    : "text-slate-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  {Icon && <Icon className="w-4 h-4 text-amber-400" />}
                  <span>{link.name}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
            );
          })}

          <div className="pt-3 border-t border-slate-800">
            {usuario ? (
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-3 text-left text-rose-400 hover:bg-rose-500/10 rounded-lg text-xs font-bold flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Cerrar Sesión ({usuario.nombre})</span>
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-3 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                <span>Iniciar Sesión / Registro de Usuario Único</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
