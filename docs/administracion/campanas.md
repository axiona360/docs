---
sidebar_position: 5
title: Campañas
description: Crea campañas entrantes, salientes y blended, asígnales agentes, tipificaciones, cola, marcador y devoluciones de llamada.
---

# Campañas

Una **campaña** es el equipo de agentes que atiende algo concreto: «Ventas», «Soporte», «Cobranza». Cada campaña tiene sus agentes, su formulario, sus tipificaciones y su forma de repartir el trabajo.

Hay tres tipos:

| Tipo | Para qué sirve |
|---|---|
| **Campaña entrante** | Recibe llamadas y chats. Tiene una **cola**: quien llama espera ahí hasta que un agente lo atiende. |
| **Campaña saliente** | Llama a tus clientes. El agente marca a mano o el sistema marca por él. |
| **Campaña blended** | Las dos cosas a la vez: los mismos agentes atienden lo que entra y llaman hacia afuera. |

## Crear una campaña

Las campañas se crean **desde el lienzo** de su flujo de trabajo, no desde otro sitio:

1. Entra a **Flujos de Trabajo → tu flujo**.
2. Arrastra al lienzo la caja **Campaña entrante**, **Campaña saliente** o **Campaña blended**. El tipo lo decide la caja que eliges.
3. Haz doble clic sobre la caja.
4. Escribe el **Nombre de la campaña**. Es el nombre que verás en la caja del lienzo.
5. Si quieres, elige el **Formulario del agente**: lo que el agente rellena mientras atiende. Ver [Formularios](/guia/administracion/formularios).
6. Pulsa **Crear y configurar**.

Se abre la campaña para que termines de configurarla. Para volver a abrirla después, haz doble clic sobre su caja.

:::tip
Si la caja es de una campaña que ya existe (por ejemplo, una que borraste del lienzo), usa el enlace **Esta caja es de una campaña que ya existe: elegirla de la lista**.
:::

## Las pestañas de la campaña

Cada tipo de campaña muestra solo las pestañas que le sirven:

| Pestaña | Entrante | Saliente | Blended |
|---|---|---|---|
| **General** | Sí | Sí | Sí |
| **Chat** | Sí | — | Sí |
| **Cola** | Sí | — | Sí |
| **Telefonía** | — | Sí | Sí |
| **Agentes** | Sí | Sí | Sí |
| **Reportes** | Sí | Sí | Sí |

