# Sección 5 — MCP: el puente entre la IA y otras herramientas

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

Un servidor MCP es un programa que le dice a la IA qué puede hacer con una herramienta específica. Cuando está configurado, la IA puede usarlo directamente desde el chat.

**No necesitás configurarlo vos.** Un desarrollador o el área técnica lo configura una vez, y después todos en el equipo se benefician.

---

## Ejemplos concretos en IT4W

### Caso UX — Figma
La IA se conecta al archivo de Figma del proyecto, lee los componentes existentes y genera sugerencias de diseño basadas en lo que ya existe. Sin salir de VS Code.

```
"Revisá los componentes del archivo de Figma del proyecto Clientes
 y decime si el botón de acción primaria es consistente en todas las pantallas."
```

### Caso Analytics — Dashboard
La IA se conecta a la fuente de datos del dashboard y puede resumir los KPIs del mes o detectar anomalías.

```
"Resumí los 5 indicadores más bajos del dashboard de ventas de esta semana."
```

### Caso Comercial — Documentación
La IA se conecta a Confluence y puede actualizar una página con la información nueva sin que tengas que copiar y pegar.

---

## Skills relacionados con MCP en este proyecto

El skill `mcp-builder` (en `skills-main/skills/mcp-builder/`) permite construir servidores MCP para nuevas integraciones. Esto lo usa el equipo técnico cuando quieren que la IA se conecte a una herramienta nueva.

---

## Resumen

| Sin MCP                        | Con MCP                                  |
|--------------------------------|------------------------------------------|
| La IA solo responde texto      | La IA puede actuar en otras herramientas |
| Copiás y pegás los resultados  | Los resultados van directo a donde deben |
| Contexto limitado al chat      | Contexto real de tus proyectos y datos   |
