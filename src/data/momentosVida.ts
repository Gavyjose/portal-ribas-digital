export interface PasoMomentoVida {
  numero: number;
  titulo: string;
  dependencia: string;
  tiempo: string;
  descripcion: string;
  requisitos: string[];
}

export interface MomentoVida {
  id: string;
  titulo: string;
  subtitulo: string;
  icono: string;
  badge: string;
  tiempoTotal: string;
  costoEstimado: string;
  descripcion: string;
  pasos: PasoMomentoVida[];
  documentosDescargables?: { nombre: string; formato: string; tamano: string }[];
  enlaceAccion: string;
  destacado?: boolean;
}

export const MOMENTOS_VIDA: MomentoVida[] = [
  {
    id: "abrir-negocio",
    titulo: "Quiero Abrir o Formalizar un Negocio en Ribas",
    subtitulo: "Ruta unificada para emprendedores y empresas en La Victoria y demás parroquias.",
    icono: "🏪",
    badge: "Ruta Emprendedor 1-Clic",
    tiempoTotal: "Aprox. 4 a 6 días hábiles",
    costoEstimado: "Según clasificador de actividades económicas SUMAR",
    descripcion: "Ya no necesitas recorrer múltiples dependencias por separado. Esta ruta integra en un solo expediente la conformidad de uso de suelo, la inspección técnica de bomberos y la emisión de tu Patente de Industria y Comercio.",
    pasos: [
      {
        numero: 1,
        titulo: "Constancia de Zonificación y Uso de Suelo",
        dependencia: "Dirección de Ingeniería y Control Urbano",
        tiempo: "48 horas",
        descripcion: "Verificación de que la actividad comercial planteada es conforme con el Plan de Desarrollo Urbano Local (PDUL) de La Victoria.",
        requisitos: [
          "Copia del documento de propiedad o contrato de arrendamiento notariado",
          "Plano o croquis de ubicación exacta del local comercial",
          "Copia del RIF fiscal del solicitante"
        ]
      },
      {
        numero: 2,
        titulo: "Inspección de Seguridad y Prevención de Incendios",
        dependencia: "Cuerpo de Bomberos del Municipio Ribas",
        tiempo: "48 a 72 horas",
        descripcion: "Inspección ocular para verificar extintores vigentes, señalética de evacuación y condiciones eléctricas seguras.",
        requisitos: [
          "Extintor PQS de mínimo 10 lbs recargado y certificado",
          "Lámparas de emergencia en salidas y accesos",
          "Pago de la tasa de inspección técnica bomberil"
        ]
      },
      {
        numero: 3,
        titulo: "Inscripción en Aseo Comercial y SUMAR",
        dependencia: "Hacienda Municipal y Dirección de Servicios Públicos",
        tiempo: "24 horas",
        descripcion: "Registro en el padrón de contribuyentes comerciales para la recaudación del aseo y emisión de la Licencia de Actividades Económicas.",
        requisitos: [
          "Registro Mercantil debidamente inscrito y RIF jurídico",
          "Certificado de conformidad de bomberos y uso conforme",
          "Cédula de identidad del representante legal"
        ]
      }
    ],
    documentosDescargables: [
      { nombre: "Planilla Única de Solicitud de Patente Comercial.pdf", formato: "PDF", tamano: "145 KB" },
      { nombre: "Guía de Requisitos para Locales Comerciales.pdf", formato: "PDF", tamano: "320 KB" }
    ],
    enlaceAccion: "/oficina-virtual/dashboard",
    destacado: true
  },
  {
    id: "vivienda-inmueble",
    titulo: "Compré, Vendí o Construí una Vivienda / Inmueble",
    subtitulo: "Regularización catastral, actualización de ficha y solvencia de derecho de frente.",
    icono: "🏡",
    badge: "Seguridad Jurídica Habitacional",
    tiempoTotal: "5 a 8 días hábiles",
    costoEstimado: "Tasa fija según metros cuadrados y zona catastral",
    descripcion: "Asegura la titularidad y la paz registral de tu casa, apartamento o terreno en el Municipio Ribas. Gestiona tu empadronamiento catastral y mantén al día la solvencia inmobiliaria.",
    pasos: [
      {
        numero: 1,
        titulo: "Actualización o Emisión de Ficha Catastral",
        dependencia: "Dirección de Catastro Municipal (Casa Amarilla)",
        tiempo: "5 días hábiles",
        descripcion: "Asignación del código catastral alfanumérico que identifica las coordenadas y linderos exactos de la propiedad.",
        requisitos: [
          "Copia simple del documento de propiedad debidamente registrado",
          "Croquis de linderos o plano topográfico en coordenadas UTM",
          "Cédula de identidad del propietario o apoderado legal"
        ]
      },
      {
        numero: 2,
        titulo: "Solvencia de Inmuebles Urbanos (Derecho de Frente)",
        dependencia: "Dirección de Hacienda y Administración Tributaria",
        tiempo: "24 a 48 horas",
        descripcion: "Certificación digital emitida con código QR que valida que el inmueble no adeuda trimestres tributarios.",
        requisitos: [
          "Número de ficha catastral actualizada",
          "Último recibo de pago del impuesto inmobiliario",
          "Comprobante de pago de la tasa administrativa"
        ]
      },
      {
        numero: 3,
        titulo: "Permiso de Obras o Remodelación (Si aplica)",
        dependencia: "Dirección de Ingeniería y Control Urbano",
        tiempo: "3 a 5 días hábiles",
        descripcion: "Para ampliaciones de fachada, cercas perimetrales o modificaciones estructurales residenciales.",
        requisitos: [
          "Ficha catastral y solvencia municipal vigente",
          "Memoria descriptiva simple firmada por profesional colegiado CIV"
        ]
      }
    ],
    documentosDescargables: [
      { nombre: "Formulario de Solicitud de Ficha Catastral.pdf", formato: "PDF", tamano: "180 KB" },
      { nombre: "Instructivo de Derecho de Frente.pdf", formato: "PDF", tamano: "95 KB" }
    ],
    enlaceAccion: "/oficina-virtual/dashboard"
  },
  {
    id: "familia-identidad",
    titulo: "Familia, Citas y Registro Civil",
    subtitulo: "Trámites esenciales para ti y tus seres queridos con atención rápida y digna.",
    icono: "👨‍👩‍👧‍👦",
    badge: "Atención Ciudadana Directa",
    tiempoTotal: "Entrega el mismo día o 24 horas",
    costoEstimado: "Exento / Gratuito por mandato de la Ley de Registro Civil",
    descripcion: "Acceso ágil a tus actas de nacimiento, cartas de residencia, constancias de fe de vida y solicitudes de matrimonio civil en la sede del Registro Civil de La Victoria.",
    pasos: [
      {
        numero: 1,
        titulo: "Actas de Nacimiento (Certificadas para SAIME o Escuelas)",
        dependencia: "Registro Civil Municipal (Centro de La Victoria)",
        tiempo: "Mismo día o 24 horas",
        descripcion: "Búsqueda y certificación de libro registral para cédula de identidad por primera vez, renovaciones y trámites consulares.",
        requisitos: [
          "Datos del acta (número de libro, folio, año y parroquia de nacimiento)",
          "Copia de la cédula de los padres o del titular",
          "Copia simple del acta anterior si la posee para agilizar búsqueda"
        ]
      },
      {
        numero: 2,
        titulo: "Carta de Residencia Municipal Digital",
        dependencia: "Registro Civil y Atención Comunitaria",
        tiempo: "Inmediato tras verificación",
        descripcion: "Documento oficial que acredita tu domicilio efectivo en cualquiera de las comunidades de las 5 parroquias.",
        requisitos: [
          "Copia de cédula de identidad vigente",
          "Aval de residencia del Consejo Comunal o recibo de servicio público a su nombre",
          "Constancia del CNE (Constancia de Registro Electoral)"
        ]
      },
      {
        numero: 3,
        titulo: "Fe de Vida para Adultos Mayores y Pensionados",
        dependencia: "Registro Civil Municipal",
        tiempo: "Atención preferencial inmediata",
        descripcion: "Certificación indispensable para actualización de nóminas del IVSS y seguros.",
        requisitos: [
          "Presencia del titular (o informe médico reciente si presenta inmovilidad)",
          "Cédula de identidad original y copia legible"
        ]
      }
    ],
    documentosDescargables: [
      { nombre: "Requisitos Matrimonio Civil Ribas.pdf", formato: "PDF", tamano: "115 KB" },
      { nombre: "Modelo Aval Consejo Comunal Residencia.pdf", formato: "PDF", tamano: "85 KB" }
    ],
    enlaceAccion: "/oficina-virtual/dashboard"
  },
  {
    id: "vehiculos-movilidad",
    titulo: "Trámites de Vehículos y Transporte",
    subtitulo: "Patente vehicular, permisos de carga urbana y registro de conductores en Ribas.",
    icono: "🚗",
    badge: "Movilidad y Vialidad",
    tiempoTotal: "24 a 48 horas",
    costoEstimado: "Según tabulador de tipo de vehículo (moto, particular, carga)",
    descripcion: "Mantén la solvencia tributaria de tu vehículo particular o flota comercial, e inscríbete para rutas de transporte urbano y permisos de carga pesada en La Victoria.",
    pasos: [
      {
        numero: 1,
        titulo: "Liquidación de Impuesto sobre Vehículos (Patente)",
        dependencia: "Dirección de Hacienda Municipal",
        tiempo: "24 horas",
        descripcion: "Pago del tributo anual con emisión inmediata de la calcomanía y certificado digital.",
        requisitos: [
          "Título de propiedad del vehículo o carnet de circulación del INTT",
          "Cédula de identidad del propietario o RIF si es persona jurídica",
          "Solvencia del año fiscal previo (si ya estaba inscrito en Ribas)"
        ]
      },
      {
        numero: 2,
        titulo: "Permiso de Carga y Descarga en Casco Central",
        dependencia: "Dirección de Transporte y Vialidad Municipal",
        tiempo: "48 horas",
        descripcion: "Autorización para el ingreso de transporte de mercancía en horarios regulados en el centro comercial de La Victoria.",
        requisitos: [
          "Solvencia de vehículo y RIF de la empresa receptora",
          "Ruta y horario solicitado conforme a la ordenanza de circulación"
        ]
      }
    ],
    documentosDescargables: [
      { nombre: "Tabulador Oficial Patente Vehicular.pdf", formato: "PDF", tamano: "110 KB" }
    ],
    enlaceAccion: "/oficina-virtual/dashboard"
  }
];
