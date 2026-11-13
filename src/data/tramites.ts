export interface Tramite {
  id: string;
  titulo: string;
  categoria: "tributos" | "registro-civil" | "catastro" | "permisos" | "social";
  dependencia: string;
  descripcion: string;
  tiempoEstimado: string;
  costo: string;
  modalidad: "En línea" | "Semipresencial" | "Presencial";
  baseLegal: string;
  ubicacionOficina: string;
  requisitos: string[];
  enlaceAccion?: string;
}

export const TRAMITES_MUNICIPALES: Tramite[] = [
  // 1. Dirección de Hacienda Municipal
  {
    id: "solvencia-inmuebles-urbanos",
    titulo: "Solvencia de Inmuebles Urbanos (Derecho de Frente)",
    categoria: "tributos",
    dependencia: "Dirección de Hacienda y Administración Tributaria",
    descripcion: "Certificación que acredita que el inmueble residencial o comercial se encuentra al día con el pago de los tributos inmobiliarios municipales en el Municipio Ribas.",
    tiempoEstimado: "24 a 48 horas hábiles",
    costo: "Según Ordenanza de Impuesto sobre Inmuebles Urbanos",
    modalidad: "En línea",
    baseLegal: "Ley Orgánica del Poder Público Municipal (Gaceta Oficial N.º 6.011) y Ordenanza Tributaria de Ribas",
    ubicacionOficina: "Casa Amarilla, Planta Baja - Taquillas de Hacienda Municipal",
    requisitos: [
      "Número de Ficha Catastral del inmueble debidamente empadronado",
      "Copia de la cédula del propietario o RIF vigente en caso de personas jurídicas",
      "Último recibo o comprobante de pago del impuesto inmobiliario municipal",
      "Comprobante de pago de la tasa administrativa municipal correspondiente"
    ],
    enlaceAccion: "/oficina-virtual"
  },
  {
    id: "patente-actividades-economicas",
    titulo: "Declaración Mensual de Actividades Económicas (Patente Comercial)",
    categoria: "tributos",
    dependencia: "Dirección de Hacienda y Administración Tributaria",
    descripcion: "Autoliquidación y declaración mensual de ingresos brutos para empresas, comercios y prestadores de servicios que operan en La Victoria y demás parroquias.",
    tiempoEstimado: "Inmediato tras declaración y validación de pago",
    costo: "Alícuota porcentual según el clasificador de actividades económicas",
    modalidad: "En línea",
    baseLegal: "Ordenanza sobre Actividades Económicas de Industria, Comercio y Servicios del Municipio Ribas",
    ubicacionOficina: "Casa Amarilla, Taquillas Tributarias y Portal Virtual",
    requisitos: [
      "RIF jurídico vigente con domicilio fiscal en el Municipio José Félix Ribas",
      "Licencia de Actividades Económicas activa y solvente",
      "Relación mensual de ingresos brutos sustentada en libros contables de ventas",
      "Comprobante de transferencia o Pago Móvil bancario conciliado"
    ],
    enlaceAccion: "/oficina-virtual"
  },
  {
    id: "impuesto-vehiculos",
    titulo: "Liquidación y Solvencia de Impuesto sobre Vehículos",
    categoria: "tributos",
    dependencia: "Dirección de Hacienda y Administración Tributaria",
    descripcion: "Pago anual de la patente vehicular para automóviles particulares, carga comercial y motocicletas domiciliadas en el municipio.",
    tiempoEstimado: "24 horas hábiles",
    costo: "Tabulador según tipo, año y peso del vehículo",
    modalidad: "En línea",
    baseLegal: "Ordenanza de Impuesto sobre Vehículos del Municipio Ribas",
    ubicacionOficina: "Casa Amarilla - Módulo de Liquidación Vehicular",
    requisitos: [
      "Copia del Certificado de Registro de Vehículo (Título de Propiedad)",
      "Cédula de identidad del propietario o RIF",
      "Copia de la última solvencia vehicular municipal (si aplica)"
    ],
    enlaceAccion: "/oficina-virtual"
  },

  // 2. Dirección de Catastro Municipal
  {
    id: "ficha-catastral",
    titulo: "Emisión y Actualización de Ficha Catastral",
    categoria: "catastro",
    dependencia: "Dirección de Catastro Municipal",
    descripcion: "Inscripción inmobiliaria y asignación o actualización del código catastral que identifica técnica y jurídicamente el terreno o bienhechuría.",
    tiempoEstimado: "5 a 8 días hábiles (incluye inspección técnica de linderos)",
    costo: "Tasa por servicios técnicos de catastro",
    modalidad: "Semipresencial",
    baseLegal: "Ley de Geografía, Cartografía y Catastro Nacional y Ordenanza Catastral de Ribas",
    ubicacionOficina: "Casa Amarilla, 1er Piso - Dirección de Catastro",
    requisitos: [
      "Copia simple del documento de propiedad debidamente registrado",
      "Plano topográfico acotado o croquis de ubicación con coordenadas UTM / WGS-84",
      "Copia de cédula de identidad del propietario o RIF de la empresa",
      "Solvencia municipal del inmueble vigente"
    ],
    enlaceAccion: "/oficina-virtual"
  },
  {
    id: "constancia-empadronamiento",
    titulo: "Constancia de Empadronamiento Inmobiliario",
    categoria: "catastro",
    dependencia: "Dirección de Catastro Municipal",
    descripcion: "Certificación registral de la titularidad y datos físicos de un inmueble en los archivos catastrales municipales.",
    tiempoEstimado: "3 a 5 días hábiles",
    costo: "Tasa administrativa de certificación",
    modalidad: "Semipresencial",
    baseLegal: "Ordenanza sobre Tasas por Servicios Administrativos y Catastro",
    ubicacionOficina: "Casa Amarilla, Dirección de Catastro",
    requisitos: [
      "Número de expediente catastral asignado",
      "Copia de documento de propiedad",
      "Poder notariado en caso de apoderados legales"
    ],
    enlaceAccion: "/oficina-virtual"
  },

  // 3. Dirección de Ingeniería Municipal y Control Urbano
  {
    id: "publicidad-comercial-exterior",
    titulo: "Licencia de Publicidad y Propaganda Comercial Exterior",
    categoria: "permisos",
    dependencia: "Dirección de Ingeniería Municipal y Control Urbano",
    descripcion: "Autorización para la instalación de vallas publicitarias, avisos luminosos, marquesinas o microperforados en locales comerciales y vía pública de La Victoria.",
    tiempoEstimado: "5 a 7 días hábiles",
    costo: "Tasa por metro cuadrado según zona urbana",
    modalidad: "Semipresencial",
    baseLegal: "Ordenanza sobre Publicidad y Propaganda Comercial de Ribas",
    ubicacionOficina: "Edificio Municipal, Dirección de Ingeniería - Casco Central",
    requisitos: [
      "Memoria fotográfica y plano a escala del aviso publicitario propuesto",
      "Licencia de actividades económicas vigente del establecimiento",
      "Conformidad de zonificación emitida por Control Urbano",
      "Permiso del propietario del inmueble si es alquilado"
    ],
    enlaceAccion: "/oficina-virtual"
  },
  {
    id: "permiso-construccion",
    titulo: "Permiso de Construcción, Ampliación o Modificación de Obras",
    categoria: "permisos",
    dependencia: "Dirección de Ingeniería Municipal y Control Urbano",
    descripcion: "Aprobación técnica y legal para el inicio de construcciones residenciales, comerciales o industriales en el municipio.",
    tiempoEstimado: "10 a 15 días hábiles",
    costo: "Porcentaje sobre el presupuesto total de la obra",
    modalidad: "Presencial",
    baseLegal: "Ley Orgánica de Ordenación Urbanística y Ordenanza de Zonificación de La Victoria",
    ubicacionOficina: "Dirección de Ingeniería Municipal - Casa Amarilla",
    requisitos: [
      "Juego completo de planos arquitectónicos, estructurales, eléctricos y sanitarios firmados por ingenieros colegiados",
      "Memoria descriptiva y cronograma de ejecución de la obra",
      "Cédula catastral vigente del terreno o bienhechuría",
      "Estudio de impacto ambiental y vial (para obras mayores)"
    ],
    enlaceAccion: "/oficina-virtual"
  },
  {
    id: "permiso-espectaculos-eventos",
    titulo: "Permiso para Espectáculos Públicos y Eventos Masivos",
    categoria: "permisos",
    dependencia: "Dirección de Ingeniería Municipal y Hacienda",
    descripcion: "Autorización para eventos culturales, ferias comerciales, verbenas o conciertos en espacios públicos o recintos cerrados de La Victoria.",
    tiempoEstimado: "5 días hábiles de anticipación mínima",
    costo: "Según aforo y naturaleza del espectáculo",
    modalidad: "Presencial",
    baseLegal: "Ordenanza sobre Espectáculos Públicos del Municipio Ribas",
    ubicacionOficina: "Despacho de Hacienda e Ingeniería Municipal",
    requisitos: [
      "Carta de solicitud con fecha, horario, aforo previsto y memoria del evento",
      "Inspección de seguridad emitida por Bomberos del Estado Aragua y Protección Civil Ribas",
      "Plan de contingencia y dispositivo de seguridad policial coordinado",
      "Paz y salvo tributario ante la Hacienda Municipal"
    ],
    enlaceAccion: "/oficina-virtual"
  },

  // 4. Dirección de Registro Civil Municipal
  {
    id: "partida-nacimiento-certificada",
    titulo: "Copia Certificada de Acta de Nacimiento",
    categoria: "registro-civil",
    dependencia: "Registro Civil Municipal",
    descripcion: "Expedición oficial y certificación de actas de nacimiento asentadas en los libros de las 5 parroquias de Ribas.",
    tiempoEstimado: "3 a 5 días hábiles",
    costo: "Gratuito (Exento por ley nacional)",
    modalidad: "Semipresencial",
    baseLegal: "Ley Orgánica de Registro Civil (Gaceta Oficial N.º 39.264)",
    ubicacionOficina: "Sedes Parroquiales de Registro Civil (Las Mercedes, Casco Central, Zuata, Pao y Guacamayas)",
    requisitos: [
      "Número de libro, acta, tomo y año de presentación del acta",
      "Copia legible de la cédula de identidad del titular o solicitante",
      "Carta poder o autorización firmada en caso de trámites solicitados por terceros"
    ],
    enlaceAccion: "/oficina-virtual"
  },
  {
    id: "constancia-residencia",
    titulo: "Constancia de Residencia Municipal",
    categoria: "registro-civil",
    dependencia: "Registro Civil Municipal",
    descripcion: "Documento oficial que certifica el domicilio permanente de un ciudadano en cualquier comunidad de las 5 parroquias de Ribas.",
    tiempoEstimado: "24 horas hábiles",
    costo: "Gratuito",
    modalidad: "En línea",
    baseLegal: "Ley Orgánica de Registro Civil y normativa CNE",
    ubicacionOficina: "Plataforma Digital y Módulos Parroquiales",
    requisitos: [
      "Cédula de identidad laminada del solicitante",
      "Recibo de servicio público a su nombre o carta aval emitida por el Consejo Comunal / CLAP de su sector",
      "Declaración jurada de domicilio permanente"
    ],
    enlaceAccion: "/oficina-virtual"
  },
  {
    id: "constancia-fe-vida",
    titulo: "Constancia de Fe de Vida",
    categoria: "registro-civil",
    dependencia: "Registro Civil Municipal",
    descripcion: "Certificación expedida principalmente a pensionados y jubilados para dar constancia de su supervivencia física ante entes públicos y privados.",
    tiempoEstimado: "Entrega inmediata",
    costo: "Gratuito",
    modalidad: "Presencial",
    baseLegal: "Ley Orgánica de Registro Civil",
    ubicacionOficina: "Registro Civil Parroquial correspondiente a su domicilio",
    requisitos: [
      "Presencia física del ciudadano titular",
      "Cédula de identidad laminada original y copia",
      "En caso de personas encamadas o imposibilitadas: informe médico reciente para visita domiciliaria del registrador"
    ],
    enlaceAccion: "/oficina-virtual"
  }
];
