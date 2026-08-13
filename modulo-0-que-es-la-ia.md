---
layout: page
title: "Módulo 0: Entender la IA en 2026"
nav_order: 3
---

# Módulo 0: Entender la IA en 2026
{: .fs-8 }

Una base conceptual para usar estas herramientas con criterio.
{: .fs-5 .fw-300 }

---

{: .callout .callout--idea }
**Para qué sirve este módulo**
No busca convertirnos en especialistas técnicos. Busca que podamos responder tres preguntas prácticas antes de usar estas herramientas en el aula: *¿Cómo funciona? ¿Por qué se equivoca? ¿Cuándo no debo usarla?*

---

## 1. Qué es la inteligencia artificial (sin tecnicismos)

La IA es un tipo de software capaz de **aprender patrones a partir de datos** y producir respuestas útiles para tareas concretas: resumir, explicar, traducir, generar imágenes, clasificar.

La diferencia con un programa tradicional es importante:

| Aspecto | Programa tradicional | Sistema con IA |
|---------|---------------------|----------------|
| Funcionamiento | Sigue reglas fijas | Aprende patrones de datos |
| Flexibilidad | Baja | Mayor |
| Respuesta ante lo nuevo | Limitada | Puede generalizar |
| Base del sistema | Instrucciones exactas | Datos + entrenamiento |

**Ejemplo cotidiano:** Una calculadora suma porque alguien escribió la regla. Un teclado predictivo sugiere palabras porque aprendió patrones de lenguaje.

La IA que usamos hoy **no entiende el mundo como una persona**. Detecta regularidades estadísticas en enormes volúmenes de texto e imágenes, y genera respuestas que "tienen sentido" porque encajan con esos patrones.

---

## 2. Tres formas de obtener respuestas con IA

En lugar de hablar de "tipos de IA", es más útil pensar en **qué le pedimos que haga** con nuestra información:

<div class="tres-columnas">
  <div class="tres-columnas__col">
    <p><strong>💬 Pregunta y responde</strong></p>
    <p>Le hacemos una pregunta o le damos una tarea. Ella responde usando lo que aprendió durante el entrenamiento (hasta su fecha de corte) o con búsqueda web en tiempo real.</p>
    <p><em>Copilot Chat, ChatGPT, Gemini en modo chat</em></p>
  </div>
  <div class="tres-columnas__col">
    <p><strong>📄 Trabaja con tus documentos</strong></p>
    <p>Le damos nuestros propios textos (PDFs, decretos, apuntes) y ella fundamenta sus respuestas en esas fuentes, priorizándolas sobre su conocimiento general. Más fiable para temas especializados, aunque sigue siendo posible que contenga errores de interpretación. Verifica siempre las citas en el documento original.</p>
    <p><em>NotebookLM, Copilot con archivos adjuntos</em></p>
  </div>
  <div class="tres-columnas__col">
    <p><strong>🔍 Investiga y actúa</strong></p>
    <p>Le damos un objetivo complejo. Ella busca, sintetiza varias fuentes y elabora un informe detallado (Deep Research) o ejecuta pasos de forma autónoma (Agentes).</p>
    <p><em>Deep Research en Gemini/ChatGPT, Agentes de Copilot</em></p>
  </div>
</div>

{: .callout .callout--recuerda }
**Para recordar:** No hay una herramienta "mejor". La elección depende de la tarea. Para contenido curricular verificado, NotebookLM con los decretos cargados es más fiable que un chat general.

---

## 3. IA generativa: qué puede generar

La IA que usamos en el curso pertenece al grupo de la **IA generativa**: crea contenido nuevo combinando patrones aprendidos.

Puede generar:
- **Texto:** redacciones, resúmenes, explicaciones, preguntas, rúbricas
- **Imágenes:** ilustraciones, diagramas, personajes (Canva IA, generadores de imágenes de Copilot Chat, Gemini o Adobe Firefly)
- **Audio:** narraciones realistas, voces sintéticas (ElevenLabs)
- **Vídeo:** vídeos con avatar, clips animados (HeyGen, Canva)
- **Código:** fragmentos de código, fórmulas, scripts

