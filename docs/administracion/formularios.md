---
sidebar_position: 3
title: Formularios
description: Diseña el formulario que llena el agente en cada gestión y conéctalo con la base de clientes.
---

# Formularios

Un **formulario** es lo que el agente ve y llena al atender a un cliente: el resultado de la gestión, la fecha de promesa de pago, las observaciones… Cada campaña usa un formulario, y lo que el agente escribe en él llega a la ficha del cliente en la base.

Un formulario **no guarda información por sí mismo**: refleja la base. Por eso, además de diseñarlo, hay que **emparejar** sus campos con los de la base (casi siempre se hace solo).

Los formularios están en **Datos → Formularios**.

## Crear un formulario

1. Entra a **Datos → Formularios**.
2. Pulsa **Nuevo formulario**.
3. Escribe el **Nombre** (por ejemplo, «Gestión de cobranza») y, si quieres, una **Descripción**.
4. Crea los campos dentro de **Sección 1**:
   1. Pulsa **Agregar campo**.
   2. Escribe el **Nombre del campo** y elige su **Tipo**. Los tipos son los mismos de las bases. Ver [Tipos de campo](/guia/administracion/bases-de-datos#tipos-de-campo).
   3. Si es de **Selección** o **Selección múltiple**, escribe las **Opciones** separadas por coma.
   4. Pulsa la tuerca (**Configurar**) para ajustar cómo se comporta el campo (ver abajo).
5. Si quieres agrupar los campos, pulsa **Agregar sección**, ponle nombre y elige en cuántas **Columnas** se reparten (de 1 a 6). Funciona igual que en las bases. Ver [Secciones y columnas](/guia/administracion/bases-de-datos#secciones-y-columnas).
6. Pulsa **Crear formulario**.

Después, asígnalo a una campaña. Ver [Campañas](/guia/administracion/campanas).

## Configurar un campo

Pulsa la tuerca del campo para abrir **Configuración del campo**. Tiene estos interruptores:

| Opción | Qué hace |
|---|---|
| **Requerido** | El agente no podrá cerrar la gestión si el campo está vacío. El campo muestra un asterisco. |
| **Solo lectura** | El agente ve el dato pero no lo puede cambiar. Aparece más opaco. |
| **Visible** | Si lo apagas, el campo no aparece en el formulario del agente. |
| **Llamada con clic** | Pone un icono de teléfono junto al campo: al pulsarlo, el teléfono del agente marca ese número. Solo aparece en campos de tipo **Texto** o **Teléfono**. |

Pulsa **Listo** para cerrar la ventana y luego guarda el formulario.

:::info
La opción **Requerido** solo existe en los formularios. En la base no se marca nada como requerido: quien exige que un dato se llene es el formulario del agente.
:::

## Ver el formulario como lo ve el agente

En la lista de formularios, pulsa el ojo (**Ver como lo ve el agente**). Se abre **Así lo ve el agente**, con las secciones y columnas tal como le saldrán en pantalla. Los campos ocultos no aparecen.

Es solo una vista: no se puede escribir en ella. Pulsa **Cerrar** para salir.

## Editar un formulario y sus versiones

1. En la lista, pulsa el lápiz (**Editar**) del formulario.
2. Haz tus cambios.
3. Pulsa **Guardar cambios**.

Cada formulario lleva un número de **Versión**. Si cambias los campos, Eclipta crea una versión nueva automáticamente. **Las gestiones que ya se guardaron conservan la versión con la que se llenaron**, así que cambiar el formulario no altera el historial.

## El emparejamiento con la base

Para que lo que escribe el agente llegue a la ficha del cliente, cada campo del formulario tiene que estar **emparejado** con un campo de la base de la campaña.

**Eclipta los empareja solo** cuando los dos campos se llaman igual y son del mismo tipo. Por ejemplo, «Cédula» de tipo Texto en el formulario con «Cédula» de tipo Texto en la base. El emparejamiento se recalcula cada vez que guardas el formulario o la base.

Para revisarlo, abre la campaña y, en la pestaña **General**, busca el bloque **Mapeo formulario → base**:

- Cada fila dice con qué campo de la base está conectado cada campo del formulario, y si se emparejó solo (**auto**), lo elegiste tú (**manual**) o quedó **sin anclar**.
- Puedes elegir a mano el campo de la base en el desplegable.
- **Re-aplicar auto** borra los emparejamientos que hiciste a mano y vuelve a calcularlos todos.

:::warning Revisa los campos sin anclar
Si la campaña te avisa de campos «sin emparejar a la base», **lo que el agente escriba en ellos no llega a la ficha del cliente**. Empareja esos campos a mano, o ponles el mismo nombre y tipo que en la base.
:::

## Renombrar un campo

Cambia el **Nombre del campo** y guarda. No se pierde nada.

:::tip
Si renombras un campo en la base, renómbralo igual en el formulario (o al revés). Así siguen emparejándose solos.
:::

## Cambiar el tipo de un campo

Si cambias el **Tipo** de un campo que ya existía, Eclipta te avisa antes con la ventana **Cambiar el tipo de un campo que ya tiene datos**. Recuerda que, para emparejarse solos, el campo del formulario y el de la base deben ser **del mismo tipo**.

## Borrar campos y secciones

Borrar un campo o una sección de un formulario **no borra datos de la base**: los datos que ya estén en la base no se tocan. Lo que pasa es que:

- El agente deja de ver esos campos.
- La campaña pierde el emparejamiento de esos campos con la base: lo que antes se escribía ahí deja de llegar a la ficha del cliente.

Por eso también se pide en pasos:

1. Pulsa la papelera del campo (**Eliminar campo**) o de la sección (**Eliminar la sección y sus campos**).
2. Primer aviso: pulsa **Sí, eliminar**.
3. Segundo aviso, **Esto no se puede deshacer**: pulsa **Entiendo, continuar**.
4. **Confirme con su contraseña**: escribe tu contraseña y pulsa **Eliminar definitivamente**.

:::warning
El borrado de campos **no pasa por la papelera**. Si te equivocas, tendrás que volver a crear los campos y emparejarlos con la base.
:::

Un campo que acabas de crear y todavía no has guardado se quita sin avisos ni contraseña.

## Eliminar un formulario

1. En la lista, pulsa la papelera del formulario.
2. Confirma con **Enviar a la papelera**.

Las campañas que lo usaban quedan **sin formulario asignado**. El formulario va a la [Papelera](/guia/administracion/papelera) y se puede restaurar desde allí.
