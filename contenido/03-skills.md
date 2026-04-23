# Sección 3 — Skills: el manual de comportamiento de la IA

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

## ¿Cómo funciona?

Los skills son archivos `.md` (archivos de texto) que viven en la carpeta `skills-main/skills/` del proyecto.

Cuando activás un skill, la IA lee ese archivo **antes de ejecutar la tarea** y sigue sus instrucciones. Es como darle un briefing completo antes de empezar.

**Skills disponibles en este proyecto:**

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
En el chat, escribís algo como:
```
#file:skills-main/skills/doc-coauthoring/SKILL.md
Redactá la introducción del informe mensual de UX.
```
Esto le "adjunta" el skill a tu pedido.

---

## Ejemplo práctico para IT4W

**Situación:** El equipo de Comercial necesita redactar el newsletter interno del mes.

**Sin skill:**
La IA produce un texto genérico, formal y en inglés.

**Con el skill `internal-comms`:**
La IA sigue el formato de comunicación interna de la empresa: sección de progreso, planes y problemas, en el tono que ya usamos en IT4W, en español y listo para copiar.

---

## Regla importante

> **Nunca asumas que la IA ya sabe cómo trabajar.**
> Cada sesión empieza desde cero. Los skills son la forma de que la IA recuerde las reglas del equipo.
