"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  MessageSquare,
  Bot,
  X,
  Send,
  Sparkles,
  Truck,
  Phone,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  RefreshCw,
  Search,
  Building2,
  Calendar,
  CheckCircle2,
  MapPin,
  Clock
} from "lucide-react";
import { ZONAS_ASEO } from "@/data/aseo";
import { TRAMITES_MUNICIPALES } from "@/data/tramites";

interface MensajeChat {
  id: string;
  remitente: "bot" | "usuario";
  texto: string;
  hora: string;
  sugerencias?: string[];
  enlaceAccion?: {
    texto: string;
    url: string;
    icono?: string;
  };
  telefonoAccion?: {
    nombre: string;
    numero: string;
  };
}

export function RibasBotWidget() {
  const [abierto, setAbierto] = useState(false);
  const [mensajeInput, setMensajeInput] = useState("");
  const [mensajes, setMensajes] = useState<MensajeChat[]>([
    {
      id: "inicio-1",
      remitente: "bot",
      texto:
        "¡Hola! Soy RibasBot 🤖, el asistente virtual oficial de la Alcaldía de José Félix Ribas. ¿En qué puedo ayudarte hoy?",
      hora: "Ahora",
      sugerencias: [
        "🚛 ¿Cuándo pasa el aseo?",
        "📑 ¿Cómo tramito una Solvencia?",
        "🏗️ Monitor de Obras en Parroquias",
        "🏪 Abrir o formalizar un Negocio",
        "🚨 Reportar avería con foto (1x10)",
        "💬 Hablar por WhatsApp"
      ]
    }
  ]);

  const [escribiendo, setEscribiendo] = useState(false);
  const [mostrarPill, setMostrarPill] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll al final de la conversación
  useEffect(() => {
    if (abierto) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [mensajes, abierto, escribiendo]);

  // Cerrar el pill de bienvenida tras 10 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarPill(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  // Lógica de respuesta inteligente en lenguaje natural
  const procesarPregunta = (consulta: string) => {
    const q = consulta.toLowerCase().trim();
    const horaActual = new Date().toLocaleTimeString("es-VE", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

    let respuestaBot: MensajeChat = {
      id: `bot-${Date.now()}`,
      remitente: "bot",
      texto: "",
      hora: horaActual
    };

    // 1. Consulta de Aseo Urbano
    if (
      q.includes("aseo") ||
      q.includes("basura") ||
      q.includes("camion") ||
      q.includes("recoleccion") ||
      q.includes("limpia")
    ) {
      // Buscar si mencionó un sector específico
      const sectorEncontrado = ZONAS_ASEO.flatMap((z) =>
        z.rutas.map((r) => ({ zona: z, ruta: r }))
      ).find((item) =>
        q.includes("mercedes")
          ? item.ruta.sectores.toLowerCase().includes("mercedes")
          : q.includes("mora")
          ? item.ruta.sectores.toLowerCase().includes("mora")
          : q.includes("zuata")
          ? item.ruta.sectores.toLowerCase().includes("zuata")
          : q.includes("soco")
          ? item.ruta.sectores.toLowerCase().includes("soco")
          : q.includes("centro") || q.includes("casco")
          ? item.ruta.sectores.toLowerCase().includes("comercial")
          : false
      );

      if (sectorEncontrado) {
        respuestaBot.texto = `📍 **Plan de Aseo para tu sector (${sectorEncontrado.zona.nombre}):**\n\n• **Ruta:** ${sectorEncontrado.ruta.numero}\n• **Días de servicio:** ${sectorEncontrado.ruta.dias}\n• **Horario:** ${sectorEncontrado.ruta.horario}\n• **Transporte:** ${sectorEncontrado.ruta.transporte}\n• **Coordinador:** ${sectorEncontrado.zona.coordinador}`;
        respuestaBot.enlaceAccion = {
          texto: "Ver Plan en Relieve 3D",
          url: "/aseo"
        };
        respuestaBot.telefonoAccion = {
          nombre: `Llamar al Coordinador (${sectorEncontrado.zona.coordinador})`,
          numero: sectorEncontrado.zona.telefono
        };
      } else {
        respuestaBot.texto =
          "🚛 El plan **Ribas Limpia y Bonita** cubre las 4 Zonas Operativas de La Victoria:\n\n• **Zona A (Las Mercedes):** Lun, Mié y Vie (07:00 am - 02:00 pm)\n• **Zona B (La Mora):** Lun, Mié y Vie (07:00 am - 02:00 pm)\n• **Zona C (Casco Central / Soco):** Lunes a Domingo\n• **Zona D (Zuata y Parroquias):** Mar, Jue y Sáb.\n\nPuedes consultar el mapa interactivo en relieve o escribir el nombre exacto de tu sector.";
        respuestaBot.enlaceAccion = {
          texto: "Explorar Mapa y Horarios de Aseo",
          url: "/aseo"
        };
        respuestaBot.sugerencias = [
          "Aseo en Las Mercedes",
          "Aseo en Casco Central",
          "Aseo en La Mora",
          "Aseo en Zuata"
        ];
      }
    }

    // 2. Consulta de Solvencias / Tributos / Impuestos
    else if (
      q.includes("solvencia") ||
      q.includes("impuesto") ||
      q.includes("patente") ||
      q.includes("hacienda") ||
      q.includes("sumar") ||
      q.includes("tribut") ||
      q.includes("inmueble") ||
      q.includes("vehiculo")
    ) {
      respuestaBot.texto =
        "📑 **Trámites y Solvencias Tributarias (SUMAR Ribas):**\n\nPuedes autoliquidar tus impuestos y emitir tus certificados en línea desde la **Oficina Virtual Municipal**:\n\n1. **Solvencia de Inmuebles Urbanos** (Derecho de Frente).\n2. **Declaración de Actividades Económicas** (Patente Comercial).\n3. **Solvencia de Vehículos**.\n\nTodos los documentos emitidos incluyen código QR de verificación oficial y firma criptográfica SHA-256.";
      respuestaBot.enlaceAccion = {
        texto: "Ir a la Oficina Virtual",
        url: "/oficina-virtual"
      };
      respuestaBot.sugerencias = [
        "Requisitos Solvencia Inmueble",
        "Requisitos Patente Comercial",
        "Pagar Impuestos"
      ];
    }

    // 3. Reportes 1x10 / Ribas Resuelve / Bote de agua / Alumbrado
    else if (
      q.includes("report") ||
      q.includes("1x10") ||
      q.includes("averia") ||
      q.includes("luz") ||
      q.includes("agua") ||
      q.includes("hueco") ||
      q.includes("poste") ||
      q.includes("resuelve")
    ) {
      respuestaBot.texto =
        "🚨 **Ribas Resuelve (Sala Situacional 1x10):**\n\nPuedes reportar averías de alumbrado público, botes de agua potable, vialidad o desmalezamiento directamente desde tu teléfono:\n\n📸 **Novedad:** Ahora puedes **tomar una foto con la cámara de tu celular** en el sitio de la falla y adjuntar tu ubicación GPS para que la cuadrilla llegue directamente.";
      respuestaBot.enlaceAccion = {
        texto: "Crear Reporte con Foto en Sitio",
        url: "/ribas-resuelve"
      };
      respuestaBot.sugerencias = [
        "Consultar mi ticket de reporte",
        "¿Quién repara el alumbrado?",
        "Horario cuadrillas"
      ];
    }

    // 4. Teléfonos de Emergencia / Atención
    else if (
      q.includes("telefono") ||
      q.includes("numero") ||
      q.includes("emergencia") ||
      q.includes("llamar") ||
      q.includes("contacto") ||
      q.includes("bombero") ||
      q.includes("policia") ||
      q.includes("proteccion")
    ) {
      respuestaBot.texto =
        "📞 **Líneas de Atención Inmediata y Emergencias Ribas (24 Horas):**\n\n• **Atención Inmediata:** 0800-RIBAS-01 / 0244-4174115\n• **Protección Civil Ribas:** 0412-4558391\n• **Sala Situacional 1x10:** 0412-1316364\n• **Despacho Alcaldía (Casa Amarilla):** Calle Rivas Dávila frente a Plaza Ribas.";
      respuestaBot.telefonoAccion = {
        nombre: "Llamar a Protección Civil Ribas",
        numero: "04124558391"
      };
      respuestaBot.sugerencias = [
        "Hablar por WhatsApp",
        "Reportar incidencia",
        "Horarios de atención"
      ];
    }

    // 5. Monitor de Obras Públicas y Proyectos
    else if (
      q.includes("obra") ||
      q.includes("asfalto") ||
      q.includes("asfaltado") ||
      q.includes("pozo") ||
      q.includes("alumbrado") ||
      q.includes("proyecto") ||
      q.includes("calle") ||
      q.includes("bacheo")
    ) {
      respuestaBot.texto =
        "🏗️ **Monitor de Obras Públicas (Ribas Transparente):**\n\nContamos con un visor interactivo donde puedes auditar en tiempo real las obras en ejecución y culminadas en las 5 parroquias:\n\n• **Plan Asfalto:** Av. Francisco de Miranda y Casco Central (85%)\n• **Agua Potable:** Reactivación Pozo Las Mercedes Sector 3 (100%)\n• **Colectores:** Sustitución en Zuata Centro (90%)\n• **Alumbrado LED:** 650 lámparas en Pao de Zárate (100%)\n• **Deporte:** Cancha Las Guacamayas (75%)\n\n¡Puedes ver fotos de Antes / Después y dejar tu reporte como vecino veedor!";
      respuestaBot.enlaceAccion = {
        texto: "Abrir Monitor de Obras y Fotos",
        url: "/obras"
      };
      respuestaBot.sugerencias = [
        "Ver fotos de antes y después",
        "Reportar un bache o hueco",
        "¿Quién financia las obras?"
      ];
    }

    // 6. Momentos de Vida / Abrir Negocio
    else if (
      q.includes("negocio") ||
      q.includes("empresa") ||
      q.includes("comercio") ||
      q.includes("patente") ||
      q.includes("abrir") ||
      q.includes("momento") ||
      q.includes("vida")
    ) {
      respuestaBot.texto =
        "🏪 **Ruta 1-Clic para Emprendedores y Negocios en Ribas:**\n\nHemos unificado los trámites por **Momentos de Vida** (estilo Singapur LifeSG). En una sola ruta gestionas:\n\n1. Uso de Suelo y Zonificación (Ingeniería)\n2. Conformidad de Seguridad (Bomberos)\n3. Inscripción de Aseo y Patente Comercial (SUMAR)\n\n⏱️ Tiempo total estimado: 4 a 6 días hábiles.";
      respuestaBot.enlaceAccion = {
        texto: "Ver Guía Paso a Paso con Checklist",
        url: "/tramites"
      };
      respuestaBot.sugerencias = [
        "¿Qué documentos exigen los bomberos?",
        "Tramitar Solvencia Inmueble",
        "Hablar con un asesor por WhatsApp"
      ];
    }

    // 7. WhatsApp
    else if (q.includes("whatsapp") || q.includes("humano") || q.includes("asesor") || q.includes("persona")) {
      const msjEncoded = encodeURIComponent(
        "Hola, me comunico desde el Portal Ribas Digital. Quisiera solicitar atención ciudadana sobre: "
      );
      respuestaBot.texto =
        "💬 **Canal Directo de WhatsApp Institucional:**\n\nPuedes escribirle directamente al equipo de atención ciudadana y Sala Situacional de la Alcaldía de Ribas a través de WhatsApp para seguimiento personalizado de trámites o emergencias.";
      respuestaBot.enlaceAccion = {
        texto: "Abrir Chat en WhatsApp",
        url: `https://wa.me/584124558391?text=${msjEncoded}`
      };
    }

    // 6. Respuesta por Defecto Inteligente con Búsqueda en Trámites
    else {
      // Buscar en catálogo de trámites
      const tramiteEncontrado = TRAMITES_MUNICIPALES.find((t) =>
        t.titulo.toLowerCase().includes(q) || t.descripcion.toLowerCase().includes(q)
      );

      if (tramiteEncontrado) {
        respuestaBot.texto = `📋 **${tramiteEncontrado.titulo}**\n\n• **Dependencia:** ${tramiteEncontrado.dependencia}\n• **Modalidad:** ${tramiteEncontrado.modalidad}\n• **Tiempo estimado:** ${tramiteEncontrado.tiempoEstimado}\n• **Ubicación:** ${tramiteEncontrado.ubicacionOficina}`;
        respuestaBot.enlaceAccion = {
          texto: "Ver Requisitos Completos",
          url: tramiteEncontrado.enlaceAccion || "/tramites"
        };
      } else {
        respuestaBot.texto =
          "Entendido. Puedo brindarte información inmediata sobre horarios del aseo urbano, solvencias tributarias, reportes comunitarios del 1x10 o números de emergencia de La Victoria. También puedes pulsar cualquiera de las opciones rápidas:";
        respuestaBot.sugerencias = [
          "🚛 ¿Cuándo pasa el aseo?",
          "📑 Tramitar Solvencia Inmueble",
          "🚨 Reportar bote de agua o luz",
          "📞 Contactar por WhatsApp"
        ];
      }
    }

    setMensajes((prev) => [...prev, respuestaBot]);
    setEscribiendo(false);
  };

  const enviarMensaje = (textoAEnviar?: string) => {
    const texto = textoAEnviar || mensajeInput;
    if (!texto.trim()) return;

    const horaActual = new Date().toLocaleTimeString("es-VE", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

    const mensajeUsuario: MensajeChat = {
      id: `usr-${Date.now()}`,
      remitente: "usuario",
      texto,
      hora: horaActual
    };

    setMensajes((prev) => [...prev, mensajeUsuario]);
    setMensajeInput("");
    setEscribiendo(true);

    // Simulación de respuesta fluida con resorte Apple (400ms)
    setTimeout(() => {
      procesarPregunta(texto);
    }, 450);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      enviarMensaje();
    }
  };

  return (
    <>
      {/* ============================================================== */}
      {/* BOTÓN FLOTANTE Y PILL DE BIENVENIDA (ESQUINA INFERIOR DERECHA) */}
      {/* ============================================================== */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 select-none">
        {/* Pill de Bienvenida Proactivo estilo Apple */}
        {!abierto && mostrarPill && (
          <div
            onClick={() => setAbierto(true)}
            className="apple-glass-card px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 cursor-pointer max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200 apple-press"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></div>
            <p className="text-xs font-semibold text-slate-800 leading-snug">
              ¿Dudas con tu sector de aseo o trámites? <strong>RibasBot</strong> te responde al instante.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMostrarPill(false);
              }}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded-md"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Botón Principal Disparador de RibasBot */}
        <button
          onClick={() => {
            setAbierto(!abierto);
            setMostrarPill(false);
          }}
          className={`relative p-3.5 rounded-2xl shadow-2xl flex items-center gap-2.5 transition-all duration-200 apple-press min-h-[48px] min-w-[48px] ${
            abierto
              ? "bg-slate-900 text-white border border-slate-700"
              : "bg-gradient-to-br from-[#0a2540] to-[#123961] text-amber-400 border border-amber-400/30 ring-4 ring-amber-400/20"
          }`}
          aria-label="Abrir asistente virtual RibasBot"
        >
          {abierto ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <div className="relative">
                <Bot className="w-6 h-6 text-amber-400" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0a2540]"></span>
              </div>
              <span className="text-xs font-extrabold text-white uppercase tracking-wider hidden sm:inline">
                RibasBot
              </span>
            </>
          )}
        </button>
      </div>

      {/* ============================================================== */}
      {/* VENTANA DEL ASISTENTE VIRTUAL (APPLE GLASS MODAL SHEET)        */}
      {/* ============================================================== */}
      {abierto && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[420px] max-h-[82vh] h-[620px] apple-glass-card rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/80 animate-in fade-in zoom-in-95 duration-150 origin-bottom-right">
          {/* Cabecera Institucional RibasBot */}
          <div className="bg-gradient-to-r from-[#06182a] via-[#0a2540] to-[#0d2e4e] text-white p-4 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-[#0a2540] border border-amber-400/40 p-1 flex items-center justify-center shadow">
                <Bot className="w-6 h-6 text-amber-400" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0a2540]"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-black text-sm text-white tracking-tight">
                    RibasBot
                  </h3>
                  <span className="text-[9px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 px-1.5 py-0.2 rounded uppercase">
                    Alcaldía
                  </span>
                </div>
                <p className="text-[10px] text-slate-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  En línea • Municipio José Félix Ribas
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* Enlace directo a WhatsApp en la cabecera */}
              <a
                href="https://wa.me/584124558391?text=Hola,%20solicito%20atenci%C3%B3n%20ciudadana%20desde%20el%20Portal%20Ribas%20Digital"
                target="_blank"
                rel="noopener noreferrer"
                title="Atención oficial por WhatsApp"
                className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-white/10 rounded-xl transition-all apple-press"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setAbierto(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all apple-press"
                title="Cerrar asistente"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Área de Conversación / Mensajes */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/70">
            {mensajes.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.remitente === "usuario" ? "items-end" : "items-start"
                } space-y-1`}
              >
                {/* Burbuja de Mensaje */}
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs ${
                    m.remitente === "usuario"
                      ? "bg-gradient-to-r from-[#0a2540] to-[#123961] text-white rounded-br-xs"
                      : "bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs"
                  }`}
                >
                  <div className="whitespace-pre-line font-normal">{m.texto}</div>

                  {/* Botón de Enlace Accionable */}
                  {m.enlaceAccion && (
                    <div className="mt-3 pt-2 border-t border-slate-100">
                      <Link
                        href={m.enlaceAccion.url}
                        onClick={() => setAbierto(false)}
                        className="inline-flex items-center justify-between w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all apple-press"
                      >
                        <span>{m.enlaceAccion.texto}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}

                  {/* Botón de Llamada Telefónica Directa */}
                  {m.telefonoAccion && (
                    <div className="mt-2">
                      <a
                        href={`tel:${m.telefonoAccion.numero}`}
                        className="inline-flex items-center justify-between w-full py-2 px-3 bg-[#0a2540] hover:bg-slate-900 text-amber-400 font-bold text-xs rounded-xl shadow-xs transition-all apple-press"
                      >
                        <span className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5" />
                          <span>{m.telefonoAccion.nombre}</span>
                        </span>
                        <span className="font-mono text-[11px]">{m.telefonoAccion.numero}</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Hora de envío */}
                <span className="text-[10px] text-slate-400 px-1">{m.hora}</span>

                {/* Chips de Sugerencias Rápidas */}
                {m.sugerencias && (
                  <div className="flex flex-wrap gap-1.5 pt-1.5 max-w-[95%]">
                    {m.sugerencias.map((sug, idx) => (
                      <button
                        key={idx}
                        onClick={() => enviarMensaje(sug)}
                        className="px-3 py-1.5 rounded-full bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-900 border border-slate-200 hover:border-amber-300 text-[11px] font-semibold transition-all shadow-xs apple-press"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Animación de "RibasBot está escribiendo..." */}
            {escribiendo && (
              <div className="flex items-center gap-2 p-3 bg-white text-slate-500 rounded-2xl w-24 border border-slate-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Barra de Entrada / Input con Apple Press */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={mensajeInput}
              onChange={(e) => setMensajeInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu consulta o sector..."
              className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
            <button
              onClick={() => enviarMensaje()}
              disabled={!mensajeInput.trim()}
              className={`p-2.5 rounded-xl flex items-center justify-center transition-all apple-press ${
                mensajeInput.trim()
                  ? "bg-[#0a2540] text-amber-400 shadow"
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
              title="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
