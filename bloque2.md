---
layout: page
title: "Bloque 2: Prompting Avanzado y Gestión Documental"
nav_order: 2
---

# Bloque 2 · Prompting Avanzado y Gestión Documental
{: .fs-8 }

Domina la fórmula del "Prompt Pedagógico" (Rol + Contexto + Tarea) y aprende a "entrenar" a la IA con el currículo oficial usando NotebookLM.
{: .fs-5 .fw-300 }

---

## Objetivos del bloque

Al finalizar este bloque serás capaz de:

1. **Evolucionar en el diseño de prompts**, desde instrucciones simples hasta guías avanzadas con la estructura Rol + Contexto + Tarea + Formato + Restricciones, posicionando a la IA como experta pedagógica alineada con tus necesidades educativas.
2. Aplicar técnicas de **cadena de pensamiento** (*chain-of-thought*) y **few-shot prompting** en contextos pedagógicos.
3. Utilizar **NotebookLM** para cargar documentos curriculares oficiales y generar respuestas fundamentadas en el currículo.
4. Comparar la calidad de las respuestas curriculares entre **Copilot**, **Gemini**, **NotebookLM**, **Kimi** y **Grok**.
5. Crear una **biblioteca personal de prompts** reutilizables para tu área y etapa educativa.

> **⚠️ Seguridad GVA:** En este bloque trabajaremos con documentos curriculares **públicos** (DOGV, BOE). Aun así, recuerda: si subes documentos internos del centro (PEC, PGA, actas) a NotebookLM u otras herramientas externas, **anonimiza previamente** cualquier dato personal.

---

## 2.1 · El "Prompt Pedagógico": anatomía en profundidad

En el Bloque 0 (Inicio) presentamos la fórmula básica. Ahora la profundizamos con **subcampos** que mejoran drásticamente la calidad de las respuestas:

```
ROL + CONTEXTO + TAREA + FORMATO + RESTRICCIONES
```

| Campo | Descripción | Ejemplo |
|:------|:------------|:--------|
| **Rol** | Perfil experto que asume la IA | *"Actúa como un orientador educativo especializado en altas capacidades."* |
| **Contexto** | Etapa, área, normativa, grupo, centro | *"Centro de Primaria, Valencia, currículo LOMLOE (Decreto 106/2022 de la CV). Grupo de 5.º, 24 alumnos, 2 con AACC."* |
| **Tarea** | Qué debe producir, con instrucciones claras | *"Diseña un plan de enriquecimiento curricular para el área de Matemáticas del 2.º trimestre."* |
| **Formato** | Cómo quieres la salida | *"Tabla con columnas [Semana · Contenido · Actividad de ampliación · Recurso]."* |
| **Restricciones** | Lo que NO debe hacer o límites | *"No propongas actividades que requieran recursos tecnológicos extra. Máximo 8 semanas."* |

### Esquema visual

```
┌─────────────────────────────────────────────────────┐
│  🎭 ROL          ¿Quién es la IA?                   │
├─────────────────────────────────────────────────────┤
│  🏫 CONTEXTO     ¿Dónde, cuándo, con quién?         │
├─────────────────────────────────────────────────────┤
│  📋 TAREA        ¿Qué tiene que hacer exactamente?   │
├─────────────────────────────────────────────────────┤
│  📐 FORMATO      ¿Cómo quiero la respuesta?          │
├─────────────────────────────────────────────────────┤
│  🚫 RESTRICCIONES ¿Qué límites hay?                  │
└─────────────────────────────────────────────────────┘
```

> **💡 Ejemplo Primaria:** Cuantos más campos rellenes, mejor será la respuesta. Para tareas sencillas (un correo, un listado), basta con Rol + Contexto + Tarea. Para situaciones de aprendizaje completas, usa los cinco campos.

---

## 2.2 · Técnicas avanzadas de prompting

### 2.2.1 · Few-shot prompting (aprendizaje por ejemplos)

En lugar de dar solo la instrucción, le proporcionas **uno o dos ejemplos** del resultado esperado para que la IA entienda el patrón:

### 🏆 Prompt de Oro: Generar criterios de evaluación con few-shot

