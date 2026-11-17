# Portal Web "Ribas Digital"
**Alcaldía del Municipio José Félix Ribas • La Victoria, Estado Aragua, Venezuela**

Plataforma oficial de gobierno electrónico (*e-Gov*) y atención ciudadana desarrollada con **Next.js 16 (App Router)**, **React 19**, **TypeScript** y **Tailwind CSS**.

🌐 **Sitio Web en Producción:** [https://portal-ribas-digital.vercel.app](https://portal-ribas-digital.vercel.app)

---

## 🏛️ Características Principales

1. **RibasBot • Asistente Virtual Cívico con Avatar del General José Félix Ribas:**
   * Widget interactivo con diseño *Apple Glass* flotante en todas las páginas.
   * Motor de respuestas inteligentes en lenguaje natural sobre cronogramas de aseo, solvencias, obras públicas y reportes.
   * Integración directa con líneas telefónicas de emergencia y canal oficial de WhatsApp.
   * Avatar heroico de José Félix Ribas y mensaje de bienvenida inspirado en la Batalla de La Victoria (*«¡No podemos optar entre vencer o morir, necesario es vencer!»*).

2. **Trámites por "Momentos de Vida" (`/tramites`):**
   * Rediseño cívico basado en los estándares internacionales de **Singapur LifeSG** y **GOV.UK**.
   * Rutas unificadas: *Apertura de Negocio en 1-Clic, Vivienda e Inmueble, Familia y Registro Civil, Vehículos y Movilidad*.
   * Checklist interactivo con barra de porcentaje de preparación para verificar recaudos antes de consignar.
   * Descarga directa de planillas oficiales en PDF y catálogo tradicional por dependencias.

3. **Monitor de Obras Públicas y Presupuesto Transparente (`/obras`):**
   * Inspirado en **BA Obras** (Buenos Aires), **Decide Madrid** y **Medellín Transparente**.
   * Tablero con KPIs en vivo: 38 proyectos, 24 culminados, 12.450+ toneladas de asfalto, 9 pozos de agua y 3.200+ luminarias LED.
   * Filtros por las 5 Parroquias y por categoría (Vialidad, Agua, Alumbrado, Deporte, Patrimonio).
   * **Comparador interactivo Antes / Después** con fotografías reales del estado inicial y resultado de la obra.
   * Buzón de veeduría y contraloría social para que los vecinos califiquen y dejen reportes a la Sala Situacional.

4. **Ribas Resuelve con Cámara Móvil y GPS (`/ribas-resuelve`):**
   * Reporte de incidencias de servicios públicos (alumbrado, agua, vialidad, aseo).
   * **Captura fotográfica directa desde la cámara del celular** o galería con visor de previsualización (hasta 3 fotos por ticket).
   * Geolocalización GPS automática mediante el navegador para guiar a las cuadrillas en sitio.
   * Generación de tickets únicos correlativos (`RIB-2026-XXXX`) con línea de tiempo interactiva.

5. **Oficina Virtual & Usuario Único (`/oficina-virtual` y `/oficina-virtual/dashboard`):**
   * Cuenta única para contribuyentes (personas naturales y jurídicas) con aislamiento estricto de privacidad y secreto tributario.
   * Consulta protegida de estados de cuenta de Hacienda Municipal, Catastro y Fichas Inmobiliarias.
   * Generación y descarga de certificados de solvencia con Hash SHA-256, firma digital y Código QR.
   * Validador público de autenticidad para notarías, registros y entidades bancarias.
   * Citas digitales para Registro Civil (partidas de nacimiento, constancias de residencia, matrimonios).
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

## ⚙️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu sistema:
* **Node.js**: Versión 18.17.0 o superior (recomendado Node.js 20 LTS o 24).
* **Git**: Para el control de versiones y clonación del repositorio.
* **Gestor de paquetes**: `npm` (incluido con Node.js), `pnpm` o `yarn`.

---

## 🚀 Instalación y Puesta en Marcha

### 1. Clonar el Repositorio

Puedes clonar el proyecto mediante **HTTPS** o **SSH**:

```bash
# Opción A: Clonar con HTTPS (Recomendado)
git clone https://github.com/Gavyjose/portal-ribas-digital.git

# Opción B: Clonar con SSH
git clone git@github.com:Gavyjose/portal-ribas-digital.git
```

### 2. Ingresar a la Carpeta del Proyecto

```bash
cd portal-ribas-digital
```

### 3. Instalar Dependencias

```bash
npm install
```

### 4. Ejecutar en Modo Desarrollo

```bash
npm run dev
```
Abre tu navegador en [http://localhost:3000](http://localhost:3000) para visualizar el portal en tiempo real con recarga automática (*Hot Reload*).

---

## 🏗️ Compilación y Producción

```bash
# Generar compilación optimizada para producción
npm run build

# Iniciar el servidor con la versión compilada
npm run start
```

---

## 📄 Manual de Operación
Para consultar la guía detallada de operación ciudadana y administrativa, consulta el archivo [MANUAL_DE_OPERACION.md](MANUAL_DE_OPERACION.md).