Esto es útil en educación para: adaptar explicaciones, crear materiales multimodales, transformar apuntes en otros formatos.

---

## 4. Qué han cambiado los modelos de razonamiento

En 2025-2026 han aparecido modelos que van más allá de "predecir la siguiente palabra": los llamados **modelos o modos de razonamiento**. A diferencia de los modelos de chat convencionales, estos dedican un tiempo de cómputo interno a "pensar" antes de responder, evaluando distintos caminos de resolución antes de dar una respuesta final.

Sus características:
- Resuelven mejor problemas matemáticos, lógicos y de planificación compleja.
- Son generalmente más lentos, pero más precisos en tareas que requieren varios pasos.
- Señalan explícitamente su proceso de razonamiento, lo que facilita detectar errores.

Para el aula: son útiles para generar rúbricas complejas, resolver errores lógicos en programas o elaborar adaptaciones curriculares detalladas con muchas condiciones. No son necesarios para tareas cotidianas simples.

{: .callout .callout--recuerda }
**Los nombres de los modelos cambian continuamente.** Los principales proveedores (OpenAI, Google, Anthropic, Microsoft) publican nuevas versiones con frecuencia. En lugar de aprender nombres concretos, lo más útil es saber qué tipo de tarea requiere razonamiento extendido y buscar esa opción en la herramienta que estés usando en ese momento.

---

## 5. Agentes y Deep Research

### Agentes de IA

Un agente no solo responde: **ejecuta tareas de forma autónoma**, tomando decisiones en una cadena de pasos. Puede buscar información, generar un documento, verificar datos y presentar un resultado sin intervención constante del usuario.

Para docentes: los agentes permiten automatizar flujos repetitivos (generar informes de evaluación, adaptar materiales en lote, crear plantillas reutilizables).

### Deep Research

Función disponible en Gemini, ChatGPT y Copilot que permite pedir una investigación profunda sobre un tema. El modelo realiza **múltiples búsquedas web**, sintetiza las fuentes y entrega un informe con citas.

{: .callout .callout--verifica }
**Importante: Deep Research no es infalible.** Puede seleccionar fuentes sesgadas o no verificar la calidad de cada una. Siempre revisa las citas originales antes de usar el informe en el aula.

---

## 6. Ventana de contexto: cuánto "recuerda" la IA

Cada conversación con una IA tiene un **límite de memoria activa** (ventana de contexto), medida en "tokens" (fragmentos de texto). Cuando ese límite se supera, la IA empieza a "olvidar" lo que dijiste al principio.

Implicaciones prácticas:
- Para sesiones largas, resume lo anterior o empieza una nueva conversación.
- Para analizar documentos largos (un libro completo, varios decretos), usa herramientas con ventana grande (Kimi, Claude, NotebookLM).
- El sistema no "recuerda" conversaciones anteriores a menos que uses un agente con memoria activada.

---

## 7. Alucinaciones: cuando la IA inventa con confianza

Las **alucinaciones** son respuestas inventadas que presentan con un tono seguro y convincente. Ejemplos:

- Citar un artículo de ley que no existe
- Inventar el nombre de un investigador y su estudio
- Generar una fecha histórica incorrecta pero plausible
- Producir una referencia bibliográfica que nunca existió

{: .callout .callout--alerta }
**La IA no "sabe" que se equivoca.** El error no viene de malicia; viene de que el modelo optimiza para generar texto coherente, no para generar texto verdadero. Por eso cualquier dato factual importante debe verificarse en fuentes primarias.

**Cómo reducir las alucinaciones:**
- Usa NotebookLM con los documentos originales cargados (responde solo desde tus fuentes).
- Pide a la IA que cite el párrafo exacto del documento del que extrae la información.
- Para datos curriculares, contrasta con el DOGV/BOE antes de usar el material.
- Si ves algo sorprendente o muy específico, verifica antes de asumir que es correcto.