```text
Actúa como un especialista en evaluación educativa alineada con la LOMLOE.

Contexto: Necesito criterios de evaluación para 3.º de ESO, área de Geografía 
e Historia, Comunitat Valenciana. Sigo el Decreto 107/2022.

Te doy un ejemplo del formato que quiero:

EJEMPLO:
- Saberes básicos: "Los climas del mundo: elementos y factores."
- Criterio de evaluación: "Analizar y comparar los principales tipos de clima 
  relacionándolos con su distribución geográfica, utilizando mapas temáticos y 
  gráficos climáticos."
- Indicador de logro: "El alumno/a identifica al menos 4 tipos de clima y los 
  sitúa correctamente en un mapa mudo."

Tarea: Genera 5 criterios de evaluación siguiendo exactamente ese formato para 
los saberes básicos del Bloque 2: "Las sociedades medievales".

Restricciones: No inventes saberes básicos que no estén en el currículo. Si no 
estás seguro, indícalo.
```

### 2.2.2 · Chain-of-thought (cadena de razonamiento)

Pides a la IA que **razone paso a paso** antes de dar la respuesta final. Esto es especialmente útil para diseñar situaciones de aprendizaje complejas:

### 🏆 Prompt de Oro: Situación de aprendizaje paso a paso

```text
Actúa como un docente experto en diseño de Situaciones de Aprendizaje (SA) 
según la LOMLOE.

Contexto: 2.º de Educación Primaria, área de Conocimiento del Medio Natural, 
Social y Cultural. Centro público de Castellón, Comunitat Valenciana. 
22 alumnos, 1 con TEA y 2 de incorporación tardía.

Tarea: Diseña una Situación de Aprendizaje titulada "Los seres vivos de 
nuestro patio" siguiendo estos pasos (piensa en voz alta antes de dar cada 
respuesta):

Paso 1: Identifica las competencias específicas del área que se trabajan.
Paso 2: Selecciona los saberes básicos relacionados.
Paso 3: Define los criterios de evaluación.
Paso 4: Describe la secuencia de actividades (mínimo 4 sesiones).
Paso 5: Indica las adaptaciones DUA para el alumno con TEA y los alumnos 
de incorporación tardía.
Paso 6: Propón un instrumento de evaluación (rúbrica o lista de cotejo).

Formato: Desarrolla cada paso en un apartado numerado con encabezado claro.
```

> **🚀 Reto Secundaria/FP:** Adapta el prompt anterior para un módulo de **Formación y Orientación Laboral (FOL)** en un CFGM. Cambia la SA a *"Mi primer contrato de trabajo"* y añade como restricción: *"Las actividades deben incluir análisis de un contrato real (anonimizado)"*.

### 2.2.3 · Prompt de refinamiento iterativo

No siempre el primer resultado es perfecto. Estas **instrucciones de seguimiento** te permiten mejorar la respuesta sin reescribir todo desde cero:

| Necesidad | Prompt de seguimiento |
|:----------|:----------------------|
| Más detalle | *"Amplía la actividad 3 con instrucciones paso a paso para el profesor/a."* |
| Simplificar | *"Reescribe la SA para que un docente novel la pueda aplicar sin experiencia previa en ABP."* |
| Otra etapa | *"Ahora adapta toda la SA para 4.º de ESO, manteniendo el mismo enfoque."* |
| Formato diferente | *"Convierte la secuencia de actividades en una tabla con columnas [Sesión · Actividad · Agrupamiento · Material · Evaluación]."* |
| Normativa específica | *"Revisa la SA y comprueba que los criterios de evaluación coinciden literalmente con los del Decreto 106/2022 del DOGV."* |
| Inclusión | *"Añade una adaptación específica para un alumno/a con discapacidad visual."* |

---

## 2.3 · NotebookLM: "entrena" a la IA con el currículo oficial

### ¿Qué es NotebookLM?

**NotebookLM** (de Google) es una herramienta de IA que permite **cargar documentos propios** como fuente de conocimiento. A diferencia de Copilot o Gemini genéricos, NotebookLM **solo responde basándose en los documentos que tú le proporcionas**, lo que reduce drásticamente las alucinaciones.

### ¿Por qué es clave para docentes?

| Problema habitual con IA genérica | Solución con NotebookLM |
|:----------------------------------|:-----------------------|
| La IA inventa criterios de evaluación que no existen en el currículo. | NotebookLM cita textualmente del PDF del currículo que tú has subido. |
| La IA confunde normativas de diferentes CCAA. | Solo dispone de los documentos que tú seleccionas (ej: currículo de la CV). |
| No puedes verificar fácilmente la fuente. | Cada respuesta incluye **referencias clicables** al párrafo exacto del documento fuente. |

