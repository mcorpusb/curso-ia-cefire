---
layout: page
title: "Bloque 1: IA Colaborativa y Gestión GVA"
nav_order: 1
---

# Bloque 1 · IA Colaborativa y Gestión GVA
{: .fs-8 }

Aprende a usar Microsoft Copilot como asistente integral para las tareas administrativas y organizativas del día a día en tu centro educativo.
{: .fs-5 .fw-300 }

---

## Objetivos del bloque

Al finalizar este bloque serás capaz de:

1. Acceder y configurar **Microsoft Copilot** con tu cuenta corporativa `@gva.es`.
2. Redactar **actas de reuniones** (claustro, CCP, equipos docentes) con asistencia de IA.
3. Componer y automatizar **correos electrónicos** profesionales dirigidos a familias, alumnado y administración.
4. Organizar tareas del aula: planificar horarios, inventarios y tablones de seguimiento.
5. Comparar el rendimiento de Copilot con **Gemini**, **Kimi** y **Grok** en tareas administrativas reales.

> **⚠️ Seguridad GVA:** Todas las prácticas de este bloque deben realizarse **primero en Copilot con tu cuenta `@gva.es`**. Solo después, y **sin datos personales reales**, puedes replicar el ejercicio en otras herramientas para comparar resultados.

---

## 1.1 · ¿Qué es Microsoft Copilot y por qué es la herramienta de la GVA?

Microsoft Copilot es el asistente de IA generativa integrado en el ecosistema Microsoft 365. La Generalitat Valenciana lo ha adoptado como herramienta corporativa porque:

| Ventaja | Detalle |
|:--------|:--------|
| **Protección de datos** | Los datos procesados permanecen dentro del tenant de la GVA y no se usan para entrenar modelos. |
| **Integración nativa** | Funciona dentro de Word, Outlook, Teams, Excel y OneNote sin salir de las aplicaciones que ya usas. |
| **Cumplimiento normativo** | Alineado con el RGPD y la política de privacidad corporativa de la GVA. |
| **Acceso con identidad verificada** | Se accede con la cuenta `@gva.es`, lo que garantiza trazabilidad y control de accesos. |

### Cómo acceder

