---
layout: page
title: "Bloque 2: Prompting avanzado y gestión documental"
nav_order: 3
release_at: 2026-04-29T17:30:00+02:00
---

# Bloque 2 · Prompting avanzado y gestión documental
{: .fs-8 }

Domina la fórmula del "Prompt Pedagógico" (Rol + Contexto + Tarea) y aprende a "entrenar" a la IA con el currículo oficial usando NotebookLM.
{: .fs-5 .fw-300 }

<div class="release-gate" data-open-at="{{ page.release_at }}" data-block-title="{{ page.title }}">
<div class="release-gate__notice" hidden>
<div style="background-color:#f5f7fa; border-left:4px solid #6c8ebf; padding:12px 14px; margin:18px 0; border-radius:6px;">
🔒 <strong>Contenido disponible próximamente</strong><br>
Este bloque se abrirá el <span class="release-gate__date"></span>.
Mientras tanto, céntrate en completar el bloque actual.
</div>
<p>Puedes consultar mientras tanto el bloque anterior y la guía didáctica del curso.</p>
</div>
<div class="release-gate__content">

---

## Objetivos del bloque

Al finalizar este bloque serás capaz de:

1. **Evolucionar en el diseño de prompts**, desde instrucciones simples hasta guías avanzadas con la estructura Rol + Contexto + Tarea + Formato + Restricciones, posicionando a la IA como experta pedagógica alineada con tus necesidades educativas.
2. Aplicar técnicas de razonamiento guiado paso a paso y **few-shot prompting** en contextos pedagógicos.
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


### 2.2.2 · Razonamiento guiado paso a paso

Pides a la IA que **organice la respuesta paso a paso antes de redactar la propuesta final**. Esto es especialmente útil para diseñar situaciones de aprendizaje complejas:

### 🏆 Prompt de Oro: Situación de aprendizaje paso a paso