### Paso a paso: configurar NotebookLM con el currículo de la CV

1. Accede a [notebooklm.google.com](https://notebooklm.google.com) con una cuenta de Google.
2. Crea un **nuevo notebook** y ponle un nombre descriptivo: *"Currículo LOMLOE – Primaria CV"*.
3. Sube las **fuentes**. Puedes añadir hasta 50 documentos. Fuentes recomendadas:

| Documento | Dónde encontrarlo |
|:----------|:-------------------|
| Decreto 106/2022 (currículo Primaria CV) | [DOGV](https://dogv.gva.es/) |
| Decreto 107/2022 (currículo ESO-Bachillerato CV) | [DOGV](https://dogv.gva.es/) |
| Decreto 108/2022 (currículo FP CV) | [DOGV](https://dogv.gva.es/) |
| LOMLOE (Ley Orgánica 3/2020) | [BOE](https://www.boe.es/) |
| Marco DUA (guía CAST) | [cast.org](https://www.cast.org/) |

4. Espera a que NotebookLM **procese** los documentos (puede tardar 1-2 minutos).
5. Ahora ya puedes hacer preguntas y la IA responderá **exclusivamente** a partir de tus fuentes.

> **⚠️ Seguridad GVA:** NotebookLM es un producto de Google y **no forma parte del entorno corporativo de la GVA**. Úsalo **solo con documentos públicos** (legislación, currículos publicados en el DOGV). **Nunca subas documentos internos del centro con datos del alumnado.**

### 🏆 Prompt de Oro: Consulta curricular en NotebookLM

Una vez cargados los documentos, prueba esta consulta en el chat de NotebookLM:

```text
A partir del Decreto 106/2022 del currículo de Educación Primaria de la 
Comunitat Valenciana, necesito lo siguiente para el área de "Conocimiento 
del Medio Natural, Social y Cultural" en 4.º de Primaria:

1. Lista de competencias específicas del área.
2. Saberes básicos del Bloque A ("Cultura científica").
3. Criterios de evaluación vinculados a esos saberes.

Formato: tabla con columnas [Competencia específica · Saberes básicos · 
Criterio de evaluación]. Incluye la referencia exacta (artículo/anexo) 
del decreto.
```

### Funcionalidad estrella: los "Audio Overviews"

NotebookLM puede generar un **resumen en formato podcast** de tus documentos con dos voces sintéticas que dialogan sobre el contenido. Esto es útil para:

- **Repasar legislación** mientras conduces al centro.
- **Crear material auditivo** para tu alumnado (pídelo en lenguaje adaptado a su nivel).
- **Compartir** una síntesis con tu departamento para ahorrar tiempo de lectura.

```text
Genera un Audio Overview de los cambios principales entre el currículo 
anterior (LOMCE) y el actual (LOMLOE) para el área de Matemáticas de 
Primaria en la Comunitat Valenciana. Usa un tono divulgativo y 
accesible.
```

> **💡 Ejemplo Primaria:** Pide un Audio Overview del Bloque de Saberes Básicos de tu área y nivel. Escúchalo y valora si la síntesis es fiel al documento original.

---

## 2.4 · Copilot vs. NotebookLM: ¿cuál uso para qué?

| Escenario | Copilot (GVA) | NotebookLM | Recomendación |
|:----------|:-------------:|:----------:|:--------------|
| Redactar una programación didáctica basada en el currículo | ⭐⭐⭐ (puede alucinar datos) | ⭐⭐⭐⭐⭐ (cita del documento) | **NotebookLM** con el decreto subido |
| Escribir un correo formal a las familias | ⭐⭐⭐⭐⭐ | ⭐⭐ (no es su propósito) | **Copilot** |
| Verificar si un criterio de evaluación existe en el currículo | ⭐⭐ (riesgo de invención) | ⭐⭐⭐⭐⭐ (referencia exacta) | **NotebookLM** |
| Generar una actividad creativa a partir de una idea | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | **Copilot** (o Gemini) |
| Resumir un documento extenso (PEC, memoria anual) | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ (con fuentes) | **NotebookLM** (con documentos anonimizados) |
| Crear un podcast/resumen de audio de normativa | ❌ | ⭐⭐⭐⭐⭐ (Audio Overview) | **NotebookLM** |

---

## 2.5 · Comparativa ampliada: respuestas curriculares en cinco herramientas

Para evaluar la fiabilidad curricular de cada herramienta, hemos probado el mismo prompt ("Lista las competencias específicas de Matemáticas de 4.º de Primaria según la LOMLOE en la Comunitat Valenciana"):

| Criterio | Copilot | Gemini | NotebookLM | Kimi | Grok |
|:---------|:-------:|:------:|:----------:|:----:|:----:|
| **Precisión curricular** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Cita de fuentes** | No | Parcial | ✅ Exacta | No | No |
| **Diferencia CCAA correctamente** | A veces | Generalmente | ✅ (depende de lo cargado) | Rara vez | Rara vez |
| **Alucinaciones detectadas** | Medio | Bajo | Muy bajo | Medio-alto | Alto |
| **Idioma valenciano** | Aceptable | Bueno | Depende de fuentes | Limitado | Limitado |

> **🚀 Reto Secundaria/FP:** Haz la prueba tú mismo/a. Lanza el mismo prompt curricular en las tres herramientas a las que tengas acceso y comprueba cuál es más precisa para tu área. Documenta los errores que encuentres.

---

## 2.6 · Construye tu biblioteca de "Prompts de Oro"

Un docente eficaz con IA no improvisa un prompt cada vez: **reutiliza y mejora** una colección propia. Te proponemos esta estructura para organizar tu biblioteca:

### Plantilla de ficha de prompt

```text
═══════════════════════════════════════════════
📌 NOMBRE: [Nombre descriptivo]
📂 CATEGORÍA: [Programación | Evaluación | Comunicación | Gestión | Actividades]
🎯 ETAPA: [Infantil | Primaria | ESO | Bachillerato | FP]
🔧 HERRAMIENTA RECOMENDADA: [Copilot | NotebookLM | Gemini | Cualquiera]
═══════════════════════════════════════════════

ROL:
[...]

CONTEXTO:
[...]

TAREA:
[...]

FORMATO:
[...]

RESTRICCIONES:
[...]

═══════════════════════════════════════════════
📝 NOTAS: [Qué funciona bien, qué necesita ajuste, variantes probadas]
📅 ÚLTIMA REVISIÓN: [Fecha]
═══════════════════════════════════════════════
```

### Ejemplo de ficha completada

```text
═══════════════════════════════════════════════
📌 NOMBRE: Generador de Situaciones de Aprendizaje LOMLOE
📂 CATEGORÍA: Programación
🎯 ETAPA: Primaria
🔧 HERRAMIENTA RECOMENDADA: Copilot + NotebookLM (verificación)
═══════════════════════════════════════════════

ROL:
Actúa como un diseñador instruccional experto en Situaciones de Aprendizaje 
según la LOMLOE, con conocimiento del currículo de la Comunitat Valenciana.

CONTEXTO:
Centro público de Educación Primaria en [LOCALIDAD]. Grupo de [CURSO] con 
[N] alumnos. [DESCRIBIR DIVERSIDAD DEL GRUPO]. Área de [ÁREA]. 
Temporalización: [TRIMESTRE Y DURACIÓN].

TAREA:
Diseña una Situación de Aprendizaje completa que incluya:
1. Título motivador y justificación.
2. Competencias específicas y saberes básicos implicados.
3. Criterios de evaluación.
4. Secuencia de actividades (mínimo [N] sesiones).
5. Metodología y agrupamientos.
6. Adaptaciones DUA (múltiples medios de representación, acción/expresión 
   y compromiso).
7. Instrumento de evaluación.

FORMATO:
Cada apartado con encabezado claro. Actividades en tabla con columnas 
[Sesión · Título · Descripción · Agrupamiento · Recursos · Evaluación].

RESTRICCIONES:
- Los criterios de evaluación deben coincidir con el Decreto 106/2022.
- No propongas recursos tecnológicos de pago.
- Máximo 6 sesiones de 45 minutos.

═══════════════════════════════════════════════
📝 NOTAS: Funciona mejor si después verifico los criterios en NotebookLM.
📅 ÚLTIMA REVISIÓN: abril 2026
═══════════════════════════════════════════════
```

> **💡 Ejemplo Primaria:** Crea tu primera ficha para una tarea que repites cada trimestre (ej: generar informes individualizados, diseñar actividades de refuerzo). Guárdala en un archivo de texto o en tu OneNote con tu cuenta `@gva.es`.

---

## 📝 Actividades prácticas del Bloque 2

### Actividad 2.1 — Mi primer prompt pedagógico avanzado *(individual)*

1. Elige una **Situación de Aprendizaje** que necesites diseñar realmente para tu aula.
2. Escribe un prompt completo con los **5 campos** (Rol + Contexto + Tarea + Formato + Restricciones).
3. Lánzalo en **Copilot** y guarda la respuesta.
4. Itera al menos **2 veces** con prompts de refinamiento (sección 2.2.3).
5. **Entregable:** documento con el prompt original, las dos iteraciones y la versión final. Sube a Aules.

### Actividad 2.2 — NotebookLM como verificador curricular *(individual)*

1. Crea un notebook en NotebookLM y sube el decreto curricular de tu etapa (Decreto 106, 107 o 108/2022).
2. Copia la Situación de Aprendizaje generada en la Actividad 2.1.
3. Pega en NotebookLM el siguiente prompt:

```text
Revisa la siguiente Situación de Aprendizaje y verifica:
1. ¿Las competencias específicas mencionadas existen en el decreto?
2. ¿Los saberes básicos son correctos y del curso indicado?
3. ¿Los criterios de evaluación están formulados fielmente?
Indica con [✅ CORRECTO] o [❌ ERROR + corrección] cada elemento.

[PEGAR AQUÍ LA SA GENERADA]
```

4. Corrige la SA con la información de NotebookLM.
5. **Entregable:** documento comparativo con las correcciones realizadas.

### Actividad 2.3 — Mi biblioteca de prompts *(individual + compartida)*

1. Crea **3 fichas de prompts** usando la plantilla de la sección 2.6 para tres tareas habituales de tu práctica docente.
2. Comparte al menos **1 ficha** en el foro del Bloque 2 en Aules.
3. Comenta la ficha de, al menos, **2 compañeros/as** con sugerencias de mejora.
4. **Entregable:** las 3 fichas en un documento y los comentarios en el foro.

### Actividad 2.4 — Comparativa de respuestas curriculares *(grupal, sesión síncrona)*

1. En grupos de 3-4, elegid un **área y curso concreto**.
2. Formulad el mismo prompt curricular y lanzadlo en **Copilot**, **Gemini** y **NotebookLM**.
3. Completad esta tabla:

| Criterio (1-5) | Copilot | Gemini | NotebookLM |
|:----------------|:-------:|:------:|:----------:|
| Precisión de competencias específicas | | | |
| Exactitud de saberes básicos | | | |
| Formulación de criterios de evaluación | | | |
| Cita de fuentes / referencias | | | |
| Utilidad global para programar | | | |

4. **Entregable:** tabla + conclusión grupal (200 palabras) en el foro.

---

## 📚 Recursos complementarios

- [NotebookLM — Acceso directo](https://notebooklm.google.com)
- [Guía de Prompt Engineering de OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) *(aplicable a cualquier herramienta)*
- [DOGV — Buscador de normativa educativa](https://dogv.gva.es/)
- [Decreto 106/2022 — Currículo de Primaria CV](https://dogv.gva.es/)
- [Decreto 107/2022 — Currículo de ESO y Bachillerato CV](https://dogv.gva.es/)
- [Guías DUA — CAST](https://www.cast.org/impact/universal-design-for-learning-udl)

---

## ✅ Checklist de autoevaluación

Antes de pasar al Bloque 3, asegúrate de poder responder **sí** a todas estas preguntas:

- [ ] Sé escribir un prompt completo con los 5 campos (Rol, Contexto, Tarea, Formato, Restricciones).
- [ ] He experimentado la evolución desde un prompt simple hasta uno avanzado y he comprobado la diferencia de resultados.
- [ ] Conozco y he practicado las técnicas de few-shot y chain-of-thought.
- [ ] He configurado NotebookLM con al menos un decreto curricular de mi etapa.
- [ ] He creado un agente personalizado (Copilot GPT o Gemini Gem) adaptado a mi asignatura y estilo docente.
- [ ] Sé diferenciar cuándo usar Copilot (creatividad, gestión) y cuándo NotebookLM (verificación curricular).
- [ ] He creado al menos 3 fichas para mi biblioteca personal de prompts.
- [ ] Comprendo las diferencias de fiabilidad curricular entre Copilot, Gemini, NotebookLM, Kimi y Grok.

---

<p style="text-align:center; color:gray; font-size:0.85em;">
Curso 26IA92IN017 · CEFIRE · Generalitat Valenciana · 2026<br>
Contenido bajo licencia <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
</p>