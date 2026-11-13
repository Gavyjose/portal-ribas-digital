# Manual de Operación y Administración: Portal "Ribas Digital"
**Alcaldía del Municipio José Félix Ribas (La Victoria, Estado Aragua)**

---

## 1. Visión General de la Plataforma
El portal **Ribas Digital** es una solución integral de gobierno electrónico (*e-Gov*) diseñada para transformar la atención al ciudadano y la gestión tributaria y operativa en el Municipio José Félix Ribas. Integra trámites tributarios, citas de registro civil, cronogramas de servicios públicos georreferenciados y un panel administrativo para la toma de decisiones en tiempo real.

---

## 2. Estructura de Rutas y Módulos

| Ruta | Módulo | Perfil de Usuario | Funcionalidad Principal |
| :--- | :--- | :--- | :--- |
| `/` | **Portal Institucional** | Todos | Buscador predictivo, accesos rápidos, noticias y resumen de gestión. |
| `/oficina-virtual` | **Oficina Virtual** | Contribuyentes / Ciudadanos | Consulta de solvencias con QR, validación de certificados, citas de registro civil y reporte de pagos bancarios. |
| `/ribas-resuelve` | **Atención Ciudadana (1x10)** | Vecinos de Ribas | Formulario de incidencias comunitarias con generación de ticket de seguimiento y línea de tiempo en 4 etapas. |
| `/aseo` | **Cronograma de Aseo** | Comunidad y Comercios | Búsqueda por sector (Zonas A, B, C y D), horarios, días, vehículos asignados y contactos de coordinadores. |
| `/tramites` | **Catálogo de Trámites** | Público general | Requisitos, tiempos de respuesta, costos y pasos para trámites de Hacienda, Catastro y Registro Civil. |
| `/gacetas` | **Archivo Municipal** | Abogados, Comerciantes, Vecinos | Buscador y visor de gacetas ordinarias y extraordinarias, decretos y ordenanzas aprobadas. |
| `/municipio` | **Territorio e Historia** | Público general / Estudiantes | Reseña histórica de La Victoria (12 de Febrero), símbolos y perfiles de las 5 parroquias. |
| `/admin` | **Panel de Gestión** | Funcionarios de la Alcaldía | Sala Situacional 1x10, aprobación de solvencias, monitoreo de cuadrillas y publicación de gacetas. |

---

## 3. Guía de Operación para Funcionarios Municipales

### A. Sala Situacional ("Ribas Resuelve") en `/admin`
1. Ingrese a `http://localhost:3000/admin` o mediante el enlace *"Acceso Funcionarios"* ubicado en el pie de página.
2. En la pestaña **Sala Situacional (Ribas Resuelve)** visualizará la bandeja de tickets entrantes con número único (`RIB-2026-XXXX`), datos del vecino reportante, sector y teléfono de contacto.
3. Para cambiar el estado operativo de una incidencia, utilice el selector de **Acción Operativa**:
   * **Pendiente:** Caso recién recibido en espera de validación.
   * **En Inspección:** Cuadrilla técnica evalúa el terreno (ej. inspección de fuga de agua o poste eléctrico).
   * **Cuadrilla Asignada:** Personal de Servicios Públicos con camión cesta, retroexcavadora o cuadrilla en ruta al sitio.
   * **Resuelto:** Trabajo concluido y verificado satisfactoriamente.

### B. Emisión y Verificación de Solvencias en `/oficina-virtual`
1. Los ciudadanos pueden consultar su estatus ingresando su Cédula o RIF.
2. Al presionar **"Ver e Imprimir Certificado"**, se despliega el certificado oficial formal en formato carta con:
   * Membrete oficial de la República Bolivariana de Venezuela y Alcaldía de Ribas.
   * Sello de agua y numeración correlativa (`RIB-SOLV-2026-XXXX`).
   * Hash criptográfico SHA-256 de seguridad.
   * Código QR escaneable por notarías, bancos o autoridades policiales.
   * Firma digitalizada de la Dirección de Hacienda Municipal.
3. El botón **"Imprimir / Guardar PDF"** permite la descarga directa o impresión física sin requerir sellos húmedos adicionales.

### C. Publicación de Nuevas Gacetas en `/admin`
1. Ingrese a la pestaña **Publicación de Gacetas**.
2. Indique el número correlativo (ej. `G.M. N.º 4.299`), tipo (*Ordinaria* o *Extraordinaria*), título y sumario o resumen del articulado.
3. Presione **"Publicar Gaceta Oficial en Línea"** para que esté inmediatamente accesible en `/gacetas`.

---

## 4. Datos Operativos Reales de Aseo Urbano
El sistema cuenta con la programación completa de las 4 zonas operativas del municipio:
* **Zona A:** Coordinador Tirso Márquez (`0412-1316364`) — Sectores: Las Mercedes, Hospital Benítez, El Bosque, La Mora 2, La Chapa, etc.
* **Zona B:** Coordinador Luis Gámez (`0412-4558391`) — Sectores: La Mora 1 (14, 19 y 16 calles), Sarayauta, Pie de Cerro, 24 de Julio, Los Samanes, etc.
* **Zona C:** Coordinador Alexis Pérez (`0424-3166500`) — Sectores: Zona Industrial 1 (Soco), Zona Industrial 2, Casco Histórico, Casco Central Comercial, La Otra Banda, etc.
* **Zona D:** Coordinador José Figueredo (`0424-3664771`) — Sectores: Zuata, Belo Monte, El Castaño, San José, Los Budares, Prado de María, El Indio, Punta del Monte.

---

## 5. Contactos y Sedes Administrativas
* **Sede Principal (Casa Amarilla):** Calle Candelaria Sur cruce con Calle Soublette, Nro. 39-16, Casco Central, La Victoria, Estado Aragua.
* **Central Telefónica:** 0244-4174115 / 0412-4558391
* **Correo Institucional:** atencionalciudadano@alcaldiaderibas.gob.ve
* **Horario de Atención:** Lunes a Viernes de 8:00 a.m. a 4:00 p.m.
