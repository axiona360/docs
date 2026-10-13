---
sidebar_position: 1
title: El tablero en tiempo real
description: Mira al instante cómo van tus agentes, tus colas, tus llamadas y tus chats, y entra al detalle de cada campaña.
---

# El tablero en tiempo real

El tablero es la primera pantalla del panel. Te dice **qué está pasando ahora mismo** en tu operación: cuántos agentes hay conectados, quién espera en cola, cuántas llamadas y chats se atendieron hoy y cómo va cada campaña.

Para abrirlo, pulsa **Panel** en el menú de la izquierda.

Las cifras se actualizan solas cada dos segundos. No tienes que recargar la página.

:::info Cuando las cifras dejan de llegar
Si el tablero pierde la conexión, arriba aparece un aviso: **Sin actualizar hace…** o **Sin conexión con el servidor**. Mientras lo veas, las cifras pueden no estar al día. Normalmente se recupera solo en unos segundos.
:::

## La fila de arriba

- **Bienvenido a tu dashboard**: el saludo, con el botón **Soporte** para escribirnos un correo.
- **Agentes**: cuatro cifras.
  - **Conectados**: cuántos agentes están dentro, sobre el total que tienes.
  - **Disponibles**: libres para recibir una llamada o un chat.
  - **En gestión**: atendiendo algo.
  - **Pausados**: en alguna pausa.
- **Rutas entrantes** y **Vías salientes**: cuántas llamadas hay ahora mismo en cada uno de tus números de entrada y en cada línea de salida. Te sirve para ver si un número está recibiendo lo que esperas.

## Las cifras generales: Llamadas y Chat

Debajo hay dos filas de cajas, una para **Llamadas** y otra para **Chat**. Van en el mismo orden, así cada cifra de chat queda debajo de su pareja de llamadas.

«Hoy» quiere decir desde la medianoche.

| Llamadas | Chat | Qué cuenta |
|---|---|---|
| **En IVR** | **En bot** | Quién está ahora en el menú de voz o hablando con el bot. |
| **Aban-IVR** | **Aban-bot** | Quién se fue hoy desde el menú de voz o desde el bot, sin llegar a una campaña. |
| **En cola** | **En cola** | Quién espera ahora a que lo atiendan. |
| **Aban-cola** | **Aban-cola** | Quién se cansó hoy de esperar en la cola y se fue. |
| **Activas** | **Activos** | Llamadas y chats que un agente está atendiendo ahora. |
| **Atendidas** | **Atendidos** | Lo que se atendió hoy. |
| **Tasa de ate.** | **Tasa de ate.** | Atendidos sobre el total de atendidos más abandonados en cola, hoy. |

La **Tasa de ate.** se pinta en verde desde 80 %, en ámbar desde 50 % y en rojo por debajo.

:::tip Por qué el abandono en el IVR o en el bot no baja la tasa
Quien colgó en el menú de voz o se fue del bot nunca pidió hablar con un agente. Por eso la tasa solo cuenta a quien llegó a la cola.
:::

Pasa el ratón por encima de una caja para ver qué cuenta. Pulsa **Ver detalle** para ver la explicación y, cuando se puede, cuántas hay en cada campaña. Las cifras del IVR y del bot no se reparten por campaña, porque pasan antes de llegar a una.

Si una caja muestra una raya (—) en vez de un número, es que ese dato todavía no llegó. No quiere decir cero.

## Cada flujo de trabajo, con sus campañas

Más abajo ves las campañas agrupadas por **flujo de trabajo**.

1. Arriba de esa sección hay una tira con un botón por flujo. Cada uno dice cuántas campañas tiene. Si en ese flujo hay alguien en cola, lo verás en ámbar aunque estés mirando otro.
2. Pulsa el flujo que quieres ver. Si tienes muchos, usa las flechas de los lados para correr la tira.
3. Debajo salen sus campañas en dos filas: **Entrantes** y **Salientes**. Las campañas mixtas van con las entrantes.

El tablero recuerda el último flujo que miraste en ese navegador. Las campañas que no están en ningún flujo aparecen en **Sin flujo**, al final.

### La tarjeta de una campaña entrante

Muestra una tablita con tres filas y una columna por canal:

- **En cola**: quién espera.
- **En atención**: lo que se está atendiendo.
- **Atendidos hoy**.

Los canales son **Llamadas**, **WhatsApp**, **Chat web (chatbot)**, **Correo**, **Messenger**, **Instagram**, **TikTok** <span className="proximamente">Próximamente</span> y **Telegram**.

La tarjeta se marca en ámbar cuando hay alguien en cola. Si además hay llamadas esperando y ningún agente libre para tomarlas, se pone en rojo y dice **sin nadie libre**.

### La tarjeta de una campaña saliente

Tiene tres cifras:

