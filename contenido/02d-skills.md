# Skills: el manual de procedimientos de la IA

Cuando le pedís algo a la IA sin darle contexto, te da una respuesta genérica. Cuando le dás un skill, le das el contexto que necesita para hacer el trabajo como IT4W lo hace.

---

> "Un skill es el manual de procedimientos que el especialista tiene sobre su escritorio."

---

## ¿Qué es un skill?

Un skill es un archivo de texto con instrucciones especializadas. Le explicás a la IA cómo hacer una tarea específica: qué tono usar, qué formato seguir, qué reglas respetar, qué ejemplos tener en cuenta.

No es código. Es texto. Instrucciones escritas como para explicarle a una persona nueva cómo se hacen las cosas en IT4W.

---

## ¿Dónde viven los skills?

En este proyecto, los skills están en la carpeta:
```
skills-main/skills/
```

Cada skill tiene su propia subcarpeta con un archivo `SKILL.md` adentro. Ese archivo es el skill.

Por ejemplo:
- `skills-main/skills/doc-coauthoring/SKILL.md` — para redactar documentos
- `skills-main/skills/internal-comms/SKILL.md` — para comunicaciones internas
- `skills-main/skills/brand-guidelines/SKILL.md` — para respetar la identidad IT4W

---

## ¿Cómo se activan?

Hay dos formas:

**Opción 1 — Citarlos en el chat con #file:**
```
#file:skills-main/skills/doc-coauthoring/SKILL.md

Redactá una guía de bienvenida para personas nuevas en el área de QA.
```

**Opción 2 — Dejarlos en las instrucciones permanentes del proyecto:**
Si el archivo `.github/copilot-instructions.md` menciona el skill, queda activo automáticamente para todo el proyecto. No tenés que citarlo cada vez.

---

## Ejemplo concreto para UX en IT4W

Sofía de UX necesita documentar el flujo de onboarding de la app.

**Sin skill:**
Le pide a la IA que redacte la documentación. La IA escribe algo genérico, con tono técnico, sin respetar el formato IT4W.

**Con skill `doc-coauthoring`:**
```
#file:skills-main/skills/doc-coauthoring/SKILL.md

Redactá la documentación del flujo de onboarding de la app.
La audiencia es el equipo de diseño y los stakeholders de negocio.
```
La IA ya sabe el tono, el formato y qué incluir. El resultado sale listo para compartir.

---

## Skills disponibles en IT4W

| Skill | Para qué sirve |
|---|---|
| `brand-guidelines` | Respetar la identidad visual IT4W |
| `canvas-design` | Diseñar layouts y canvas |
| `doc-coauthoring` | Redactar documentos internos |
| `internal-comms` | Comunicaciones internas con tono IT4W |
| `pptx` | Generar presentaciones .pptx |
| `pdf` | Exportar como PDF |
| `docx` | Exportar como Word |

---

## La regla de uso

Antes de ejecutar cualquier tarea de diseño o documentación, cargá el skill correspondiente con `#file:`. No asumas el contenido — leelo antes de actuar.

---

*Siguiente: agentes y subagentes — el director y los especialistas.*
