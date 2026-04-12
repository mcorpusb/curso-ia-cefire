---
layout: page
title: "Bloque 3: Generación Multimodal"
nav_order: 4
---

# Bloque 3 · Generación Multimodal
{: .fs-8 }

Crea presentaciones, cómics, audios realistas y vídeos educativos con herramientas de IA generativa para enriquecer tus situaciones de aprendizaje.
{: .fs-5 .fw-300 }

---

## Objetivos del bloque

Al finalizar este bloque serás capaz de:

1. **Transformar contenidos textuales en recursos multimodales dinámicos** (presentaciones, infografías, cómics, audios realistas, vídeos con avatares) que potencien la atención visual y auditiva en ESO/Bachillerato.
2. Diseñar **presentaciones educativas completas** con Gamma y compararlas con las generadas por Copilot en PowerPoint.
3. Crear **cómics, infografías e ilustraciones** adaptados a cada etapa educativa usando herramientas de IA generativa.
4. Generar **audios realistas** (narración, podcasts, explicaciones) para hacer accesibles los contenidos a todo el alumnado.
5. Producir **vídeos educativos cortos** con avatares IA y edición asistida.
6. **Personalizar el aprendizaje mediante IA**, ajustando materiales multimodales a la diversidad de niveles y realidades del aula de forma rápida y escalable.
7. Integrar todos estos recursos en **situaciones de aprendizaje LOMLOE** respetando los principios del **DUA** (múltiples medios de representación).

> **⚠️ Seguridad GVA:** Las herramientas de generación multimodal que veremos en este bloque son **externas al ecosistema GVA**. Nunca subas fotografías del alumnado, datos personales ni documentos internos. Usa solo contenido ficticio o con licencia abierta como material de partida.

---

## 3.1 · Presentaciones educativas con IA: Gamma y Copilot en PowerPoint

### 3.1.1 · Gamma: presentaciones desde un prompt

