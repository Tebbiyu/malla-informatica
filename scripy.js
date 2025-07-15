// Importa la librería Mermaid (ya está cargada globalmente por el script en index.html,
// pero si lo quieres modularizar más estrictamente, podrías importarlo aquí si Mermaid
// ofrece una exportación directa para este tipo de uso, aunque la forma de CDN es común)
// Para este setup, no es estrictamente necesario un 'import mermaid from ...' aquí
// porque ya se carga como script type="module" en index.html.
// Asegúrate de que 'mermaid' esté disponible globalmente o pásalo como argumento si usas funciones.

// Tus datos de la malla (copia y pega el JSON que generamos antes aquí)
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
    let graphDefinition = "graph TD\n"; // Usamos TD para Top-Down (de arriba hacia abajo) para mejor visualización de la malla

    // Definir estilos para las líneas formativas (opcional, para diferenciar colores)
    const lineStyles = {
        "Desarrollo de Soluciones de Software": "fill:#ADD8E6,stroke:#3498db,stroke-width:2px", // Azul claro
        "Base de Datos": "fill:#90EE90,stroke:#2ecc71,stroke-width:2px", // Verde claro
        "Requisitos": "fill:#FFDAB9,stroke:#e67e22,stroke-width:2px", // Naranja claro
        "Matemática": "fill:#DDA0DD,stroke:#9b59b6,stroke-width:2px", // Morado claro
        "Habilidades de Comunicación": "fill:#FFB6C1,stroke:#e74c3c,stroke-width:2px", // Rojo claro
        "Formación Sello": "fill:#FFFF00,stroke:#f1c40f,stroke-width:2px", // Amarillo
        "Especialización IA": "fill:#C0C0C0,stroke:#7f8c8d,stroke-width:2px", // Gris (para especialización)
        "Formación Optativa": "fill:#E6E6FA,stroke:#8e44ad,stroke-width:2px" // Lavanda
    };

    // Agrupar cursos por semestre
    data.forEach(semestreData => {
        graphDefinition += `    subgraph Semestre ${semestreData.semestre}\n`;
        semestreData.cursos.forEach(curso => {
            graphDefinition += `        ${curso.id}["${curso.id}<br/>${curso.nombre}"]\n`; // Usamos corchetes para nodos rectangulares

            // Aplicar estilo según la línea formativa
            if (lineStyles[curso.linea]) {
                graphDefinition += `        style ${curso.id} ${lineStyles[curso.linea]}\n`;
            }
        });
        graphDefinition += `    end\n`;
    });

    // Añadir las dependencias (prerrequisitos)
    data.forEach(semestreData => {
        semestreData.cursos.forEach(curso => {
            curso.prerrequisitos.forEach(prereq => {
                // Manejo especial para el prerrequisito general de semestre aprobado
                if (prereq.includes("Semestre Aprobado")) {
                    // Puedes decidir cómo representar esto.
                    // Para una malla simple, podemos omitir flechas directas desde "semestre aprobado"
                    // ya que es un concepto general. O podrías crear un nodo abstracto.
                    // Por ahora, lo omitimos para no sobrecargar el gráfico con conexiones redundantes.
                } else {
                    graphDefinition += `    ${prereq} --> ${curso.id}\n`;
                }
            });
        });
    });

    return graphDefinition;
}

// Renderiza el diagrama cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Genera el grafo de Mermaid a partir de tus datos
    const mermaidGraph = generateMermaidGraph(mallaData);

    // Inicializa Mermaid y renderiza el diagrama
    // Asegúrate de que mermaid esté disponible. Se carga como módulo en index.html.
    // Si necesitas control de inicialización, puedes usar mermaid.initialize()
    // Si ya usas `startOnLoad:true` en el script de Mermaid en index.html,
    // simplemente asigna el innerHTML y Mermaid lo detectará.
    // Para un control más explícito:
    mermaid.initialize({
        startOnLoad: false, // Desactivamos startOnLoad para renderizarlo manualmente
        theme: 'default', // Puedes probar 'forest', 'dark', 'neutral'
        flowchart: {
            curve: 'linear', // Puedes probar 'basis', 'monotoneX', 'step'
            htmlLabels: true // Permite HTML en las etiquetas de los nodos
        }
    });

    const diagramDiv = document.getElementById('mallaDiagram');
    if (diagramDiv) {
        diagramDiv.innerHTML = mermaidGraph;

        // Renderiza el diagrama explícitamente.
        // Esto es crucial si startOnLoad: false.
        mermaid.render('graphDiv', mermaidGraph).then(({ svg, bindFunctions }) => {
            diagramDiv.innerHTML = svg;
            if (bindFunctions) {
                bindFunctions();
            }
        }).catch(error => {
            console.error('Error rendering Mermaid diagram:', error);
            diagramDiv.innerHTML = `<p style="color: red;">Error al renderizar el diagrama de la malla: ${error.message}</p>`;
        });
    } else {
        console.error("Element with ID 'mallaDiagram' not found.");
    }
});

// Función de ejemplo para manejar clics en los nodos (opcional)
// mermaid.initialize({
//     ...
//     securityLevel: 'loose', // Necesario para 'click' event
// });
// window.clickNode = (nodeId) => {
//     alert('Hiciste clic en: ' + nodeId);
//     // Aquí puedes añadir lógica para, por ejemplo, marcar un curso como aprobado
// };