1. Abre tu navegador y dirígete a [copilot.microsoft.com](https://copilot.microsoft.com).
2. Inicia sesión con tu **cuenta `@gva.es`** (la misma de Outlook y Teams).
3. Verifica que en la esquina inferior aparece la insignia **"Protegido"** o **"Protected"** — esto confirma que estás en el entorno corporativo.

> **💡 Ejemplo Primaria:** Si no ves la insignia "Protegido", cierra sesión y vuelve a entrar asegurándote de elegir tu cuenta institucional, no la personal.

---

## 1.2 · Redacción de actas de reuniones con IA

Redactar un acta de claustro, de CCP o de equipo docente es una tarea repetitiva que consume tiempo. Copilot puede generar un borrador estructurado a partir de unas pocas notas.

### 🏆 Prompt de Oro: Acta de claustro

```text
Actúa como el secretario/a de un centro público de Educación Primaria de la 
Comunitat Valenciana.

Contexto: Se ha celebrado un claustro ordinario el martes 22 de abril de 2026 
a las 13:00 h. Asistentes: 32 docentes (2 ausencias justificadas). Puntos del 
orden del día que se han tratado:
1. Aprobación del acta anterior.
2. Información del equipo directivo sobre las pruebas diagnósticas.
3. Propuesta de salida escolar al Oceanogràfic (3.er trimestre).
4. Revisión del protocolo de convivencia: nuevos casos.
5. Ruegos y preguntas.

Tarea: Redacta un acta formal con el formato habitual de un centro de la GVA, 
incluyendo: encabezado (centro, fecha, hora inicio/fin, asistentes), desarrollo 
de cada punto con acuerdos adoptados, y pie de firma del director/a y 
secretario/a. Usa un tono formal e impersonal.
```

> **🚀 Reto Secundaria/FP:** Adapta el prompt para un **Departamento Didáctico** de Secundaria. Cambia los puntos del orden del día e incluye: *"Seguimiento de la programación del 2.º trimestre"* y *"Coordinación con FCT (Formación en Centros de Trabajo)"*.

### Comparativa entre herramientas

| Criterio | Copilot (GVA) | Gemini | Kimi | Grok |
|:---------|:-------------:|:------:|:----:|:----:|
| Datos protegidos en entorno GVA | ✅ | ❌ | ❌ | ❌ |
| Formato acta formal en español | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Integración directa con Word | ✅ | ❌ | ❌ | ❌ |
| Calidad del tono administrativo | Muy alta | Alta | Media | Media |
| Acceso gratuito al docente GVA | ✅ (licencia corporativa) | ✅ (cuenta personal) | ✅ (cuenta personal) | ✅ (cuenta personal) |

---

## 1.3 · Automatización de correos electrónicos

Un docente medio envía decenas de correos semanales: convocatorias a familias, comunicaciones al equipo directivo, coordinaciones con orientación… Veamos cómo la IA agiliza este proceso.

### 🏆 Prompt de Oro: Correo a familias

```text
Actúa como tutor/a de 2.º de ESO en un IES público de la Comunitat Valenciana.

Contexto: Necesito informar a las familias sobre la excursión al Museu de les 
Ciències Príncipe Felipe el próximo 8 de mayo de 2026. El coste es de 12 € por 
alumno/a (entrada + autobús). La autorización debe devolverse firmada antes del 
2 de mayo. Hay 3 alumnos/as becados para los que el AMPA cubrirá el coste.

Tarea: Redacta un correo electrónico formal pero cercano dirigido a las familias 
con la siguiente estructura:
1. Saludo.
2. Información de la actividad (fecha, lugar, horario, objetivos pedagógicos).
3. Coste y forma de pago.
4. Plazo y mecanismo para entregar la autorización.
5. Nota sobre los alumnos becados (sin revelar identidades).
6. Despedida e información de contacto.

Formato: texto plano, listo para pegar en Outlook.
```

> **💡 Ejemplo Primaria:** Cambia el contexto a *"tutor/a de 1.º de Primaria"* y escribe: *"Redacta el correo en un tono más cálido y sencillo, ya que muchas familias tienen castellano como segunda lengua."*

### Iteración rápida: pedir variantes

Después de obtener el borrador, puedes encadenar peticiones en la misma conversación:

```text
Ahora genera una versión del mismo correo en valenciano (normas de la AVL).
```

```text
Genera una versión abreviada para enviar como recordatorio por Web Família.
```

---

## 1.4 · Organización del aula y gestión de tareas

Copilot puede ayudarte a organizar elementos cotidianos que no son estrictamente pedagógicos, pero consumen tiempo.

### 🏆 Prompt de Oro: Planificar horario de guardias

```text
Actúa como jefe/a de estudios de un IES de la Comunitat Valenciana con 45 docentes.

Contexto: Necesito organizar el cuadrante de guardias de patio y de aula para 
el 3.er trimestre (abril-junio 2026). Cada docente tiene entre 2 y 4 horas 
complementarias disponibles a la semana. Los recreos son de 11:00 a 11:30 y 
hay 6 zonas de patio que cubrir. Guardias de aula: 6 periodos lectivos al día.

Tarea:
1. Propón una plantilla de cuadrante semanal en formato tabla.
2. Incluye las reglas de distribución equitativa (máx. 2 guardias de patio y 
   2 de aula por docente/semana).
3. Indica cómo rellenarlo si te facilito la lista de docentes con sus horas 
   disponibles.

Formato de salida: tabla Markdown que pueda pegarse en un documento de Teams.
```

### 🏆 Prompt de Oro: Inventario de material del departamento

```text
Actúa como el/la responsable de un departamento de Tecnología e Informática.

Contexto: Necesito actualizar el inventario de material del taller y los 
ordenadores del aula de informática. Actualmente tenemos la información en 
un documento Word desactualizado.

Tarea: Diseña una plantilla de inventario en formato tabla con las siguientes 
columnas: [N.º | Artículo | Categoría | Cantidad | Estado (Bueno/Regular/Baja) | 
Ubicación | Fecha última revisión | Observaciones]. Incluye 5 filas de ejemplo 
con material típico de un taller de Tecnología de Secundaria.
```

> **🚀 Reto Secundaria/FP:** Pide a Copilot que genere la misma tabla pero en formato CSV para importar directamente en Excel. Después abre ese CSV en Excel y comprueba que los campos se han separado correctamente.

---

## 1.5 · Copilot dentro de Microsoft 365: integración práctica

Además del chat web, Copilot puede usarse de forma integrada en las aplicaciones del ecosistema Microsoft 365:

| Aplicación | Lo que Copilot puede hacer por ti |
|:-----------|:----------------------------------|
| **Outlook** | Resumir hilos largos de correo, redactar respuestas, priorizar bandeja de entrada. |
| **Word** | Generar borradores a partir de un esquema, reformular párrafos, cambiar tono/registro. |
| **Excel** | Crear fórmulas a partir de lenguaje natural, generar gráficos y tablas dinámicas. |
| **Teams** | Resumir reuniones grabadas, extraer tareas pendientes, generar actas automáticas. |
| **OneNote** | Organizar apuntes de reuniones, generar listas de tareas a partir de notas desestructuradas. |
| **PowerPoint** | Crear un borrador de presentación a partir de un documento Word o un esquema. |

### Ejemplo: resumir un hilo de correo en Outlook

1. Abre un hilo de correo largo en **Outlook Web** (con tu cuenta `@gva.es`).
2. Haz clic en el icono de **Copilot** que aparece en la parte superior del hilo.
3. Selecciona **"Resumir"**.
4. Copilot generará un resumen con los puntos clave y las acciones pendientes.

> **⚠️ Seguridad GVA:** La funcionalidad de Copilot integrado en Microsoft 365 **solo funciona con la licencia corporativa**. Si no ves el icono de Copilot en tus aplicaciones, contacta con el SAI (Servicio de Asistencia Informática) de tu centro.

---

## 1.6 · Comparativa en profundidad: Copilot vs. Gemini vs. Kimi vs. Grok

Para que puedas elegir la herramienta adecuada según el contexto, aquí tienes una comparativa detallada para las tareas de este bloque:

| Característica | Copilot (GVA) | Gemini (Google) | Kimi (Moonshot) | Grok (xAI) |
|:---------------|:-------------:|:---------------:|:---------------:|:-----------:|
| **Idioma español** | Nativo, excelente | Muy bueno | Bueno | Bueno |
| **Valenciano/Català** | Aceptable | Bueno | Limitado | Limitado |
| **Protección datos GVA** | ✅ Corporativo | ❌ Personal | ❌ Personal | ❌ Personal |
| **Redacción administrativa** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Correos formales** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Tablas y formatos** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Integración Office 365** | ✅ Nativa | ❌ (Google Workspace) | ❌ | ❌ |
| **Ventana de contexto** | ~128k tokens | ~1M tokens | ~2M tokens | ~128k tokens |
| **Mejor para (este bloque)** | Correo, actas, Teams | Documentos largos | Análisis extensos | Consultas rápidas |

### ¿Cuándo usar cada herramienta?

- **Copilot:** Siempre que trabajes con **datos del centro, alumnado o documentación interna**. Es tu opción por defecto.
- **Gemini:** Cuando necesites procesar o resumir **documentos públicos muy extensos** (BOE, DOGV, currículos completos) y no contengan datos personales.
- **Kimi:** Para analizar **PDFs largos** (memorias, planes de centro) gracias a su enorme ventana de contexto. Siempre con documentos anonimizados.
- **Grok:** Para **consultas rápidas** o cuando quieras una perspectiva diferente. Útil como segunda opinión, pero con menor calidad de formato en español.

---

## 📝 Actividades prácticas del Bloque 1

### Actividad 1.0 — Rompiendo el hielo con la IA *(individual, primera sesión)*

**Objetivo:** Perder el miedo inicial y descubrir la IA como aliada diaria.

1. Accede a **Copilot** con tu cuenta `@gva.es`. Verifica que aparece la insignia "Protegido".
2. Escribe este primer prompt informal para familiarizarte:

```text
Actúa como un asistente amigable para docentes. Soy profesor/a de 
[TU ÁREA] en [TU ETAPA EDUCATIVA] y nunca he usado IA generativa. 
Tengo curiosidad pero también algo de miedo. 

Dime en 5 puntos breves:
1. Qué puedes hacer por mí en mi día a día como docente.
2. Qué NO puedes hacer (para fijar expectativas realistas).
3. Una tarea sencilla que podamos hacer juntos/as ahora mismo 
   para que vea su utilidad inmediata.
```

3. Lee la respuesta y haz la tarea que te proponga la IA.
4. Ahora repite el mismo prompt en **Gemini** ([gemini.google.com](https://gemini.google.com)) con una cuenta personal. Compara el tono y las sugerencias.
5. **Entregable:** captura de pantalla de ambas respuestas + un párrafo breve (80 palabras) sobre tus primeras impresiones: ¿ha sido más fácil de lo esperado? ¿Qué te ha sorprendido?

> **💡 Nota:** Esta actividad está diseñada para que compruebes que la IA no es una caja negra misteriosa, sino una herramienta conversacional que se adapta a tus necesidades. No hay respuestas correctas o incorrectas.

### Actividad 1.1 — Mi primera acta con Copilot *(individual)*

1. Accede a Copilot con tu cuenta `@gva.es`.
2. Usa el "Prompt de Oro: Acta de claustro" (sección 1.2) adaptándolo a una reunión **de tu departamento o ciclo**.
3. Revisa el borrador: corrige errores factuales y ajusta el tono.
4. Exporta el resultado a un documento Word.
5. **Entregable:** sube el acta en formato `.docx` al foro del Bloque 1 en Aules.

### Actividad 1.2 — Correo a familias en dos idiomas *(individual)*

1. Redacta con Copilot un correo informativo sobre una actividad complementaria de tu área usando el prompt de la sección 1.3.
2. Pide a Copilot la versión en **valenciano**.
3. Compara el resultado con el que genera **Gemini** para el mismo prompt.
4. **Entregable:** documento con las dos versiones (Copilot vs. Gemini) y un breve párrafo (100 palabras) valorando diferencias.

### Actividad 1.3 — Organiza tu documentación docente desde cero con IA *(individual)*

**Objetivo:** Usar la IA para crear una estructura inteligente de documentación docente.

1. Lanza el siguiente prompt en **Copilot**:

```text
Actúa como un consultor de productividad especializado en organización 
docente para centros educativos de la Comunitat Valenciana.

Contexto: Soy [tutor/a | especialista | jefe/a de departamento] de 
[TU ÁREA] en [TU ETAPA]. Quiero organizar toda mi documentación digital 
desde cero usando Microsoft 365 (OneDrive, OneNote, Teams).

Tarea: Diseña un sistema de carpetas y plantillas que cubra:
1. Programaciones didácticas y situaciones de aprendizaje.
2. Materiales de clase por unidades/temas.
3. Evaluación: rúbricas, registros, actas de evaluación.
4. Comunicación: plantillas de correos a familias, informes.
5. Coordinación: actas de departamento/ciclo, documentos CCP.
6. Formación y desarrollo profesional.

Formato: árbol de carpetas con nombres descriptivos + breve 
explicación de qué va en cada una. Incluye 3 plantillas de 
OneNote listas para usar.

Restricciones: Todo dentro del ecosistema Microsoft 365 (seguridad GVA).
```

2. Implementa la estructura en tu **OneDrive** con tu cuenta `@gva.es`.
3. **Entregable:** captura de pantalla de tu árbol de carpetas creado + el prompt que has usado (con tus adaptaciones).

### Actividad 1.4 — Comparativa de herramientas *(grupal, sesión síncrona)*

1. En grupos de 3-4 personas, elegid **una tarea administrativa** de las vistas en el bloque (acta, correo, cuadrante, inventario).
2. Escribid el mismo prompt en **Copilot**, **Gemini** y **Kimi** (o **Grok**).
3. Completad la siguiente tabla de valoración:

| Criterio (1-5) | Copilot | Gemini | Kimi/Grok |
|:----------------|:-------:|:------:|:---------:|
| Calidad del contenido | | | |
| Formato y estructura | | | |
| Adecuación al contexto GVA | | | |
| Tono y registro | | | |
| Utilidad práctica inmediata | | | |

4. **Entregable:** tabla completada + conclusión grupal (200 palabras) en el foro de Aules.

> **💡 Reflexión de cierre del Bloque 1:** Al terminar estas actividades, valora: ¿el "miedo" inicial que podías sentir hacia la IA ha disminuido? ¿Ves ya alguna tarea concreta de tu día a día donde la IA puede ahorrarte tiempo? Comparte tu reflexión breve (3 frases) en el foro.

---

## 📚 Recursos complementarios

- [Microsoft Copilot — Centro de ayuda oficial](https://support.microsoft.com/es-es/copilot)
- [Política de privacidad de Microsoft 365 en la GVA](https://dgtic.gva.es) *(consulta la intranet de tu centro para el enlace actualizado)*
- [Guía de estilo del valenciano — AVL](https://www.avl.gva.es/)
- [Currículo LOMLOE Comunitat Valenciana (DOGV)](https://dogv.gva.es/)

---

## ✅ Checklist de autoevaluación

Antes de pasar al Bloque 2, asegúrate de que puedes responder **sí** a todas estas preguntas:

- [ ] He superado el primer contacto con la IA generativa y he comprobado que es una herramienta accesible y conversacional.
- [ ] Sé acceder a Copilot con mi cuenta `@gva.es` y verificar que estoy en el entorno protegido.
- [ ] Puedo redactar un acta estructurada usando un prompt bien definido.
- [ ] Soy capaz de generar un correo formal para familias y pedir variantes (idioma, tono, longitud).
- [ ] He organizado (o tengo un plan para organizar) mi documentación docente con una estructura inteligente creada con IA.
- [ ] Conozco las diferencias prácticas entre Copilot, Gemini, Kimi y Grok para tareas administrativas.
- [ ] Entiendo por qué debo usar Copilot como herramienta prioritaria cuando manejo datos del centro.

---

<p style="text-align:center; color:gray; font-size:0.85em;">
Curso 26IA92IN017 · CEFIRE · Generalitat Valenciana · 2026<br>
Contenido bajo licencia <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
</p>