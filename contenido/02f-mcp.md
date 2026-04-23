# MCP: el puente hacia el mundo exterior

Hasta ahora la IA trabaja solo con lo que vos le pasás: el texto que escribís, los archivos que tenés en el proyecto. MCP le da la capacidad de ir a buscar información a otros lugares — sin que vos tengas que copiar y pegar nada.

---

> "MCP es el teléfono que le permite a la IA hablar con herramientas fuera de VS Code."

---

## ¿Qué es MCP?

MCP significa Model Context Protocol. En palabras simples: es un sistema estándar que permite que la IA se conecte con herramientas externas — Figma, GitHub, bases de datos, analytics, CRM — y las use directamente desde el chat.

Sin MCP, la IA solo puede trabajar con lo que hay en tu carpeta. Con MCP, puede ir a buscar información donde vive realmente.

---

## La analogía del teléfono

Imaginá que tu asistente solo puede trabajar con los papeles que vos le ponés sobre el escritorio. Si necesita datos de otra oficina, vos tenés que ir a buscarlos, fotocopiarlos, y traérselos.

MCP es el teléfono. Ahora el asistente puede llamar a la otra oficina directamente y pedir lo que necesita sin que vos muevas un dedo.

---

## ¿Para qué sirve en IT4W?

### Figma

La IA puede leer los componentes y estilos de un archivo de Figma directamente. Sin exportar nada, sin copiar nada a mano.

**Ejemplo:**
> "Revisá el Design System en Figma y listá los componentes que no tienen estado `disabled` documentado."

### GitHub

La IA puede ver el estado de un repositorio, leer issues, ver pull requests y generar reportes directamente.

**Ejemplo:**
> "¿Qué issues están abiertos en el repositorio de adopción IA con la etiqueta 'urgente'?"

---

## Una regla importante

⚠️ **MCP solo funciona en modo Agent.** En modo Ask o Plan, la IA no puede conectarse con herramientas externas.

⚠️ **Solo instalá MCPs oficiales.** Los MCPs son extensiones que le dan acceso a la IA a sistemas externos. Instalar uno no oficial puede dar acceso a herramientas a fuentes que no controlás. En IT4W, solo usamos los MCPs aprobados por el equipo de Adopción IA.

---

## ¿Tengo que configurar MCP?

No por ahora. En el ejercicio de esta guía no usamos MCP. Los proyectos de referencia del repositorio IT4W ya tienen algunos MCPs configurados. Cuando llegues a un flujo que los use, tu líder de área te va a indicar cómo activarlos.

---

*Siguiente: Git — qué es y por qué lo usamos.*