```text
Actúa como un docente experto en diseño de situaciones de aprendizaje (SA) 
según la LOMLOE.

Contexto: 2.º de Educación Primaria, área de Conocimiento del Medio Natural, 
Social y Cultural. Centro público de Castellón, Comunitat Valenciana. 
22 alumnos, 1 con TEA y 2 de incorporación tardía.

Tarea: Diseña una situación de aprendizaje titulada "Los seres vivos de 
nuestro patio" siguiendo estos pasos (organiza la respuesta paso a paso antes de redactar la propuesta final):

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

<div style="background-color:#f5f7fa; border-left:4px solid #6c8ebf; padding:12px 14px; margin:18px 0; border-radius:6px;">

💭 <strong>Para pensar</strong><br>
Las respuestas de la IA no son neutras: dependen de los datos con los que ha sido entrenada.
Revisar críticamente lo que genera no es opcional, sino parte del uso profesional de estas herramientas.

</div>

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

> **💡 Ejemplo Primaria:** Crea tu primera ficha para una tarea que repites cada trimestre (ej: generar informes individualizados, diseñar actividades de refuerzo). Guárdala en un archivo de texto o en tu OneNote con tu cuenta `@edu.gva.es`.

---

## 📝 Actividades prácticas del Bloque 2

### Actividad 2.1 — Mi primer prompt pedagógico avanzado *(individual)*

1. Elige una **Situación de Aprendizaje** que necesites diseñar realmente para tu aula y define brevemente: etapa, curso, área o materia, número aproximado de sesiones y características relevantes del grupo.
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
5. **Entregable:** documento con tres partes: versión inicial de la situación de aprendizaje, comprobaciones y correcciones señaladas por NotebookLM, y versión final revisada.

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

4. Tras completar la tabla, en grupo identificad al menos dos aciertos y dos limitaciones de cada herramienta (Copilot, Gemini y NotebookLM). Anotadlo de forma breve y concreta.
5. **Entregable:** tabla comparativa y síntesis grupal con los aciertos y limitaciones de cada herramienta (máx. 200 palabras) en el foro.

* * *

---

## Antes de la actividad final: del análisis documental al diseño didáctico

Hasta este punto del bloque hemos trabajado cómo formular buenos prompts, cómo refinar respuestas, cómo verificar información curricular y cómo utilizar herramientas como NotebookLM para consultar y sintetizar fuentes. El siguiente paso consiste en dar un uso más pedagógico y aplicado a ese trabajo: pasar del análisis documental al diseño de una propuesta real de aula.

La actividad final de este bloque no consiste solo en “usar una herramienta de IA”, sino en emplearla con criterio docente para construir una **situación de aprendizaje** fundamentada, coherente y aplicable.

### Qué es un cuaderno docente en NotebookLM

Un cuaderno docente en NotebookLM no es simplemente un espacio donde acumular documentos. Debe funcionar como una **base de trabajo estructurada**, creada con una intención pedagógica clara.

Su valor no está en la cantidad de archivos que contiene, sino en su capacidad para ayudar al profesorado a:

- comprender mejor un tema o enfoque,
- relacionar normativa, metodología y evaluación,
- extraer ideas útiles para el aula,
- tomar decisiones didácticas mejor fundamentadas.

Por eso, antes de crear un cuaderno, conviene definir con claridad **para qué se quiere usar** y **qué tipo de propuesta se desea construir a partir de él**.

### Cómo seleccionar buenas fuentes

NotebookLM trabaja únicamente con las fuentes que se incorporan al cuaderno. Esto significa que la calidad del resultado dependerá directamente de la calidad de esas fuentes.

Para esta actividad conviene priorizar materiales:

- relevantes para el nivel y la etapa educativa,
- claros y bien estructurados,
- conectados con la práctica docente real,
- útiles para diseñar una situación de aprendizaje.

Es recomendable combinar varios tipos de fuentes, por ejemplo:

- normativa o currículo,
- orientaciones metodológicas,
- materiales sobre evaluación,
- documentos sobre atención a la diversidad o DUA,
- recursos sobre uso ético y pedagógico de la IA,
- materiales propios del profesorado.

También conviene recordar que algunas páginas web pueden no cargarse bien y que los PDF escaneados o poco legibles pueden dar problemas. Siempre que sea posible, trabaja con textos claros, accesibles y bien organizados.

### Ejemplo de selección básica de fuentes

Un cuaderno inicial en NotebookLM puede construirse con una combinación mínima de documentos clave. Por ejemplo, puedes incluir el decreto curricular de tu etapa educativa, una guía breve sobre evaluación competencial, un recurso sobre DUA o atención a la diversidad y algún material metodológico relacionado con el tipo de situación de aprendizaje que quieras diseñar. Esta selección te permitirá disponer de una base sólida y variada para fundamentar tus propuestas didácticas y adaptar la actividad a las necesidades reales del aula.

### Utilizar NotebookLM para analizar, no para copiar

El objetivo de esta herramienta no es copiar respuestas ni delegar en la IA las decisiones docentes. Su función en este bloque es ayudar a:

- resumir documentos,
- formular preguntas útiles,
- detectar ideas clave,
- relacionar varias fuentes,
- extraer propuestas o criterios,
- y apoyar el diseño de una situación de aprendizaje mejor fundamentada.

Por eso, cualquier respuesta obtenida debe revisarse críticamente. La IA puede ayudar a organizar, sintetizar y sugerir, pero el juicio pedagógico sigue correspondiendo al profesorado.

### Ejemplos de consultas útiles en NotebookLM

Algunas preguntas prácticas que puedes plantear en NotebookLM para diseñar tu situación de aprendizaje:

- Resume las ideas clave de estas fuentes para diseñar una situación de aprendizaje.
- Relaciona estas orientaciones metodológicas con el currículo de tu nivel.
- Extrae posibles productos finales adecuados para este tema y etapa.
- Identifica medidas de atención a la diversidad presentes en las fuentes.
- Sugiere qué instrumento de evaluación encaja mejor con este planteamiento.


### Del cuaderno a la situación de aprendizaje

El cuaderno es el punto de partida, no el producto final. A partir de las fuentes seleccionadas y del análisis realizado con NotebookLM, el profesorado debe transformar esa información en una propuesta didáctica coherente.

Eso implica tomar decisiones sobre:

- el tema o contenido a trabajar,
- el nivel educativo,
- el reto o producto final,
- la secuencia de actividades,
- la evaluación,
- la atención a la diversidad,
- y el papel que tendrá la IA en el proceso.

### Qué debe incluir una situación de aprendizaje

Para esta actividad final, la situación de aprendizaje debe incluir al menos:

- tema y nivel educativo,
- reto o producto final,
- objetivos didácticos,
- desarrollo de la actividad,
- uso de NotebookLM en el proceso,
- instrumentos de evaluación, con al menos uno desarrollado,
- medidas de atención a la diversidad,
- propuesta de uso de la IA en el aula.

Es importante recordar que una situación de aprendizaje no es una actividad aislada. Debe mantener coherencia entre lo que se pretende conseguir, lo que se hace en el aula, el producto que realiza el alumnado y la forma en que se evalúa.

### Sobre el producto final

El producto final puede adoptar formatos diversos, como un podcast, una infografía, un vídeo, una presentación, un cartel digital o cualquier otro formato adecuado al contexto.

Lo importante no es que el producto sea vistoso, sino que tenga sentido pedagógico, sea realizable y permita evidenciar aprendizaje de forma clara.

### Sobre la evaluación

La evaluación debe estar conectada con lo que el alumnado hace y produce. No basta con indicar que “se evaluará con una rúbrica”; en esta actividad debe aparecer **al menos un instrumento concreto y utilizable**.

Puede ser, por ejemplo:

- una rúbrica,
- una lista de cotejo,
- una escala de observación,
- o una tabla de criterios con indicadores.

### Sobre la atención a la diversidad

La propuesta debe contemplar medidas reales de inclusión y accesibilidad. Esto puede traducirse en:

- diferentes formas de acceso a la información,
- apoyos visuales o plantillas,
- opciones diversas para expresar el aprendizaje,
- productos finales flexibles,
- andamiajes o ayudas graduadas,
- agrupamientos variados,
- adaptaciones según necesidades del alumnado.

### Sobre el uso de la IA en el aula

La integración de la IA debe ser ética, crítica y pedagógicamente justificada. No se trata de usarla por novedad, sino de pensar con claridad:

- para qué tiene sentido usarla,
- qué riesgos puede tener,
- cómo se verificará la información generada,
- qué papel mantendrá el profesorado,
- y cómo se evitarán usos poco reflexivos o dependientes.

Antes de realizar la actividad final, asegúrate de haber definido el propósito de tu cuaderno, de haber seleccionado fuentes realmente útiles y de tener una idea clara del tipo de situación de aprendizaje que quieres diseñar.

* * *

## Actividad final del bloque — Crea un cuaderno docente con NotebookLM y diseña una situación de aprendizaje con IA

### 🎯 Objetivo global

Diseñar un cuaderno docente en NotebookLM que funcione como apoyo para la creación de situaciones de aprendizaje y, a partir de este, elaborar una situación de aprendizaje real, significativa y aplicable al aula, incorporando la IA de manera ética, crítica y pedagógica.

### 🪜 FASE 1 – Creación del cuaderno en NotebookLM (producto 1)

Debes crear un cuaderno en NotebookLM con la función de:

👉 Ayudar al profesorado a diseñar situaciones de aprendizaje a partir de fuentes documentales.

### El cuaderno debe incluir:

- título claro,
- objetivo pedagógico,
- fuentes relevantes y bien seleccionadas,
- organización coherente de la información.

### Puedes incorporar:

- documentos propios,
- textos elaborados,
- normativa,
- materiales didácticos,
- artículos o recursos educativos.

> ⚠️ **Importante**  
> NotebookLM solo trabaja con las fuentes que incorporas. No genera información externa como otras herramientas de chat. Por tanto, la calidad del cuaderno dependerá directamente de las fuentes seleccionadas.

### Ten en cuenta que:

- algunas webs pueden no cargarse correctamente,
- los PDF escaneados pueden dar problemas,
- funciona mejor con textos claros y bien estructurados.

### 🧩 Uso del cuaderno

Utiliza NotebookLM para:

- generar resúmenes,
- formular preguntas,
- extraer ideas clave,
- relacionar información,
- proponer ideas para el aula.

### El cuaderno debe permitir:

- proponer actividades o retos significativos,
- sugerir instrumentos de evaluación,
- atender a la diversidad,
- seleccionar recursos educativos,
- integrar un uso responsable de la IA,
- proponer productos finales como podcasts, infografías, vídeos u otros formatos digitales para el alumnado.

### 🪜 FASE 2 – Diseño de la situación de aprendizaje (producto 2)

A partir del trabajo realizado con el cuaderno, diseña una situación de aprendizaje completa que incluya:

- tema y nivel educativo,
- reto o producto final,
- objetivos didácticos,
- desarrollo de la actividad,
- uso de NotebookLM en el proceso,
- instrumentos de evaluación, con al menos uno desarrollado,
- medidas de atención a la diversidad,
- propuesta de uso de la IA en el aula.

### 🧠 Reflexión final

Incluye una breve reflexión docente sobre:

- cómo has utilizado NotebookLM,
- limitaciones encontradas,
- valor educativo de la herramienta.

### 📄 Entrega

Debes entregar un único documento, preferiblemente en formato Word o PDF, que incluya:

- capturas de pantalla del cuaderno,
- explicación de las fuentes utilizadas,
- situación de aprendizaje completa,
- reflexión final.

### Orientaciones para la entrega

El documento final debería incluir, como mínimo:

- entre 4 y 8 fuentes bien justificadas,
- al menos 3 capturas de pantalla del cuaderno,
- una situación de aprendizaje desarrollada de forma completa,
- un instrumento de evaluación utilizable,
- y una reflexión final breve de entre 150 y 300 palabras.

El enlace al cuaderno es opcional.

### 📌 Recomendaciones

- prioriza la calidad de las fuentes frente a la cantidad,
- utiliza la herramienta para analizar, no copiar,
- piensa siempre en la aplicación real en el aula.

### Criterios de valoración

| Aspecto | Qué se valorará |
|---------|-----------------|
| Coherencia global | Relación entre el objetivo del cuaderno, las fuentes seleccionadas y la situación de aprendizaje diseñada |
| Calidad de las fuentes | Selección de fuentes relevantes, actualizadas y adecuadas al contexto educativo |
| Uso de NotebookLM | Empleo crítico y pedagógico de la herramienta para fundamentar el diseño |
| Claridad y viabilidad | Presentación clara y aplicable de la situación de aprendizaje propuesta |
| Instrumento de evaluación | Inclusión y desarrollo realista de un instrumento de evaluación adecuado |
| Atención a la diversidad | Presencia de medidas concretas para atender a la diversidad del alumnado |
| Integración ética de la IA | Justificación y uso ético de la inteligencia artificial en la propuesta |



> Esta actividad final integra todo lo trabajado en el bloque: formulación de prompts, verificación curricular, análisis documental y diseño didáctico con apoyo de IA.

---

## 📚 Recursos complementarios


- [NotebookLM — Acceso directo](https://notebooklm.google.com)
- [Guía de Prompt Engineering de OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) *(aplicable a cualquier herramienta)*
- [DOGV — Buscador de normativa educativa](https://dogv.gva.es/)
- [Decreto 106/2022 — Currículo de Primaria CV](https://dogv.gva.es/)
- [Decreto 107/2022 — Currículo de ESO y Bachillerato CV](https://dogv.gva.es/)
- [Guías DUA — CAST](https://www.cast.org/impact/universal-design-for-learning-udl)
- [Banco de rúbricas de evaluación — INTEF](https://www.educacionyfp.gob.es/servicios-al-ciudadano/catalogo/general/99/998758/ficha.html)

---

## ✅ Checklist de autoevaluación

Antes de pasar al Bloque 3, asegúrate de poder responder **sí** a todas estas preguntas:

- [ ] Sé escribir un prompt completo con los 5 campos (Rol, Contexto, Tarea, Formato, Restricciones).
- [ ] He experimentado la evolución desde un prompt simple hasta uno avanzado y he comprobado la diferencia de resultados.
- [ ] Conozco y he practicado las técnicas de few-shot y razonamiento guiado paso a paso.
- [ ] He configurado NotebookLM con al menos un decreto curricular de mi etapa.
- [ ] Sé diferenciar cuándo usar Copilot (creatividad, gestión) y cuándo NotebookLM (verificación curricular).
- [ ] He creado al menos 3 fichas para mi biblioteca personal de prompts.
- [ ] Comprendo las diferencias de fiabilidad curricular entre Copilot, Gemini, NotebookLM, Kimi y Grok.

---

</div><!-- /.release-gate__content -->
</div><!-- /.release-gate -->

<p style="text-align:center; color:gray; font-size:0.85em;">
Curso 26IA92IN017 · CEFIRE · Generalitat Valenciana · 2026<br>
Contenido bajo licencia <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
</p>