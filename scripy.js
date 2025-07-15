// ... (tu mallaData JSON, sin cambios) ...

function generateMermaidGraph(data) {
    let graphDefinition = "graph TD\n"; // Usamos TD para Top-Down

    // Definir estilos para las líneas formativas (opcional, para diferenciar colores)
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

    // Agrupar cursos por semestre
    data.forEach(semestreData => {
        // En Mermaid 10.x, los subgrafos son sensibles a los espacios y las llaves.
        // Aseguramos que haya un espacio después de 'subgraph' y antes de la llave.
        graphDefinition += `    subgraph S${semestreData.semestre} [Semestre ${semestreData.semestre}]\n`; // Agregamos un ID al subgraph
        semestreData.cursos.forEach(curso => {
            // Aseguramos que el texto del nodo sea válido. Los caracteres especiales como `<br/>`
            // están bien si htmlLabels: true.
            // Para asegurar, podemos usar paréntesis `()` si los corchetes `[]` dan problemas.
            graphDefinition += `        ${curso.id}("${curso.id}<br/>${curso.nombre}")\n`; // Usamos paréntesis para los nodos

            // Aplicar estilo según la línea formativa
            if (lineStyles[curso.linea]) {
                // Definir las clases CSS para los nodos en lugar de inyectar estilos inline
                // Esto es más limpio y robusto para Mermaid 10.x
                const className = curso.linea.replace(/ /g, '_').replace(/\(/g, '').replace(/\)/g, ''); // Limpiar el nombre de la línea para usarlo como clase
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
                    // Si quieres representar esto, podríamos crear un nodo fantasma o un comentario.
                    // Por ahora, seguimos omitiéndolo para no sobrecargar visualmente si no hay un nodo claro.
                } else {
                    graphDefinition += `    ${prereq} --> ${curso.id}\n`;
                }
            });
        });
    });

    return graphDefinition;
}

// Inicializa Mermaid y renderiza el diagrama
document.addEventListener('DOMContentLoaded', () => {
    // Genera el grafo de Mermaid a partir de tus datos
    const mermaidGraph = generateMermaidGraph(mallaData);

    // Configura Mermaid antes de renderizar
    mermaid.initialize({
        startOnLoad: false, // Desactivamos startOnLoad porque lo renderizamos manualmente
        theme: 'default',
        flowchart: {
            curve: 'linear',
            htmlLabels: true // Importante para que <br/> funcione en los nodos
        },
        securityLevel: 'loose' // Puede ser necesario para interactividad o ciertos caracteres
    });

    const diagramDiv = document.getElementById('mallaDiagram');
    if (diagramDiv) {
        // Renderiza el diagrama explícitamente y maneja la promesa
        mermaid.render('graphDiv', mermaidGraph)
            .then(({ svg, bindFunctions }) => {
                diagramDiv.innerHTML = svg;
                if (bindFunctions) {
                    bindFunctions(); // Adjunta eventos si los hay
                }
            })
            .catch(error => {
                console.error('Error rendering Mermaid diagram:', error);
                diagramDiv.innerHTML = `<p style="color: red;">Error al renderizar el diagrama de la malla: ${error.message}</p>`;
            });
    } else {
        console.error("Element with ID 'mallaDiagram' not found.");
    }
});
