"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface TramiteExpediente {
  id: string;
  codigo: string;
  titulo: string;
  categoria: "tributos" | "catastro" | "registro-civil" | "permisos" | "social";
  progreso: number; // 0 a 100
  estatus: "Recibido" | "En Revisión Técnica" | "Inspección Programada" | "Firma Digital" | "Completado";
  fechaInicio: string;
  ultimaActualizacion: string;
  observaciones: string;
  documentoDescargable?: boolean;
}

export interface InmuebleCatastro {
  fichaCatastral: string;
  direccion: string;
  parroquia: string;
  tipo: "Residencial" | "Comercial" | "Industrial";
  avaluoBs: string;
  estatusSolvencia: "Al Día" | "Pendiente por Liquidar";
}

export interface DocumentoCivil {
  id: string;
  tipo: string;
  titular: string;
  fechaEmision: string;
  codigoVerificacion: string;
  hash: string;
}

export interface Contribuyente {
  id: string;
  nombre: string;
  tipo: "natural" | "juridico";
  documento: string; // ej. V-18.452.123 o J-30.495.821-0
  email: string;
  telefono: string;
  parroquia: string;
  direccion: string;
  solvente: boolean;
  licenciaComercial?: string;
  tramites: TramiteExpediente[];
  inmuebles: InmuebleCatastro[];
  documentosCivil: DocumentoCivil[];
}

// Cuentas de demostración precargadas
export const USUARIOS_DEMO: Contribuyente[] = [
  {
    id: "user-natural",
    nombre: "María José Hernández",
    tipo: "natural",
    documento: "V-18.452.123",
    email: "maria.hernandez@correo.com",
    telefono: "0412-4558391",
    parroquia: "Castor Nieves Ríos",
    direccion: "Urb. Las Mercedes, Sector 2, Calle 4, Casa Nro. 18, La Victoria",
    solvente: true,
    inmuebles: [
      {
        fichaCatastral: "04-02-01-U-0128",
        direccion: "Urb. Las Mercedes, Sector 2, Calle 4, Casa Nro. 18",
        parroquia: "Castor Nieves Ríos",
        tipo: "Residencial",
        avaluoBs: "45.800,00 Bs.",
        estatusSolvencia: "Al Día"
      }
    ],
    documentosCivil: [
      {
        id: "doc-1",
        tipo: "Copia Certificada de Acta de Nacimiento",
        titular: "María José Hernández",
        fechaEmision: "14 de Octubre de 2026",
        codigoVerificacion: "RIB-NAC-2026-9481",
        hash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
      },
      {
        id: "doc-2",
        tipo: "Constancia de Residencia Municipal",
        titular: "María José Hernández",
        fechaEmision: "02 de Noviembre de 2026",
        codigoVerificacion: "RIB-RES-2026-3104",
        hash: "8f4b9c1d2e3a5f60718293a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4"
      }
    ],
    tramites: [
      {
        id: "tr-1",
        codigo: "EXP-RIB-2026-0849",
        titulo: "Solvencia Municipal de Inmuebles Urbanos (Derecho de Frente)",
        categoria: "tributos",
        progreso: 80,
        estatus: "Firma Digital",
        fechaInicio: "10 de Noviembre de 2026",
        ultimaActualizacion: "Hoy 09:30 AM",
        observaciones: "Pagos de tasas administrativas conciliados. Certificado en firma digital del Director de Hacienda.",
        documentoDescargable: true
      },
      {
        id: "tr-2",
        codigo: "EXP-RIB-2026-0612",
        titulo: "Actualización de Ficha Catastral Residencial",
        categoria: "catastro",
        progreso: 100,
        estatus: "Completado",
        fechaInicio: "28 de Octubre de 2026",
        ultimaActualizacion: "05 de Noviembre de 2026",
        observaciones: "Inspección topográfica completada. Cédula catastral emitida satisfactoriamente.",
        documentoDescargable: true
      }
    ]
  },
  {
    id: "user-juridico",
    nombre: "Distribuidora Victoria 2026 C.A.",
    tipo: "juridico",
    documento: "J-30.495.821-0",
    email: "administracion@distribuidoravictoria.com",
    telefono: "0424-3381710",
    parroquia: "Juan Vicente Bolívar y Ponte",
    direccion: "Zona Industrial Soco, Parcela 12, Galpón Nro. 3, La Victoria",
    solvente: true,
    licenciaComercial: "LIC-ACT-RIB-2026-0418",
    inmuebles: [
      {
        fichaCatastral: "04-02-02-IND-0045",
        direccion: "Zona Industrial Soco, Parcela 12, Galpón Nro. 3",
        parroquia: "Juan Vicente Bolívar y Ponte",
        tipo: "Industrial",
        avaluoBs: "280.000,00 Bs.",
        estatusSolvencia: "Al Día"
      }
    ],
    documentosCivil: [],
    tramites: [
      {
        id: "tr-3",
        codigo: "EXP-RIB-2026-0921",
        titulo: "Licencia de Publicidad y Propaganda Comercial Exterior",
        categoria: "permisos",
        progreso: 45,
        estatus: "En Revisión Técnica",
        fechaInicio: "08 de Noviembre de 2026",
        ultimaActualizacion: "Ayer 02:15 PM",
        observaciones: "Memoria fotográfica del aviso exterior remitida a la Dirección de Ingeniería Municipal para conformidad de zonificación.",
        documentoDescargable: false
      },
      {
        id: "tr-4",
        codigo: "EXP-RIB-2026-0750",
        titulo: "Declaración Mensual de Actividades Económicas (Octubre)",
        categoria: "tributos",
        progreso: 100,
        estatus: "Completado",
        fechaInicio: "02 de Noviembre de 2026",
        ultimaActualizacion: "03 de Noviembre de 2026",
        observaciones: "Declaración de ingresos brutos y retenciones autoliquidada y pagada exitosamente.",
        documentoDescargable: true
      }
    ]
  }
];

