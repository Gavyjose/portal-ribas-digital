"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Shield,
  FileText,
  Truck,
  BookOpen,
  Landmark,
  ChevronRight
} from "lucide-react";
import { PARROQUIAS_RIBAS } from "@/data/parroquias";

export function Footer() {
  return (
    <footer className="bg-[#06182a] text-slate-300 border-t-2 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* ============================================================== */}
        {/* 4 COLUMNAS PRINCIPALES ESTILO ALCALDÍA DE CARACAS              */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* COLUMNA 1: Identidad, Dirección y Redes (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo Estilo Caracas */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a2540] to-[#123961] p-0.5 shadow flex items-center justify-center border border-white/20">
                <div className="w-full h-full bg-[#0a2540] rounded-[10px] flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-amber-400" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-black text-white">
                  ★
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-white uppercase">
                    RIBAS
                  </span>
                  <span className="text-[10px] font-bold text-red-400 bg-red-950/80 border border-red-800 px-1.5 py-0.2 rounded uppercase">
                    Alcaldía
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-slate-400">
                  Municipio Bolivariano José Félix Ribas
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Portal oficial de la Alcaldía del Municipio Bolivariano José Félix Ribas. Trabajando por una ciudad más limpia, moderna, participativa y con justicia social.
            </p>

            {/* Dirección Oficial estilo Caracas */}
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Sede Administrativa (Casa Amarilla): Calle Candelaria Sur c/c Calle Soublette, Nro. 39-16, Casco Central, La Victoria, Estado Aragua.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Central Telefónica: 0244-4174115 / 0412-4558391</span>
              </div>
            </div>

            {/* Redes Sociales Institucionales */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Oficial"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                IG
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter / X Oficial"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                X
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook Oficial"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                FB
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                title="Canal de Telegram"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-blue-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                TG
              </a>
            </div>
          </div>

          {/* COLUMNA 2: La Alcaldía (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-extrabold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              LA ALCALDÍA
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/municipio" className="hover:text-amber-400 transition-colors">
                  Sobre Nosotros y Gestión
                </Link>
              </li>
              <li>
                <Link href="/municipio" className="hover:text-amber-400 transition-colors">
                  Misión, Visión y Principios
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-amber-400 transition-colors">
                  Organigrama y Direcciones
                </Link>
              </li>
              <li>
                <Link href="/oficina-virtual" className="hover:text-amber-400 transition-colors">
                  Hacienda y Administración Tributaria
                </Link>
              </li>
              <li>
                <Link href="/aseo" className="hover:text-amber-400 transition-colors">
                  Dirección de Servicios Públicos
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-amber-400/90 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1">
                  <span>Acceso Funcionarios (Sala Situacional)</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: El Municipio (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-extrabold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              EL MUNICIPIO
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/municipio" className="hover:text-amber-400 transition-colors">
                  Sobre el Municipio
                </Link>
              </li>
              <li>
                <Link href="/municipio" className="hover:text-amber-400 transition-colors">
                  Símbolos Patrios
                </Link>
              </li>
              <li>
                <Link href="/municipio" className="hover:text-amber-400 transition-colors">
                  12 de Febrero de 1814
                </Link>
              </li>
              {PARROQUIAS_RIBAS.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/municipio#${p.id}`}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between"
                  >
                    <span>{p.nombre.replace("Parroquia ", "")}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 4: Acceso Rápido (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-extrabold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              ACCESO RÁPIDO
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/gacetas" className="hover:text-amber-400 transition-colors">
                  Noticias y Comunicados Oficiales
                </Link>
              </li>
              <li>
                <Link href="/gacetas" className="hover:text-amber-400 transition-colors">
                  Gacetas y Ordenanzas Municipales
                </Link>
              </li>
              <li>
                <Link href="/oficina-virtual" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-400 font-bold">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Oficina Virtual (Solvencias)</span>
                </Link>
              </li>
              <li>
                <Link href="/ribas-resuelve" className="hover:text-rose-400 transition-colors flex items-center gap-1.5 text-rose-400 font-bold">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Ribas Resuelve (Reportes 1x10)</span>
                </Link>
              </li>
              <li>
                <Link href="/aseo" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Rutas de Aseo Urbano (Zonas A, B, C, D)</span>
                </Link>
              </li>
              <li>
                <Link href="/tramites" className="hover:text-amber-400 transition-colors">
                  Catálogo de Trámites y Requisitos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BARRA INFERIOR DE DERECHOS RESERVADOS ESTILO CARACAS           */}
        {/* ============================================================== */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
          <p>
            © 2026 Alcaldía del Municipio Bolivariano José Félix Ribas • La Victoria, Estado Aragua - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
