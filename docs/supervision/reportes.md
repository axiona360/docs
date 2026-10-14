---
sidebar_position: 2
title: Reportes
description: Revisa las gestiones y los abandonos de cada campaña, escucha grabaciones, descarga conversaciones en PDF y saca todo a Excel.
---

# Reportes

Los reportes te dicen **qué pasó**: quién atendió a quién, cómo terminó cada atención, si hubo transferencias, cuánto esperó el cliente y quién se fue sin que lo atendieran. Desde aquí también escuchas las grabaciones de las llamadas y descargas las conversaciones de chat.

Los reportes no están en el menú: viven **dentro de cada campaña** y **dentro de cada flujo**, que es donde los vas a buscar.

## Dónde están

### El reporte de una campaña

1. Ve a **Flujos de Trabajo** y entra a tu flujo.
2. Haz doble clic en la caja de la campaña.
3. Abre la pestaña **Reportes**.

Verás **Reportes de esta campaña**.

### El reporte de todo un flujo

1. Ve a **Flujos de Trabajo** y entra a tu flujo.
2. Pulsa **Ajustes**.
3. Abre la pestaña **Reportes**.

Verás **Reportes del flujo**. Aquí aparece además un filtro de **Campaña** para ver una sola o **Todas las campañas** del flujo.

## Gestiones o Abandonos

Arriba a la derecha eliges qué reporte ver:

- **Gestiones**: cada atención que hizo un agente, con su tipificación.
- **Abandonos**: quien se fue sin que lo atendieran, y si volvió.

Son dos reportes distintos a propósito. Si una persona esperó y colgó, y una hora después volvió y la atendieron, en **Gestiones** sale una vez (la atención) y en **Abandonos** otra (la espera que dejó).

## Los filtros

| Filtro | Para qué |
|---|---|
| **Desde** y **Hasta** | El rango de fechas. Al abrir, muestra los últimos 30 días. |
| **Agente** | Un agente o **Todos los agentes**. |
| **Tipificación** | Una tipificación o **Todas las tipificaciones**. |
| **Acción** | **No reintentar**, **Reintento automático** o **Agenda**. |

Los filtros se aplican al momento. Si quieres volver a pedir los datos, pulsa **Actualizar**.

## El resumen

Encima de la tabla de gestiones ves cuatro cifras de lo que cumple los filtros:

- **Total de gestiones**.
- **Duración promedio**, en minutos y segundos.
- **Tipificación más usada**, con las tres primeras debajo.
- **Agente con más gestiones**, con los tres primeros debajo.

## La tabla de gestiones

Una fila por gestión, de 50 en 50. Usa **Anterior** y **Siguiente** para pasar de página. La tabla es ancha: desplázala de lado para ver todas las columnas.

| Columna | Qué dice |
|---|---|
| **ID** | El inicio del identificador de la gestión. |
| **Fecha** y **Hora** | Cuándo empezó. |
| **Campaña** y **Agente** | Dónde y quién. |
| **Teléfono** y **Cliente** | A quién se atendió. |
| **Canal** | Llamada, WhatsApp, Telegram, chat web… |
| **Método** | **Agente** si la cerró una persona, **Sistema** si se cerró sola. |
| **Motivo cierre** | Por qué se cerró. En verde lo que cerró una persona; en rojo lo que se cerró por inactividad o porque se acabó un tiempo límite. |
| **Tipificación**, **Acción** y **Clasificación** | Lo que eligió el agente al cerrar. |
| **Observaciones** | Lo que escribió el agente. Se lee completo: si es largo, desplázalo dentro de la celda. |
| **HIZO-TRANSF** | Si el agente transfirió y cuántas veces. Por ejemplo, **Sí, 2 veces** o **No**. |
| **RECI-TRANSF** | Si el agente recibió la atención transferida y cuántas veces. |
| **HIST.TRANSF** | El camino completo de transferencias (ver abajo). |
| **Quién colgó primero** | **agente** (verde), **cliente** (azul) o **sistema**. En un chat sale vacío. |
| **Estado** | Si la gestión está completada. |
| **Grabación** | Para escuchar y descargar la llamada. |
| **Conversación** | Para leer y descargar el chat. |
| **T_T_gestión** | Lo que duró la atención. |
| **T_T_llamada** | Lo que duró la llamada. |
| **T_T_en_cola** | Lo que esperó el cliente hasta que lo atendieron. |
| **Encuesta** | Lo que respondió el cliente, si hubo encuesta. |

Una raya (—) quiere decir que ese dato no aplica. Por ejemplo, un chat no tiene tiempo de llamada. No es lo mismo que cero.

## Escuchar una grabación

En la columna **Grabación** de una llamada tienes un reproductor:

1. Pulsa el botón de reproducir para escucharla ahí mismo.
2. Pulsa la flecha de descarga (**Descargar grabación**) para guardarla en tu computador.

:::info Las grabaciones solo están aquí
No hay una sección aparte de grabaciones. Para encontrar una llamada, filtra el reporte por fecha, agente o tipificación y búscala en su fila.
:::