La campaña de devoluciones de llamada tiene además **Devoluciones** y **Audios del callback**. Ver [Devolver la llamada (callback)](#devolver-la-llamada-callback).

Cuando termines, pulsa **Guardar** abajo a la derecha.

## General

### Ponerla en servicio

Arriba está **Campaña activa**, con su estado: **En servicio** o **Inactiva**. Al pulsarlo, el cambio se aplica **en ese momento**, sin tener que guardar: la cola se abre o se cierra al instante.

:::warning
Una campaña **inactiva** no atiende llamadas. Si una caja del lienzo lleva a una campaña inactiva, el flujo se guarda pero no se pone en funcionamiento hasta que la actives.
:::

### Los datos básicos

- **Nombre**: obligatorio.
- **Formulario**: lo que el agente rellena en cada gestión. Una vez asignado no se puede cambiar.
- **Base de datos**: es la del flujo y no se elige aquí. Vale para todas las campañas del flujo.
- **Contestación de llamadas** (entrantes y blended): **Heredar del flujo**, **Automática: descuelga solo** o **Manual: el agente contesta**. Si la campaña elige, manda ella sobre el flujo.

### Identificación del cliente

En las campañas entrantes, **Cuando entra una llamada** dice por qué campos de la base se busca al cliente: los campos donde tengas teléfonos. Así la llamada le llega al agente con la ficha ya abierta. Sin campos, no se busca nada y el agente busca a mano.

Para los chats, los campos se eligen en la caja del canal, no aquí. Ver [La caja de WhatsApp](/guia/administracion/flujos-de-trabajo#la-caja-de-whatsapp).

### Tiempos de gestión del agente

Cuántos segundos tiene el agente en cada momento de la gestión antes de que se cierre sola por inactividad: **Búsqueda manual**, **Formulario sin actividad**, **Post-colgar búsqueda** (solo salientes) y **Post-colgar con formulario**. Con **0** no hay límite y el agente cierra a mano.

### Tipificaciones

Las tipificaciones son los resultados posibles de una gestión: «Venta», «No interesado», «Volver a llamar»… El agente elige una al cerrar cada llamada o chat.

1. Pulsa **Agregar tipificación**.
2. Escribe el **Nombre**.
3. Elige qué pasa después: **No reintentar**, **Reintento automático** o **Agenda**, y las horas.
4. Elige la clasificación: **Efectivo**, **No efectivo**, **Contactado**, **No contactado**, **No contactable** o **Sin gestión**. Es lo que usan los reportes para contar.
5. Puedes arrastrar las filas para cambiar el orden.

### Otras secciones

- **Recibir transferencias** (salientes): la **Extensión para transferir aquí**, el número que marca un agente para pasarle a este equipo una llamada que ya está atendiendo. Tiene que estar entre 2000 y 2999. Si la dejas vacía, nadie puede transferir a esta campaña.
- **Troncales y planes** (salientes y blended): por qué líneas salen las llamadas, en orden de prioridad. Las líneas y los planes se configuran en [Canales](/guia/administracion/canales).
- **Campos de búsqueda manual** y **Mapeo formulario → base**: qué campos puede usar el agente para buscar a un cliente, y en qué campo de la base se guarda cada respuesta del formulario.

## Chat

Para que la campaña reciba chats, marca **Canal de chat habilitado**. Debajo se ajusta todo lo del chat:

- **Capacidad del agente**: **Chats simultáneos por agente**.
- **Permisos multimedia de chat**: cada tipo (imágenes, videos, audio, documentos) puede **Heredar** lo del flujo, **Permitir** o **Bloquear**.
- **Mensajes al cliente**: el que recibe cuando un agente toma el chat, el que se repite mientras espera (con su posición en la cola, si quieres), el cierre cuando espera demasiado y el cierre cuando no hay ningún agente conectado.
- **Cierre de conversación**: avisos y cierre cuando el cliente no responde, alertas de color al agente cuando es él quien no responde, el mensaje de despedida cuando el agente cierra, y el tiempo para tipificar después de un cierre automático.
- **Desconexión del agente**: cuánto se espera a que vuelva antes de pasar sus chats a otro.
- **Inactividad mutua después de asignación**: qué pasa si ni el cliente ni el agente escriben.
- **Encuesta de satisfacción**: una pregunta al cliente después de cerrar.

## Cola

La pestaña **Cola** (entrantes y blended) decide cómo espera quien llama y cómo se reparte la llamada. Cada campo tiene un **?** con su explicación.

### La espera en cola

- **Máx. espera en cola (seg)**: lo máximo que espera quien llama. Con -1 espera para siempre.
- **Y cuando se acaba la espera**: qué se hace al agotarse (**Colgar la llamada**, **Pasarla a otra campaña** o **Pasarla a un IVR**) y el **Audio de despedida al agotarse**. Con colgar, la llamada se pierde.

### Qué oye quien espera

La **Música de espera** suena de fondo. Si la dejas vacía, quien espera oye silencio, y mucha gente cuelga creyendo que se cortó.

Encima de la música armas una **secuencia** de pasos con **+ Añadir paso**:

- **Un audio mío**
- **Posición en la cola** («está en la posición tres»)
- **Tiempo estimado de espera**
- **Ofrecer devolver la llamada**

Cada paso dice cuánto se espera desde que terminó el anterior. Al final, la secuencia vuelve a empezar. Debajo verás un dibujo con **LO QUE OIRÁ QUIEN ESPERE**.

:::info
Si la campaña no cambió la secuencia, usa la del flujo (**Ajustes → Audios de cola**). En cuanto cambies algo aquí, la campaña pasa a tener su propia secuencia, entera.
:::

### Reparto a los agentes

Los tiempos para ofrecer la llamada a cada agente: cuánto se espera a que conteste, cuánto se pausa al que deja pasar una llamada, el respiro después de colgar para tipificar, y otros. El más útil de conocer:

- **Guardarle la llamada al compañero (seg)**: cuando un agente le pasa su llamada a un compañero, durante este tiempo la llamada queda guardada para esa persona y no se le ofrece a nadie más. Al cumplirse, pasa a la cola general en el último puesto. Con 0 no se le guarda.

### Traer llamadas a esta cola

La **Extensión para transferir a esta cola**: el número que marca un agente para pasar aquí una llamada que ya tiene. Entre 2000 y 2999. Vacía, nadie puede transferir aquí.

### Cuando no hay quien atienda

- **Qué se hace si NO hay ningún agente conectado** en la campaña (fin de jornada, festivo…): **Seguir esperando en la cola**, **Colgar la llamada**, **Pasarla a otra campaña** o **Pasarla a un IVR**. Un agente en pausa cuenta como presente.
- **Audio si NO hay ningún agente conectado**: lo que se le dice antes de irse.

Cuando eliges otra campaña o un IVR, la flecha aparece sola en el lienzo al guardar.

En los dos desenlaces (espera agotada y sin agentes) puedes marcar **Antes de irse, ofrecerle que le devolvamos la llamada.**

## Devolver la llamada (callback)

El callback permite que quien espera en la cola **marque 1** para que lo llamen después, en vez de seguir esperando. Deja su teléfono, sale de la cola y la devolución queda apuntada en una campaña saliente.

### Activarlo

1. Abre la campaña entrante y ve a la pestaña **Cola**.
2. En **Qué oye quien espera**, añade el paso **Ofrecer devolver la llamada** y elige su audio.
3. Debajo aparece la casilla **Recoger las devoluciones en una campaña propia.** Márcala.

Eclipta crea una campaña saliente llamada `Callback_` más el nombre de tu campaña, la dibuja en el lienzo con la caja **Devolver la llamada** y la conecta con su flecha. Si ya existía de antes, la reutiliza.

:::info
Mientras nadie recoja las devoluciones, el paso **no suena**: no se le ofrece nada a quien espera, porque prometer una llamada que nadie va a apuntar es peor que no ofrecerla.
:::

Así funciona para quien llama: marca 1, dice si su teléfono es celular o fijo, lo teclea seguido de la tecla numeral y se le relee para que lo confirme. **El número se pide siempre**: no se usa el número desde el que llama, porque puede ser una centralita o un teléfono prestado.

### La campaña de devoluciones

Abre la caja **Devolver la llamada** con doble clic. Además de General, Agentes y Reportes, tiene:

- **Devoluciones**: quién pidió que lo llamaran, cuánto esperó, de qué cola salió, cuándo lo pidió y el estado (**Sin llamar**, **Llamando**, **Devuelta**, **No se pudo**, **Cancelada**).
- **Audios del callback**: las frases del diálogo (celular o fijo, pedir el número, pedir confirmación, número guardado, errores). Todas suenan con la voz del sistema si no cambias nada.

En **General** está también el **Tipo de marcador** de esta campaña, para que el sistema devuelva las llamadas solo. Ver [Telefonía](#telefonía-campañas-salientes-y-blended).

Asígnale agentes como a cualquier campaña.

### Apagarlo

1. En la campaña entrante, pestaña **Cola**, desmarca **Recoger las devoluciones en una campaña propia.**
2. Eclipta te pregunta **«¿Seguro que desea desactivar el callback?»** y te dice cuántos registros sin gestionar tiene y cuántos agentes.
3. Si hay registros sin gestionar, aparece la casilla **Descargar los registros sin gestionar en Excel antes de inactivar**. Márcala si quieres una copia.
4. Pulsa **Continuar**.

Al apagarlo:

- Los registros sin gestionar **se eliminan de forma permanente**.
- Los agentes se desvinculan de la campaña de devoluciones.
- La caja **Devolver la llamada** sale del lienzo. La campaña se queda, vacía y sin agentes, por si lo vuelves a activar.

:::warning
Si marcaste la descarga del Excel y la descarga falla, **el callback no se apaga**. Vuelve a intentarlo: apagarlo sin la copia perdería esos contactos sin vuelta atrás.
:::

Después de apagarlo, las llamadas que hizo el callback siguen a la vista: en la pestaña **Reportes** de la campaña entrante aparece el botón **Reporte Callback** (solo si el callback está apagado y tuvo llamadas). Para volver, pulsa **Reporte de campaña**.

## Telefonía (campañas salientes y blended)

### El tipo de marcador

**Tipo de marcador** es lo primero, y decide todo lo demás:

- **Manual**: el agente marca desde su teléfono. El sistema no llama a nadie por su cuenta. Es lo que viene por defecto.
- **Progresivo**: el sistema marca solo, una llamada por cada agente libre.

{/* INTERNO, no se muestra al cliente. Próximamente: marcador Predictivo (aparece en gris en la lista). */}

### Horario del marcador

Si el marcador es progresivo, aparece **Horario del marcador**: fuera de esa franja no llama, aunque la campaña esté activa. Con el horario detallado por día puedes dar un horario distinto a cada día y a los festivos.

### Configuraciones de llamada

- **Tiempo de timbrado (s)**: cuánto se deja sonar el teléfono del cliente antes de darse por vencido. Vale también cuando el agente marca a mano.
- **Pausa entre llamadas (s)**: cuánto espera el agente entre cerrar una gestión y recibir la siguiente llamada. Solo con marcador progresivo.
- **Espera con la ficha abierta (s)**: con la ficha del cliente ya abierta, cuánto se espera antes de lanzar la llamada, para que el agente alcance a leer. Solo con marcador progresivo.
- **Máx. intentos por contacto**: cuántas veces se llama a la misma persona antes de darla por agotada. Solo con marcador progresivo. El intento cuenta al colgar.

### Cargar registros desde Excel

En **Registros para marcar**, pulsa **Cargar registros** (la campaña tiene que estar guardada primero).

1. Elige una opción para el cargue:
   - **Cargar en base**: los registros se guardan en la base del flujo y se ponen en la cola de esta campaña.
   - **Cargue temporal**: los registros viven solo en esta campaña y no se guardan en ninguna base. El agente puede guardar uno a uno los que le sirvan.
2. Pulsa **Cargar archivo** y elige tu Excel (.xlsx, .xls o .csv).
3. En **Emparejar columnas** verás una fila por cada columna de tu Excel. Elige a qué campo de la base va cada una, o **no cargar** si no la quieres.
4. Si cargas en la base, elige el **Campo llave de este cargue**, por ejemplo la cédula. Si el registro ya existe con esa llave, se actualiza; si no, se crea. Con **Sin comparar: se crean todos**, todos entran como nuevos.
5. Pulsa **Cargar datos**.

Al terminar verás cuántos registros quedaron **nuevos**, **actualizados**, **repetidos en el archivo** y **rechazados**.

:::info
La llave del cargue vale solo para ese cargue. No cambia cómo tu base decide qué es un registro duplicado.
:::

## Agentes

1. Ve a la pestaña **Agentes**. La campaña tiene que estar guardada.
2. A la izquierda, en **Disponibles**, marca a las personas que quieres (puedes buscar por nombre o correo) y pulsa **Asignar seleccionados**. O pulsa **Asignar todos**.
3. A la derecha, en **En esta campaña**, ves a los asignados con su prioridad (**Prio**). Para sacar a alguien, usa **Excluir de campaña** o **Excluir seleccionados**.

Para asignar agentes necesitas los permisos de ver usuarios y de asignar agentes a campañas. Ver [Usuarios](/guia/administracion/usuarios).

## Reportes

La pestaña **Reportes** muestra las gestiones de esta campaña, con filtros y descarga en Excel. Ver [Reportes](/guia/supervision/reportes).

## Borrar una campaña

Una campaña se borra desde el lienzo: selecciona su caja y pulsa **Suprimir**, o haz clic derecho sobre la caja y elige **Eliminar**.

- Si tiene agentes asignados, el aviso te dice cuántos: al borrarla, **todos se desvinculan** de esa campaña automáticamente.
- Si es una campaña entrante con el callback encendido y con agentes en la campaña de devoluciones, **no se deja borrar**: el aviso te dice que primero saques a los agentes del callback y apagues el callback.
- Al confirmar, la caja sale del lienzo y la campaña va a la [Papelera](/guia/administracion/papelera), **inactiva y con su configuración guardada**.

Si la restauras, vuelve al lienzo inactiva y sin agentes: tendrás que activarla y asignarle agentes de nuevo.
