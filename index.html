const asignaturas = [
  "FUNDAMENTOS DE PROGRAMACIÓN",
  "NIVELACIÓN MATEMÁTICA",
  "FUNDAMENTOS DE ANTROPOLOGÍA",
  "HABILIDADES DE COMUNICACIÓN",
  "INGLÉS ELEMENTAL I",
  "INTRODUCCIÓN AL CLOUD COMPUTING",
  "MATEMÁTICA APLICADA",
  "ÉTICA PARA EL TRABAJO",
  "BASE DE DATOS",
  "INGLÉS ELEMENTAL II",
  "DESARROLLO ORIENTADO A OBJETOS",
  "ESTADÍSTICA DESCRIPTIVA",
  "ÉTICA PROFESIONAL",
  "BASE DE DATOS APLICADA I",
  "INGLÉS INTERMEDIO I",
  "DESARROLLO FULLSTACK I",
  "BASES DE INNOVACIÓN",
  "BASE DE DATOS APLICADA II",
  "INFERENCIA ESTADÍSTICA",
  "ÁLGEBRA LINEAL",
  "DESARROLLO FULLSTACK II",
  "INGENIERÍA DE SOFTWARE",
  "TALLER DE TECNOLOGÍAS DE VANGUARDIA",
  "TALLER DE BASE DE DATOS IA",
  "HERRAMIENTAS DE CÁLCULO DIFERENCIAL",
  "DESARROLLO DE APLICACIONES MÓVILES",
  "DESARROLLO DE SOLUCIONES DE SOFTWARE",
  "GESTIÓN DE DATOS PARA IA",
  "MACHINE LEARNING",
  "TÉCNICAS AVANZADAS DE ML I",
  "ARQUITECTURA DE SISTEMAS IA",
  "PROGRAMACIÓN EN LENGUAJE NATURAL Y REDES NEURONALES GRÁFICAS",
  "COMPUTER VISION CON DEEP LEARNING",
  "TÉCNICAS AVANZADAS DE ML II",
  "ÉTICA Y SOCIAL",
  "TALLER APLICADO DE AI",
  "MLOPS",
  "PRÁCTICA PROFESIONAL"
];

const malla = document.getElementById("malla");
const panel = document.getElementById("checkbox-panel");

function generarCheckbox(asig) {
  const label = document.createElement("label");
  label.className = "checkbox-item";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.dataset.asignatura = asig;
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(" " + asig));
  panel.appendChild(label);
  panel.appendChild(document.createElement("br"));

  checkbox.addEventListener("change", actualizarMalla);
}

function actualizarMalla() {
  const checked = document.querySelectorAll("#checkbox-panel input:checked");
  const nombresTachados = new Set([...checked].map(cb => cb.dataset.asignatura));

  const grafo = asignaturas.map(asig => {
    const label = nombresTachados.has(asig) ? `~~${asig}~~` : asig;
    return `${asig.replaceAll(" ", "_")}[${label}]`;
  }).join("\n");

  malla.textContent = `graph TD\n${grafo}`;
  mermaid.init(undefined, malla);
}

asignaturas.forEach(generarCheckbox);
actualizarMalla();
