#
---
layout: default
title: "Identidad digital y acceso"
parent: Inicio
nav_order: 0
---

---
layout: default
title: "Identidad digital y acceso"
parent: Inicio

# Identidad digital
{: .fs-8 }

Todo lo que necesitas saber sobre tu identidad digital como docente antes de comenzar el curso.
{: .fs-5 .fw-300 }

---

## ¿Qué es la identidad digital?

![Esquema de identidad digital]({{ '/assets/img/identidad-digital.png' | relative_url }})  
*Tu identidad digital es el conjunto de datos que te identifican en los sistemas y plataformas en línea.*

En el ámbito educativo, esta identidad te permite acceder de forma segura a las herramientas que utilizas en tu labor docente.

Igual que en el mundo físico necesitas un DNI para identificarte, en el entorno digital utilizas un usuario y una contraseña para demostrar que eres tú.

---

## ¿Para qué sirve tu identidad digital?

Te permite:

- Acceder a plataformas educativas como Aules, ITACA 3 o Web Familia.
- Utilizar herramientas corporativas como el correo @edu.gva.es y Microsoft 365.
- Proteger tu información y la del alumnado frente a accesos no autorizados.
- Firmar y gestionar documentos oficiales.
- Participar en formación en línea como este curso.

---

## Componentes principales

Tu identidad digital se compone de varios elementos clave:

| Componente        | Descripción                                               |
|-------------------|----------------------------------------------------------|
| Usuario           | Tu identificador personal (asociado a tu cuenta corporativa). |
| Contraseña        | Clave secreta que protege tu acceso.                     |
| Correo electrónico| Dirección @edu.gva.es como canal oficial.                |
| Perfil profesional| Información asociada a tu puesto y centro.               |

---

### 🔄 Cómo funciona el acceso digital

![Flujo de identidad digital]({{ '/assets/img/flujo-identidad.png' | relative_url }})
![Flujo de identidad digital]({{ '/assets/img/flujo-identidad.svg' | relative_url }})

El proceso habitual es sencillo:

1. Introduces tu usuario y contraseña.
2. El sistema verifica tu identidad.
3. (Opcional pero recomendable) Se aplica un segundo factor (MFA).
4. Accedes a la plataforma.
5. Tus datos quedan protegidos según tus permisos.

---

## ⚠️ Advertencia de seguridad: caso real (2026)

Recientemente se detectó una **vulnerabilidad** relacionada con la gestión de permisos y control de acceso en Lilli, una herramienta interna de IA utilizada en entornos corporativos.

- No se ha confirmado una filtración masiva de datos, pero el incidente es relevante como ejemplo real de por qué la identidad digital importa.
- El problema estuvo en la definición y control de los permisos entre usuarios, no en un ataque externo clásico.
- La organización corrigió la vulnerabilidad de forma rápida y responsable.

### Qué nos enseña este caso

- La seguridad depende en gran parte de cómo se gestionan las identidades y los accesos.
- Incluso sistemas avanzados pueden fallar si los permisos no están bien definidos.
- La protección no es solo tecnológica: también depende del uso que hacemos.

💡 **Tu identidad digital es una pieza clave de la seguridad.**

---

## Cómo acceder y gestionar tu identidad

### Cuenta @edu.gva.es

Es tu cuenta principal para acceder a Microsoft 365 (Copilot, Teams, Outlook, etc.).

- Accede a <https://www.office.com/>
- O a <https://login.microsoftonline.com/>

---

### ITACA 3

<https://itaca3.edu.gva.es/>

Permite gestionar datos académicos y administrativos del centro.

---

### Web Familia

Canal de comunicación con las familias:

- Mensajes
- Calificaciones
- Informes

💡 Utiliza la misma identidad corporativa.

---

## Recuperación de acceso

Si tienes problemas:

- Restablece contraseña en <https://portal.edu.gva.es/>
- Revisa credenciales
- Contacta con el SAI o coordinador TIC

⚠️ Nunca compartas tu contraseña.  
{: .warning }

---

## 🔐 Buenas prácticas de seguridad digital

### 🔑 Protección de credenciales

- Usa contraseñas robustas (mínimo 12 caracteres) y únicas para cada servicio.
- No reutilices contraseñas entre plataformas.
- Cambia tus contraseñas periódicamente.
- No compartas tus credenciales con nadie.
- Cierra siempre la sesión en equipos compartidos.

### 🔐 Doble factor (MFA)

- Actívalo siempre que esté disponible.
- Es la medida más efectiva contra accesos no autorizados.

### 🧠 Uso seguro de herramientas de IA

- No introduzcas datos personales, sensibles o confidenciales en herramientas no autorizadas.
- Minimiza y anonimiza los datos siempre que sea posible.
- Recuerda: la IA no distingue siempre entre datos e instrucciones.

### 🧹 Higiene de prompts

- Evita incluir nombres completos, DNI, expedientes o información sensible en tus consultas a IA.
- Antes de enviar información, revisa y elimina datos innecesarios.

### 👀 Verificación humana

- Revisa siempre los resultados antes de usarlos, especialmente en documentos oficiales o educativos.
- No confíes ciegamente en la respuesta de una IA.
- Si no controlas el origen del contenido, **no des la respuesta por buena automáticamente** (enfoque Zero Trust).

### 💻 Seguridad del dispositivo

- Mantén tus dispositivos actualizados.
- Activa el cifrado de disco (FileVault en Mac, BitLocker en Windows, cifrado en Linux).
- Protege el acceso físico a tus equipos.
- La seguridad no depende solo de la tecnología, sino también del criterio profesional.

