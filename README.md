# Portal Web "Ribas Digital"
**Alcaldía del Municipio José Félix Ribas • La Victoria, Estado Aragua, Venezuela**

Plataforma oficial de gobierno electrónico (*e-Gov*) y atención ciudadana desarrollada con **Next.js 16 (App Router)**, **React 19**, **TypeScript** y **Tailwind CSS**.

---

## 🏛️ Características Principales

1. **Oficina Virtual & Validador Digital (`/oficina-virtual`):**
   * Consulta de solvencias tributarias por Cédula o RIF.
   * Generación de certificado formal oficial imprimible en PDF con Hash SHA-256 y Código QR.
   * Verificador de autenticidad para terceros y autoridades.
   * Agendamiento digital de citas para Registro Civil (partidas de nacimiento, constancias de residencia, matrimonios).
   * Conciliación y reporte de transferencias bancarias y Pago Móvil C2P.

2. **Ribas Resuelve (`/ribas-resuelve`):**
   * Sistema de reporte de incidencias de servicios públicos (alumbrado, agua, vialidad, aseo).
   * Generación de tickets únicos de seguimiento correlativo (`RIB-2026-XXXX`).
   * Línea de tiempo interactiva de atención en 4 fases (*Recibido -> Evaluado -> Cuadrilla en Sitio -> Resuelto*).

3. **Plan Ribas Limpia y Bonita - Aseo Urbano (`/aseo`):**
   * Cronograma detallado de recolección y barrido para las 4 Zonas Operativas (A, B, C y D).
   * Búsqueda por sectores y comunidades de La Victoria, Las Mercedes, La Mora, Zuata, etc.
   * Visualización de días, turnos, flota asignada (compactadores Iveco, Sany, Toronto, Cargo y trimotos) y teléfonos directos de los coordinadores de zona.

4. **Transparencia y Gacetas Municipales (`/gacetas`):**
   * Repositorio indexado de ordenanzas, reglamentos y decretos ordinarios y extraordinarios con buscador por materia y descarga.

5. **El Municipio y sus 5 Parroquias (`/municipio`):**
   * Reseña histórica de La Victoria (Batalla del 12 de Febrero de 1814 - Cuna de la Juventud).
   * Fichas de las 5 parroquias: *Castor Nieves Ríos, Juan Vicente Bolívar y Ponte, Zuata, Pao de Zárate y Las Guacamayas*.

6. **Panel Administrativo Municipal (`/admin`):**
   * Sala Situacional de reportes 1x10 con cambio de estatus en tiempo real.
   * Supervisión de trámites tributarios y publicación de nuevas gacetas oficiales.

7. **Soporte PWA (Progressive Web App):**
   * Instalable directamente en dispositivos móviles Android e iOS mediante el manifiesto institucional (`/manifest.json`).

---

## 🚀 Puesta en Marcha en Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en localhost:3000
npm run dev

# Generar compilación optimizada de producción
npm run build

# Iniciar en modo producción
npm run start
```

---

## 📄 Manual de Operación
Para consultar la guía detallada de operación ciudadana y administrativa, consulta el archivo [MANUAL_DE_OPERACION.md](MANUAL_DE_OPERACION.md).
