// Tus datos de la malla (copia y pega el JSON que generamos antes aquí, sin cambios)
const mallaData = [
  {
    "semestre": 1,
    "cursos": [
      { "id": "INF101", "nombre": "Fundamentos de Programación", "linea": "Desarrollo de Soluciones de Software", "prerrequisitos": [] },
      { "id": "CLC101", "nombre": "Introducción al Cloud Computing", "linea": "Desarrollo de Soluciones de Software", "prerrequisitos": [] },
      { "id": "BDA101", "nombre": "Base de Datos Aplicada I", "linea": "Base de Datos", "prerrequisitos": [] },
      { "id": "REQ101", "nombre": "Bases de Innovación", "linea": "Requisitos", "prerrequisitos": [] },
      { "id": "MAT101", "nombre": "Nivelación Matemática", "linea": "Matemática", "prerrequisitos": [] },
      { "id": "COM101", "nombre": "Inglés Elemental I", "linea": "Habilidades de Comunicación", "prerrequisitos": [] },
      { "id": "ANT101", "nombre": "Fundamentos de Antropología", "linea": "Formación Sello", "prerrequisitos": [] }
    ]
  },
  {
    "semestre": 2,
    "cursos": [
      { "id": "INF102", "nombre": "Desarrollo Orientado a Objetos", "linea": "Desarrollo de Soluciones de Software", "prerrequisitos": ["INF101"] },
      { "id": "BDA102", "nombre": "Base de Datos Aplicada II", "linea": "Base de Datos", "prerrequisitos": ["BDA101"] },
      { "id": "REQ102", "nombre": "Ingeniería de Requisitos", "linea": "Requisitos", "prerrequisitos": ["REQ101"] },
      { "id": "MAT102", "nombre": "Matemática Aplicada", "linea": "Matemática", "prerrequisitos": ["MAT101"] },
      { "id": "COM102", "nombre": "Inglés Elemental II", "linea": "Habilidades de Comunicación", "prerrequisitos": ["COM101"] }
    ]
  },
  {
    "semestre": 3,
    "cursos": [
      { "id": "INF201", "nombre": "Desarrollo Fullstack I", "linea": "Desarrollo de Soluciones de Software", "prerrequisitos": ["INF102"] },
      { "id": "TDB201", "nombre": "Taller de Base de Datos", "linea": "Base de Datos", "prerrequisitos": ["BDA102"] },
      { "id": "REQ201", "nombre": "Ingeniería de Software", "linea": "Requisitos", "prerrequisitos": ["REQ102"] },
      { "id": "EST201", "nombre": "Estadística Descriptiva", "linea": "Matemática", "prerrequisitos": ["MAT102"] },
      { "id": "COM201", "nombre": "Inglés Intermedio", "linea": "Habilidades de Comunicación", "prerrequisitos": ["COM102"] },
      { "id": "ETI201", "nombre": "Ética para el Trabajo", "linea": "Formación Sello", "prerrequisitos": ["ANT101"] }
    ]
  },
  {
    "semestre": 4,
    "cursos": [
      { "id": "INF202", "nombre": "Desarrollo Fullstack II", "linea": "Desarrollo de Soluciones de Software", "prerrequisitos": ["INF201"] },
      { "id": "APR201", "nombre": "Desarrollo de Aplicaciones Móviles", "linea": "Desarrollo de Soluciones de Software", "prerrequisitos": ["TDB201"] },
      { "id": "EST202", "nombre": "Inferencia Estadística", "linea": "Matemática", "prerrequisitos": ["EST201"] },
      { "id": "CAL201", "nombre": "Herramientas de Cálculo Diferencial", "linea": "Matemática", "prerrequisitos": ["EST202"] }
    ]
  },
  {
    "semestre": 5,
    "cursos": [
      { "id": "IA101", "nombre": "Gestión de Datos para la IA", "linea": "Especialización IA", "prerrequisitos": ["INF202", "APR201"] },
      { "id": "IA102", "nombre": "IA Ética y Social", "linea": "Especialización IA", "prerrequisitos": ["ETI201"] },
      { "id": "ALG101", "nombre": "Álgebra Lineal", "linea": "Matemática", "prerrequisitos": ["CAL201"] }
    ]
  },
  {
    "semestre": 6,
    "cursos": [
      { "id": "IA201", "nombre": "Arquitectura de Sistemas IA", "linea": "Especialización IA", "prerrequisitos": ["IA101"] },
      { "id": "ML201", "nombre": "Machine Learning I", "linea": "Especialización IA", "prerrequisitos": ["IA102", "ALG101"] },
      { "id": "TML201", "nombre": "Técnicas Avanzadas de Machine Learning I", "linea": "Especialización IA", "prerrequisitos": ["ML201"] },
      { "id": "MLOPS", "nombre": "MLOps", "linea": "Especialización IA", "prerrequisitos": ["TML201"] }
    ]
  },
  {
    "semestre": 7,
    "cursos": [
      { "id": "PGLN301", "nombre": "Programación en Lenguaje Natural y Redes Neuronales Gráficas", "linea": "Especialización IA", "prerrequisitos": ["IA201"] },
      { "id": "ML301", "nombre": "Machine Learning II", "linea": "Especialización IA", "prerrequisitos": ["TML201"] },
      { "id": "CV301", "nombre": "Computer Vision con Deep Learning", "linea": "Especialización IA", "prerrequisitos": ["MLOPS"] },
      { "id": "ETIPROF", "nombre": "Ética Profesional", "linea": "Formación Sello", "prerrequisitos": ["ETI201"] }
    ]
  },
  {
    "semestre": 8,
    "cursos": [
      { "id": "TAI401", "nombre": "Taller Aplicado de AI", "linea": "Especialización IA", "prerrequisitos": ["PGLN301", "ML301", "CV301"] },
      { "id": "TTV401", "nombre": "Taller de Tecnologías de Vanguardia", "linea": "Especialización IA", "prerrequisitos": ["ML301"] },
      { "id": "PRACPROF", "nombre": "Práctica Profesional", "linea": "Especialización IA", "prerrequisitos": ["1 a 7 Semestre Aprobado"] },
      { "id": "FOROPT", "nombre": "Formación Optativa", "linea": "Formación Optativa", "prerrequisitos": ["1 a 7 Semestre Aprobado"] }
    ]
  }
];

