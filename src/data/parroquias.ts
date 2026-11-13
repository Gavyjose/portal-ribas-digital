export interface Parroquia {
  id: string;
  nombre: string;
  cabecera: string;
  descripcion: string;
  poblacionAprox: string;
  vocacion: string;
  lugaresIconicos: string[];
  sedesAtencion: string;
}

export const PARROQUIAS_RIBAS: Parroquia[] = [
  {
    id: "castor-nieves-rios",
    nombre: "Parroquia Castor Nieves Ríos",
    cabecera: "Las Mercedes (La Victoria)",
    descripcion: "Corazón residencial y comercial moderno del municipio. Alberga centros de salud principales, zonas urbanizadas como Las Mercedes y centros educativos de gran envergadura.",
    poblacionAprox: "65.000 hab.",
    vocacion: "Comercial, Residencial y Servicios de Salud",
    lugaresIconicos: ["Hospital José María Benítez", "Av. Bicentenaria", "Plaza Italia", "Complejo Deportivo Las Mercedes"],
    sedesAtencion: "Módulo de Atención Parroquial Las Mercedes - Av. 1"
  },
  {
    id: "juan-vicente-bolivar",
    nombre: "Parroquia Juan Vicente Bolívar y Ponte",
    cabecera: "Casco Central de La Victoria",
    descripcion: "Cuna de la Batalla de La Victoria (1814). Núcleo histórico, cultural e institucional donde se asienta la sede de la Alcaldía (Casa Amarilla), el Palacio de Gobierno Municipal y el eje comercial patrimonial.",
    poblacionAprox: "50.000 hab.",
    vocacion: "Institucional, Histórica, Turística y Comercial",
    lugaresIconicos: ["Plaza José Félix Ribas", "Cuartel Mariano Montilla", "Iglesia Matriz Nuestra Señora de Guadalupe", "Casa de la Capitulación"],
    sedesAtencion: "Sede Central Alcaldía de Ribas (Casa Amarilla, Calle Candelaria c/c Soublette)"
  },
  {
    id: "zuata",
    nombre: "Parroquia Zuata",
    cabecera: "Zuata",
    descripcion: "Extensa parroquia en continuo crecimiento urbano y rural, reconocida por sus comunidades activas, el embalse de Zuata, su tradición folclórica y producción artesanal y agropecuaria.",
    poblacionAprox: "40.000 hab.",
    vocacion: "Residencial, Producción Agrícola y Ecoturismo",
    lugaresIconicos: ["Dique / Embalse de Zuata", "Plaza Bolívar de Zuata", "Sectores El Castaño y Los Budares", "Mirador Turístico"],
    sedesAtencion: "Prefectura de Zuata - Calle Principal frente a la Plaza Bolívar"
  },
  {
    id: "pao-de-zarate",
    nombre: "Parroquia Pao de Zárate",
    cabecera: "Pao de Zárate",
    descripcion: "Pulmón agrícola y vegetal del municipio. Zona fértil montañosa productora de café, cítricos, hortalizas, tubérculos y ganadería menor que abastece a La Victoria y los Valles de Aragua.",
    poblacionAprox: "15.000 hab.",
    vocacion: "Agrícola, Cafetalera y Turismo Rural",
    lugaresIconicos: ["Ruta Cafetalera del Pao", "Río Pao", "Haciendas Históricas de Cacao y Café", "Iglesia de San José"],
    sedesAtencion: "Casa Parroquial de Gobierno Comunal - Sector Centro Pao de Zárate"
  },
  {
    id: "las-guacamayas",
    nombre: "Parroquia Las Guacamayas",
    cabecera: "Las Guacamayas",
    descripcion: "Comunidad de gran riqueza natural y agrícola al sur del municipio. Destaca por sus paisajes de montaña, su gente laboriosa y su arraigo en tradiciones campesinas de Aragua.",
    poblacionAprox: "10.000 hab.",
    vocacion: "Agropecuaria, Artesanía y Senderismo Ecológico",
    lugaresIconicos: ["Quebradas y Balnearios Naturales", "Plaza Central de Las Guacamayas", "Senderos de Montaña hacia Guárico"],
    sedesAtencion: "Módulo Comunal Integrado Las Guacamayas"
  }
];