---

## 8. Sesgos: lo que la IA aprendió de nosotros

Los modelos de IA aprenden de texto humano y heredan los sesgos de esa información:

- **Sesgos de género:** los personajes en posiciones de autoridad o liderazgo pueden ser mayoritariamente masculinos en las respuestas.
- **Sesgos culturales:** perspectivas y marcos de referencia anglocentristas pueden dominar.
- **Sesgos de capacidad:** las representaciones de personas con discapacidad pueden ser estereotipadas.
- **Sesgos geográficos:** el contexto local (normativa valenciana, realidad de tu centro) puede estar ausente o ser incorrecto.

**Para el aula:** revisa los materiales generados con IA desde la perspectiva de la diversidad. ¿Los ejemplos y personajes son representativos? ¿Se adaptan al contexto cultural de tu alumnado?

---

## 9. Cuándo NO usar la IA

{: .callout .callout--privacidad }
**Esta es una de las competencias más importantes del curso: saber decir que no.**

La IA no es la herramienta adecuada en todas las situaciones. Casos en los que **no deberías usarla**:

| Situación | Por qué no usar IA |
|-----------|-------------------|
| Tomas de decisiones sobre el alumnado (expedientes, diagnósticos, orientación personal) | La IA no conoce al alumno real; sus recomendaciones pueden ser inexactas o sesgadas. La responsabilidad es del docente. |
| Datos personales sin anonimizar | Incumplimiento del RGPD. Nunca introduzcas nombres, notas, situaciones familiares o diagnósticos reales. |
| Cuando el proceso de elaboración es el aprendizaje | Si el valor pedagógico está en el esfuerzo del alumno, delegar en la IA destruye ese valor. |
| Contenido que requiere expertise real y actualización constante | Normativa en vigor, decisiones médicas, asesoramiento legal. La IA puede estar desactualizada o equivocarse. |
| Evaluaciones sumativas sin supervisión | No puedes confirmar que el producto es del alumno si no hay proceso visible. |
| Cuando no puedes verificar el resultado | Si no tienes tiempo ni capacidad de revisar el output, no lo uses: el resultado puede ser incorrecto. |

{: .callout .callout--reflexion }
**Pregunta clave antes de usar IA:** *"¿Esta tarea realmente se beneficia de la IA, o el proceso de elaboración manual tiene un valor formativo que no debo perder?"*

---

## 10. Marco legal: EU AI Act en vigor (2026)

El **Reglamento de IA de la Unión Europea** (EU AI Act, Reglamento 2024/1689) entró en vigor en agosto de 2024. En agosto de 2026 son completamente aplicables las disposiciones sobre **sistemas de IA de alto riesgo** y **modelos de IA de propósito general** (GPAI), que incluyen los grandes modelos de lenguaje.

**Lo que esto significa para docentes:**

- Los sistemas de IA que toman o apoyan decisiones sobre el alumnado (evaluación automatizada, orientación educativa) están clasificados como **alto riesgo** y sujetos a requisitos estrictos de transparencia, supervisión humana y no discriminación.
- Las herramientas de IA deben indicar cuando el contenido es generado por IA (marcado de contenido).
- Los centros educativos tienen responsabilidades en materia de alfabetización en IA del alumnado.

{: .callout .callout--verifica }
**Práctica recomendada:** Cuando uses IA para apoyar una decisión sobre el alumnado (orientación, adaptación, evaluación), documenta que la decisión final ha sido tomada por un profesional humano y que la IA solo fue una herramienta de apoyo. Esto es tanto buena práctica pedagógica como cumplimiento legal.

Más información: [EUR-Lex: Reglamento IA UE](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32024R1689)

---

## 11. Las herramientas que veremos en el curso

