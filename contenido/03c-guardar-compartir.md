# Guardar y compartir: el commit final

Terminaste el ejercicio completo. Generaste contenido con la IA, lo revisaste, lo diseñaste. Ahora lo guardás en Git y lo compartís con el equipo.

---

## Paso 1. Revisá qué cambió

Antes de guardar, revisá qué archivos nuevos tiene el proyecto. En la terminal:

```
git status
```

Vas a ver una lista de archivos nuevos o modificados en color rojo (todavía no guardados) o verde (ya preparados para guardar).

---

## Paso 2. Preparar todo para guardar

```
git add .
```

El punto significa "todos los archivos nuevos o modificados". Todo lo que apareció en el `git status` queda preparado.

---

## Paso 3. Hacer el commit

```
git commit -m "feat: primer ejercicio completo con orquestación de agentes"
```

Podés cambiar el mensaje entre comillas por algo que describa mejor lo que hiciste. Usa el idioma que quieras. Sé específico — ese mensaje te va a ayudar a recordar qué había en ese punto.

---

## Paso 4. Verificar que quedó guardado

```
git log --oneline
```

Vas a ver la lista de todos los commits que hiciste hasta ahora, con su mensaje y un código corto. El más reciente aparece arriba.

---

## El repositorio oficial IT4W

El equipo de Adopción IA tiene un repositorio compartido donde se centralizan todos los proyectos, guías y recursos de la iniciativa.

🔗 **RepoAdopcion IT4W:**
[Ir al repositorio](https://it4wnet.sharepoint.com/sites/DSML/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FDSML%2FShared%20Documents%2FAdopcion%2FIniciativaIT4W_2026%2FRepoAdopcion&p=true&ct=1776958121309&or=Teams%2DHL&ga=1&LOF=1)

Ahí vas a encontrar:
- Proyectos de referencia con la estructura de agentes lista para copiar
- Versiones anteriores de esta guía
- Templates de skills para distintas áreas
- Ejemplos de orquestación por área (UX, Comercial, QA)

---

## ¿Cómo comparto mi trabajo con el equipo?

Si tu líder de área te indica subir tu trabajo al repositorio compartido, te va a dar las instrucciones para hacerlo. El flujo básico es:

1. Hacés tu trabajo en tu carpeta local
2. Guardás con `git commit`
3. Subís al repositorio compartido con `git push` (cuando tengas acceso configurado)

Por ahora, con el `git commit` local es suficiente para dejar registro de lo que hiciste.

---

## Lo que construiste en esta guía

Arrancaste sin saber qué era VS Code. Ahora tenés:

✅ VS Code instalado con GitHub Copilot funcionando
✅ Conocimiento de los tres modos: Ask, Plan, Agent
✅ Experiencia usando skills para mejorar la calidad del output
✅ Un proyecto con tres subagentes coordinados
✅ Un flujo de orquestación completo: generar → revisar → diseñar
✅ Commits en Git con historial de tu trabajo

Eso es todo lo que necesitás para empezar a trabajar con IA en IT4W.

---

*Siguiente: Parte 4 — recursos, glosario y a quién preguntarle.*
