# Sección 2 — GitHub Copilot vs Claude: el mismo lugar, distinto motor

---

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
