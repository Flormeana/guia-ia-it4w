# Guía IA IT4W — Instrucciones para Copilot

## Contexto del proyecto
Estamos creando una guía interna para que cualquier persona de IT4W
(sin importar su área o nivel técnico) entienda cómo usar IA en VS Code
con GitHub Copilot + Claude.

## Audiencia objetivo
Personas no técnicas o semi-técnicas: UX, Comercial, QA.
NO son desarrolladores. Evitá jerga técnica sin explicar.

## Tono y estilo
- Simple, directo, sin humo
- Ejemplos concretos del trabajo real en IT4W
- Cada concepto debe poder explicarse en 2 oraciones
- Usá analogías cuando sea útil

## Estructura de cada sección
1. ¿Qué es? (1-2 oraciones)
2. ¿Para qué sirve? (caso de uso real)
3. ¿Cómo se usa? (pasos simples)
4. Ejemplo práctico para IT4W

## 🎨 Skills disponibles en este proyecto

Este proyecto tiene acceso a los siguientes skills de Anthropic.
Usá el skill correspondiente según la tarea:

### Diseño y visual
- Identidad de marca IT4W → #file:skills-main/skills/brand-guidelines/SKILL.md
- Diseño de layouts y canvas → #file:skills-main/skills/canvas-design/SKILL.md
- Tema visual consistente → #file:skills-main/skills/theme-factory/SKILL.md
- Diseño frontend/web → #file:skills-main/skills/frontend-design/SKILL.md

### Documentos y contenido
- Redacción colaborativa → #file:skills-main/skills/doc-coauthoring/SKILL.md
- Comunicación interna → #file:skills-main/skills/internal-comms/SKILL.md

### Exportación final
- Crear presentación .pptx → #file:skills-main/skills/pptx/SKILL.md
- Exportar como PDF → #file:skills-main/skills/pdf/SKILL.md
- Exportar como Word → #file:skills-main/skills/docx/SKILL.md

## 📋 Regla de uso de skills
Antes de ejecutar cualquier tarea de diseño o documentación,
SIEMPRE cargá el skill correspondiente con #file:
No asumas el contenido de los skills — léelos antes de actuar.

## 🤖 Reglas de orquestación

Cuando el usuario pida redactar contenido:
→ Invocá el subagente /generar-seccion
→ Pasale el concepto a explicar y el archivo destino

Cuando el contenido esté redactado y necesite revisión:
→ Invocá el subagente /revisar-simplicidad
→ Pasale el archivo generado

Cuando la revisión esté aprobada (score ≥ 7):
→ Invocá el subagente /diseñar-seccion
→ Pasale el archivo revisado y el archivo destino en diseño/

Nunca hagas diseño antes de que el contenido
esté revisado y aprobado.