interface AuthContextType {
  usuario: Contribuyente | null;
  login: (documento: string, clave: string) => boolean;
  loginAsDemo: (tipo: "natural" | "juridico") => void;
  logout: () => void;
  iniciarTramite: (titulo: string, categoria: TramiteExpediente["categoria"]) => string;
  registrarUsuario: (datos: Partial<Contribuyente>) => void;
}

const AuthContext = createContext<AuthContextType>({
  usuario: null,
  login: () => false,
  loginAsDemo: () => {},
  logout: () => {},
  iniciarTramite: () => "",
  registrarUsuario: () => {}
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<Contribuyente | null>(null);

  // Inicialización con sesión guardada si existe en el cliente
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("ribas_digital_user");
      if (savedUser) {
        setUsuario(JSON.parse(savedUser));
      }
    } catch {
      // Ignorar si no está disponible localStorage
    }
  }, []);

  const saveUser = (u: Contribuyente | null) => {
    setUsuario(u);
    try {
      if (u) {
        localStorage.setItem("ribas_digital_user", JSON.stringify(u));
      } else {
        localStorage.removeItem("ribas_digital_user");
      }
    } catch {
      // Ignorar
    }
  };

  const login = (documento: string) => {
    const cleanDoc = documento.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    const found = USUARIOS_DEMO.find((u) =>
      u.documento.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().includes(cleanDoc)
    );

    if (found) {
      saveUser(found);
      return true;
    }

    // Si no está en demo, se crea una sesión genérica válida para el documento ingresado
    const nuevoUsuario: Contribuyente = {
      id: `user-${Date.now()}`,
      nombre: cleanDoc.startsWith("J") ? "COMERCIO LA VICTORIA C.A." : "CIUDADANO VICTORIANO",
      tipo: cleanDoc.startsWith("J") ? "juridico" : "natural",
      documento,
      email: "contribuyente@alcaldiaderibas.gob.ve",
      telefono: "0412-1234567",
      parroquia: "Juan Vicente Bolívar y Ponte",
      direccion: "Casco Central de La Victoria, Calle Candelaria",
      solvente: true,
      inmuebles: [
        {
          fichaCatastral: "04-02-01-U-0549",
          direccion: "Casco Central de La Victoria",
          parroquia: "Juan Vicente Bolívar y Ponte",
          tipo: "Residencial",
          avaluoBs: "32.000,00 Bs.",
          estatusSolvencia: "Al Día"
        }
      ],
      documentosCivil: [],
      tramites: [
        {
          id: `tr-${Date.now()}`,
          codigo: `EXP-RIB-2026-${Math.floor(1000 + Math.random() * 9000)}`,
          titulo: "Constancia de Residencia Municipal",
          categoria: "registro-civil",
          progreso: 60,
          estatus: "En Revisión Técnica",
          fechaInicio: "Hoy",
          ultimaActualizacion: "Hoy",
          observaciones: "Documentos consignados en validación."
        }
      ]
    };

    saveUser(nuevoUsuario);
    return true;
  };

  const loginAsDemo = (tipo: "natural" | "juridico") => {
    const demo = USUARIOS_DEMO.find((u) => u.tipo === tipo);
    if (demo) {
      saveUser(demo);
    }
  };

  const logout = () => {
    saveUser(null);
  };

  const iniciarTramite = (titulo: string, categoria: TramiteExpediente["categoria"]) => {
    if (!usuario) return "";
    const nuevoCodigo = `EXP-RIB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const nuevoTramite: TramiteExpediente = {
      id: `tr-${Date.now()}`,
      codigo: nuevoCodigo,
      titulo,
      categoria,
      progreso: 20,
      estatus: "Recibido",
      fechaInicio: "Hoy",
      ultimaActualizacion: "Hoy",
      observaciones: "Solicitud registrada satisfactoriamente a través de su Usuario Único. Asignada a analista de guardia.",
      documentoDescargable: false
    };

    const updatedUser = {
      ...usuario,
      tramites: [nuevoTramite, ...usuario.tramites]
    };

    saveUser(updatedUser);
    return nuevoCodigo;
  };

  const registrarUsuario = (datos: Partial<Contribuyente>) => {
    const nuevo: Contribuyente = {
      id: `user-${Date.now()}`,
      nombre: datos.nombre || "Nuevo Contribuyente",
      tipo: datos.tipo || "natural",
      documento: datos.documento || "V-00.000.000",
      email: datos.email || "usuario@correo.com",
      telefono: datos.telefono || "0412-0000000",
      parroquia: datos.parroquia || "Castor Nieves Ríos",
      direccion: datos.direccion || "La Victoria, Estado Aragua",
      solvente: true,
      inmuebles: [],
      documentosCivil: [],
      tramites: []
    };
    saveUser(nuevo);
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        login,
        loginAsDemo,
        logout,
        iniciarTramite,
        registrarUsuario
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