- **Sin gestión**: los registros cargados que todavía faltan por llamar.
- **En curso**: las llamadas que están saliendo ahora.
- **Gestionadas**: los registros ya trabajados.

### La fila de agentes de cada tarjeta

Al pie de cada tarjeta ves a los agentes de esa campaña. Primero el total, y luego un icono de diadema de color por cada estado:

- Icono de personas: **Agentes asignados**.
- Verde: **Disponibles**.
- Rojo: **Ocupados** (en llamada o chat).
- Ámbar: **En pausa**.
- Gris: **Sin conectar**.

Pasa el ratón por encima para ver el nombre de cada cifra.

## El detalle de una campaña

Pulsa **Ver detalle** en una tarjeta. Se abre una ventana con todo lo de esa campaña, y también se actualiza sola.

Arriba, si hay gente esperando, verás botones como **3 chats en cola** o **2 llamadas en cola**, con lo que lleva esperando el más antiguo. Púlsalos para ver la lista de quién espera.

Debajo está la tabla de agentes:

| Columna | Qué muestra |
|---|---|
| **Agente** | El nombre. |
| **Estado** | Lo que está haciendo, en palabras. |
| Un icono por canal | Cuántas llamadas o chats tiene en ese canal. |
| **Tiempo en estado** | Cuánto lleva en ese estado. |

La tabla pone arriba lo que pide tu atención: primero a quien le está entrando una llamada, luego a quien pidió pausa, y al final a los desconectados.

Los estados que puedes ver son: **Disponible**, **Llamada asignada**, **En llamada**, **Tipificando llamada**, **En gestión**, **Chats sin abrir**, **Buscando cliente**, **En otra campaña**, **En pausa**, **Pausa solicitada** y **Desconectado**. Cuando el agente está en pausa, el estado dice cuál: por ejemplo **Pausa Almuerzo**, o **Pausa Almuerzo (solicitada)** si la pidió y todavía está terminando lo que tenía.

Una fila en rojo quiere decir que ese agente se pasó del tiempo de su pausa.

### Sacar a un agente de pausa

Junto a un agente en pausa aparece **Sacar de pausa**.

1. Pulsa **Sacar de pausa**.
2. Lee el aviso y confirma con **Sacar de pausa**.

El agente queda **disponible** y puede recibir chats y llamadas de inmediato. Lo verá en su pantalla sin haberlo pedido, así que conviene avisarle. Queda registrado que fuiste tú quien interrumpió la pausa.

## Revisar los chats de un agente

En la tabla del detalle, el número de un canal de chat es un botón. Púlsalo y se abre **Chats de** seguido del nombre del agente, con todas sus conversaciones abiertas en esa campaña.

En cada conversación ves el cliente, el último mensaje, hace cuánto se le asignó y si está **Respondido** o **Sin responder**.

- **Pulsa una conversación** para leerla entera. Desde ahí puedes escribir de dos formas:
  - Como supervisor: el cliente recibe tu mensaje.
  - Como **nota interna**: solo la ve el agente. Úsala para guiarlo sin que el cliente se entere.
- **Transferir una conversación**: pulsa las flechas de esa conversación.
- **Transferir todos**: pasa de una vez todos los chats de ese agente en esa campaña. Al terminar te dice cuántos se transfirieron y, si alguno falló, por qué.

Un número junto al nombre de una campaña o de un agente indica que hay notas internas sin leer en sus chats.

## Escuchar una llamada

En la columna de llamadas del detalle, cuando un agente está hablando, su número aparece con un icono de oreja. Púlsalo y se abre **Intervenir en la llamada** con tres formas de entrar:

- **Espiar**: escuchas sin que el agente ni el cliente lo noten.
- **Susurrar**: escuchas y le hablas solo al agente. El cliente no te oye.
- **Conferencia**: los tres se escuchan y pueden hablar.

Mientras estás dentro ves cuánto llevas. Pulsa **Terminar** para salir.

Para usarlo necesitas tener una extensión asignada, y el agente también. Las extensiones se asignan en [Usuarios](/guia/administracion/usuarios). Si te falta, la ventana te lo dice.

:::warning Función nueva
Esta función es reciente y todavía no se ha probado en todos los casos. Si al entrar no oyes la llamada o algo no se comporta como esperas, avísanos con el botón **Soporte**.
:::

## La campanita: pausas incumplidas

La campanita de arriba a la derecha te avisa cuando un agente se pasa del tiempo máximo de su pausa. El aviso dice quién, en qué pausa y cuánto tiempo era. Cuando el agente vuelve, el aviso queda como **Resuelta**.

Puedes borrar un aviso con su papelera, o todos con **Limpiar**.

## Si no ves nada

Si el tablero dice **Sin campañas activas**, todavía no hay campañas funcionando. Créalas en [Flujos de trabajo](/guia/administracion/flujos-de-trabajo) y [Campañas](/guia/administracion/campanas).
