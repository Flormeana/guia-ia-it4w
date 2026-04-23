# Sección 4 — Agentes y subagentes: el director y los especialistas

---

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

En este proyecto, la IA opera con esta lógica:

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

Es tan simple como escribirlo en el chat en modo **Agent**:

```
/generar-seccion concepto: agentes y subagentes archivo: contenido/04-agentes.md
```

La IA entiende que debe invocar ese subagente, pasarle los parámetros y guardar el resultado en el archivo indicado.

---

## Flujo real en IT4W

Cuando alguien en Comercial necesita una sección nueva de la guía:

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