| Herramienta | Uso principal | Punto fuerte | Limitación clave |
|-------------|--------------|-------------|-----------------|
| **Copilot Chat** | Chat, documentos, imágenes, web | Integración Microsoft; prudente con @edu.gva.es | Disponibilidad GVA: verifica en tu cuenta |
| **ChatGPT** | Chat, análisis de documentos, imágenes | Versatilidad, modelos de razonamiento | Necesita revisión; puede alucinanr |
| **Gemini** | Chat, integración Google, Deep Research | Ecosistema Google; ventana de contexto larga | Calidad variable según tarea |
| **NotebookLM** | Trabaja con tus documentos | Responde solo desde tus fuentes; muy fiable | Depende de la calidad de los docs subidos |
| **Kimi** | Chat, documentos largos, Slides, Deep Research | Ventana de contexto muy amplia; genera presentaciones | Empresa china; revisar política de privacidad |
| **Canva** | Presentaciones, infografías, vídeos, imagen IA | 100% gratuito para docentes K-12 verificados | Algunas funciones IA en plan de pago |

{: .callout .callout--recuerda }
**Para recordar:** Ninguna de estas herramientas es "la IA". Son herramientas concretas dentro de un ecosistema mucho más amplio que evoluciona continuamente. Desarrollar criterio para elegir es más valioso que dominar una sola herramienta.

---

## 12. Lo que la IA sí hace y lo que no hace

| Qué sí hace | Qué no hace |
|-------------|-------------|
| Resume, transforma y adapta información | No tiene conciencia ni comprensión real |
| Genera borradores útiles en segundos | No garantiza veracidad |
| Detecta patrones en grandes volúmenes | No tiene criterio pedagógico propio |
| Adapta tono, nivel y formato | No sustituye la revisión docente |
| Puede ahorrar tiempo significativo | No reemplaza la relación educativa |
| Responde 24h, nunca se cansa | Puede equivocarse con confianza total |

---

## 13. Marco de referencia UNESCO

La UNESCO ha desarrollado el **Marco de competencias para docentes en materia de IA** (2022), que define cinco dimensiones:

| Dimensión | En el aula |
|-----------|-----------|
| Enfoque centrado en el ser humano | Poner siempre a las personas en el centro |
| Ética de la IA | Uso responsable, seguro y transparente |
| Fundamentos y aplicaciones | Comprender cómo funciona y para qué sirve |
| Pedagogía de la IA | Integrar la IA de manera didácticamente coherente |
| IA para el aprendizaje profesional | Usar la IA para mejorar la formación propia |

Estas competencias se desarrollan en tres niveles: **adquirir, profundizar y crear**.

Enlace: [Marco UNESCO sobre IA para docentes (español)](https://www.unesco.org/es/articles/marco-de-competencias-para-docentes-en-materia-de-ia)

---

## 14. Actividad de inicio

Antes de la primera sesión, haz esta reflexión (no hay entrega):

1. ¿Qué herramientas con IA usas ya, aunque no las llames así? (filtro de correo, teclado predictivo, subtítulos automáticos...)
2. ¿Qué tarea docente ocuparía más de 30 minutos en la que crees que la IA podría ayudar?
3. ¿Qué tarea docente crees que NO debería delegarse a la IA? ¿Por qué?

Lleva estas reflexiones a la primera sesión: servirán como punto de partida del Bloque 1.

---

## Ideas clave del módulo

- La IA aprende patrones a partir de datos, no "entiende" como una persona.
- Hay tres formas de usarla: pregunta y responde / trabaja con tus documentos / investiga y actúa.
- Los modelos de razonamiento, los agentes y Deep Research amplían lo que puede hacer.
- Las alucinaciones son reales: cualquier dato factual importante requiere verificación.
- Los sesgos están presentes: revisa los materiales desde la perspectiva de la diversidad.
- **Saber cuándo NO usar la IA es tan importante como saber usarla.**
- El EU AI Act está en vigor: los sistemas de IA de alto riesgo en educación tienen requisitos legales desde agosto 2026.

---

[Ir al Bloque 1 →](bloque1.md)

