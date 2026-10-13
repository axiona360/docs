---
sidebar_position: 2
title: Bases de datos
description: Crea bases de clientes, organiza sus campos en secciones y columnas, y gestiona los registros.
---

# Bases de datos

Una **base de clientes** es la lista de tus contactos y los datos que guardas de cada uno: nombre, cédula, teléfonos, valor de la deuda, lo que necesites. Las campañas llaman y escriben a los registros de una base, y el agente ve los datos del cliente en su ficha mientras lo atiende.

Cada base tiene dos partes:

- Sus **campos**: qué datos guardas de cada contacto y cómo se organizan en pantalla.
- Sus **registros**: los contactos, uno por fila.

Las bases están en **Datos → Bases de Datos**.

## Crear una base

1. Entra a **Datos → Bases de Datos**.
2. Pulsa **Nueva base**.
3. Escribe el **Nombre** (por ejemplo, «Clientes en mora») y, si quieres, una **Descripción**.
4. Crea los campos. La base empieza con una sección, **Sección 1**:
   1. Pulsa **Agregar campo** dentro de la sección.
   2. Escribe el **Nombre del campo** (por ejemplo, «Cédula»).
   3. Elige su **Tipo** (ver la tabla de abajo).
   4. Si el tipo es **Selección** o **Selección múltiple**, escribe las **Opciones** separadas por coma.
   5. Repite para cada campo.
5. Cuando ya haya campos, elige:
   - **Campo principal**: lo que el agente ve primero.
   - **Campo secundario**: el dato de apoyo que va debajo del principal.
   - **Campo llave**: el dato que identifica a cada contacto y no se puede repetir (ver más abajo).
6. Pulsa **Crear base**.

Puedes ordenar los campos con las flechas **Subir** y **Bajar**, o arrastrándolos.

### Tipos de campo

| Tipo | Para qué sirve |
|---|---|
| **Texto** | Un texto corto: nombre, ciudad, número de contrato. |
| **Texto largo** | Observaciones, notas, direcciones largas. |
| **Número entero** | Cantidades sin decimales: días de mora, número de cuotas. |
| **Número decimal** | Números con decimales. |
| **Moneda ($)** | Valores en dinero. |
| **Porcentaje (%)** | Tasas y porcentajes. |
| **Fecha** | Un día del calendario. |
| **Hora** | Una hora del día. |
| **Fecha y hora** | Un día y una hora. |
| **Sí / No** | Una respuesta de sí o no. |
| **Selección (una opción)** | Una opción de una lista que tú defines. |
| **Selección múltiple** | Varias opciones de una lista. |
| **Teléfono** | Números de teléfono. Son los que usan las campañas para llamar. |
| **Email** | Correos electrónicos. |
| **URL / Enlace** | Direcciones web. |
| **Archivo (PDF, Word, imagen)** | Un documento adjunto. |

## Secciones y columnas

Las secciones agrupan los campos y deciden cómo se ven: por ejemplo, una sección «Datos personales» con nombre, teléfono y cédula en 3 columnas, y otra «Cartera» con cinco campos en 5 columnas.

1. Pulsa **Agregar sección** (debajo de las secciones).
2. Escribe el **Nombre de la sección**.
3. Elige en **Columnas** en cuántas columnas se reparten sus campos (de 1 a 6).
4. Pulsa **Agregar campo** dentro de la sección para crear campos en ella.

Para mover un campo de una sección a otra, cámbialo en su desplegable **Sección**. Para ordenar las secciones, usa las flechas **Subir la sección** y **Bajar la sección**.

Los campos que no estén en ninguna sección aparecen al final, en **Sin sección**.

## El campo llave

El **campo llave** identifica a cada contacto, por ejemplo la cédula. **La base no admite dos registros con el mismo valor en ese campo**: si intentas crear o cargar un registro repetido, Eclipta no lo guarda y te dice por qué.

Elígelo al crear la base, o después con el lápiz (**Editar**) de la base. En la lista de bases, la columna **Campo llave** te muestra cuál tiene cada una.

## Ver la base

En la lista de bases, pulsa el ojo (**Ver detalle**). La base se abre con cuatro pestañas:

- **Vista**: la base organizada como la definiste, con sus secciones y sus columnas.
- **Campos**: para editar los campos. Al terminar, pulsa **Guardar campos**.
- **Registros**: los contactos de la base (entre paréntesis, cuántos hay).
- **Estadísticas**: el **Total de registros**. Las cifras de **Activos** y **En «no molestar»** todavía no se calculan <span className="proximamente">Próximamente</span>.

## Los registros

En la pestaña **Registros** ves los contactos en una tabla, de 50 en 50. Usa el buscador para encontrar un registro por cualquiera de sus datos.

### Agregar un registro a mano

1. En **Registros**, pulsa el **+** (**Agregar un registro a mano**).
2. Llena los campos. El formulario se organiza con las mismas secciones y columnas de la base.
3. Pulsa **Crear registro**.

Arriba del formulario, Eclipta te recuerda qué campo no admite repetidos.

### Editar un registro

1. Pulsa el lápiz (**Editar**) en la fila del registro.
2. Cambia los datos.
3. Pulsa **Guardar cambios**.