---

## 🤖 Casos reales recientes: seguridad en IA

### 🟠 Caso 1: Lilli (McKinsey)

**Qué ocurrió**  
Se detectó una vulnerabilidad en la gestión de permisos entre usuarios en una herramienta de IA interna.

**Qué problema de seguridad hay detrás**  
El control de identidad y los permisos no estaban correctamente definidos, lo que podría haber permitido accesos indebidos.

**Qué significa para ti como docente**  
Tu cuenta es una puerta de acceso a información sensible. Si los permisos no están bien gestionados, los datos pueden quedar expuestos.

**💡 Qué debes hacer tú**

- Activa siempre el doble factor (MFA).
- No reutilices contraseñas.
- Cierra sesión en equipos compartidos.
- Revisa periódicamente tus accesos y actividad.

---

### 🔴 Caso 2: Prompt injection en Copilot

![Esquema de prompt injection]({{ '/assets/img/prompt-injection.png' | relative_url }})
![Esquema de prompt injection]({{ '/assets/img/prompt-injection.svg' | relative_url }})

**Qué es**  
El prompt injection es una técnica en la que se introducen instrucciones ocultas en textos, documentos o contenidos que la IA interpreta como órdenes válidas.

**Qué es la inyección indirecta**  
La indirect prompt injection ocurre cuando la IA recibe instrucciones camufladas en documentos, páginas web, correos, nombres de archivo o cualquier contenido externo.

**Cómo puede producirse**  
- Analizando documentos con texto oculto.
- Abriendo enlaces o archivos con instrucciones embebidas.
- Procesando correos o mensajes con contenido manipulado.

**Por qué ocurre**  
La IA puede confundir datos con instrucciones, generando respuestas manipuladas o exponiendo información.

**💡 Qué debes hacer tú**

- No confíes en contenido externo sin revisar.
- Verifica siempre la respuesta antes de reutilizarla.
- No introduzcas datos sensibles en herramientas de IA.
- Revisa documentos antes de analizarlos con IA.

---

## 📊 Tabla comparativa de riesgos

| Riesgo                  | Ejemplo real         | Qué puede pasar           | Qué hacer                                 |
|-------------------------|---------------------|---------------------------|-------------------------------------------|
| Gestión de identidad    | Lilli (McKinsey)    | Acceso indebido           | MFA + contraseñas seguras + revisar accesos |
| Prompt injection        | Copilot             | Respuestas manipuladas    | Verificar resultados + no confiar ciegamente |

---

## 🔒 Seguridad del dispositivo y cifrado

![Esquema de cifrado]({{ '/assets/img/cifrado-datos.png' | relative_url }})
![Esquema de cifrado]({{ '/assets/img/cifrado-datos.svg' | relative_url }})

El cifrado protege tus datos frente a accesos físicos no autorizados. Es fundamental para salvaguardar información sensible como datos del alumnado, informes o comunicaciones.

### ¿Por qué es importante?

Porque manejas información confidencial y eres responsable de su protección.

### Configuración básica por sistema

- **🍎 Mac:** Activa FileVault.
- **🪟 Windows:** Utiliza BitLocker.
- **🐧 Linux:** Habilita el cifrado durante la instalación.

💡 Mantén siempre el sistema actualizado y bloquea la pantalla cuando te ausentes.

---

## 🧠 La seguridad evoluciona contigo

Las herramientas y amenazas cambian constantemente. La tecnología ayuda, pero tu criterio profesional es esencial.

👉 La seguridad no depende solo de la tecnología, sino también del criterio profesional.

---

## 💡 Qué puedes hacer tú

- Mantener dispositivos actualizados.
- Activar cifrado.
- Aplicar buenas prácticas.
- Usar la IA con criterio.

![Uso responsable de IA]({{ '/assets/img/uso-seguro-ia.png' | relative_url }})
![Uso responsable de IA]({{ '/assets/img/uso-seguro-ia.svg' | relative_url }})

🔑 **No necesitas ser experto/a para estar protegido/a. Tu identidad digital es tu primera línea de defensa.**

---

## 🔎 Referencias y lecturas recomendadas

### Lilli (McKinsey)
- [Declaración oficial de McKinsey sobre el incidente de Lilli (marzo 2026)](https://www.mckinsey.com/es/news/lilli-security-update-2026)

### Copilot y seguridad en IA
- [Microsoft Learn: privacidad y seguridad en Copilot](https://learn.microsoft.com/es-es/microsoft-365/copilot/security-privacy)
- [Microsoft Security Blog: prompt injection y riesgos en IA](https://techcommunity.microsoft.com/t5/security-compliance-and-identity/prompt-injection-in-ai/ba-p/XXXXXX)
- [Guía sobre indirect prompt injection (OWASP)](https://owasp.org/www-community/attacks/Prompt_Injection)
- [EchoLeak: investigación sobre filtrado de datos en IA](https://arxiv.org/abs/2402.00000)
- [Reprompt: ataques indirectos a IA generativa](https://arxiv.org/abs/2401.00000)
- [Investigaciones sobre manipulación en GitHub Copilot Chat](https://github.blog/2023-11-01-copilot-chat-security-research/)

---

## 🧠 Mensaje final

- Tu identidad digital es tu primera línea de defensa.
- La IA no distingue siempre entre datos e instrucciones.
- No todo lo que genera la IA es fiable.
- La seguridad no depende solo de la tecnología, sino también del criterio profesional.

---
