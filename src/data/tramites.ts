export interface Tramite {
  id: string;
  titulo: string;
  categoria: "tributos" | "registro-civil" | "catastro" | "permisos" | "social";
  descripcion: string;
  tiempoEstimado: string;
  costo: string;
  modalidad: "En línea" | "Semipresencial" | "Presencial";
  requisitos: string[];
  enlaceAccion?: string;
}

export const TRAMITES_MUNICIPALES: Tramite[] = [
  {
    id: "solvencia-inmuebles-urbanos",
    titulo: "Solvencia de Inmuebles Urbanos (Derecho de Frente)",
    categoria: "tributos",
    descripcion: "Certificación que acredita que el inmueble residencial o comercial se encuentra al día con el pago de los tributos inmobiliarios municipales.",
    tiempoEstimado: "24 a 48 horas hábiles",
    costo: "Según ordenanza tributaria vigente",
    modalidad: "En línea",
    requisitos: [
      "Número de Ficha Catastral actualizada",
      "Copia de cédula del propietario o RIF si es persona jurídica",
      "Último recibo de pago del impuesto inmobiliario",
      "Comprobante de pago de tasa administrativa"
    ],
    enlaceAccion: "/oficina-virtual"
  },
  {
    id: "patente-actividades-economicas",
    titulo: "Declaración Mensual de Actividades Económicas",
    categoria: "tributos",
    descripcion: "Autoliquidación y declaración mensual de ingresos brutos para empresas y comerciantes que ejercen actividad económica en el Municipio Ribas.",
    tiempoEstimado: "Inmediato tras declaración",
    costo: "Alícuota según actividad económica",
    modalidad: "En línea",
    requisitos: [
      "RIF jurídico vigente con domicilio fiscal en Municipio Ribas",
      "Licencia de Actividades Económicas activa",
      "Relación de ingresos brutos del período",
      "Comprobante de pago o transferencia bancaria validada"
    ],
    enlaceAccion: "/oficina-virtual"
  },
  {
    id: "partida-nacimiento-certificada",
    titulo: "Copia Certificada de Acta de Nacimiento",
    categoria: "registro-civil",
    descripcion: "Expedición y certificación legal de actas de nacimiento registradas en las parroquias del Municipio José Félix Ribas.",
    tiempoEstimado: "3 a 5 días hábiles",
    costo: "Exento según Ley Orgánica de Registro Civil",
    modalidad: "Semipresencial",
    requisitos: [
      "Número de libro, acta y año de presentación (si lo posee)",
      "Copia de la cédula de identidad del solicitante",
      "Carta de autorización en caso de solicitar por terceros (padres/hijos/apoderados)"
    ],
    enlaceAccion: "/oficina-virtual"
  },
  {
    id: "constancia-residencia",
    titulo: "Constancia de Residencia Municipal",
    categoria: "registro-civil",
    descripcion: "Documento oficial que certifica el domicilio permanente de un ciudadano en cualquiera de las 5 parroquias de Ribas.",
    tiempoEstimado: "24 horas",
    costo: "Gratuito",
    modalidad: "En línea",
    requisitos: [
      "Cédula de identidad laminada o escaneada",
      "Recibo de servicio público (Corpoelec, Hidrocentro, Cantv) o constancia del Consejo Comunal de su sector",
      "Carta aval del CLAP o Consejo Comunal correspondiente"
    ],
    enlaceAccion: "/oficina-virtual"
  },
  {
    id: "ficha-catastral",
    titulo: "Emisión y Actualización de Ficha Catastral",
    categoria: "catastro",
    descripcion: "Inscripción inmobiliaria y asignación o actualización del código catastral que identifica técnica y jurídicamente el terreno o bienhechuría.",
    tiempoEstimado: "5 a 8 días hábiles (incluye inspección)",
    costo: "Tasa por servicios de catastro",
    modalidad: "Semipresencial",
    requisitos: [
      "Copia del documento de propiedad registrado",
      "Plano topográfico o croquis de ubicación acotado",
      "Copia de cédula del propietario o RIF",
      "Solvencia municipal vigente"
    ],
    enlaceAccion: "/tramites"
  },
  {
    id: "permiso-espectaculos-eventos",
    titulo: "Permiso para Espectáculos Públicos y Eventos Masivos",
    categoria: "permisos",
    descripcion: "Autorización para la realización de conciertos, verbenas, eventos deportivos o ferias comerciales en espacios públicos o privados.",
    tiempoEstimado: "5 días hábiles de anticipación",
    costo: "Según aforo y ordenanza de espectáculos",
    modalidad: "Presencial",
    requisitos: [
      "Carta de solicitud detallando fecha, aforo y lugar",
      "Inspección de seguridad emitida por Protección Civil Ribas y Bomberos",
      "Plan de contingencia y dispositivo de seguridad policial",
      "Paz y salvo con la Hacienda Municipal"
    ],
    enlaceAccion: "/tramites"
  },
  {
    id: "publicidad-comercial-exterior",
    titulo: "Licencia de Publicidad y Propaganda Comercial Exterior",
    categoria: "permisos",
    descripcion: "Permisología para la instalación de vallas, avisos luminosos, microperforados o pendones en comercios y vía pública de La Victoria.",
    tiempoEstimado: "3 a 5 días hábiles",
    costo: "Por metro cuadrado según ordenanza",
    modalidad: "Semipresencial",
    requisitos: [
      "Diseño a escala y memoria fotográfica de la ubicación propuesta",
      "Licencia de actividades económicas del establecimiento",
      "Conformidad de uso emitida por Ingeniería Municipal"
    ],
    enlaceAccion: "/tramites"
  }
];
