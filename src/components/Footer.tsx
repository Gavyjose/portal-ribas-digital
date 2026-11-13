import React from "react";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Shield,
  FileText,
  Truck
} from "lucide-react";
import { PARROQUIAS_RIBAS } from "@/data/parroquias";

export function Footer() {
  return (
    <footer className="bg-[#06182a] text-slate-300 border-t-4 border-amber-500">
      {/* Sección Superior: Símbolo y Resumen */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Identidad Institucional */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base leading-tight">
                  Alcaldía de José Félix Ribas
                </h3>
                <p className="text-xs text-amber-400 font-medium">La Victoria, Estado Aragua</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Gobierno municipal digital y participativo al servicio del pueblo victoriano. Construyendo una ciudad moderna, productiva, limpia y con justicia social.
            </p>
            <div className="pt-2 border-t border-slate-800">
              <span className="inline-block bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] px-2.5 py-1 rounded font-medium">
                12 de Febrero • Cuna de la Juventud Heroica
              </span>
            </div>
          </div>

          {/* Columna 2: Las 5 Parroquias */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Parroquias del Municipio
            </h4>
            <ul className="space-y-2 text-xs">
              {PARROQUIAS_RIBAS.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/municipio#${p.id}`}
                    className="hover:text-amber-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{p.nombre}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-amber-400">
                      {p.cabecera}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Trámites & Servicios Digitales */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Ventanilla de Servicios
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/oficina-virtual"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  <span>Oficina Virtual (Hacienda & Solvencias)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/ribas-resuelve"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-rose-400" />
                  <span>Reportes Comunitarios (Ribas Resuelve)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/aseo"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Truck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Cronograma y Rutas de Aseo Urbano</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gacetas"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                  <span>Gacetas Municipales y Ordenanzas</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto y Ubicación Oficial */}
          <div className="space-y-2.5 text-xs">
            <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              Sede Principal de Gobierno
            </h4>
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Casa Amarilla:</strong> Calle Candelaria Sur cruce con Calle Soublette, Nro. 39-16, Casco Central de La Victoria, Estado Aragua.
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>0244-4174115 / 0412-4558391</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <span>atencionalciudadano@alcaldiaderibas.gob.ve</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 pt-1">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Atención al público: Lun a Vie 8:00 AM - 4:00 PM</span>
            </div>
          </div>
        </div>

        {/* Separador inferior */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © 2026 Alcaldía del Municipio José Félix Ribas. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Portal Institucional de Gobierno Digital</span>
            <span>•</span>
            <span className="text-amber-400">Ribas Digital v2.0</span>
            <span>•</span>
            <Link href="/admin" className="text-slate-500 hover:text-amber-400 transition-colors">
              Acceso Funcionarios (Sala Situacional)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
