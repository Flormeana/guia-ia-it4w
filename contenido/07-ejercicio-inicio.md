# Ejercicio de Inicio — Hacelo vos, todo en orden

---

> Este ejercicio pone en práctica todo lo que aprendiste en la guía.
> No necesitás saber programar. Solo seguí los pasos en orden.
> Al terminar, vas a haber usado los tres modos, dos subagentes y Git.

**Tiempo estimado:** 20-30 minutos  
**Lo que vas a necesitar:** VS Code abierto con este proyecto

---

## Antes de empezar

Asegurate de tener el panel de chat de Copilot abierto en VS Code.
Si no lo ves, hacé clic en el ícono de chat en la barra lateral izquierda (parece un globo de diálogo).

---

## PASO 1 — Explorá el proyecto en modo Ask

**¿Qué vas a aprender?** A explorar sin tocar nada. Como leer el plano de un edificio antes de entrar.

**Seleccioná el modo:** `Ask` (arriba en el panel de chat)

**Escribí exactamente esto:**
```
¿Qué archivos tiene este proyecto?
```

**¿Qué vas a ver?**
La IA te lista los archivos y carpetas del proyecto y te explica para qué sirve cada uno.
No creó nada. No modificó nada. Solo te informó.

**Chequeá que lo entendiste:**
- ¿Dónde están los archivos de contenido?
- ¿Dónde están los skills?
- ¿Qué hace el archivo `copilot-instructions.md`?

---

## PASO 2 — Planificá en modo Plan

**¿Qué vas a aprender?** A pedirle a la IA que piense antes de actuar. Como hacer un borrador antes de entregar.

**Seleccioná el modo:** `Plan` (arriba en el panel de chat)

**Escribí exactamente esto:**
```
Planificá cómo escribirías la sección sobre agentes
```

**¿Qué vas a ver?**
La IA te devuelve un plan en pasos: qué incluiría, en qué orden, qué analogías usaría, cómo lo estructuraría.
Todavía no escribió nada. Te está mostrando cómo pensaría la tarea.

**Reflexionás:**
¿El plan que propone tiene sentido para tu área?
¿Agregarías o sacarías algo?

> Podés responderle al plan: *"Cambiá el ejemplo por uno de UX en lugar de comercial"*
> y va a ajustar el plan antes de ejecutar.

---

## PASO 3 — Ejecutá con un subagente en modo Agent

**¿Qué vas a aprender?** A invocar un subagente por primera vez. Como pedirle a un especialista que haga su parte.

**Seleccioná el modo:** `Agent` (arriba en el panel de chat)

**Escribí exactamente esto:**
```
/generar-seccion concepto: agentes archivo: prueba-agentes.md
```

**¿Qué va a pasar?**
1. El agente principal recibe tu pedido
2. Invoca el subagente `/generar-seccion`
3. El subagente redacta la sección sobre agentes con el estilo IT4W
4. El resultado se guarda en el archivo `prueba-agentes.md`

**Verificá:**
En el explorador de archivos de VS Code, buscá el archivo `prueba-agentes.md`.
¿Existe? ¿El contenido usa el estilo y tono de IT4W?

---

## PASO 4 — Revisá con el subagente revisor

**¿Qué vas a aprender?** A usar el subagente de revisión y entender qué significa el score.

**Seguí en modo:** `Agent`

**Escribí exactamente esto:**
```
/revisar-simplicidad archivo: prueba-agentes.md
```

**¿Qué va a pasar?**
El subagente lee el archivo y te da:
- Un **score del 1 al 10** (cuánto de claro es para personas no técnicas)
- **Qué funciona bien** en el texto
- **Qué mejoraría** para que sea más simple

**¿Qué significa el score?**

| Score | Qué significa                                      |
|-------|----------------------------------------------------|
| 1-4   | Texto muy técnico, hay que reescribir              |
| 5-6   | Entendible pero mejorable, revisar sugerencias     |
| 7-8   | Buen nivel, apto para la guía                      |
| 9-10  | Excelente, cualquier persona en IT4W lo entiende   |

**Si el score es menor a 7:**
El subagente te dice qué cambiar. Podés escribir:
```
Reescribí la sección aplicando las sugerencias
```
Y el agente lo mejora automáticamente.

---

## PASO 5 — Guardá tu trabajo con Git

**¿Qué vas a aprender?** Qué es Git y por qué guardamos cambios con mensajes.

**¿Qué es Git?**
Git es como el historial de versiones de un documento de Google, pero más potente.
Cada vez que "commiteás", estás diciendo: *"acá llegué, guardá este punto"*.
Si algo sale mal después, podés volver a este momento exacto.

**Abrí la terminal en VS Code:**
Menú superior → Terminal → New Terminal (o `Ctrl + ñ`)

**Escribí estos tres comandos, uno por uno:**

```bash
git add .
```
> Esto le dice a Git: *"mirá todos los archivos nuevos o modificados"*

```bash
git commit -m "ejercicio: primera sección generada"
```
> Esto guarda el punto con un mensaje que explica qué hiciste

**¿Qué va a ver en la terminal?**
Algo como:
```
[main abc1234] ejercicio: primera sección generada
 2 files changed, 45 insertions(+)
```
Eso significa que Git guardó tu trabajo exitosamente.

---

## ¡Lo lograste! 🎉

Resumiendo lo que hiciste:

| Paso | Modo     | Qué aprendiste                              |
|------|----------|---------------------------------------------|
| 1    | Ask      | Explorar sin tocar nada                     |
| 2    | Plan     | Pensar antes de ejecutar                    |
| 3    | Agent    | Invocar un subagente por primera vez        |
| 4    | Agent    | Revisar y entender el score de simplicidad  |
| 5    | Terminal | Guardar el trabajo con Git                  |

---

## ¿Qué sigue?

Si querés ir más allá, probá este flujo completo:

```
/generar-seccion concepto: [algo de tu área] archivo: contenido/mi-seccion.md
```

Elegí un concepto de tu trabajo diario en IT4W y dejá que la IA lo explique.
Después revisalo y ajustalo. La guía puede crecer con lo que cada área agrega.
