export interface ObraMetrica {
  label: string;
  valor: string;
}

export interface ObraPublica {
  id: string;
  titulo: string;
  subtitulo: string;
  parroquiaId: "bolivar" | "castor-nieves" | "zuata" | "pao-zarate" | "guacamayas";
  parroquiaNombre: string;
  categoria: "vialidad" | "agua" | "alumbrado" | "educacion-deporte" | "patrimonio";
  categoriaNombre: string;
  iconoCategoria: string;
  ubicacion: string;
  porcentajeAvance: number;
  estado: "en-ejecucion" | "culminada" | "fase-inicial";
  estadoNombre: string;
  montoInversion: string;
  fuenteFinanciamiento: string;
  beneficiariosDirectos: string;
  cuadrilla: string;
  fechaInicio: string;
  fechaEstimada: string;
  descripcion: string;
  fotoAntes: string;
  fotoDespues: string;
  metricas: ObraMetrica[];
  comunidadVeedora: string;
  destacada?: boolean;
}

export const PARROQUIAS_RIBAS = [
  { id: "todas", nombre: "Todas las Parroquias", icono: "📍" },
  { id: "bolivar", nombre: "Juan Vicente Bolívar y Ponte", icono: "🏛️" },
  { id: "castor-nieves", nombre: "Castor Nieves Ríos", icono: "🏭" },
  { id: "zuata", nombre: "Zuata", icono: "🌾" },
  { id: "pao-zarate", nombre: "Pao de Zárate", icono: "🌄" },
  { id: "guacamayas", nombre: "Las Guacamayas", icono: "🌳" },
];

export const CATEGORIAS_OBRAS = [
  { id: "todas", nombre: "Todas las Obras", icono: "📋" },
  { id: "vialidad", nombre: "Vialidad y Asfalto", icono: "🛣️" },
  { id: "agua", nombre: "Agua y Colectores", icono: "💧" },
  { id: "alumbrado", nombre: "Iluminación LED", icono: "💡" },
  { id: "educacion-deporte", nombre: "Educación y Deporte", icono: "⚽" },
  { id: "patrimonio", nombre: "Patrimonio y Espacios", icono: "🏛️" },
];

