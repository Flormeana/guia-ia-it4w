# Agentes y subagentes: el director y los especialistas

Un agente es una IA configurada para hacer una tarea específica. Un subagente es un agente especialista que el agente principal llama cuando lo necesita.

---

> "Un agente = un archivo .md con instrucciones. No importa cómo lo creaste, siempre termina siendo ese archivo."

---

## La analogía del equipo de producción

Imaginá el rodaje de una película. Hay un director (el agente principal). Cuando necesita el guión, llama al guionista. Cuando necesita el afiche, llama al diseñador. Cuando necesita revisar el presupuesto, llama al productor.

Vos le hablás solo al director: "quiero una película de acción con protagonista femenina". Él coordina al resto.

En VS Code, vos le hablás al agente principal. Él decide qué especialistas llamar y en qué orden.

---

## Agente principal vs subagentes

**Agente principal:** Lee las instrucciones del proyecto (el archivo `.github/copilot-instructions.md`) y coordina el flujo completo. Cuando recibe un pedido, decide qué hacer primero, qué hacer después, y a quién llamar.

**Subagentes:** Son agentes especializados en una tarea concreta. Solo hacen eso. Hacen mejor trabajo que un agente generalista porque tienen foco.

---

## Los tres subagentes de esta guía

| Subagente | Qué hace |
|---|---|
| `/generar-seccion` | Redacta el contenido de una sección |
| `/revisar-simplicidad` | Evalúa la claridad del texto (puntaje 1-10) |
| `/diseñar-seccion` | Genera el diseño visual — solo si el score es ≥ 7 |

---

## Las tres formas de crear un agente

### 1. Desde la interfaz de VS Code

En el panel de Copilot Chat hay una opción para crear agentes. VS Code te guía con un formulario. Es la forma más fácil para empezar.

### 2. Creando el archivo a mano

Un agente es un archivo `.md` en la carpeta `.github/agents/` (o similar, según la configuración del proyecto). El archivo tiene instrucciones escritas en lenguaje natural. Si lo creás a mano, tenés control total sobre qué dice.

### 3. Pidiéndoselo al Agent en el chat

Con el modo Agent activo, podés pedirle:
```
Creá un agente llamado "revisor-ux" que evalúe si un texto
es claro para usuarios sin experiencia técnica.
Guardalo en .github/agents/revisor-ux.md
```
La IA crea el archivo del agente por vos.

---

## La regla de oro

> "Un agente con foco hace mejor trabajo que un agente que hace todo."

Un agente que sabe exactamente una cosa la hace bien. Un agente que tiene que hacer todo a la vez se confunde, pierde contexto y produce resultados mediocres.

Por eso en IT4W dividimos el trabajo en tres subagentes con roles claros: uno genera, uno revisa, uno diseña.

---

## El flujo completo

```
Tu pedido
    ↓
Agente principal (lee las instrucciones del proyecto)
    ↓
/generar-seccion → redacta el contenido
    ↓
/revisar-simplicidad → evalúa la claridad
    ↓
¿Score ≥ 7? → /diseñar-seccion
¿Score < 7? → vuelve a generar con las sugerencias
    ↓
Resultado final
```

---

*Siguiente: MCP — el puente hacia el mundo exterior.*
