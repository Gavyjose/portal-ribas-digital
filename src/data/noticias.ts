export interface Noticia {
  id: string;
  titulo: string;
  fecha: string;
  categoria: string;
  resumen: string;
  parroquia: string;
  destacada?: boolean;
}

export const NOTICIAS_RIBAS: Noticia[] = [
  {
    id: "plan-ribas-limpia-avanza",
    titulo: "Plan Ribas Limpia y Bonita intensifica barrido nocturno y recolección en el Casco Central y Las Mercedes",
    fecha: "12 de Noviembre, 2026",
    categoria: "Servicios Públicos",
    resumen: "Las cuadrillas de mantenimiento urbano y la flota de camiones y trimotos desplegaron un operativo especial en las Avenidas Bicentenaria y Loreto para garantizar espacios limpios a comerciantes y transeúntes.",
    parroquia: "Juan Vicente Bolívar y Castor Nieves Ríos",
    destacada: true
  },
  {
    id: "asfaltado-avenida-intercomunal",
    titulo: "Avanza plan de bacheo y pavimentación en el tramo Peaje La Victoria - Distribuidor La Mora",
    fecha: "10 de Noviembre, 2026",
    categoria: "Infraestructura",
    resumen: "Con más de 120 toneladas de asfalto caliente se rehabilitan las vías de acceso que comunican a La Victoria con la Autopista Regional del Centro.",
    parroquia: "Castor Nieves Ríos",
    destacada: true
  },
  {
    id: "jornada-salud-zuata",
    titulo: "Más de 800 familias atendidas en mega jornada integral de salud y vacunación en la Parroquia Zuata",
    fecha: "8 de Noviembre, 2026",
    categoria: "Salud y Bienestar",
    resumen: "Medicina general, pediatría, entrega de medicamentos esenciales y registro civil móvil se trasladaron a la comunidad de Los Budares y San José.",
    parroquia: "Zuata",
    destacada: false
  },
  {
    id: "ruta-historica-juventud",
    titulo: "Comienzan los preparativos culturales y deportivos de la Ruta de la Juventud de cara al 12 de Febrero",
    fecha: "5 de Noviembre, 2026",
    categoria: "Cultura y Turismo",
    resumen: "El Instituto Municipal de la Juventud y Cultura anunció el cronograma de visitas patrimoniales al Cuartel Mariano Montilla, la Plaza Ribas y el Cerro La Chapa.",
    parroquia: "Juan Vicente Bolívar y Ponte",
    destacada: false
  }
];

export interface Gaceta {
  numero: string;
  tipo: "Ordinaria" | "Extraordinaria";
  fecha: string;
  titulo: string;
  descripcion: string;
  enlaceDescarga: string;
}

export const GACETAS_RIBAS: Gaceta[] = [
  {
    numero: "G.M. N.º 4.298",
    tipo: "Extraordinaria",
    fecha: "Octubre 2026",
    titulo: "Reforma Parcial de la Ordenanza sobre Tasas por Servicios Administrativos y Catastro",
    descripcion: "Establece el nuevo tabulador de unidades de cuenta municipal para la tramitación de fichas catastrales, solvencias y avalúos en el Municipio Ribas.",
    enlaceDescarga: "#"
  },
  {
    numero: "G.M. N.º 4.285",
    tipo: "Ordinaria",
    fecha: "Septiembre 2026",
    titulo: "Reglamento Operativo de Gestión Integral de Residuos Sólidos y Aseo Urbano",
    descripcion: "Normas de horarios, disposición en aceras, rutas asignadas de compactadores y corresponsabilidad ciudadana en las 5 parroquias.",
    enlaceDescarga: "#"
  },
  {
    numero: "G.M. N.º 4.270",
    tipo: "Extraordinaria",
    fecha: "Julio 2026",
    titulo: "Ordenanza sobre Actividades Económicas de Industria, Comercio, Servicios e Índole Similar",
    descripcion: "Alícuotas, incentivos tributarios para nuevos emprendimientos en La Victoria y régimen de simplificación de trámites digitales.",
    enlaceDescarga: "#"
  },
  {
    numero: "G.M. N.º 4.254",
    tipo: "Ordinaria",
    fecha: "Mayo 2026",
    titulo: "Decreto de Preservación y Conservación del Patrimonio Histórico de La Victoria",
    descripcion: "Declaratoria de protección arquitectónica del eje histórico de la Plaza Ribas, Cuartel Mariano Montilla e Iglesia Matriz.",
    enlaceDescarga: "#"
  }
];