export const OBRAS_PUBLICAS: ObraPublica[] = [
  {
    id: "asfalto-francisco-miranda",
    titulo: "Plan Asfalto y Bacheo Av. Francisco de Miranda y Eje Loreto",
    subtitulo: "Escarificación profunda, nivelación y colocación de carpeta asfáltica caliente en arteria principal de La Victoria.",
    parroquiaId: "bolivar",
    parroquiaNombre: "Juan Vicente Bolívar y Ponte",
    categoria: "vialidad",
    categoriaNombre: "Vialidad y Asfalto",
    iconoCategoria: "🛣️",
    ubicacion: "Av. Francisco de Miranda, tramo Peaje La Victoria - Plaza Ribas",
    porcentajeAvance: 85,
    estado: "en-ejecucion",
    estadoNombre: "En Ejecución Avanzada",
    montoInversion: "Inversión Municipal Directa + Fondo de Compensación Interterritorial",
    fuenteFinanciamiento: "Recaudación SUMAR y FCI Nacional",
    beneficiariosDirectos: "45.000 ciudadanos y transporte público",
    cuadrilla: "Dirección de Mantenimiento y Servicios Generales Ribas",
    fechaInicio: "Octubre 2025",
    fechaEstimada: "Febrero 2026",
    descripcion: "Rehabilitación de más de 3.2 kilómetros de calzada con aplicación de 1.450 toneladas de asfalto caliente, reconstrucción de cunetas y pintura termoplástica reflectiva de líneas continuas y pasos peatonales.",
    fotoAntes: "/images/la-victoria/cuartel-castillo.jpg",
    fotoDespues: "/images/la-victoria/vista-aerea.jpg",
    metricas: [
      { label: "Asfalto Colocado", valor: "1.450 Toneladas" },
      { label: "Longitud Vial", valor: "3.2 Kilómetros" },
      { label: "Alcantarillas Niveladas", valor: "18 unidades" }
    ],
    comunidadVeedora: "Comité de Transporte Urbano y Consejos Comunales Casco Central",
    destacada: true
  },
  {
    id: "pozo-las-mercedes-sector3",
    titulo: "Reactivación y Equipamiento del Pozo Profundo Las Mercedes (Sector 3)",
    subtitulo: "Instalación de motor sumergible de alta potencia y tablero digital de protección eléctrica.",
    parroquiaId: "castor-nieves",
    parroquiaNombre: "Castor Nieves Ríos",
    categoria: "agua",
    categoriaNombre: "Agua Potable y Colectores",
    iconoCategoria: "💧",
    ubicacion: "Urb. Las Mercedes, Sector 3, adyacente al Centro Diagnóstico Integral",
    porcentajeAvance: 100,
    estado: "culminada",
    estadoNombre: "Culminada y en Operación",
    montoInversion: "Plan Especial 1x10 del Buen Gobierno",
    fuenteFinanciamiento: "Gobernación del Estado Aragua y Alcaldía de Ribas",
    beneficiariosDirectos: "4.800 familias de Las Mercedes y zonas adyacentes",
    cuadrilla: "Mesa Técnica de Agua y Cuadrilla Hidrocentro / Alcaldía",
    fechaInicio: "Noviembre 2025",
    fechaEstimada: "Enero 2026",
    descripcion: "Perforación y aforo completado a 85 metros de profundidad con instalación de equipo sumergible de 25 HP, entregando un caudal constante de 18 litros por segundo a la red de distribución.",
    fotoAntes: "/images/la-victoria/casa-amarilla.jpg",
    fotoDespues: "/images/la-victoria/cuartel-montilla.jpg",
    metricas: [
      { label: "Caudal de Agua", valor: "18 Litros / Seg" },
      { label: "Potencia Bomba", valor: "25 HP Sumergible" },
      { label: "Horas de Servicio", valor: "Distribución Continua" }
    ],
    comunidadVeedora: "Mesa Técnica de Agua Consejo Comunal Las Mercedes Sector 3",
    destacada: true
  },
  {
    id: "colector-zuata-calle-real",
    titulo: "Sustitución de Colector Principal de Aguas Servidas en Zuata Centro",
    subtitulo: "Reemplazo de tubería colapsada de concreto por polietileno corrugado de alta densidad.",
    parroquiaId: "zuata",
    parroquiaNombre: "Zuata",
    categoria: "agua",
    categoriaNombre: "Agua Potable y Colectores",
    iconoCategoria: "💧",
    ubicacion: "Calle Real de Zuata, tramo Plaza Bolívar - Entrada al Castaño",
    porcentajeAvance: 90,
    estado: "en-ejecucion",
    estadoNombre: "En Ejecución",
    montoInversion: "Fondo de Compensación Interterritorial (FCI)",
    fuenteFinanciamiento: "Situado Constitucional y Aporte Comunitario",
    beneficiariosDirectos: "2.300 familias zuateñas",
    cuadrilla: "Ingeniería Municipal y Cuadrilla Comunitaria Zuata",
    fechaInicio: "Diciembre 2025",
    fechaEstimada: "Febrero 2026",
    descripcion: "Sustitución de 180 metros lineales de colector de 12 pulgadas, construcción de 3 bocas de visita y reconexión de 24 empotramientos residenciales, culminando con la restitución de la losa de concreto.",
    fotoAntes: "/images/la-victoria/cuartel-castillo.jpg",
    fotoDespues: "/images/la-victoria/vista-aerea.jpg",
    metricas: [
      { label: "Tubería Instalada", valor: "180 Metros 12\"" },
      { label: "Bocas de Visita", valor: "3 Construidas" },
      { label: "Empotramientos", valor: "24 Domiciliarios" }
    ],
    comunidadVeedora: "Comuna Ecosocialista Valle de Zuata",
    destacada: false
  },
  {
    id: "alumbrado-pao-zarate",
    titulo: "Plan Ribas Iluminada: 650 Luminarias LED en Eje Agrícola Pao de Zárate",
    subtitulo: "Instalación de luminarias LED de 150W y colocación de fotoceldas magnéticas en carretera rural.",
    parroquiaId: "pao-zarate",
    parroquiaNombre: "Pao de Zárate",
    categoria: "alumbrado",
    categoriaNombre: "Iluminación LED",
    iconoCategoria: "💡",
    ubicacion: "Carretera Principal La Victoria - San Juan Bautista - El Pao de Zárate",
    porcentajeAvance: 100,
    estado: "culminada",
    estadoNombre: "Culminada al 100%",
    montoInversion: "Plan Integral de Servicios Públicos Municipales",
    fuenteFinanciamiento: "Recaudación Tributaria Municipal SUMAR",
    beneficiariosDirectos: "8.500 habitantes y productores agrícolas",
    cuadrilla: "Corpoelec Aragua y Cuadrilla Eléctrica Municipal",
    fechaInicio: "Septiembre 2025",
    fechaEstimada: "Diciembre 2025",
    descripcion: "Modernización integral de 18 kilómetros de vialidad interparroquial con tecnología LED de bajo consumo, garantizando seguridad para el transporte de cosechas hortícolas y desplazamiento vecinal nocturno.",
    fotoAntes: "/images/la-victoria/cuartel-montilla.jpg",
    fotoDespues: "/images/la-victoria/vista-aerea.jpg",
    metricas: [
      { label: "Luminarias LED", valor: "650 Lámparas 150W" },
      { label: "Kilómetros Cubiertos", valor: "18 Km de Carretera" },
      { label: "Ahorro Energético", valor: "62% Estimado" }
    ],
    comunidadVeedora: "Asociación de Pequeños Productores y Consejos Comunales de El Pao",
    destacada: true
  },
  {
    id: "cancha-guacamayas",
    titulo: "Rehabilitación Multideportiva y Espacio Joven en Las Guacamayas",
    subtitulo: "Recuperación de losa con pintura epóxica, cerca perimetral, arquerías y tableros de baloncesto.",
    parroquiaId: "guacamayas",
    parroquiaNombre: "Las Guacamayas",
    categoria: "educacion-deporte",
    categoriaNombre: "Educación y Deporte",
    iconoCategoria: "⚽",
    ubicacion: "Sector Caserío Centro, frente a la Iglesia de Las Guacamayas",
    porcentajeAvance: 75,
    estado: "en-ejecucion",
    estadoNombre: "En Ejecución",
    montoInversion: "Fondo Municipal del Deporte y Recreación",
    fuenteFinanciamiento: "Alcaldía de Ribas e Instituto Municipal del Deporte (IMDERIBAS)",
    beneficiariosDirectos: "1.400 niños, jóvenes y atletas comunitarios",
    cuadrilla: "Fundación Casa de la Cultura y Brigada Comunitaria de Deportes",
    fechaInicio: "Enero 2026",
    fechaEstimada: "Marzo 2026",
    descripcion: "Acondicionamiento general de la cancha comunitaria con iluminación reflectiva de 4 reflectores LED solares autónomos, demarcación reglamentaria de fútbol de salón, voleibol y básquetbol.",
    fotoAntes: "/images/la-victoria/cuartel-castillo.jpg",
    fotoDespues: "/images/la-victoria/casa-amarilla.jpg",
    metricas: [
      { label: "Área Deportiva", valor: "680 m² Recuperados" },
      { label: "Reflectores Solares", valor: "4 Autónomos 200W" },
      { label: "Disciplinas", valor: "3 Deportes Base" }
    ],
    comunidadVeedora: "Club Deportivo Comunitario Las Guacamayas",
    destacada: false
  },
  {
    id: "patrimonio-plaza-ribas",
    titulo: "Restauración Patrimonial de Plaza Ribas y Fachada de la Casa Amarilla",
    subtitulo: "Tratamiento de calicatas, conservación de frisos coloniales, ornamentación y alumbrado histórico.",
    parroquiaId: "bolivar",
    parroquiaNombre: "Juan Vicente Bolívar y Ponte",
    categoria: "patrimonio",
    categoriaNombre: "Patrimonio y Espacios Públicos",
    iconoCategoria: "🏛️",
    ubicacion: "Casco Histórico de La Victoria, Calle Rivas Dávila con Calle García",
    porcentajeAvance: 95,
    estado: "en-ejecucion",
    estadoNombre: "Fase de Detalles y Acabados",
    montoInversion: "Presupuesto Municipal Patrimonial Bicentenario",
    fuenteFinanciamiento: "Alcaldía de Ribas e Instituto de Patrimonio Cultural (IPC)",
    beneficiariosDirectos: "Todo el Municipio Ribas y visitantes turísticos",
    cuadrilla: "Restauradores Patrimoniales y Obras Públicas Ribas",
    fechaInicio: "Noviembre 2025",
    fechaEstimada: "Febrero 2026",
    descripcion: "Pintura con pigmentos minerales tradicionales, rescate de la herrería forjada decimonónica, recuperación de bancos de hierro y siembra de especies botánicas autóctonas en los jardines de la plaza.",
    fotoAntes: "/images/la-victoria/cuartel-montilla.jpg",
    fotoDespues: "/images/la-victoria/casa-amarilla.jpg",
    metricas: [
      { label: "Metros de Fachada", valor: "1.200 m² Restaurados" },
      { label: "Bancos Restaurados", valor: "28 Unidades Históricas" },
      { label: "Jardinería", valor: "12 Canteros Renovados" }
    ],
    comunidadVeedora: "Cronista Oficial de La Victoria y Red de Cultores Populares",
    destacada: true
  }
];

export const RESUMEN_GLOBAL_OBRAS = {
  totalObras: 38,
  obrasCulminadas: 24,
  obrasEnEjecucion: 11,
  obrasEnFaseInicial: 3,
  toneladasAsfalto: "12.450+",
  luminariasInstaladas: "3.200+",
  pozosReactivados: 9,
  familiasBeneficiadas: "92.000+"
};
