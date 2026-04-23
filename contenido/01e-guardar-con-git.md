# Guardar con Git: tu primer commit

Creaste un archivo con la IA. Ahora lo vas a guardar en el historial del proyecto. Ese historial se llama Git.

Git no guarda en otro lado — guarda la historia dentro de tu carpeta. Es como tener un álbum de fotos del proyecto: cada vez que hacés un "commit", sacás una foto del estado actual y la etiquetás con un nombre.

---

## Abrí la terminal integrada

La terminal es una ventana de texto donde escribís comandos. Está integrada en VS Code.

Apretá `Ctrl + ñ` (si tu teclado está en español) o `Ctrl + `` (backtick, la tecla que está a la izquierda del 1 en teclados en inglés).

Se abre un panel abajo con un cursor parpadeante. Eso es la terminal.

---

## Los tres comandos — uno por uno

Escribí cada comando y apretá Enter. Esperá a que termine antes de escribir el siguiente.

---

### Comando 1: Activar Git en tu proyecto

```
git init
```

**Analogía:** Acabás de activar la cámara. Ahora Git puede ver todo lo que pasa en tu carpeta.

Si ves un mensaje como `Initialized empty Git repository in...`, funcionó.

---

### Comando 2: Seleccionar qué guardar

```
git add .
```

El punto (.) significa "todo lo que hay en la carpeta". Le estás diciendo a Git qué archivos van en la próxima foto.

**Analogía:** Acabás de encuadrar la foto. Elegiste qué entra en el cuadro.

Si no aparece ningún mensaje de error, funcionó.

---

### Comando 3: Guardar con nombre

```
git commit -m "mi primer archivo con IA"
```

El texto entre comillas es el nombre de la foto. Podés escribir lo que quieras — ese texto te va a ayudar a recordar qué había en ese momento.

**Analogía:** Sacaste y etiquetaste la foto. Ahora queda guardada para siempre en el historial.

Si ves un mensaje con el nombre del commit y estadísticas de archivos, funcionó perfectamente.

---

## Resumen de la analogía

| Comando | Analogía | ¿Qué hace? |
|---------|----------|------------|
| `git init` | Activás la cámara | Activa Git en tu carpeta |
| `git add .` | Encuadrás la foto | Seleccionás qué guardar |
| `git commit -m "..."` | Sacás y etiquetás la foto | Guardás el estado con nombre |

---

## ¿Tenés que hacer esto siempre?

Sí, cada vez que terminás de trabajar y querés guardar. No es obligatorio hacerlo a cada rato — pero sí al final de cada sesión o cuando terminás algo importante.

---

*Siguiente: mirá todo lo que aprendiste sin darte cuenta.*