**Gamma** ([gamma.app](https://gamma.app)) es una herramienta de IA que genera presentaciones, documentos y páginas web completas a partir de una descripción en lenguaje natural. Ofrece diseños visuales modernos sin necesidad de plantillas previas.

| Característica | Gamma | Copilot en PowerPoint |
|:---------------|:-----:|:---------------------:|
| Acceso | Gratuito (con marca de agua) / Pro | Licencia Microsoft 365 GVA |
| Datos dentro del entorno GVA | ❌ | ✅ |
| Calidad visual por defecto | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Personalización de diseño | Alta (temas, fuentes, colores) | Media (plantillas Office) |
| Imagen generada automáticamente | ✅ (incluye imágenes IA) | ✅ (Bing Image Creator) |
| Exportación a .pptx | ✅ | ✅ (nativo) |
| Idioma español/valenciano | Bueno | Muy bueno |
| Mejor para… | Presentaciones visuales impactantes | Integración con documentos Word ya existentes |

### 🏆 Prompt de Oro: Presentación con Gamma

```text
Crea una presentación de 10 diapositivas para una clase de Ciencias Naturales 
de 5.º de Primaria sobre "El ciclo del agua".

Requisitos:
1. Diapositiva 1: portada con título atractivo e imagen.
2. Diapositiva 2: pregunta motivadora ("¿A dónde va la lluvia?").
3. Diapositivas 3-7: explicación del ciclo (evaporación, condensación, 
   precipitación, escorrentía, infiltración), una fase por diapositiva, 
   con imagen o diagrama ilustrativo.
4. Diapositiva 8: actividad interactiva para el alumnado.
5. Diapositiva 9: resumen visual (infografía del ciclo completo).
6. Diapositiva 10: bibliografía y créditos.

Estilo: colorido, con lenguaje adaptado a 10-11 años. Incluye iconos y poca 
cantidad de texto por diapositiva (máximo 40 palabras).
```

> **💡 Ejemplo Primaria:** Después de generar la presentación, descárgala en `.pptx` y ábrela en PowerPoint para ajustar detalles. Así combinas la velocidad de Gamma con la integración del entorno GVA.

### 🏆 Prompt de Oro: Presentación con Copilot en PowerPoint

Si prefieres trabajar directamente en el ecosistema Microsoft:

```text
Crea una presentación sobre "La España del siglo XIX: del Antiguo Régimen 
al liberalismo" para 4.º de ESO, asignatura de Geografía e Historia.

Estructura:
- Portada con título y subtítulo.
- Línea temporal de los eventos clave (1808-1874).
- 1 diapositiva por etapa: Guerra de Independencia, Cortes de Cádiz, 
  reinados de Fernando VII e Isabel II, Sexenio Democrático.
- Cada diapositiva: título, 3-4 puntos clave, imagen representativa.
- Diapositiva final: preguntas de reflexión para debate en el aula.

Tono: académico pero accesible para 15-16 años.
```

> **🚀 Reto Secundaria/FP:** Genera la misma presentación en Gamma y en Copilot PowerPoint. Compara: ¿cuál tiene mejor diseño visual? ¿Cuál es más precisa en los contenidos históricos? ¿Cuál exporta mejor a PDF para compartir por Aules?

---

## 3.2 · Cómics e ilustraciones educativas con IA

Los cómics son una herramienta pedagógica potente: combinan narrativa visual y textual, favorecen la comprensión lectora y conectan con el alumnado de todas las edades. Con IA generativa puedes crearlos sin saber dibujar.

### 3.2.1 · Herramientas recomendadas

| Herramienta | Tipo | Acceso | Ideal para |
|:------------|:-----|:-------|:-----------|
| **Copilot (Designer / Image Creator)** | Generador de imágenes (DALL-E 3) | ✅ Cuenta `@edu.gva.es` | Ilustraciones individuales, portadas, infografías |
| **Pixton** | Creador de cómics con avatares | Freemium | Cómics con personajes estilo cartoon, diálogos |
| **Canva + IA** | Diseño gráfico + generación IA | Freemium (plan educativo gratuito) | Cómics, pósteres, infografías con plantillas |
| **Gemini (Imagen 3)** | Generador de imágenes | ✅ Cuenta personal Google | Ilustraciones realistas, escenas complejas |
| **Kimi** | Texto + análisis visual | ✅ Cuenta personal | Describir viñetas (como guionista) para usar en otro generador |

### 🏆 Prompt de Oro: Generar la ilustración de una viñeta con Copilot

```text
Genera una ilustración estilo cómic educativo para niños de 8-9 años. 
La escena muestra un aula de Primaria donde una profesora explica el 
sistema solar. En la pizarra hay un dibujo de los planetas. Tres alumnos 
levantan la mano con entusiasmo. Colores vivos, estilo cartoon amigable. 
No incluyas texto ni letras en la imagen.
```

> **⚠️ Seguridad GVA:** Copilot con tu cuenta `@edu.gva.es` utiliza DALL-E 3 con filtros de contenido corporativo. Es la opción más segura para generar imágenes. **Nunca pidas que genere imágenes que se parezcan a personas reales, alumnado concreto o menores identificables.**

### 🏆 Prompt de Oro: Guion de cómic educativo (para cualquier herramienta)

Usa este prompt para generar el **guion** del cómic, y después crea las imágenes viñeta a viñeta:

```text
Actúa como un guionista de cómics educativos para alumnado de 3.º de Primaria.

Contexto: Necesito un cómic de 6 viñetas para explicar la importancia del 
reciclaje, vinculado al área de Conocimiento del Medio (LOMLOE, Comunitat 
Valenciana).

Tarea: Escribe el guion con esta estructura para cada viñeta:
- VIÑETA [N]:
  - Escena: [Descripción visual detallada]
  - Personajes: [Quién aparece y qué hace]
  - Diálogo/Texto: [Bocadillos de texto]
  - Emoción: [Tono de la viñeta: curiosidad, sorpresa, humor…]

Restricciones:
- Personajes ficticios (no basados en personas reales).
- Lenguaje adaptado a 8-9 años.
- La última viñeta debe incluir un mensaje reflexivo o una pregunta.
```

> **💡 Ejemplo Primaria:** Una vez tengas el guion, genera cada viñeta en Copilot Image Creator adaptando la descripción de escena. Después, monta el cómic con las imágenes en **Canva** (usa la plantilla gratuita "Comic Strip").

> **🚀 Reto Secundaria/FP:** Adapta el cómic para un módulo de **Prevención de Riesgos Laborales** en FP. Cambia el tema a *"Equipos de Protección Individual en el taller"* y el estilo visual a *"infografía técnica con viñetas de humor"*.

---

## 3.2b · Infografías educativas con IA

Las infografías son uno de los recursos más eficaces para sintetizar información compleja de forma visual. Con IA puedes generarlas rápidamente a partir de cualquier contenido textual.

### Herramientas recomendadas para infografías

| Herramienta | Tipo | Acceso | Ideal para |
|:------------|:-----|:-------|:-----------|
| **Canva + IA** | Diseño gráfico + IA generativa | Freemium (plan educativo gratuito) | Infografías con plantillas profesionales, datos y gráficos |
| **Gamma** | Generador de documentos/presentaciones | Freemium | Infografías tipo página web con datos y visualizaciones |
| **Copilot + PowerPoint** | Diseño integrado en M365 | ✅ Cuenta `@edu.gva.es` | Infografías dentro de presentaciones, entorno GVA seguro |
| **Napkin AI** | Conversor de texto a infografía | Freemium | Transformar textos largos en esquemas visuales automáticos |

### 🏆 Prompt de Oro: Transformar un texto en infografía

```text
Actúa como un diseñador de infografías educativas para alumnado de 
ESO/Bachillerato.

Contexto: Necesito transformar el siguiente texto de apuntes de 
[TU ASIGNATURA] ([CURSO]) en una infografía visual y atractiva.

Texto a transformar:
[PEGAR AQUÍ EL TEXTO O RESUMEN DEL TEMA]

Tarea: Diseña la estructura de una infografía que incluya:
1. Título principal llamativo.
2. 4-6 secciones con iconos descriptivos y texto breve (máx. 20 palabras 
   por sección).
3. Un diagrama o esquema visual central que conecte los conceptos clave.
4. Datos destacados en recuadros de color (cifras, fechas, fórmulas).
5. Una sección "¿Sabías que...?" con un dato curioso.
6. Paleta de colores sugerida (3 colores máximo).

Formato: Descripción detallada de cada sección, lista para
recrearse en Canva o PowerPoint. Incluye sugerencias de 
iconos entre corchetes [ICONO: ...].

Restricciones: Lenguaje adaptado a 14-17 años. No más de 150 
palabras totales en la infografía (es visual, no textual).
```

> **💡 Flujo de trabajo rápido:** 1) Genera la estructura con Copilot → 2) Crea la infografía en Canva usando la descripción como guía → 3) Exporta en PDF y sube a Aules.

