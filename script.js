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

const panel = document.getElementById("checkbox-panel");

function generarCheckboxes() {
  panel.innerHTML = "";
  // Leer los checkboxes marcados si hay alguno
  const checkedAsignaturas = new Set(
    [...document.querySelectorAll('input[type="checkbox"]:checked')].map(cb => cb.dataset.asignatura)
  );

  semestres.forEach((semestre, i) => {
    const contenedor = document.createElement("div");
    contenedor.className = "semestre-box";

    const titulo = document.createElement("div");
    titulo.className = "semestre-title";
    titulo.textContent = semestre.nombre;
    contenedor.appendChild(titulo);

    semestre.asignaturas.forEach(asig => {
      const label = document.createElement("label");
      label.className = "checkbox-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.dataset.asignatura = asig;
      if (checkedAsignaturas.has(asig)) checkbox.checked = true;
      checkbox.addEventListener("change", () => {
        generarCheckboxes(); // Volver a renderizar para actualizar tachado
      });

      label.appendChild(checkbox);

      const span = document.createElement("span");
      span.textContent = asig;
      if (checkbox.checked) {
        span.classList.add("tachado");
      }
      label.appendChild(span);

      contenedor.appendChild(label);
    });

    panel.appendChild(contenedor);
  });
}

document.addEventListener("DOMContentLoaded", generarCheckboxes);
