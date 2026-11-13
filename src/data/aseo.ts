export interface RutaAseo {
  numero: string;
  sectores: string;
  dias: string;
  horario: string;
  transporte: string;
  tripulacion: string;
}

export interface ZonaAseo {
  id: string;
  nombre: string;
  coordinador: string;
  telefono: string;
  camiones: string[];
  trimotos: string[];
  rutas: RutaAseo[];
}

export const ZONAS_ASEO: ZonaAseo[] = [
  {
    id: "zona-a",
    nombre: "Zona “A” Recolección",
    coordinador: "Tirso Márquez",
    telefono: "0412-1316364",
    camiones: ["C-25 (Iveco) - Chofer: Flores Alexis (0424-3381710)"],
    trimotos: ["TR-01", "TR-12", "TR-17"],
    rutas: [
      {
        numero: "Ruta N.º 1",
        sectores: "Las Mercedes (Sectores 1, 2 y 3), Hospital José María Benítez, Seguro Social, Terrazas de Las Mercedes, Ynvica",
        dias: "Lunes, Miércoles y Viernes",
        horario: "07:00 am a 02:00 pm",
        transporte: "Camión C-25 IVECO",
        tripulacion: "Rojas José, Ojeda Luis, Olivares José"
      },
      {
        numero: "Ruta N.º 2",
        sectores: "Avenidas 1, 2 y 3 de Las Mercedes, Av. Bicentenaria, Plaza Italia, Peaje La Victoria, Av. Intercomunal",
        dias: "Lunes a Domingo",
        horario: "07:00 am a 10:00 pm",
        transporte: "Trimoto TR-01",
        tripulacion: "Martínez Daniel, Antonio Sosa, Sanmartín Franklin"
      },
      {
        numero: "Ruta N.º 3",
        sectores: "El Bosque, Maletero, Sectores 4 y 5 de Las Mercedes",
        dias: "Martes, Jueves y Sábado",
        horario: "07:00 am a 02:00 pm",
        transporte: "Camión C-25 IVECO",
        tripulacion: "Rojas José, Ojeda Luis, Olivares José"
      },
      {
        numero: "Ruta N.º 4",
        sectores: "Ciudad Socialista La Mora, La Mora 2, Mercado Municipal, Terminal de Pasajeros de La Victoria",
        dias: "Jueves y Domingo",
        horario: "07:00 am a 02:00 pm",
        transporte: "Trimoto TR-01",
        tripulacion: "Martínez Daniel, Antonio Sosa, Sanmartín Franklin"
      },
      {
        numero: "Ruta N.º 5",
        sectores: "Vista Hermosa y sectores adyacentes",
        dias: "Martes y Sábados",
        horario: "07:00 am a 02:00 pm",
        transporte: "Camión C-25 IVECO",
        tripulacion: "Rojas José, Ojeda Luis, Olivares José"
      },
      {
        numero: "Ruta N.º 6",
        sectores: "Sectores La Chapa, San Rafael, Hugo Chávez, La Paragua",
        dias: "Martes y Sábado",
        horario: "07:00 am a 02:00 pm",
        transporte: "Apoyo con Trimotos",
        tripulacion: "Cuadrilla Especial"
      }
    ]
  },
  {
    id: "zona-b",
    nombre: "Zona “B” Recolección",
    coordinador: "Luis Gámez",
    telefono: "0412-4558391",
    camiones: [
      "C-22 (Sany) - Chofer: Briceño Heiner (0412-4175722)",
      "C-26 (Iveco) - Chofer: Jhonny Sanabria (0412-0391881)"
    ],
    trimotos: ["TR-02", "TR-09", "TR-13"],
    rutas: [
      {
        numero: "Ruta N.º 7",
        sectores: "La Mora 1 (Sector 3, 14 Calles), Sarayauta hasta Pie de Cerro, incluye Santa Rosalía",
        dias: "Lunes y Jueves",
        horario: "07:00 am a 02:00 pm",
        transporte: "Camión C-22 SANY",
        tripulacion: "Morales Abraham, Colmenares Gabriel, Herrada Leonel"
      },
      {
        numero: "Ruta N.º 8",
        sectores: "La Mora 1 (Sector 2, 19 Calles)",
        dias: "Martes y Viernes",
        horario: "07:00 am a 02:00 pm",
        transporte: "Camión C-22 SANY + Trimoto TR-02",
        tripulacion: "Morales Abraham, Colmenares Gabriel, Carlos Lanza"
      },
      {
        numero: "Ruta N.º 9",
        sectores: "La Mora 1 (Sectores 1 y 4, 16 Calles), Sector 23 de Enero",
        dias: "Miércoles y Sábado",
        horario: "07:00 am a 02:00 pm",
        transporte: "Camión C-26 IVECO",
        tripulacion: "Herrada Yorman, Tomas Franklin, Rivero José"
      },
      {
        numero: "Ruta N.º 10",
        sectores: "24 de Julio, Párate Bueno, San Pedro y sectores colindantes",
        dias: "Lunes y Viernes",
        horario: "07:00 am a 02:00 pm",
        transporte: "Trimoto TR-13",
        tripulacion: "Guatache Luis, Sanabria David"
      },
      {
        numero: "Ruta N.º 11",
        sectores: "Los Samanes, Montaña Fresca, Santa Eduvigis y sectores colindantes",
        dias: "Martes y Sábado",
        horario: "07:00 am a 02:00 pm",
        transporte: "Camión C-26 IVECO",
        tripulacion: "Herrada Yorman, Tomas Franklin, Rivero José"
      }
    ]
  },
  {
    id: "zona-c",
    nombre: "Zona “C” Recolección",
    coordinador: "Alexis Pérez",
    telefono: "0424-3166500",
    camiones: [
      "C-21 (Iveco) - Chofer: Linares Martin (0424-3069996)",
      "C-24 (Toronto) - Chofer: Briceño Alexis (0412-1468546)"
    ],
    trimotos: ["TR-03", "TR-04", "TR-14", "TR-15", "TR-18"],
    rutas: [
      {
        numero: "Ruta N.º 12",
        sectores: "Zona Industrial 1 (Soco, La Chapa industrial)",
        dias: "Lunes, Miércoles y Viernes",
        horario: "07:00 am a 02:00 pm",
        transporte: "Camión C-21 IVECO",
        tripulacion: "Ríos Willian, Mier y Terán José, Lucena Narciso"
      },
      {
        numero: "Ruta N.º 13",
        sectores: "Zona Industrial 2 (Sectores La Mora 2)",
        dias: "Martes y Jueves",
        horario: "07:00 am a 02:00 pm",
        transporte: "Camión C-21 IVECO + Trimoto TR-18",
        tripulacion: "Pedro Albornoz, Ríos William, Junior Bravo"
      },
      {
        numero: "Ruta N.º 14",
        sectores: "Bolívar Norte, Urbanismo Los Andes, Bolívar Sur, Casco Histórico, El Recreo y sectores colindantes",
        dias: "Lunes, Miércoles y Viernes",
        horario: "07:00 am a 02:00 pm",
        transporte: "Camión C-24 TORONTO + Trimoto TR-14",
        tripulacion: "González Yohan, Sánchez Winser, Carrión Raimundo"
      },
      {
        numero: "Ruta N.º 15",
        sectores: "Las Casitas del Cementerio",
        dias: "Miércoles",
        horario: "07:00 am a 02:00 pm",
        transporte: "Camión C-24 TORONTO + Trimoto TR-14",
        tripulacion: "González Yohan, Colmenares Yonder, Pérez José"
      },
      {
        numero: "Ruta N.º 16",
        sectores: "Casco Central, Zona Comercial y Residencial",
        dias: "Lunes a Domingo",
        horario: "07:00 am a 10:00 pm",
        transporte: "Camión C-24 TORONTO + Trimotos TR-03 y TR-04",
        tripulacion: "González Yohan, William León, Beiker Britapaz"
      },
      {
        numero: "Ruta N.º 17",
        sectores: "La Otra Banda, El Cementerio y sectores colindantes",
        dias: "Lunes y Miércoles",
        horario: "07:00 am a 02:00 pm",
        transporte: "Camión C-24 TORONTO + Trimoto TR-15",
        tripulacion: "González Yohan, Moisés Ceballos"
      }
    ]
  },
  {
    id: "zona-d",
    nombre: "Zona “D” Recolección",
    coordinador: "José Figueredo",
    telefono: "0424-3664771",
    camiones: ["C-23 (Cargo) - Chofer: Raúl Delgado (0424-3290170)"],
    trimotos: ["TR-08", "TR-10", "TR-11", "TR-16"],
    rutas: [
      {
        numero: "Ruta N.º 18",
        sectores: "Belo Monte, Zuata, El Castaño, San José, Los Budares, Mamón Mijao, Prado de María, El Indio A, B y C, Punta del Monte",
        dias: "Lunes, Martes y Sábado",
        horario: "07:00 am a 02:00 pm",
        transporte: "Camión C-23 CARGO",
        tripulacion: "Barrera Alexander, Yeison González, Charly Hernández"
      }
    ]
  }
];