---

## 3.3 · Audios realistas: narración, podcasts y accesibilidad

La generación de audio con IA tiene un enorme potencial educativo: desde hacer accesibles los apuntes para alumnado con dificultades de lectura hasta crear podcasts de repaso.

### 3.3.1 · Herramientas de texto a voz (TTS) con IA

| Herramienta | Calidad de voz | Español | Valenciano | Gratuito | Mejor para |
|:------------|:--------------:|:-------:|:----------:|:--------:|:-----------|
| **ElevenLabs** | ⭐⭐⭐⭐⭐ (muy realista) | ✅ | Limitado | Freemium (10 min/mes) | Narraciones, audiolibros, personajes |
| **NotebookLM Audio Overviews** | ⭐⭐⭐⭐ (formato podcast) | ✅ | ❌ | ✅ Gratuito | Resúmenes de documentos, divulgación |
| **Microsoft Edge (Leer en voz alta)** | ⭐⭐⭐ | ✅ | ✅ | ✅ Gratuito | Lectura accesible de textos en el navegador |
| **Natural Reader** | ⭐⭐⭐⭐ | ✅ | Limitado | Freemium | Convertir PDF y documentos a audio |
| **Copilot (lectura de respuestas)** | ⭐⭐⭐ | ✅ | Parcial | ✅ Con licencia GVA | Escuchar respuestas generadas directamente |

### 🏆 Prompt de Oro: Guion para narración educativa (ElevenLabs)

Primero genera el guion con Copilot o Gemini, y luego copia el texto en ElevenLabs para convertirlo a audio:

