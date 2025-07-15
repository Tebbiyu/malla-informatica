const semestres = [
  {
    nombre: "Semestre 1",
    asignaturas: [
      "FUNDAMENTOS DE PROGRAMACIÓN",
      "NIVELACIÓN MATEMÁTICA",
      "FUNDAMENTOS DE ANTROPOLOGÍA",
      "HABILIDADES DE COMUNICACIÓN",
      "INGLÉS ELEMENTAL I"
    ]
  },
  {
    nombre: "Semestre 2",
    asignaturas: [
      "INTRODUCCIÓN AL CLOUD COMPUTING",
      "MATEMÁTICA APLICADA",
      "ÉTICA PARA EL TRABAJO",
      "BASE DE DATOS",
      "INGLÉS ELEMENTAL II"
    ]
  },
  {
    nombre: "Semestre 3",
    asignaturas: [
      "DESARROLLO ORIENTADO A OBJETOS",
      "ESTADÍSTICA DESCRIPTIVA",
      "ÉTICA PROFESIONAL",
      "BASE DE DATOS APLICADA I",
      "INGLÉS INTERMEDIO I"
    ]
  },
  {
    nombre: "Semestre 4",
    asignaturas: [
      "DESARROLLO FULLSTACK I",
      "BASES DE INNOVACIÓN",
      "BASE DE DATOS APLICADA II",
      "INFERENCIA ESTADÍSTICA",
      "ÁLGEBRA LINEAL"
    ]
  },
  {
    nombre: "Semestre 5",
    asignaturas: [
      "DESARROLLO FULLSTACK II",
      "INGENIERÍA DE SOFTWARE",
      "TALLER DE TECNOLOGÍAS DE VANGUARDIA",
      "TALLER DE BASE DE DATOS IA",
      "HERRAMIENTAS DE CÁLCULO DIFERENCIAL"
    ]
  },
  {
    nombre: "Semestre 6",
    asignaturas: [
      "DESARROLLO DE APLICACIONES MÓVILES",
      "DESARROLLO DE SOLUCIONES DE SOFTWARE",
      "GESTIÓN DE DATOS PARA IA",
      "MACHINE LEARNING",
      "TÉCNICAS AVANZADAS DE ML I"
    ]
  },
  {
    nombre: "Semestre 7",
    asignaturas: [
      "ARQUITECTURA DE SISTEMAS IA",
      "PROGRAMACIÓN EN LENGUAJE NATURAL Y REDES NEURONALES GRÁFICAS",
      "COMPUTER VISION CON DEEP LEARNING",
      "TÉCNICAS AVANZADAS DE ML II",
      "ÉTICA Y SOCIAL"
    ]
  },
  {
    nombre: "Semestre 8",
    asignaturas: [
      "TALLER APLICADO DE AI",
      "MLOPS",
      "PRÁCTICA PROFESIONAL"
    ]
  }
];

const malla = document.getElementById("malla");
const panel = document.getElementById("checkbox-panel");

function generarCheckboxes() {
  semestres.forEach((semestre, i) => {
    const contenedor = document.createElement("div");
    contenedor.className = "semestre-box";

    const titulo = document.createElement("h2");
    titulo.textContent = semestre.nombre;
    contenedor.appendChild(titulo);

    semestre.asignaturas.forEach(asig => {
      const label = document.createElement("label");
      label.className = "checkbox-item";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.dataset.asignatura = asig;
      checkbox.addEventListener("change", actualizarMalla);

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(" " + asig));
      contenedor.appendChild(label);
      contenedor.appendChild(document.createElement("br"));
    });

    panel.appendChild(contenedor);
  });
}

function actualizarMalla() {
  const checked = document.querySelectorAll("input[type='checkbox']:checked");
  const tachadas = new Set([...checked].map(cb => cb.dataset.asignatura));

  const conexiones = [];
  let nodos = [];

  semestres.forEach((semestre, idx) => {
    semestre.asignaturas.forEach((asig, j) => {
      const nombreNodo = `${idx}_${j}`;
      const label = tachadas.has(asig) ? `~~${asig}~~` : asig;
      nodos.push(`${nombreNodo}["${label}"]`);

      // conectar asignaturas dentro del mismo semestre
      if (j > 0) {
        const prev = `${idx}_${j - 1}`;
        conexiones.push(`${prev} --> ${nombreNodo}`);
      }

      // conectar al primero del siguiente semestre
      if (j === 0 && semestres[idx + 1]) {
        conexiones.push(`${nombreNodo} --> ${idx + 1}_0`);
      }
    });
  });

  const grafo = `graph TD\n${nodos.join("\n")}\n${conexiones.join("\n")}`;
  malla.textContent = grafo;
  mermaid.init(undefined, malla);
}

// Inicializar
generarCheckboxes();
actualizarMalla();
