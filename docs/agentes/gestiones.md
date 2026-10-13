---
sidebar_position: 4
title: Gestiones
description: Llenar el formulario, tipificar y cerrar cada atención, buscar clientes a mano y guardar contactos en la base.
---

# Gestiones

Una **gestión** es el registro de cada atención: una llamada, un chat o una búsqueda manual. Toda gestión termina igual: eliges una **tipificación** (cómo terminó) y pulsas **Cerrar gestión**. Eso es lo que luego ve tu supervisor en los reportes.

## El formulario de gestión

Ocupa la columna del centro. Arriba dice **Formulario de gestión**, si es una **Llamada** o un **Chat**, el nombre del cliente y la campaña.

- Los campos los define tu administrador y pueden venir agrupados por secciones.
- Los obligatorios llevan un asterisco rojo.
- Algunos campos son solo de lectura: los ves, pero no los puedes cambiar.
- Si un campo de teléfono tiene un icono de teléfono al lado, púlsalo para llamar a ese número.

Si Eclipta reconoce al cliente, el formulario sale lleno con sus datos. Si cambias algo, se guarda en la base al cerrar la gestión.

Si dice **Esta campaña no tiene formulario asignado**, avisa a tu supervisor. Ver [Formularios](/guia/administracion/formularios).

## Cerrar la gestión

Abajo del formulario está la barra de cierre:

1. Elige una opción en **Tipificación...**
2. Si la tipificación es para volver a llamar más tarde, aparecen una fecha y una hora: elige cuándo.
3. Escribe en **Observaciones...** lo que pasó. Es lo único que cuenta la historia con tus palabras, así que escríbelo claro.
4. Pulsa **Cerrar gestión** (o **Enter** dentro de las observaciones).

Si algo falta, Eclipta te avisa: **Selecciona una tipificación**, **Selecciona fecha de reagenda** o **Campos requeridos vacíos** con la lista de los que faltan.

:::warning Colgar termina la llamada, no la gestión
Cuando cuelgas, **sigues ocupado** hasta que cierras la gestión. No te entra la siguiente llamada hasta entonces. Arriba del formulario verás **TIPIFICACIÓN OBLIGATORIA** mientras tanto.
:::

## Los tiempos límite

Tu campaña puede tener un tiempo máximo para algunas tareas. Cuando hay uno corriendo, verás una cuenta atrás en la barra de arriba:

| Cuenta atrás | Qué mide |
|---|---|
| **Búsqueda manual** | Cuánto puedes tener abierta la búsqueda sin hacer nada. |
| **Formulario** | Cuánto puedes tener el formulario abierto sin actividad. |
| **Post-llamada** | Cuánto tienes para tipificar después de colgar. |

Si llega a cero, Eclipta cierra la gestión por ti y te avisa con **Cerrado por timeout**. En el reporte queda como cerrada por el sistema, en rojo. Mejor ciérrala tú antes.

Si recargas la página, la cuenta atrás no vuelve a empezar: sigue donde iba.

## Buscar un cliente a mano

La **Búsqueda manual** sirve para encontrar a un cliente de la base, actualizar sus datos o llamarlo.

1. En **Campañas asignadas**, pulsa **la lupa** de la campaña.
2. En la columna del centro se abre **Búsqueda manual**, con los campos por los que puedes buscar.
3. Llena al menos uno y pulsa **Buscar**.
4. En los resultados, cada cliente sale en una tarjeta:
   - Pulsa **Editar** para abrir su formulario.
   - Si la campaña lo permite, puedes llamarlo desde ahí.
5. Si dice **No se encontró ningún registro**, pulsa **Crear nuevo cliente** para darlo de alta.

Para salir, pulsa **Cerrar búsqueda**. No se puede cerrar mientras haya una llamada activa.

:::info
Si abres la búsqueda y la cierras sin hacer nada, queda registrado en el reporte. Úsala cuando de verdad la necesites.
:::

### Si llamaste sin abrir el formulario

Si desde la búsqueda hiciste una llamada y cerraste sin abrir el formulario, aparece una ventana: **Llamada sin formulario — debes cerrar la gestión**. Elige la tipificación, escribe en **Comentarios sobre la llamada...** y pulsa **Cerrar gestión**.

## Guardar un contacto en la base

Algunas campañas salientes cargan una lista de personas **solo para esa campaña**, sin guardarlas en la base de clientes. Cuando atiendes a una de ellas, arriba del formulario verás:

**Este contacto no está en la base: se cargó solo para esta campaña.**

Si vale la pena conservarlo (compró, pidió información o hay que volver a llamarlo), pulsa **Guardar en la base**. Cuando termine, el botón dice **Guardado**.

Decidir si se guarda es tuyo: tú acabas de hablar con esa persona. Ver [Bases de datos](/guia/administracion/bases-de-datos).

## Lo que viene

- Historial de las atenciones anteriores del cliente, dentro del formulario <span className="proximamente">Próximamente</span>
- Ver tu propio historial de gestiones desde tu espacio <span className="proximamente">Próximamente</span>
