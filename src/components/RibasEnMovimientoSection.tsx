"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Video,
  Truck,
  Car,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Sparkles,
  Maximize2
} from "lucide-react";

export function RibasEnMovimientoSection() {
  const [activeFilter, setActiveFilter] = useState<"todos" | "autopistas" | "recoleccion">("todos");
  const [paginaActual, setPaginaActual] = useState(0);

  const camaras = [
    {
      id: "cam-1",
      tipo: "autopistas",
      badgeTipo: "AUTOPISTA",
      badgeColor: "bg-blue-600 text-white",
      titulo: "Peaje La Victoria - Autopista Regional",
      subtitulo: "Cámara 01 - Acceso Principal Peaje",
      ubicacion: "Distribuidor La Mora, Tramo ARC",
      imagen: "/images/la-victoria/vista-aerea.jpg",
      estado: "EN VIVO",
      hora: "Actualizado hace 1 min",
      cuadrilla: "Tránsito y Vialidad Activo"
    },
    {
      id: "cam-2",
      tipo: "recoleccion",
      badgeTipo: "RECOLECCIÓN",
      badgeColor: "bg-emerald-600 text-white",
      titulo: "Recolección - Av. Bicentenaria",
      subtitulo: "Cámara 02 - Punto Las Mercedes",
      ubicacion: "Av. Bicentenaria cruce con Sector 2",
      imagen: "/images/la-victoria/cuartel-castillo.jpg",
      estado: "EN VIVO",
      hora: "Actualizado hace 2 min",
      cuadrilla: "Camión C-25 IVECO en ruta"
    },
    {
      id: "cam-3",
      tipo: "recoleccion",
      badgeTipo: "RECOLECCIÓN",
      badgeColor: "bg-emerald-600 text-white",
      titulo: "Recolección - Casco Central Comercial",
      subtitulo: "Cámara 03 - Calle Candelaria",
      ubicacion: "Calle Candelaria c/c Calle Soublette",
      imagen: "/images/la-victoria/casa-amarilla.jpg",
      estado: "EN VIVO",
      hora: "Actualizado hace 1 min",
      cuadrilla: "Trimoto TR-01 y Barrido Activo"
    },
    {
      id: "cam-4",
      tipo: "autopistas",
      badgeTipo: "AUTOPISTA",
      badgeColor: "bg-blue-600 text-white",
      titulo: "Distribuidor Soco - Zona Industrial",
      subtitulo: "Cámara 04 - Eje Industrial 1 y 2",
      ubicacion: "Av. Intercomunal La Victoria - El Consejo",
      imagen: "/images/la-victoria/cuartel-montilla.jpg",
      estado: "EN VIVO",
      hora: "Actualizado hace 3 min",
      cuadrilla: "Monitoreo y Seguridad Vial"
    }
  ];

  const camarasFiltradas =
    activeFilter === "todos"
      ? camaras
      : camaras.filter((c) => c.tipo === activeFilter);

  const prevSlide = () => {
    setPaginaActual((prev) => (prev > 0 ? prev - 1 : Math.max(0, camarasFiltradas.length - 3)));
  };

  const nextSlide = () => {
    setPaginaActual((prev) => (prev < camarasFiltradas.length - 3 ? prev + 1 : 0));
  };

  return (
    <section id="ribas-en-movimiento" className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Cabecera idéntica a Caracas en Movimiento */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
            RIBAS EN MOVIMIENTO
          </h2>
          <p className="text-sm text-slate-600">
            Recorrido y operaciones de la ciudad: autopistas y recolección de residuos.
          </p>
        </div>

        {/* Barra de Filtros y Controles de Navegación estilo Caracas */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          {/* Botones de Filtro */}
          <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
            <button
              onClick={() => {
                setActiveFilter("todos");
                setPaginaActual(0);
              }}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === "todos"
                  ? "bg-[#0a2540] text-amber-400 shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => {
                setActiveFilter("autopistas");
                setPaginaActual(0);
              }}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === "autopistas"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>Autopistas</span>
            </button>
            <button
              onClick={() => {
                setActiveFilter("recoleccion");
                setPaginaActual(0);
              }}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === "recoleccion"
                  ? "bg-emerald-600 text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Recolección</span>
            </button>
          </div>

          {/* Flechas de Navegación Carousel */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Anterior"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Siguiente"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grid de Monitores / Cámaras en Vivo estilo Caracas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {camarasFiltradas.slice(paginaActual, paginaActual + 3).map((cam) => (
            <div
              key={cam.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Contenedor del Visor de Cámara */}
              <div className="relative h-56 sm:h-60 bg-slate-950 overflow-hidden">
                <Image
                  src={cam.imagen}
                  alt={cam.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80"
                />

                {/* Overlay de cámara estilo circuito cerrado */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/40" />

                {/* Badge EN VIVO estilo Caracas */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <div className="px-2.5 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider rounded-md flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    <span>{cam.estado}</span>
                  </div>
                  <div className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded">
                    {cam.hora}
                  </div>
                </div>

                {/* Indicador de Cámara y Botón de pantalla completa */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="p-1.5 bg-black/50 backdrop-blur-md text-white rounded-lg hover:bg-black/80 transition-colors cursor-pointer">
                    <Video className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                {/* Datos sobre la imagen */}
                <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${cam.badgeColor}`}>
                      {cam.badgeTipo}
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium">
                      {cam.subtitulo}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-white leading-tight drop-shadow">
                    {cam.titulo}
                  </h3>
                </div>
              </div>

              {/* Información Inferior de la Tarjeta */}
              <div className="p-4 bg-white flex items-center justify-between text-xs border-t border-slate-100">
                <div className="space-y-0.5">
                  <p className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{cam.ubicacion}</span>
                  </p>
                  <p className="text-[10px] text-emerald-700 font-semibold pl-4">
                    {cam.cuadrilla}
                  </p>
                </div>
                <Link
                  href="/aseo"
                  className="px-3 py-1.5 bg-slate-100 hover:bg-[#0a2540] hover:text-amber-400 text-slate-700 font-bold text-[11px] rounded-lg transition-colors"
                >
                  Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
