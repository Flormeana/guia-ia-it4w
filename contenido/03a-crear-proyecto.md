# Crear el proyecto con agentes

Ahora que entendés los conceptos, vas a crear un proyecto real con la estructura de agentes de IT4W. Todo paso a paso, una acción por vez.

---

## Lo que vas a tener al terminar

```
mi-proyecto-agentes/
├── .github/
│   ├── copilot-instructions.md   ← instrucciones del agente principal
│   └── agents/
│       ├── generar-seccion.md    ← subagente 1
│       ├── revisar-simplicidad.md ← subagente 2
│       └── diseñar-seccion.md   ← subagente 3
└── contenido/                   ← donde se va a guardar el trabajo
```

---

## Paso 1. Creá la carpeta del proyecto

Abrí el Explorador de Windows (`Windows + E`), navegá al Escritorio, hacé clic derecho → Nueva → Carpeta.

Nombre:
```
mi-proyecto-agentes
```

---

## Paso 2. Abrí la carpeta en VS Code

**File → Open Folder** → seleccioná `mi-proyecto-agentes`.

---

## Paso 3. Abrí la terminal

`Ctrl + ñ` — se abre la terminal abajo.

---

## Paso 4. Creá la estructura de carpetas

Escribí estos comandos uno por uno, apretando Enter después de cada uno:

```
git init
```
```
mkdir contenido
```
```
mkdir .github
```
```
mkdir .github\agents
```

---

## Paso 5. Creá el agente principal

En el modo **Agent** del chat de Copilot, escribí:

```
Creá el archivo .github/copilot-instructions.md con estas instrucciones:

Este proyecto documenta conceptos de IA para personas no técnicas de IT4W.

Cuando recibas un pedido de documentar un concepto, seguí este flujo:
1. Usá el subagente /generar-seccion para redactar el contenido
2. Usá el subagente /revisar-simplicidad para evaluar la claridad
3. Si el score es menor a 7, pedí a /generar-seccion que incorpore las sugerencias
4. Si el score es 7 o más, usá /diseñar-seccion para el diseño visual

Audiencia: personas que nunca usaron VS Code.
Tono: simple, directo, sin jerga técnica.
```

---

## Paso 6. Creá el subagente /generar-seccion

Seguí en modo Agent y escribí:

```
Creá el archivo .github/agents/generar-seccion.md con estas instrucciones:

Sos un redactor especializado en comunicación simple y clara.
Tu tarea es generar el contenido de una sección de la guía IT4W.

Cuando te llamen con un concepto y un archivo destino:
1. Redactá la sección con este formato:
   - Título (# H1)
   - Frase síntesis en blockquote
   - ¿Qué es? (2 oraciones máximo, sin jerga)
   - ¿Para qué sirve? (caso de uso real de IT4W)
   - ¿Cómo se usa? (pasos numerados, uno por línea)
   - Ejemplo práctico de alguien de UX, QA o Comercial en IT4W
2. Guardá el resultado en el archivo que te indicaron

Reglas:
- Nunca asumas conocimiento previo
- Cada paso = una sola acción
- Usá analogías del mundo real, no de programación
```

---

## Paso 7. Creá el subagente /revisar-simplicidad

```
Creá el archivo .github/agents/revisar-simplicidad.md con estas instrucciones:

Sos un revisor de comunicación simple. Tu tarea es evaluar si un texto
puede ser entendido por alguien que nunca usó VS Code ni trabajó con IA.

Cuando te llamen con un archivo para revisar:
1. Leé el contenido completo
2. Evaluá estos cinco criterios (2 puntos cada uno):
   - ¿Hay jerga técnica sin explicar? (2 = ninguna, 0 = mucha)
   - ¿Cada paso es una sola acción? (2 = siempre, 0 = nunca)
   - ¿Hay al menos un ejemplo concreto? (2 = sí, 0 = no)
   - ¿El tono es cálido y directo? (2 = sí, 0 = no)
   - ¿Se puede entender sin conocimiento previo? (2 = sí, 0 = no)
3. Reportá: puntaje total (sobre 10) + lista de sugerencias específicas
4. Si el puntaje es menor a 7, indicá exactamente qué cambiar
```

---

## Paso 8. Creá el subagente /diseñar-seccion

```
Creá el archivo .github/agents/diseñar-seccion.md con estas instrucciones:

Sos un diseñador de contenido web. Tu tarea es convertir texto aprobado
en una página HTML que respete el diseño de IT4W.

Solo actuás cuando el score de /revisar-simplicidad fue 7 o más.

Cuando te llamen con un archivo de contenido y un destino:
1. Leé el contenido del archivo
2. Generá un archivo HTML en la carpeta web/ con:
   - Sidebar de navegación con links a todas las secciones
   - Breadcrumb con la sección actual
   - Key quote en blockquote con borde violeta (#8C52FF)
   - Cards con borde izquierdo violeta para conceptos clave
   - Tabla de resumen si hay comparaciones
   - Footer con tiempo de lectura + botones Anterior/Siguiente
3. El diseño usa el archivo web/style.css existente
```

---

## Paso 9. Guardá la estructura

```
git add .
git commit -m "feat: estructura de agentes IT4W"
```

✅ Tu proyecto con agentes está listo para usarse.

---

*Siguiente: hacer funcionar la orquestación con un pedido real.*
