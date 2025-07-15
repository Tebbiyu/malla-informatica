// Datos de la malla curricular, directamente en el script
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

// Función para generar la sintaxis de Mermaid
function generateMermaidGraph(data) {
    let graphDefinition = "graph TD\n"; // Dirección Top-Down

    data.forEach(semestreData => {
        // Definición de subgrafos: subgraph ID [Texto del Subgraph]
        // El ID (S${semestreData.semestre}) debe ser una sola palabra sin espacios.
        graphDefinition += `    subgraph S${semestreData.semestre} [Semestre ${semestreData.semestre}]\n`;
        semestreData.cursos.forEach(curso => {
            // Nodos: ID("Texto<br/>del<br/>Nodo") para multilinea con HTML
            graphDefinition += `        ${curso.id}("${curso.id}<br/>${curso.nombre}")\n`;

            // Asignar clases CSS basadas en la línea formativa
            if (curso.linea) {
                // Limpia el nombre de la línea para usarlo como clase CSS válida
                const className = curso.linea.replace(/ /g, '_').replace(/[^a-zA-Z0-9_]/g, '');
                graphDefinition += `        class ${curso.id} ${className}\n`;
            }
        });
        graphDefinition += `    end\n`;
    });

    // Añadir las dependencias (prerrequisitos)
    data.forEach(semestreData => {
        semestreData.cursos.forEach(curso => {
            curso.prerrequisitos.forEach(prereq => {
                if (prereq.includes("Semestre Aprobado")) {
                    // Estos requisitos generales no se dibujan como flechas directas entre cursos,
                    // sino que son más bien condiciones para el avance general de la malla.
                    // Si quisieras representarlos, podrías crear un nodo abstracto como "Semestres Anteriores Completados".
                } else {
                    graphDefinition += `    ${prereq} --> ${curso.id}\n`;
                }
            });
        });
    });

    return graphDefinition;
}

// Lógica de inicialización y renderizado de Mermaid al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    const mermaidGraph = generateMermaidGraph(mallaData); // Genera el grafo

    // Configura Mermaid
    mermaid.initialize({
        startOnLoad: false, // Desactivamos la carga automática ya que lo renderizamos manualmente
        theme: 'default',   // Puedes cambiar el tema ('forest', 'dark', 'neutral')
        flowchart: {
            curve: 'linear',  // Tipo de curva para las flechas ('linear', 'basis', 'monotoneX', 'step')
            htmlLabels: true  // Permite HTML dentro de las etiquetas de los nodos (para <br/>)
        },
        securityLevel: 'loose' // Permite más flexibilidad, a veces necesario para HTML en labels
    });

    // Obtiene el elemento donde se renderizará el diagrama
    const diagramDiv = document.getElementById('mallaDiagram');
    if (diagramDiv) {
        // Renderiza el diagrama y maneja la promesa (éxito/error)
        mermaid.render('graphDiv', mermaidGraph)
            .then(({ svg, bindFunctions }) => {
                diagramDiv.innerHTML = svg; // Inserta el SVG generado por Mermaid
                if (bindFunctions) {
                    bindFunctions(); // Adjunta cualquier evento interactivo que Mermaid haya creado
                }
            })
            .catch(error => {
                console.error('Error al renderizar el diagrama de Mermaid:', error);
                // Muestra un mensaje de error legible en la página si algo falla
                diagramDiv.innerHTML = `<div style="color: red; font-weight: bold;">
                                            Error al cargar la malla. Por favor, revisa la consola del navegador para más detalles.
                                            <br/>Mensaje: ${error.message}
                                        </div>`;
            });
    } else {
        console.error("Elemento con ID 'mallaDiagram' no encontrado en el DOM.");
    }
});
