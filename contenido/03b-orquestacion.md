# Orquestación: un solo pedido, todo el equipo trabaja

Tenés el proyecto con los tres subagentes. Ahora vas a ver cómo funciona la orquestación: vos hacés un pedido, y el agente principal coordina el trabajo sin que tengas que hacer nada más.

---

> "El agente principal es el director de orquesta: vos le decís qué querés lograr, y él decide qué especialista llamar y en qué orden."

---

## ¿Cómo funciona la orquestación?

El agente principal lee las instrucciones del proyecto (el archivo `.github/copilot-instructions.md` que creaste). Ahí dice exactamente cómo trabajar: primero generar, después revisar, después diseñar solo si el score es bueno.

Vos solo hacés un pedido. El agente hace el resto.

---

## El ejercicio: generar una sección completa

Abrí el chat de Copilot en **modo Agent** y escribí este mensaje:

```
Documentá el concepto "Los modos de trabajo: Ask, Plan y Agent"
para alguien que nunca usó VS Code.
Guardalo en contenido/modos-de-trabajo.md
```

Apretá Enter y observá lo que pasa.

---

## ¿Qué vas a ver?

El agente principal va a empezar a trabajar. Vas a ver en el chat una serie de acciones:

**Paso 1 — Invoca /generar-seccion**

El agente llama al primer subagente. Vas a ver texto generándose. El subagente redacta la sección completa y la guarda en `contenido/modos-de-trabajo.md`.

**Paso 2 — Invoca /revisar-simplicidad**

El agente llama al segundo subagente. El revisor lee el archivo que acaba de generarse y lo evalúa. Vas a ver el puntaje y las sugerencias.

**Paso 3 — Decisión**

- Si el score es **7 o más**: el agente invoca `/diseñar-seccion` y genera el HTML.
- Si el score es **menor a 7**: el agente vuelve a `/generar-seccion` con las sugerencias incorporadas y repite el ciclo.

**Resultado final**

Cuando termina, tenés dos archivos nuevos:
- `contenido/modos-de-trabajo.md` — el texto revisado y aprobado
- `web/modos-de-trabajo.html` — la página visual lista

---

## Verificar los resultados

Cuando el agente termina:

**Revisá el contenido:**
Hacé clic en `contenido/modos-de-trabajo.md` en el Explorador. Leé la sección. ¿Tiene título? ¿Frase síntesis? ¿Ejemplos concretos? ¿Está escrito para alguien sin experiencia técnica?

**Revisá el diseño:**
Abrí `web/modos-de-trabajo.html` en tu browser. ¿Tiene sidebar? ¿Cards con borde violeta? ¿Breadcrumb? ¿Botones Anterior/Siguiente?

---

## Si algo salió mal

La IA puede cometer errores. Si el archivo no se creó, si el score fue muy bajo, o si el HTML no se ve bien, no hay problema. Podés pedirle que lo corrija:

```
El archivo contenido/modos-de-trabajo.md se creó pero no tiene ejemplos
de casos de uso de IT4W. ¿Podés agregar un ejemplo para alguien de Comercial?
```

O empezar de nuevo con más contexto:

```
Documentá el concepto "Los modos de trabajo: Ask, Plan y Agent"
para alguien que nunca usó VS Code.
Incluí un ejemplo concreto de alguien de UX documentando un flujo de diseño
y un ejemplo de alguien de Comercial preparando un seguimiento de cliente.
Guardalo en contenido/modos-de-trabajo.md
```

---

*Siguiente: guardar y compartir el trabajo terminado.*
