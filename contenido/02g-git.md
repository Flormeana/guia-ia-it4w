# Git: el historial de tu proyecto

En el ejercicio escribiste tres comandos en la terminal y guardaste tu primer archivo. Ahora entendemos por qué eso importa.

---

> "Git no guarda en otro lado. Guarda la historia dentro de tu carpeta."

---

## ¿Qué es Git?

Git es un sistema de control de versiones. En palabras simples: es un registro de todo lo que pasó en tu proyecto.

Cada vez que hacés un commit, Git saca una "foto" del estado de la carpeta y la guarda. Si más adelante algo sale mal, podés volver a cualquier foto anterior.

---

## ¿Dónde queda guardado?

Dentro de tu propia carpeta. Git crea una carpeta oculta llamada `.git` cuando hacés `git init`. Ahí adentro guarda toda la historia del proyecto.

No sube nada a internet por defecto. No depende de una cuenta. Todo queda en tu máquina hasta que vos decidís compartirlo.

---

## Los tres comandos que siempre vas a usar

| Comando | ¿Qué hace? | Analogía |
|---|---|---|
| `git init` | Activa Git en tu carpeta | Activás la cámara |
| `git add .` | Marca qué archivos van en el próximo guardado | Encuadrás la foto |
| `git commit -m "mensaje"` | Guarda el estado con un nombre | Sacás y etiquetás la foto |

Y uno más que siempre es útil:

| Comando | ¿Qué hace? | Cuándo usarlo |
|---|---|---|
| `git log --oneline` | Muestra el historial de commits | Para ver qué guardaste y cuándo |

---

## El flujo básico

Cada vez que terminás de trabajar:

```
git add .
git commit -m "qué hice hoy"
```

Eso es todo. Dos comandos. La descripción entre comillas es para vos — podés escribir lo que quieras, en el idioma que quieras.

---

## ¿Por qué lo usamos en IT4W?

Dos razones principales:

1. **Historial de cambios:** Si generás contenido con la IA y al día siguiente querés volver a la versión anterior, el historial de Git te lo permite.

2. **Colaboración:** Cuando hay un repositorio compartido (como el RepoAdopcion IT4W), Git permite que varias personas trabajen en el mismo proyecto sin pisarse los cambios.

---

## ¿Git es GitHub?

No son lo mismo. Git es el sistema de control de versiones que corre en tu computadora. GitHub es un servicio web donde podés subir proyectos que usan Git para compartirlos con otras personas.

En IT4W, los proyectos se guardan en el repositorio de SharePoint/Teams. Git es la herramienta que usás localmente para registrar la historia.

---

*Siguiente: Parte 3 — ahora que entendés los conceptos, hacemos el ejercicio completo con agentes.*
