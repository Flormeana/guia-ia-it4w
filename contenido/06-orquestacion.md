# Sección 6 — Orquestación: un pedido, todo el equipo trabajando

---

## ¿Qué es?

**Orquestación** es cuando la IA coordina automáticamente múltiples pasos y agentes para completar una tarea compleja.
Vos hacés un solo pedido. La IA arma el equipo, distribuye el trabajo y entrega el resultado.

> Es como llamar a un **catering para un evento**:
> vos decís "quiero un asado para 30 personas el sábado",
> y ellos organizan el fuego, la comida, el servicio y la limpieza.
> Vos no coordinás a cada persona del equipo — solo hacés el pedido inicial.

---

## ¿Para qué sirve?

Sin orquestación, para producir una sección de la guía tendrías que:
1. Pedirle a la IA que redacte
2. Copiar el resultado
3. Pedirle que lo revise
4. Copiar de nuevo
5. Pedirle que lo diseñe
6. Guardarlo en el lugar correcto

**Con orquestación**, todo eso pasa con un solo mensaje. La IA sabe cuál es el flujo, lo ejecuta y te entrega el resultado final.

---

## El flujo de orquestación en IT4W

Este proyecto tiene definido un flujo de orquestación de tres pasos:

```
PEDIDO INICIAL
     ↓
/generar-seccion  →  Redacta el contenido con el estilo IT4W
     ↓
/revisar-simplicidad  →  Evalúa si es claro para no-técnicos (score 1-10)
     ↓ (si score ≥ 7)
/diseñar-seccion  →  Genera el diseño visual de la sección
     ↓
RESULTADO FINAL en contenido/ y diseño/
```

Si el score de revisión es menor a 7, el subagente `/revisar-simplicidad` devuelve feedback y el agente principal vuelve a `/generar-seccion` para reescribir antes de continuar.

---

## ¿Dónde están definidas las reglas?

En el archivo `.github/copilot-instructions.md` del proyecto. Ahí están escritas las reglas que el agente principal lee automáticamente al empezar cada sesión:

- Qué subagentes existen
- En qué orden se invocan
- Cuándo se aprueba un paso para avanzar al siguiente
- Qué skills usar en cada etapa

> **Este archivo es el "libro de reglas" del equipo.** Todo lo que define cómo trabaja la IA en IT4W vive ahí.

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
