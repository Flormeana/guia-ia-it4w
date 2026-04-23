# IA en VS Code — Guía práctica IT4W

> **Iniciativa Adopción IA 2026**
> Para UX, Comercial, QA y cualquier área de IT4W.
> Sin importar tu nivel técnico.

---

## Índice

| # | Sección | Concepto clave |
|---|---------|---------------|
| [01](#s01) | Los modos de trabajo | Ask, Plan y Agent |
| [02](#s02) | GitHub Copilot vs Claude | El mismo lugar, distinto motor |
| [03](#s03) | Skills | El manual de comportamiento de la IA |
| [04](#s04) | Agentes y subagentes | El director y los especialistas |
| [05](#s05) | MCP | El puente entre la IA y otras herramientas |
| [06](#s06) | Orquestación | Un pedido, todo el equipo trabajando |
| [07](#s07) | Ejercicio de inicio | Hacelo vos, todo en orden |

---

<a id="s01"></a>
# Sección 01 — Los modos de trabajo: Ask, Plan y Agent

> "VS Code es la oficina. La IA es el equipo que trabaja adentro."

---

## ¿Qué es?

Cuando abrís el chat de GitHub Copilot en VS Code, podés elegir **cómo querés que la IA trabaje** con vos.
Hay tres modos: **Ask**, **Plan** y **Agent** — cada uno con un nivel distinto de autonomía.

> Pensalo como pedirle algo a un asistente:
> - Ask = "¿me explicás esto?"
> - Plan = "¿cómo lo harías vos?"
> - Agent = "hacelo vos, yo te sigo."

---

## ¿Para qué sirve cada uno?

### 🔍 Ask — Para explorar y entender

Ask es el modo de **consulta**. Hacés una pregunta y la IA responde. No toca nada, no modifica nada. Solo te explica o te orienta.

**Cuándo usarlo:**
- Cuando querés entender algo antes de actuar
- Cuando necesitás que alguien te resuma un documento o un proyecto
- Cuando tenés dudas y no sabés ni por dónde empezar

**Ejemplo IT4W:**
> Una diseñadora UX abre un proyecto que no conoce y escribe:
> *"¿Qué archivos tiene este proyecto y para qué sirve cada uno?"*
> La IA le explica todo sin tocar nada.

---

### 🗺️ Plan — Para pensar antes de hacer

Plan es el modo de **planificación**. Le pedís a la IA que te proponga cómo abordar una tarea. Te da una hoja de ruta, no una acción.

**Cuándo usarlo:**
- Antes de encarar algo nuevo o complejo
- Cuando querés entender qué pasos hay antes de ejecutar
- Cuando necesitás validar un enfoque con alguien (aunque ese alguien sea la IA)

**Ejemplo IT4W:**
> Un analista de QA quiere documentar un proceso de testing y escribe:
> *"Planificá cómo escribirías la documentación de este flujo de pruebas"*
> La IA devuelve un plan en pasos, sin escribir nada todavía.

---

### 🤖 Agent — Para ejecutar y delegar

Agent es el modo de **acción**. La IA no solo responde: **toma decisiones, usa herramientas y ejecuta tareas** por vos. Puede leer archivos, crear documentos, llamar a otros agentes y encadenar acciones.

**Cuándo usarlo:**
- Cuando ya sabés qué querés y querés que la IA lo haga
- Para tareas que requieren varios pasos coordinados
- Para ejecutar flujos completos: generar → revisar → diseñar

**Ejemplo IT4W:**
> Un diseñador de dashboards ejecuta en modo Agent:
> *"/generar-seccion concepto: KPIs de ventas archivo: contenido/kpis.md"*
> La IA lee el contexto del proyecto, redacta la sección y la guarda en el archivo indicado.

---

## ¿Cómo se usa?

1. Abrí el panel de chat de Copilot en VS Code (ícono de chat a la izquierda)
2. En la parte superior del chat, seleccioná el modo: **Ask**, **Plan** o **Agent**
3. Escribí tu pedido en lenguaje natural — no necesitás saber programar
4. Leé la respuesta y seguí desde ahí

> **Tip:** Si no estás segura de cuál usar, empezá con **Ask**. Siempre podés cambiar de modo.

---

## Resumen rápido

| Modo   | Lo que hace la IA         | Lo que vos hacés         |
|--------|--------------------------|--------------------------|
| Ask    | Responde y explica        | Preguntás y aprendés     |
| Plan   | Propone un camino         | Decidís si seguirlo      |
| Agent  | Ejecuta y produce         | Supervisás el resultado  |

---

<a id="s02"></a>
# Sección 02 — GitHub Copilot vs Claude: el mismo lugar, distinto motor

> "El mismo lugar, distinto motor."

---

## ¿Qué es?

En VS Code podés usar **distintos modelos de IA** dentro del mismo chat de Copilot.
**GitHub Copilot** es el asistente de Microsoft. **Claude** es el modelo de Anthropic. Ambos viven en el mismo panel, pero piensan distinto.

> Es como elegir entre dos médicos especialistas:
> los dos son buenos, pero uno tiene más experiencia en lo que necesitás.

---

## ¿Para qué sirve entender esto?

No todos los modelos son iguales para todas las tareas. Elegir bien el modelo puede hacer la diferencia entre una respuesta genérica y una respuesta que realmente sirve.

En IT4W trabajamos con Claude como modelo principal dentro de Copilot porque:
- Entiende instrucciones complejas en español con mayor precisión
- Puede leer y seguir guías de comportamiento (los **skills**)
- Es mejor para redactar, diseñar flujos y coordinar tareas largas

---

## Las diferencias clave

### GitHub Copilot (modelo base de Microsoft)
- Especializado en **código** y completado de texto
- Funciona muy bien para sugerencias mientras escribís
- Integrado nativamente con el editor VS Code

### Claude (modelo de Anthropic, integrado en Copilot)
- Especializado en **razonamiento y lenguaje natural**
- Entiende contexto largo y documentos complejos
- Ideal para redactar, revisar, planificar y coordinar flujos
- Puede leer y aplicar instrucciones (skills) de manera muy precisa

---

## ¿Cómo se cambia el modelo?

1. Abrí el chat de Copilot en VS Code
2. Hacé clic en el **selector de modelo** (arriba en el panel de chat, aparece el nombre del modelo actual)
3. Elegí el modelo que querés usar: GPT-4o, Claude Sonnet, etc.
4. Escribí tu pedido normalmente — el resto es igual

> **Tip IT4W:** Para tareas de redacción, revisión de documentos o ejecución de flujos con skills, usá **Claude Sonnet**. Para sugerencias rápidas de código, el modelo base de Copilot alcanza.

---

## Ejemplo práctico para IT4W

Sofía, de UX, necesita redactar las instrucciones de un flujo de pantallas para un cliente.

**Con Copilot base:** le da una respuesta genérica, en inglés, pensada para código.

**Con Claude Sonnet:** lee el archivo `copilot-instructions.md` del proyecto, entiende que el tono tiene que ser simple y sin jerga, y redacta directamente en el estilo IT4W.

---

## Resumen rápido

| Modelo           | Fuerte en...                  | Cuándo usarlo en IT4W               |
|------------------|-------------------------------|--------------------------------------|
| GitHub Copilot   | Código, sugerencias rápidas   | Cuando escribís archivos de config   |
| Claude Sonnet    | Lenguaje, contexto, flujos    | Redacción, revisión, orquestación    |

---

<a id="s03"></a>
# Sección 03 — Skills: el manual de comportamiento de la IA

> "Un skill es el manual de procedimientos que el especialista tiene sobre su escritorio."

---

## ¿Qué es?

Un **skill** es un archivo que le dice a la IA cómo comportarse en una tarea específica.
Le explica el tono, el formato, los pasos y las reglas que tiene que seguir.

> Pensalo como el **manual de onboarding** que le das a alguien nuevo en el equipo:
> "En IT4W hacemos las cosas así, con este tono, siguiendo estos pasos."

---

## ¿Para qué sirve?

Sin un skill, la IA improvisa. Con un skill, la IA sabe exactamente cómo querés que trabaje.

Los skills permiten que **cualquier persona del equipo**, sin importar si sabe programar o no, active un comportamiento específico de la IA con una sola línea.

**Beneficios clave:**
- La IA siempre produce resultados en el estilo IT4W
- No tenés que repetir las instrucciones cada vez
- Diferentes skills para diferentes tareas (diseño, redacción, revisión, exportación)
- Podés combinar varios skills en un mismo flujo

---

## Skills disponibles en este proyecto

| Para qué                  | Skill                    |
|---------------------------|--------------------------|
| Identidad de marca        | brand-guidelines         |
| Diseño de layouts/canvas  | canvas-design            |
| Redacción colaborativa    | doc-coauthoring          |
| Comunicación interna      | internal-comms           |
| Crear presentación .pptx  | pptx                     |
| Exportar como PDF         | pdf                      |
| Exportar como Word        | docx                     |

---

## ¿Cómo se usa?

**Opción 1 — Lo activa Copilot automáticamente:**
Copilot lee las instrucciones del proyecto (`.github/copilot-instructions.md`) y sabe qué skill cargar según la tarea.

**Opción 2 — Lo cargás vos con `#file:`:**
```
#file:skills-main/skills/doc-coauthoring/SKILL.md
Redactá la introducción del informe mensual de UX.
```
Esto le "adjunta" el skill a tu pedido.

---

## Ejemplo práctico para IT4W

**Situación:** El equipo de Comercial necesita redactar el newsletter interno del mes.

**Sin skill:** La IA produce un texto genérico, formal y en inglés.

**Con el skill `internal-comms`:** La IA sigue el formato de comunicación interna de la empresa: sección de progreso, planes y problemas, en el tono que ya usamos en IT4W, en español y listo para copiar.

---

## Regla importante

> **Nunca asumas que la IA ya sabe cómo trabajar.**
> Cada sesión empieza desde cero. Los skills son la forma de que la IA recuerde las reglas del equipo.

---

<a id="s04"></a>
# Sección 04 — Agentes y subagentes: el director y los especialistas

> "Un agente = un archivo .md con instrucciones. No importa cómo lo creaste, siempre termina siendo ese archivo."

---

## ¿Qué es?

Un **agente** es una IA que puede tomar decisiones, usar herramientas y completar tareas por sí sola.
Un **subagente** es otro agente que el primero puede "llamar" para que haga una tarea específica.

> Pensalo como una **producción audiovisual**:
> el director general coordina el proyecto, y llama a un especialista en sonido, a otro en iluminación y a otro en edición. Cada uno hace su parte. El director ensambla todo.

---

## ¿Para qué sirve?

La diferencia entre un agente y simplemente "chatear con la IA" es que el agente **actúa**:

- Lee archivos
- Crea documentos
- Llama a otros agentes especializados
- Encadena pasos automáticamente
- Toma decisiones en el camino si algo no sale como esperaba

Esto permite **delegar flujos completos**, no solo preguntas sueltas.

---

## El agente principal y los subagentes en IT4W

**Agente principal (Copilot + Claude en modo Agent):**
Recibe tu pedido, entiende el contexto del proyecto y decide qué hacer. Si la tarea es compleja, delega a subagentes especializados.

**Subagentes disponibles:**

| Subagente             | ¿Qué hace?                                              |
|-----------------------|---------------------------------------------------------|
| `/generar-seccion`    | Redacta una sección de la guía con el formato IT4W      |
| `/revisar-simplicidad`| Evalúa si el texto es claro para personas no técnicas   |
| `/diseñar-seccion`    | Genera el diseño visual de una sección aprobada         |

---

## ¿Cómo se invoca un subagente?

En el chat en modo **Agent**, escribís simplemente:

```
/generar-seccion concepto: agentes y subagentes archivo: contenido/04-agentes.md
```

---

## Flujo real en IT4W

Cuando alguien en Comercial necesita una sección nueva:

1. Escribe en modo Agent: *"Generá la sección sobre dashboards para el equipo de analytics"*
2. El agente principal recibe el pedido
3. Invoca `/generar-seccion` con el concepto y el archivo destino
4. `/generar-seccion` redacta el contenido con el estilo IT4W
5. El agente principal invoca `/revisar-simplicidad` automáticamente
6. Si el score es ≥ 7, invoca `/diseñar-seccion`
7. El resultado final queda en `contenido/` y `diseño/`

Todo esto pasa con **un solo pedido inicial** del usuario.

---

## ¿Por qué es potente?

Porque podés delegar flujos completos de trabajo, no solo respuestas. La IA trabaja **como un equipo**, no como una sola persona.

> **Analogía IT4W:** Es como pedirle a un PM que entregue un informe.
> El PM no lo hace todo solo: coordina con UX, con Comercial y con QA.
> Vos pedís el informe. El PM orquesta.

---

<a id="s05"></a>
# Sección 05 — MCP: el puente entre la IA y otras herramientas

> "MCP es el teléfono que le permite a la IA hablar con herramientas fuera de VS Code."

---

## ¿Qué es?

**MCP** (Model Context Protocol) es la forma en que la IA se conecta con otras herramientas y servicios externos.
En términos simples: MCP le da a la IA "manos" para trabajar con el mundo fuera del chat.

> Es como darle a un asistente **acceso a tus aplicaciones**:
> ahora no solo puede decirte cómo hacer algo, sino hacerlo directamente en Figma, Notion, Slack o donde sea.

---

## ¿Para qué sirve?

Sin MCP, la IA vive dentro del chat: lee lo que le mandás y responde texto.
**Con MCP**, la IA puede:

- Conectarse a **Figma** y leer o crear componentes de diseño
- Consultar datos de un **dashboard** en tiempo real
- Leer y escribir en **Google Docs**, **Notion** o **Confluence**
- Interactuar con APIs de herramientas del negocio
- Navegar páginas web y extraer información

Esto convierte la IA de "asistente de chat" a **integrante activo del flujo de trabajo**.

---

## ¿Cómo funciona en la práctica?

Un servidor MCP es un programa que le dice a la IA qué puede hacer con una herramienta específica.

**No necesitás configurarlo vos.** Un desarrollador o el área técnica lo configura una vez, y después todos en el equipo se benefician.

---

## Ejemplos concretos en IT4W

### Caso UX — Figma
```
"Revisá los componentes del archivo de Figma del proyecto Clientes
 y decime si el botón de acción primaria es consistente en todas las pantallas."
```

### Caso Analytics — Dashboard
```
"Resumí los 5 indicadores más bajos del dashboard de ventas de esta semana."
```

### Caso Comercial — Confluence
La IA actualiza páginas de documentación sin que tengas que copiar y pegar.

---

## Sin MCP vs Con MCP

| Sin MCP                        | Con MCP                                  |
|--------------------------------|------------------------------------------|
| La IA solo responde texto      | La IA puede actuar en otras herramientas |
| Copiás y pegás los resultados  | Los resultados van directo a donde deben |
| Contexto limitado al chat      | Contexto real de tus proyectos y datos   |

---

<a id="s06"></a>
# Sección 06 — Orquestación: un pedido, todo el equipo trabajando

> "El agente principal es el director de orquesta: vos le decís qué querés lograr, y él decide qué especialista llamar y en qué orden."

---

## ¿Qué es?

**Orquestación** es cuando la IA coordina automáticamente múltiples pasos y agentes para completar una tarea compleja.
Vos hacés un solo pedido. La IA arma el equipo, distribuye el trabajo y entrega el resultado.

> Es como llamar a un **catering para un evento**:
> vos decís "quiero un asado para 30 personas el sábado",
> y ellos organizan el fuego, la comida, el servicio y la limpieza.
> Vos no coordinás a cada persona del equipo — solo hacés el pedido inicial.

---

## Sin orquestación vs Con orquestación

**Sin orquestación — 6 pasos manuales:**
1. Pedirle a la IA que redacte
2. Copiar el resultado
3. Pedirle que lo revise
4. Copiar de nuevo
5. Pedirle que lo diseñe
6. Guardarlo en el lugar correcto

**Con orquestación — 1 pedido:**
Todo eso pasa automáticamente con un solo mensaje.

---

## El flujo de orquestación en IT4W

```
PEDIDO INICIAL
     ↓
/generar-seccion  →  Redacta el contenido con el estilo IT4W
     ↓
/revisar-simplicidad  →  Evalúa si es claro para no-técnicos (score 1-10)
     ↓ (si score < 7 → vuelve a generar)
     ↓ (si score ≥ 7)
/diseñar-seccion  →  Genera el diseño visual de la sección
     ↓
RESULTADO FINAL en contenido/ y diseño/
```

Las reglas están definidas en `.github/copilot-instructions.md` — el "libro de reglas" del equipo.

---

## Ejemplo práctico para IT4W

**Pedido de la diseñadora UX:**
> *"Generá la sección sobre el proceso de entrevistas de usuarios para la guía interna."*

**Lo que pasa detrás:**
1. El agente principal recibe el pedido
2. Lee `copilot-instructions.md` para entender las reglas
3. Invoca `/generar-seccion` con el contexto
4. El subagente redacta la sección
5. El agente principal invoca `/revisar-simplicidad` → Score: 8
6. Aprobado → invoca `/diseñar-seccion`
7. El resultado queda en `contenido/` y `diseño/`

**La diseñadora recibió el resultado completo** sin tener que coordinar nada.

---

## Por qué esto importa para IT4W

La orquestación convierte la IA en algo más que un buscador avanzado.
La convierte en un **flujo de producción automatizado** que cualquier persona del equipo puede activar.

Sin saber programar. Sin tener que aprender el flujo de trabajo. Solo con un pedido en lenguaje natural.

---

<a id="s07"></a>
# Ejercicio de Inicio — Hacelo vos, todo en orden

> "Git no guarda en otro lado — guarda la historia dentro de tu carpeta."

---

> Este ejercicio pone en práctica todo lo que aprendiste en la guía.
> No necesitás saber programar. Solo seguí los pasos en orden.
> Al terminar, vas a haber usado los tres modos, dos subagentes y Git.

**Tiempo estimado:** 20-30 minutos
**Lo que vas a necesitar:** VS Code abierto con este proyecto

---

## Antes de empezar

Asegurate de tener el panel de chat de Copilot abierto en VS Code.

---

## PASO 1 — Modo Ask: Explorá el proyecto

**Seleccioná el modo:** `Ask`

**Escribí exactamente esto:**
```
¿Qué archivos tiene este proyecto?
```

La IA te lista los archivos y explica para qué sirve cada uno. No crea nada, no modifica nada.

---

## PASO 2 — Modo Plan: Planificá antes de hacer

**Seleccioná el modo:** `Plan`

**Escribí exactamente esto:**
```
Planificá cómo escribirías la sección sobre agentes
```

La IA te devuelve un plan en pasos — todavía no escribe nada.

> Podés responderle: *"Cambiá el ejemplo por uno de UX"* y va a ajustar antes de ejecutar.

---

## PASO 3 — Modo Agent: Ejecutá con un subagente

**Seleccioná el modo:** `Agent`

**Escribí exactamente esto:**
```
/generar-seccion concepto: agentes archivo: prueba-agentes.md
```

El subagente `/generar-seccion` redacta la sección y la guarda en el archivo indicado.

---

## PASO 4 — Revisá con el subagente revisor

**Seguí en modo:** `Agent`

**Escribí exactamente esto:**
```
/revisar-simplicidad archivo: prueba-agentes.md
```

El subagente evalúa y te da un score del 1 al 10:

| Score | Qué significa                                      |
|-------|----------------------------------------------------|
| 1-4   | Texto muy técnico, hay que reescribir              |
| 5-6   | Entendible pero mejorable, revisar sugerencias     |
| 7-8   | Buen nivel, apto para la guía                      |
| 9-10  | Excelente, cualquier persona en IT4W lo entiende   |

---

## PASO 5 — Guardá tu trabajo con Git

Git es como el historial de versiones de Google Docs, pero más potente.
Cada commit guarda un punto al que podés volver si algo sale mal.

**Abrí la terminal** (`Ctrl + ñ`) y ejecutá:

```bash
git add .
git commit -m "ejercicio: primera sección generada"
```

---

## ¡Lo lograste! 🎉

| Paso | Modo     | Qué aprendiste                              |
|------|----------|---------------------------------------------|
| 1    | Ask      | Explorar sin tocar nada                     |
| 2    | Plan     | Pensar antes de ejecutar                    |
| 3    | Agent    | Invocar un subagente por primera vez        |
| 4    | Agent    | Revisar y entender el score de simplicidad  |
| 5    | Terminal | Guardar el trabajo con Git                  |

---

## ¿Qué sigue?

Elegí un concepto de tu trabajo diario en IT4W y dejá que la IA lo explique:

```
/generar-seccion concepto: [algo de tu área] archivo: contenido/mi-seccion.md
```

---

## 📁 Repositorio oficial IT4W

Todo el material de la iniciativa Adopción IA está acá:

[Ir al Repositorio IT4W — Adopción IA 2026](https://it4wnet.sharepoint.com/sites/DSML/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDSML%2FShared%20Documents%2FAdopcion%2FIniciativaIT4W_2026%2FRepoAdopcion&p=true&ct=1776958121309&or=Teams%2DHL&ga=1&LOF=1)