## Leer o descargar una conversación de chat

En la columna **Conversación** de un chat hay dos botones:

- **El icono rojo de PDF** (**Ver la conversación completa**): abre la conversación para leerla. Es solo lectura: desde un reporte no se le puede escribir al cliente.
- **La flecha de descarga** (**Descargar la conversación en PDF**): guarda un PDF con el historial.

El PDF trae la conversación entera desde el principio, aunque haya pasado por varios agentes o campañas. En cada mensaje dice quién lo escribió (**Cliente**, **Agente**, **Bot**, **Sistema** o **Supervisor**), con el nombre completo de la persona, y marca cuándo cambió de campaña. Las notas internas salen en rojo y dicen que el cliente no las vio.

:::tip Para una reclamación
Ese PDF es el documento que puedes adjuntar si un cliente reclama. Las horas van en la zona horaria de tu empresa.
:::

## El camino de las transferencias

Cuando una atención pasó por varias manos, en la columna **HIST.TRANSF** aparece un icono de ramas. Púlsalo y se abre **Por dónde pasó**:

- Cada salto, con fecha y hora: **de quién → a quién**.
- Cuando cambió de campaña, lo dice: **pasó a la campaña…**
- Si quien transfirió escribió un motivo, aparece debajo entre comillas.

Los nombres salen completos, aunque esa persona ya no trabaje en tu empresa.

## Descargar a Excel

Pulsa **Exportar a Excel** en la vista **Gestiones**. El archivo trae lo mismo que tienes filtrado en pantalla.

El Excel incluye dos datos que en pantalla no caben:

- El camino de transferencias escrito en una línea, en la columna de historial de transferencias.
- Un identificador de seguimiento, para juntar las filas de una misma conversación cuando la atendieron agentes de campañas distintas.

En la vista **Abandonos** no hay botón de Excel.

## El reporte de abandonos

Arriba ves cuatro cifras:

- **Abandonos**: cuántos se fueron sin que los atendieran.
- **Espera media**: cuánto esperaron antes de irse.
- **Espera máxima**: la espera más larga.
- **Recuperados**: los que volvieron y sí los atendieron.

Y una fila por abandono, con **Fecha**, **Hora**, **Campaña**, **Canal**, **Teléfono**, **Cliente**, **Esperó**, **Dónde abandonó** y **¿Volvió?**. Si no volvió, lo dice en rojo: **No volvió**.

:::tip Por dónde empezar a llamar
Los que dicen **No volvió** son clientes que siguen sin atender. Son los primeros a los que conviene devolverles la llamada.
:::

## El reporte del callback

Si una campaña entrante ofrecía devolver la llamada y ese servicio se desactivó, en su pestaña **Reportes** aparece el botón **Reporte Callback**. Te deja ver las gestiones de esas devoluciones. Pulsa **Reporte de campaña** para volver.

En una campaña de callback activa, la pestaña **Devoluciones** muestra quién pidió que le devolvieran la llamada. Ver [Campañas](/guia/administracion/campanas).

## El reporte del buzón de voz

Los mensajes que dejan las personas que llaman fuera de horario están en el número que recibió la llamada:

1. Ve a **Flujos de Trabajo**, entra a tu flujo y haz doble clic en la caja del número entrante.
2. En la sección **Buzón fuera de horario**, pulsa **Reporte de buzón**.

Verás una fila por llamada:

| Columna | Qué dice |
|---|---|
| **Fecha** | Cuándo llamó. |
| **Número registrado** | El número que tecleó para que lo llamen. Si no lo tecleó, dice **No lo tecleó**. |
| **Llamó desde** | El número desde el que llamó. |
| **A qué número** | Cuál de tus números marcó. |
| **Motivo** | **Fuera de horario**, **Día festivo** o **Desde el IVR**. |
| **Recorrido** | Pulsa **Ver recorrido** para ver paso a paso qué eligió. |
| **Mensaje** | El audio, para escucharlo o descargarlo. Si no grabó nada, dice **Solo dejó el número** o **Sin mensaje de voz**. |
| **Escuchado** | Cuándo se escuchó. Los pendientes dicen **Sin escuchar**. |

Un mensaje queda como escuchado en cuanto alguien lo reproduce. Marca **Solo los que faltan por escuchar** para ver solo los pendientes. Pulsa **Descargar Excel** para bajar la lista.

:::warning Nadie le devuelve la llamada solo
El buzón guarda el número y el mensaje, pero no llama de vuelta. Alguien tiene que revisar este reporte y llamar a esas personas desde una campaña. Y los enlaces de audio del Excel caducan a los 7 días.
:::

## El reporte de sesiones y pausas

Para ver cuándo entró y salió cada persona y sus pausas, usa el **Reporte de sesiones** de [Usuarios](/guia/administracion/usuarios).

{/* INTERNO, no se muestra al cliente. Próximamente: reportes que existen sin entrada en el panel: analítica de llamadas, informe de pausas, resultados de encuestas del IVR, buscador de conversaciones. */}