```text
Actúa como un narrador de audiolibros educativos para niños de 6.º de Primaria.

Contexto: Estoy creando material de apoyo en audio para alumnado con 
dificultades de lectoescritura. Tema: "La Edad Media en la Península Ibérica" 
(área de Conocimiento del Medio, LOMLOE, Comunitat Valenciana).

Tarea: Escribe un texto de narración de 3 minutos de duración (aprox. 450 
palabras) que cubra:
1. Qué fue la Edad Media y cuándo ocurrió.
2. Los reinos cristianos y Al-Ándalus.
3. La vida cotidiana: castillos, mercados y oficios.
4. Un dato curioso o anécdota que enganche al oyente.

Formato: Texto limpio, sin acotaciones. Usa frases cortas y vocabulario 
accesible. Incluye preguntas retóricas para mantener la atención ("¿Te 
imaginas vivir sin electricidad?").

Restricciones: No usar palabras de más de 4 sílabas a menos que sean 
términos históricos esenciales (que debes definir brevemente).
```

### Paso a paso: de texto a audio con ElevenLabs

1. Accede a [elevenlabs.io](https://elevenlabs.io) y crea una cuenta gratuita.
2. En el panel **"Text to Speech"**, pega el guion generado.
3. Elige una **voz** en español (recomendamos probar varias: "Antoni", "Bella", "Callum").
4. Ajusta la **estabilidad** (más alta = más neutra, más baja = más expresiva).
5. Pulsa **"Generate"** y descarga el archivo `.mp3`.
6. Sube el audio a **Aules** como material de apoyo en la Situación de Aprendizaje.

> **💡 Ejemplo Primaria:** Crea un audio por cada tema del trimestre. Súbelos a Aules como "Apuntes sonoros" dentro de la sección de recursos. El alumnado con dificultades lectoras podrá escucharlos como alternativa al texto escrito — esto es **DUA en acción** (principio de múltiples medios de representación).

### 🏆 Prompt de Oro: Podcast educativo con NotebookLM

Si ya tienes un notebook configurado (Bloque 2), puedes generar un Audio Overview:

```text
Genera un Audio Overview en español sobre los contenidos del Bloque A 
("Cultura científica") del área de Conocimiento del Medio para 5.º de 
Primaria según el Decreto 106/2022. 

Estilo: conversación amena entre dos personas, como un podcast divulgativo. 
Nivel de lenguaje: comprensible para docentes, no para el alumnado. 
Duración aproximada: 5-8 minutos.
```

> **⚠️ Seguridad GVA:** Los audios generados con voces IA deben usarse con transparencia. Informa a tu alumnado de que se trata de una **voz generada por IA**, no una persona real. Es una buena práctica ética y también una oportunidad para fomentar la **alfabetización en IA**.

---

## 3.4 · Vídeos educativos con IA

La generación de vídeo con IA ha avanzado enormemente. Aunque aún no sustituye a una grabación profesional, sí permite crear **vídeos explicativos cortos** de forma rápida y sin equipo de producción.

### 3.4.1 · Herramientas recomendadas

| Herramienta | Tipo | Acceso | Ideal para |
|:------------|:-----|:-------|:-----------|
| **Microsoft Clipchamp** | Editor de vídeo + IA | ✅ Incluido en Microsoft 365 GVA | Edición básica, subtítulos automáticos, narración IA |
| **Synthesia** | Vídeos con avatares IA | Freemium (demos limitadas) | Vídeos explicativos con "profesor virtual" |
| **HeyGen** | Avatares + traducción IA | Freemium | Traducir vídeos a otros idiomas, avatares personalizados |
| **Canva Vídeos** | Editor + plantillas | Freemium (plan educativo) | Vídeos cortos con animaciones, texto y narración |
| **CapCut** | Editor de vídeo + IA | Gratuito | Subtítulos automáticos, efectos, edición rápida |
| **Invideo AI** | Generación de vídeo desde texto | Freemium | Crear vídeos completos a partir de un guion |

### 🏆 Prompt de Oro: Guion para vídeo explicativo (Invideo AI / Synthesia)

```text
Actúa como un creador de contenido educativo audiovisual.

Contexto: Necesito un vídeo explicativo de 2-3 minutos para el alumnado 
de 1.º de ESO sobre "Las fracciones equivalentes" (Matemáticas, LOMLOE, 
Comunitat Valenciana).

Tarea: Escribe un guion de vídeo con esta estructura:
1. INTRO (15 seg): Gancho de atención con una pregunta o situación cotidiana.
2. EXPLICACIÓN (90 seg): Desarrollo del concepto con 3 ejemplos progresivos 
   (de fácil a difícil). Incluye indicaciones de qué debe mostrarse en 
   pantalla [VISUAL: ...].
3. PRÁCTICA (30 seg): Un ejercicio para que el alumno pause y resuelva.
4. CIERRE (15 seg): Resumen en una frase + avance del próximo tema.

Formato:
TIMESTAMP | NARRACIÓN | [VISUAL]

Restricciones:
- Lenguaje claro para 12-13 años.
- No usar más de 2 fórmulas matemáticas por pantalla.
- Indicar momentos donde el alumno debe pausar.
```

### Paso a paso: vídeo con subtítulos en Clipchamp (entorno GVA)

**Microsoft Clipchamp** está incluido en tu licencia Microsoft 365 de la GVA y es la opción más segura para vídeo:

1. Accede a [clipchamp.com](https://clipchamp.com) con tu cuenta `@edu.gva.es`.
2. Crea un **nuevo vídeo** y selecciona el formato (horizontal 16:9 para clase, vertical 9:16 para alumnado móvil).
3. Graba tu pantalla o sube un vídeo ya existente.
4. Usa la función **"Subtítulos automáticos"** (basada en IA) para generar subtítulos sincronizados.
5. Activa **"Text to Speech"** para añadir narración IA en español a diapositivas o secciones sin voz.
6. Exporta y sube el vídeo a **Aules** o a **Microsoft Stream** (entorno GVA).

> **🚀 Reto Secundaria/FP:** Graba una explicación de 5 minutos sobre un tema de tu asignatura. Súbela a Clipchamp, genera subtítulos automáticos y corrige los errores. Después, usa **HeyGen** para generar una versión del vídeo traducida al inglés con avatar IA. Compara la calidad de los subtítulos y la traducción.

### 3.4.2 · Vídeos con avatar IA (Synthesia / HeyGen)

Estos servicios generan vídeos donde un **avatar digital** presenta el contenido en el idioma que elijas. Son útiles para:

- Crear **vídeos introductorios** para cada unidad sin grabarse en cámara.
- Generar versiones en **valenciano, inglés o francés** del mismo contenido.
- Ofrecer **tutoriales accesibles** con avatar + subtítulos + audio claro.

### 🏆 Prompt de Oro: Guion para avatar IA

```text
Escribe un guion de 90 segundos para un avatar IA que da la bienvenida 
al alumnado de 2.º de Bachillerato al tema "La célula eucariota" 
(Biología, LOMLOE).

Estructura:
1. Saludo cercano y breve presentación del tema.
2. Por qué es importante: conexión con la vida cotidiana (medicamentos, 
   enfermedades, biotecnología).
3. Qué van a aprender: 3 objetivos concretos.
4. Instrucciones: "Ahora ve al apartado de Aules y…"

Tono: motivador, cercano, sin infantilizar. Máximo 200 palabras.
```

> **⚠️ Seguridad GVA:** Los avatares de Synthesia y HeyGen procesan datos en servidores externos. **No uses tu imagen real** para crear un avatar digital sin consentimiento explícito, y **nunca uses la imagen de alumnado**. Utiliza los avatares genéricos de la plataforma.

---

## 3.5 · Comparativa multimodal: todas las herramientas de un vistazo

| Tipo de contenido | Herramienta GVA (prioridad) | Alternativa externa (sin datos personales) | Comparativa rápida |
|:-------------------|:---------------------------|:------------------------------------------|:-------------------|
| **Presentaciones** | Copilot en PowerPoint | Gamma, Gemini en Slides | Gamma gana en diseño; Copilot gana en integración |
| **Imágenes/Cómics** | Copilot Image Creator | Gemini (Imagen 3), Canva IA | Copilot es más seguro; Gemini más versátil |
| **Audio/Narración** | Edge "Leer en voz alta" | ElevenLabs, NotebookLM | ElevenLabs mejor calidad; Edge más accesible |
| **Vídeo** | Clipchamp | Synthesia, HeyGen, CapCut | Clipchamp más seguro; Synthesia más impactante |
| **Cómic (guion)** | Copilot (texto) | Kimi, Grok (texto) | Similar calidad; Copilot mejor en español |

### ¿Cuándo usar cada herramienta?

- **Solo datos públicos/ficticios:** Puedes usar cualquier herramienta de la tabla.
- **Contenido con datos del centro:** Solo herramientas Microsoft con cuenta `@edu.gva.es` (Copilot, Clipchamp, PowerPoint).
- **Para el alumnado directamente:** Prioriza herramientas gratuitas y sin registro obligatorio (Edge, Canva Education, CapCut).

---

## 3.6 · Integración multimodal en Situaciones de Aprendizaje

El verdadero valor de estas herramientas aparece cuando las combinas dentro de una **Situación de Aprendizaje LOMLOE** completa. Veamos un ejemplo integrador:

### Ejemplo: SA "Los ecosistemas de la Comunitat Valenciana" (6.º Primaria)

| Recurso IA generado | Herramienta | Uso en la SA | Principio DUA |
|:---------------------|:------------|:-------------|:--------------|
| Presentación introductoria | Gamma → exportar a .pptx | Sesión 1: motivación y activación de conocimientos previos | Representación (visual) |
| Cómic "Un día en la Albufera" | Copilot Image Creator + Canva | Sesión 2: comprensión lectora + ciencias | Representación (narrativa visual) |
| Audio "Los ecosistemas explicados" | ElevenLabs | Sesiones 1-4: material alternativo al texto para alumnado NEAE | Representación (auditiva) |
| Vídeo resumen con subtítulos | Clipchamp | Sesión 5: repaso antes de la evaluación | Representación (multimedia) |
| Podcast de ampliación | NotebookLM Audio Overview | Extensión: para alumnado con interés especial | Compromiso (opcionalidad) |

> **💡 Ejemplo Primaria:** No necesitas generar todos los recursos para una misma SA. Elige **2-3 formatos** que aporten diversidad a tu secuencia de actividades. El DUA no exige "todo", sino **opciones**.

> **🚀 Reto Secundaria/FP:** Diseña una SA de tu área combinando al menos **3 recursos multimodales IA**. Explica en una tabla como la anterior qué herramienta usarías, en qué sesión y qué principio DUA atiende cada recurso.

---

## 📝 Actividades prácticas del Bloque 3

### Actividad 3.1 — Presentación educativa con Gamma *(individual)*

1. Elige un tema de tu área y curso.
2. Usa el Prompt de Oro de la sección 3.1 (adaptándolo a tu contexto) para generar una presentación en **Gamma**.
3. Descarga en `.pptx` y ábrela en PowerPoint para ajustes.
4. **Entregable:** archivo `.pptx` subido a Aules + captura de pantalla del resultado original en Gamma.

### Actividad 3.2 — Cómic educativo de 6 viñetas *(individual)*

1. Genera un **guion de cómic** con Copilot usando el prompt de la sección 3.2.
2. Crea las **ilustraciones** de cada viñeta con Copilot Image Creator (o Gemini / Canva).
3. Monta las viñetas en un **documento visual** (Canva, PowerPoint o incluso Word).
4. **Entregable:** cómic en formato PDF subido a Aules.

### Actividad 3.3 — Audio educativo accesible *(individual)*

1. Genera un **guion de narración** de 2-3 minutos sobre un tema de tu área usando el prompt de la sección 3.3.
2. Convierte el guion a audio con **ElevenLabs** (o lee con Edge "Leer en voz alta" y graba la pantalla).
3. Escucha el resultado y valora: ¿es comprensible? ¿Se adapta al nivel del alumnado?
4. **Entregable:** archivo `.mp3` + breve reflexión (100 palabras) sobre utilidad para alumnado NEAE.

### Actividad 3.4 — Infografía a partir de apuntes *(individual)*

**Objetivo:** Transformar contenido textual en un recurso visual dinámico.

1. Elige un tema de tu área que normalmente expliques con texto (apuntes, resumen, esquema).
2. Usa el Prompt de Oro de la sección 3.2b para generar la **estructura de la infografía** con Copilot.
3. Crea la infografía en **Canva** (plan educativo) o **PowerPoint** siguiendo la estructura generada.
4. **Entregable:** infografía final en PDF + el prompt utilizado + breve reflexión (80 palabras) sobre si el resultado es más atractivo que el texto original.

### Actividad 3.5 — Personaliza materiales para 3 niveles *(individual)*

**Objetivo:** Personalizar el aprendizaje ajustando materiales multimodales a la diversidad de niveles del aula de forma rápida y escalable.

1. Elige un tema concreto de tu asignatura y genera una **explicación base** con Copilot o Gemini.
2. Usa el siguiente prompt para crear **3 versiones adaptadas** del mismo contenido:

```text
Actúa como un especialista en atención a la diversidad y Diseño 
Universal para el Aprendizaje (DUA).

Contexto: Enseño [TU ASIGNATURA] en [CURSO]. Tengo un grupo diverso 
con alumnado de distintos niveles de competencia curricular.

Texto base (explicación del tema):
[PEGAR LA EXPLICACIÓN GENERADA]

Tarea: Genera 3 versiones del mismo contenido adaptadas a niveles 
diferentes:

VERSIÓN A – Refuerzo:
- Lenguaje simplificado (frases cortas, vocabulario básico).
- Apoyo visual: sugiere un icono o imagen para cada concepto clave.
- Incluye 2 preguntas de comprensión tipo verdadero/falso.
- Máximo 200 palabras.

VERSIÓN B – Estándar:
- Mantiene el nivel original pero mejora la claridad.
- Añade 1 ejemplo práctico cotidiano.
- Incluye 2 preguntas de comprensión de respuesta breve.
- Máximo 350 palabras.

VERSIÓN C – Ampliación:
- Añade profundidad y conexiones interdisciplinares.
- Propone 1 reto de investigación autónoma.
- Incluye 2 preguntas de análisis crítico.
- Máximo 500 palabras.

Formato: Tres bloques claramente separados con el encabezado de 
cada versión.
```

3. Convierte la **Versión A** a audio con ElevenLabs o Edge "Leer en voz alta" (accesibilidad).
4. Crea una **mini-infografía** de la Versión B con Canva (atención visual).
5. **Entregable:** las 3 versiones en un documento + el audio de la Versión A (.mp3) + la infografía de la Versión B (PDF) + reflexión (150 palabras) sobre cómo esta técnica puede escalar a todo un trimestre.

### Actividad 3.6 — Plan multimodal para una SA *(grupal, sesión síncrona)*

1. En grupos de 3-4, elegid una **Situación de Aprendizaje** (puede ser la de un miembro del grupo).
2. Diseñad un **plan de recursos multimodales IA** usando esta tabla:

| Recurso | Herramienta elegida | Sesión de la SA | Principio DUA | Justificación |
|:--------|:-------------------|:----------------|:--------------|:--------------|
| | | | | |
| | | | | |
| | | | | |

3. Generad al menos **1 recurso** real (presentación, imagen o audio) durante la sesión.
4. **Entregable:** tabla completada + recurso generado + reflexión grupal (200 palabras).

---

## 📚 Recursos complementarios

- [Gamma — Crear presentaciones con IA](https://gamma.app)
- [ElevenLabs — Text to Speech](https://elevenlabs.io)
- [NotebookLM — Audio Overviews](https://notebooklm.google.com)
- [Microsoft Clipchamp](https://clipchamp.com) *(accede con tu cuenta `@edu.gva.es`)*
- [Canva para Educación](https://www.canva.com/education/) *(plan gratuito para docentes)*
- [Synthesia — Vídeos con avatares IA](https://www.synthesia.io)
- [HeyGen — Traducción de vídeo con IA](https://www.heygen.com)
- [Guías DUA — CAST](https://www.cast.org/impact/universal-design-for-learning-udl)

---

## ✅ Checklist de autoevaluación

Antes de pasar al Bloque 4, asegúrate de poder responder **sí** a todas estas preguntas:

- [ ] Sé crear una presentación educativa completa con Gamma y exportarla a `.pptx`.
- [ ] Puedo generar ilustraciones, guiones de cómic e infografías con herramientas de IA.
- [ ] He creado al menos un audio educativo con ElevenLabs o NotebookLM Audio Overview.
- [ ] Conozco Clipchamp como herramienta de vídeo del entorno GVA y sé añadir subtítulos automáticos.
- [ ] He practicado la personalización de materiales en 3 niveles (refuerzo, estándar, ampliación) aplicando el DUA.
- [ ] Sé transformar un texto de apuntes en un recurso visual (infografía) de forma rápida.
- [ ] Sé distinguir qué herramientas son seguras para datos del centro y cuáles solo para contenido público/ficticio.
- [ ] Puedo planificar la integración de recursos multimodales IA dentro de una Situación de Aprendizaje LOMLOE.

---

<p style="text-align:center; color:gray; font-size:0.85em;">
Curso 26IA92IN017 · CEFIRE · Generalitat Valenciana · 2026<br>
Contenido bajo licencia <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
</p>