function generateMermaidGraph(data) {
    let graphDefinition = "graph TD\n";

    const lineStyles = {
        "Desarrollo de Soluciones de Software": "fill:#ADD8E6,stroke:#3498db,stroke-width:2px",
        "Base de Datos": "fill:#90EE90,stroke:#2ecc71,stroke-width:2px",
        "Requisitos": "fill:#FFDAB9,stroke:#e67e22,stroke-width:2px",
        "Matemática": "fill:#DDA0DD,stroke:#9b59b6,stroke-width:2px",
        "Habilidades de Comunicación": "fill:#FFB6C1,stroke:#e74c3c,stroke-width:2px",
        "Formación Sello": "fill:#FFFF00,stroke:#f1c40f,stroke-width:2px",
        "Especialización IA": "fill:#C0C0C0,stroke:#7f8c8d,stroke-width:2px",
        "Formación Optativa": "fill:#E6E6FA,stroke:#8e44ad,stroke-width:2px"
    };

    data.forEach(semestreData => {
        // Corrección en la definición del subgraph: el ID del subgraph debe ser simple.
        // Y el texto descriptivo del subgraph debe ir entre corchetes o comillas.
        graphDefinition += `    subgraph S${semestreData.semestre} [Semestre ${semestreData.semestre}]\n`;
        semestreData.cursos.forEach(curso => {
            // Se recomienda usar paréntesis para el texto del nodo si contiene HTML como <br/>.
            // El ID del nodo (${curso.id}) debe ser simple (sin espacios ni caracteres especiales).
            graphDefinition += `        ${curso.id}("${curso.id}<br/>${curso.nombre}")\n`;

            if (lineStyles[curso.linea]) {
                // Generar un nombre de clase válido para CSS
                const className = curso.linea.replace(/ /g, '_').replace(/[^a-zA-Z0-9_]/g, '');
                graphDefinition += `        class ${curso.id} ${className}\n`;
            }
        });
        graphDefinition += `    end\n`;
    });

    data.forEach(semestreData => {
        semestreData.cursos.forEach(curso => {
            curso.prerrequisitos.forEach(prereq => {
                if (prereq.includes("Semestre Aprobado")) {
                    // Podemos manejar este caso creando un nodo "Semestres Anteriores" si queremos
                    // o simplemente omitiéndolo, ya que no es una dependencia directa de curso a curso.
                    // Por ahora, lo omitimos para evitar un grafo muy denso.
                } else {
                    // Asegurarse de que el ID del prerrequisito exista como un nodo definido.
                    // Si un prerrequisito no está en nuestra mallaData, esto podría causar problemas.
                    graphDefinition += `    ${prereq} --> ${curso.id}\n`;
                }
            });
        });
    });

    return graphDefinition;
}

document.addEventListener('DOMContentLoaded', () => {
    const mermaidGraph = generateMermaidGraph(mallaData);

    mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        flowchart: {
            curve: 'linear',
            htmlLabels: true
        },
        securityLevel: 'loose' // Necesario para permitir HTML en labels y quizás interactividad futura
    });

    const diagramDiv = document.getElementById('mallaDiagram');
    if (diagramDiv) {
        // Utiliza el método render que devuelve una Promesa
        mermaid.render('graphDiv', mermaidGraph)
            .then(({ svg, bindFunctions }) => {
                diagramDiv.innerHTML = svg; // Inserta el SVG generado
                if (bindFunctions) {
                    bindFunctions(); // Adjunta cualquier evento interactivo si Mermaid los crea
                }
            })
            .catch(error => {
                console.error('Error rendering Mermaid diagram:', error);
                // Muestra un mensaje de error más útil en la página
                diagramDiv.innerHTML = `<div style="color: red; font-weight: bold;">Error al cargar la malla. Por favor, revisa la consola para más detalles.<br/>Mensaje: ${error.message}</div>`;
            });
    } else {
        console.error("Elemento con ID 'mallaDiagram' no encontrado en el DOM.");
    }
});
