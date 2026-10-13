---
sidebar_position: 2
title: Llamadas
description: Recibir, hacer y transferir llamadas desde el teléfono de tu espacio de agente.
---

# Llamadas

El teléfono está en la columna izquierda de tu espacio (o a la derecha, si lo pusiste en modo **Zurdo**). No necesitas otro aparato: hablas con tu diadema conectada al computador.

Arriba del teléfono verás un indicador verde cuando está conectado y listo. Si sale en gris, tu teléfono no está conectado: recarga la página y, si sigue igual, avisa a tu supervisor.

## Recibir una llamada

Tu administrador decide, por flujo o por campaña, cómo se contestan las llamadas. Hay dos formas:

### Contestación automática

El teléfono **descuelga solo**. Antes de conectar, suena un **aviso corto** (dos veces) para que sepas que te entró una llamada. No hay botón de contestar: cuando entra, ya estás hablando.

:::warning
Por eso es tan importante pausarse antes de levantarse del puesto. Ver [Pausas](/guia/agentes/pausas).
:::

### Contestación manual

Arriba de la pantalla aparece un aviso **Llamada entrante** con:

- **El número de quien llama** (o **Número oculto** si no lo envía).
- Una cuenta atrás en segundos.
- Los botones **Rechazar** y **Contestar**.

Además suena un timbre. Mientras decides, puedes seguir con lo que estabas haciendo.

- Pulsa **Contestar** para atender.
- Pulsa **Rechazar** si no puedes. La llamada vuelve a la cola para otro compañero.
- Si se acaba la cuenta atrás sin que hagas nada, se rechaza sola.

:::info
Cada rechazo queda registrado y tu supervisor lo ve.
:::

## Ver quién llama

El número de quien llama aparece en tres sitios:

- En el aviso de **Llamada entrante**, si contestas a mano.
- En la pantalla del teléfono, con el nombre si el cliente ya está en la base.
- En la tarjeta de la llamada, en **Comunicaciones abiertas**.

Si Eclipta encuentra al cliente en la base, el **Formulario de gestión** del centro sale lleno con sus datos.

## Durante la llamada

La pantalla del teléfono dice **EN LLAMADA**, con el nombre o el número del cliente y el reloj de la llamada.

| Botón | Para qué |
|---|---|
| **Silenciar** | Apaga tu micrófono. Pulsa **Activar micrófono** para volver. |
| **Poner en espera** | Deja al cliente en espera. La pantalla dice **EN ESPERA**. Pulsa **Reanudar** para seguir. |
| **El teclado** | Marca opciones durante la llamada, por ejemplo en un menú de voz al que llamaste. |
| **Colgar** | El botón rojo. Termina la llamada. |

## Hacer una llamada

1. En **Campañas asignadas**, pulsa **la lupa** de la campaña desde la que vas a llamar. Se abre la **Búsqueda manual** y el teléfono queda listo.
2. Escribe el número con el teclado del computador o con las teclas de la pantalla. También puedes pegarlo: Eclipta quita los espacios, paréntesis y guiones.
3. Pulsa **Enter** o el botón verde **Llamar**.

La pantalla dice **MARCANDO...** mientras suena. En las llamadas que haces, el reloj empieza a correr con el primer timbre, no antes.

También puedes llamar desde el formulario: si un campo de teléfono tiene un icono de teléfono al lado, púlsalo para llamar a ese número.

Si la llamada no sale, la pantalla muestra el motivo en rojo.

### Llamadas que te pone el marcador

En algunas campañas salientes, Eclipta marca solo por ti. La llamada te llega ya hecha: tu teléfono descuelga, oyes el timbre del cliente y la ficha aparece en el formulario.

## Al colgar

Cuando la llamada termina, arriba del formulario aparece en rojo **TIPIFICACIÓN OBLIGATORIA**.

1. Elige la **Tipificación**.
2. Si hace falta, completa el formulario y escribe tus **Observaciones**.
3. Pulsa **Cerrar gestión**.

:::warning Colgar termina la llamada, no la gestión
Hasta que no cierres la gestión, **sigues ocupado** y no te entra otra llamada. Si tu campaña tiene un tiempo límite para tipificar, verás la cuenta atrás **Post-llamada** arriba. Al llegar a cero, Eclipta cierra la gestión por ti, y eso queda en el reporte como cerrada por el sistema.
:::

Más detalles en [Gestiones](/guia/agentes/gestiones).

## Transferir una llamada

Debajo del teléfono, con una llamada activa, tienes cuatro botones:

| Botón | A dónde la pasa |
|---|---|
| **Externo** | A un número de fuera. |
| **Campaña** | A la cola de otra campaña. |
| **Agente** | A un compañero. |
| **IVR** | A un menú de voz. |

### A un compañero

1. Pulsa **Agente**. Se abre **Transferir a agente**.
2. Busca al compañero. La lista está agrupada por campaña: elige primero la campaña y luego la persona. Puedes escribir en **Buscar agente o extensión...**
3. Pulsa su nombre.

La ventana no se cierra hasta que la transferencia se confirma. Si no se pudo, te dice por qué, para que elijas a otra persona.

En la lista solo aparecen los compañeros **conectados**, cada uno con su estado: **Disponible**, **En llamada**, **En pausa**, **Tipificando**…

:::tip Aunque esté ocupado, la llamada queda guardada para él
Si le pasas la llamada a un compañero que está hablando o en pausa, la llamada **no se pierde ni se la lleva otro**: queda esperando en cola, **reservada para esa persona**. Cuando termine, es la siguiente que le entra. Mientras tanto no le entra ninguna otra.

La reserva dura el tiempo que tenga configurado la campaña. Si se cumple, la llamada pasa a la cola general, en el último puesto. Si el compañero se desconecta, la reserva se suelta en el acto. Si solo está en pausa, la reserva se mantiene.
:::

Si un compañero trabaja en dos campañas, aparece en las dos. La campaña que elijas importa: si él no la toma, la llamada sigue en la cola de esa campaña.

### A otra campaña o a un IVR

1. Pulsa **Campaña** (se abre **Transferir a campaña**) o **IVR** (se abre **Transferir a IVR**).
2. Busca el destino en la lista.
3. Púlsalo.

Si la lista sale vacía, es que ninguna campaña o ningún IVR está preparado para recibir transferencias. Pídeselo a tu administrador. Ver [Campañas](/guia/administracion/campanas) e [IVR](/guia/administracion/ivr).

### A un número externo

1. Pulsa **Externo**. Se abre **Transferencia externa**.
2. Escribe el número.
3. Pulsa **Transferir a** seguido del número.