### Eliminar registros

- **Uno solo**: pulsa la papelera de su fila y confirma con **Eliminar**.
- **Varios**: marca las casillas de la izquierda y pulsa la papelera de arriba (**Eliminar los registros marcados**).
- **Todos** (vaciar la base): pulsa el borrador de arriba (**Vaciar la base**).

Para eliminar varios o vaciar la base, Eclipta te pide confirmar **dos veces** y luego tu **contraseña**: son datos de clientes, así que no basta con un botón.

:::warning Los registros eliminados no se recuperan
Un registro eliminado **no va a la papelera** y no se puede recuperar desde el panel. Deja de existir para las campañas: no se le vuelve a llamar ni a escribir. Si vas a necesitar esos datos, asegúrate de tenerlos en tu propio archivo antes de borrar: descargar una base desde el panel todavía no está disponible <span className="proximamente">Próximamente</span>.
:::

### Marcar un registro como «no llamar»

Si un cliente pide que no lo llamen más:

1. En la fila del registro, pulsa **Marcar** en la columna **No molestar**.
2. Confirma con **Marcar**.

El registro deja de recibir llamadas de **todas** las campañas y queda anotado quién lo marcó y cuándo. Para revertirlo, pulsa **No llamar** en la misma fila.

### Cargar registros desde Excel

Cuando la base está vacía, la pestaña **Registros** te ofrece **Cargar Excel**:

1. Pulsa **Cargar Excel**.
2. Arrastra el archivo (**.xlsx** o **.csv**) o haz clic para elegirlo.
3. Pulsa **Cargar**.

Las columnas del archivo se reconocen por el nombre de los campos de la base (no importan mayúsculas ni tildes), y los teléfonos se detectan solos. Si alguna fila tiene errores, Eclipta te muestra cuáles no se importaron: corrígelas en el archivo y vuelve a cargarlo. Las demás ya quedaron guardadas y no se duplican.

Para cargar registros a una base que ya tiene datos, usa **Cargar registros** desde la campaña. Ver [Campañas](/guia/administracion/campanas).

## Renombrar un campo

Puedes cambiarle el nombre a un campo cuando quieras: por ejemplo, de «Documento» a «Cédula». **No se pierde nada**: los datos que ya tenía ese campo siguen ahí.

1. Abre la base con el ojo y entra a la pestaña **Campos** (o usa el lápiz **Editar** de la base).
2. Cambia el **Nombre del campo**.
3. Pulsa **Guardar campos** (o **Guardar cambios**).

:::tip
Si el formulario de tus agentes tiene un campo con el mismo nombre, renómbralo también allí. Así la campaña los sigue emparejando sola. Ver [Formularios](/guia/administracion/formularios).
:::

## Cambiar el tipo de un campo

Cambiar el **Tipo** de un campo que ya tiene datos es distinto a renombrarlo. Eclipta te avisa antes con la ventana **Cambiar el tipo de un campo que ya tiene datos**:

- **Para la mayoría de tipos**, lo guardado no se borra, pero se queda escrito como estaba. Lo que no encaje con el tipo nuevo (por ejemplo, letras en un campo que pasas a número) puede dejar de verse o de poderse editar en la ficha del agente.
- **Si el cambio es hacia o desde Teléfono**, los números ya guardados de todos los registros pueden pasar a verse bajo otro campo de teléfono, o dejar de verse. No se borra nada, pero el dato cambia de sitio sin más aviso.

Si estás seguro, pulsa **Cambiar el tipo** y guarda los campos.

:::warning
Antes de cambiar el tipo de un campo de **Teléfono** en una base con números cargados, asegúrate de tener esos números en tu propio archivo (por ejemplo, el Excel con el que los cargaste).
:::

## Borrar campos y secciones

Borrar un campo **borra su dato de todos los registros de la base**. Por eso Eclipta lo pide en tres pasos:

1. Pulsa la papelera del campo (**Eliminar campo**) o, para una sección entera, la papelera de la sección (**Eliminar la sección y sus campos**).
2. **Primer aviso**: te dice qué campos se van a eliminar. Pulsa **Sí, eliminar**.
3. **Segundo aviso**, **Esto no se puede deshacer**: te recuerda que el borrado es definitivo. Pulsa **Entiendo, continuar**.
4. **Confirme con su contraseña**: escribe tu contraseña y pulsa **Eliminar definitivamente**.

:::warning Es definitivo
Al eliminar un campo o una sección, el dato de ese campo se borra de **todos** los registros, **no pasa por la papelera** y no se puede recuperar. Si vas a necesitar esos datos, asegúrate de tenerlos en tu propio archivo antes de borrar.
:::

Si te equivocas de contraseña, la ventana no se cierra y no se borra nada: corrígela y vuelve a intentarlo.

Un campo que acabas de crear y todavía no has guardado se quita sin avisos ni contraseña, porque no tiene datos.

## Eliminar una base

1. En la lista de bases, pulsa la papelera de la base.
2. Confirma con **Enviar a la papelera**.

La base y sus registros dejan de estar disponibles, pero van a la [Papelera](/guia/administracion/papelera) y se pueden restaurar desde allí.
