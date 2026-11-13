import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const dataDir = path.join(rootDir, "src", "data");
const backupDir = path.join(rootDir, "backups");

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

console.log("Iniciando exportación de datos municipales de Ribas Digital...");

const files = fs.readdirSync(dataDir).filter(f => f.endsWith(".ts"));
const exportData = {
  municipio: "José Félix Ribas",
  estado: "Aragua",
  pais: "Venezuela",
  fechaExportacion: new Date().toISOString(),
  archivosProcesados: files,
};

const outputPath = path.join(backupDir, "municipal-data-export.json");
fs.writeFileSync(outputPath, JSON.stringify(exportData, null, 2), "utf-8");

console.log(`¡Exportación de respaldo generada exitosamente en: ${outputPath}`);
