---
sidebar_position: 4
title: Flujos de trabajo
description: Dibuja en el lienzo por dónde entra cada llamada y cada chat, y a dónde va después.
---

# Flujos de trabajo

Un **flujo de trabajo** reúne todo lo que necesita una operación: su base de clientes, sus campañas, sus IVR y sus bots. Y tiene un **lienzo**, un dibujo con cajas y flechas donde decides por dónde entra cada llamada y cada chat, y a dónde va después.

Por ejemplo: «las llamadas al número de ventas pasan primero por un IVR; quien marca 1 va a la campaña Ventas y quien marca 2 va a Soporte». Eso se dibuja aquí.

:::info
Lo que guardas en el lienzo es lo que atiende tus llamadas y tus chats **desde ese momento**. No hay un paso aparte para «publicar».
:::

## Crear un flujo

1. Entra a **Flujos de Trabajo**.
2. Pulsa **Nuevo flujo**.
3. Escribe el **Nombre**. Por ejemplo, «Atención al cliente».
4. Elige la **Base de clientes**. Es obligatoria y vale para todas las campañas del flujo. Si todavía no tienes ninguna, créala primero: ver [Bases de datos](/guia/administracion/bases-de-datos).
5. Si quieres, escribe una **Descripción**.
6. En **Llamadas entrantes**, elige el **Modo de contestación**:
   - **Manual**: al agente le suena el teléfono y él acepta o rechaza la llamada. Aquí eliges también el **Tiempo para contestar** (entre 5 y 300 segundos) y el **Tono de llamada**. Puedes subir tu propio tono con **Subir** (mp3, wav u ogg, de hasta 5 MB).
   - **Automático**: la llamada se contesta sola.
7. Pulsa **Crear flujo**.

En la lista de flujos, cada fila tiene:

- El interruptor **Activo**, para encender o apagar el flujo.
- **Ver detalle**, que abre el lienzo.
- **Editar**, para cambiar el nombre, la base y el modo de contestación.
- **Eliminar**, que manda el flujo a la [Papelera](/guia/administracion/papelera). Sus campañas dejan de estar disponibles, pero puedes restaurar el flujo entero desde allí.

## Los ajustes del flujo

Dentro del lienzo, el botón **Ajustes** (arriba) abre la configuración del flujo, con cuatro pestañas:

| Pestaña | Para qué sirve |
|---|---|
| **General** | Lo mismo que al crearlo: nombre, base, descripción y modo de contestación. |
| **Permisos multimedia** | Qué puede enviar el agente (imágenes, videos, audio y notas de voz, documentos) y qué puede recibir del cliente. Si bloqueas algo que el cliente envía, le llega un mensaje de aviso que puedes escribir tú. |
| **Audios de cola** | Los audios que heredan todas las campañas del flujo: las despedidas (cuando no hay agentes conectados y cuando se agota la espera), la música de espera y los anuncios mientras el cliente espera. |
| **Reportes** | Las gestiones de todo el flujo. |

## El lienzo

A la izquierda está la **paleta** con todas las cajas, agrupadas por familia y por color. En el centro, el lienzo. Abajo a la izquierda tienes el zoom, el botón para encuadrar todo el dibujo y **Pantalla completa** (sales con Escape).

Algunas cajas aparecen en gris: todavía no se pueden usar.

| Familia | Cajas |
|---|---|
| **Captura de información** (azul) | **Cargador**: carga registros a la base desde un Excel. |
| **Canales de entrada** (verde) | **Llamadas entrantes** (un número de teléfono), **Chat web**, **WhatsApp**, **Telegram** y **Correo entrante**. |
| **Automatización e IA** (amarillo verdoso) | **Bot** y **IVR**. |
| **Campañas y tareas** (morado) | **Campaña entrante**, **Campaña saliente** y **Campaña blended**. |
| **Salidas** (rojo) | **Correo saliente** y **Plantilla de WhatsApp**. |

{/* INTERNO, no se muestra al cliente. Próximamente: Formulario web, Leads de correos, Webservice y Cargue manual; Facebook Messenger, Instagram, TikTok, Webform entrante, Click to call y SMS entrante; Control de calidad IA; Tareas de backoffice; SMS saliente y Marcador robótico. */}

Hay una caja más, **Devolver la llamada**, que no está en la paleta: aparece sola cuando activas las devoluciones de llamada en una campaña entrante. Ver [Campañas](/guia/administracion/campanas#devolver-la-llamada-callback).

## Agregar una caja

1. Busca la caja en la paleta.
2. Arrástrala y suéltala en el lienzo.

Listo: la caja **se crea y se guarda sola**. Verás el aviso «creada y guardada». Una caja recién soltada no está conectada a nada, así que no cambia por dónde van tus llamadas.

:::tip
Mientras una caja no apunta a nada (un número, una campaña, un IVR…), al pasar el ratón por encima dice «Doble clic para vincular». Es tu recordatorio de que le falta configurarse.
:::

## Configurar una caja: doble clic

Haz **doble clic** sobre la caja. Lo que se abre depende del tipo:

| Caja | Qué pasa con el doble clic |
|---|---|
| **Llamadas entrantes** | La primera vez eliges uno de tus números, los que diste de alta en [Canales](/guia/administracion/canales). Después se abre su configuración: ver [La caja del número entrante](#la-caja-del-número-entrante). |
| **WhatsApp** | Se abre la caja y dentro eliges el número. Ver [La caja de WhatsApp](#la-caja-de-whatsapp). |
| **Campaña entrante, saliente o blended** | La primera vez te pide el **Nombre de la campaña** y, si quieres, el **Formulario del agente**. Pulsa **Crear y configurar**. Si la campaña ya existe, usa el enlace **Esta caja es de una campaña que ya existe: elegirla de la lista**. Ver [Campañas](/guia/administracion/campanas). |
| **IVR** y **Bot** | La primera vez se crea uno nuevo y se abre su editor encima del lienzo. Ver [IVR](/guia/administracion/ivr) y [Bots](/guia/administracion/bots). |
| **Chat web**, **Telegram**, **Correo entrante** y **Correo saliente** | Eliges el canal de la lista y se abre su configuración. Los canales se dan de alta en [Canales](/guia/administracion/canales). |
| **Plantilla de WhatsApp** | Eliges una de tus plantillas. |
| **Cargador** | La primera vez eliges la base. Después te lleva a esa base, donde cargas el Excel. Ver [Bases de datos](/guia/administracion/bases-de-datos). |

Con **clic derecho** sobre una caja de campaña, IVR o bot aparece un menú con **Eliminar** (y, en los bots, **Duplicar**).

### Un número, un IVR o un bot va en una sola caja

Un número entrante, un número de WhatsApp (o cualquier canal), un IVR y un bot solo pueden estar en **una caja**. Si ya están en otra, no aparecen en la lista para elegir, o aparecen en gris diciendo dónde están. Las campañas sí se pueden repetir en varias cajas.

## El nombre y el código de cada caja

Arriba, en la ventana de cada caja, está el campo **Caja**: ahí escribes el nombre que quieras, por ejemplo «Ventas Bogotá». Se guarda solo, un segundo después de que dejas de escribir.

A la derecha del nombre aparece el **código** de la caja, por ejemplo `_1294`. Lo pone Eclipta, no se repite en ninguna otra caja y no se puede cambiar. Se ve también en el lienzo, junto al nombre. Sirve para saber de qué caja hablas cuando dos se llaman parecido.

:::warning
**Sin nombre no se guarda.** Si intentas guardar la configuración de una caja que no tiene nombre, Eclipta te dice: «Primero ponle nombre a la caja (arriba, en «Caja»): sin nombre no se guarda.» El nombre gris que ves mientras tanto (por ejemplo `IVR_1294`) es solo una sugerencia, no cuenta.
:::

## Conectar las cajas: las flechas

Hay dos clases de flechas:

| Flecha | Cómo se ve | Quién la dibuja |
|---|---|---|
| **Automática** | Línea continua | La pone la configuración de la caja. Por ejemplo, cuando en la caja de un número eliges «A dónde va la llamada: IVR», la flecha al IVR aparece sola al guardar. |
| **Manual** | Línea punteada | La dibujas tú, arrastrando con el ratón. |

### Las flechas automáticas

Salen de las cajas que deciden su destino por dentro: **Llamadas entrantes**, **WhatsApp** y las campañas entrante y blended (lo que pasa cuando no hay agentes, cuando se agota la espera y las devoluciones de llamada).

- Para **cambiar** a dónde va: abre la caja con doble clic y cambia el destino.
- Para **quitarla**: abre la caja y deja ese destino sin elegir (en «Seleccione»).
- No se pueden borrar desde el lienzo. Si lo intentas, Eclipta te explica dónde se quitan.

### Las flechas manuales

1. Pasa el ratón por encima de la caja de origen: aparecen sus cuatro puntos de conexión.
2. Arrastra desde uno de los puntos hasta la caja de destino.

Verás el aviso «Conector creado». La flecha se guarda sola.

Solo se pueden dibujar flechas a mano desde **Cargador**, **Chat web**, **Telegram**, **Correo entrante**, **Bot** e **IVR**. Las demás cajas se configuran por dentro, y si intentas arrastrar desde ellas Eclipta te dice por qué no se puede.

:::info
Cada salida va a un solo sitio. Si la salida de una caja ya lleva a otra, primero borra la flecha anterior.
:::

:::info
En las campañas entrante y blended verás también las salidas **atendida** y **abandono**. Están para que sepas que esos finales existen, pero no se conectan: cuando ocurren, la llamada ya no está en la cola (o la atendió un agente, o el cliente colgó).
:::

### Acomodar las flechas

Puedes arrastrar la punta de una flecha a otro de los cuatro puntos de la misma caja, para que el dibujo se lea mejor. Eso solo cambia por dónde se engancha, no a dónde va. Las flechas no se mueven solas cuando mueves una caja.

## Borrar cajas y flechas

1. Haz clic sobre la caja o la flecha para seleccionarla.
2. Pulsa la tecla **Suprimir**.
3. Eclipta te pregunta antes, con el nombre de lo que se va y cuántas flechas se lleva por delante. Pulsa **Continuar** para borrar o **Cancelar** para dejarlo como estaba.

El borrado se guarda solo. Lo que borras del lienzo va a la [Papelera](/guia/administracion/papelera), en el menú, y desde allí lo puedes recuperar.

:::warning
**Borrar la caja de una campaña, un IVR o un bot borra también la campaña, el IVR o el bot**, no solo su dibujo. Por eso el aviso es distinto: «¿Desea eliminar el IVR «…»? Se elimina el IVR, no solo su caja del flujograma.» Lee bien antes de confirmar. Para las campañas hay reglas especiales: ver [Borrar una campaña](/guia/administracion/campanas#borrar-una-campaña).
:::

## Guardar: el flujo queda funcionando

Arriba a la derecha está el botón **Guardar**. Guarda el dibujo **y lo pone a atender llamadas en ese mismo momento**. Si todo está bien, verás «Flujo de trabajo guardado exitosamente».

Además, muchas cosas se guardan solas, sin pulsar nada: soltar una caja, dibujar o borrar una flecha, borrar una caja y cambiar el nombre de una caja.

### Cuándo se guarda pero NO se pone en funcionamiento

Si el dibujo no podría atender llamadas, Eclipta **guarda igual tu trabajo** pero no lo pone en funcionamiento, y aparece una franja roja arriba: **«No se publicó: así no atendería llamadas.»** seguida del motivo. Mientras tanto, las llamadas siguen funcionando como antes de tu cambio.

Los motivos más comunes:

- Un número entrante **no tiene destino** elegido.
- Una caja de campaña o de IVR **no está vinculada** a ninguna campaña o IVR.
- Una campaña está **inactiva**. Ábrela y ponla en servicio.
- Un IVR está en **Borrador**. Ábrelo y cambia su estado a **Activo**, arriba junto a su nombre.
- Una flecha lleva a una caja que **todavía no está disponible** (las grises).

Arregla lo que dice la franja y vuelve a pulsar **Guardar**. Puedes cerrar la franja con la ×.

:::tip
Trabajar a medias no es un problema: Eclipta siempre guarda tu dibujo, aunque le falte una flecha. Solo no lo pone a funcionar hasta que esté completo.
:::

## La caja del número entrante

La caja **Llamadas entrantes** representa uno de tus números de teléfono. Con doble clic se abre **Configurar ruta entrante**, con el número arriba.

Arriba también están el campo **Caja** (el nombre) y la casilla **DID activo**: si la desmarcas, ese número deja de recibir llamadas.

### A dónde va la llamada

1. En **A dónde va la llamada**, elige **IVR**, **Campaña** o **Colgar**.
2. Si elegiste IVR o Campaña, elige cuál en **Destino**.
3. Pulsa **Guardar cambios**.

La flecha aparece sola en el lienzo. Si eliges IVR o Campaña y dejas el destino vacío, Eclipta te avisa: el número no atenderá llamadas y el flujo no se podrá poner en funcionamiento.

### Grabación de llamadas

Elige cómo se graban las llamadas que entran por este número:

- **Desde el inicio (incluye IVR y bot)**
- **Solo cuando el agente contesta**
- **No grabar**

### Horario de atención

1. En **Horario de atención**, marca **Habilitar**.
2. Elige el **Tipo de turno**:
   - **Un turno continuo**: la misma franja todos los días que marques.
   - **Horario detallado por día**: cada día con sus propias franjas. Sirve para la jornada partida, por ejemplo de 8:00 a 12:00 y de 14:00 a 18:00. Usa **+ Franja** para añadir otra franja a un día.
3. La fila **Festivos** dice si atiendes los festivos y en qué horario. Un festivo manda sobre el día de la semana: si un lunes es festivo, vale lo que pusiste en Festivos. Los días festivos se configuran en [Configuración](/guia/administracion/configuracion).
4. Si trabajas en otro huso horario, cámbialo en **Zona horaria**. Vacío usa el del sistema.

Sin horario, el número atiende siempre, a cualquier hora.

### Qué pasa fuera de horario

En **Acciones y audios** decides qué pasa cuando el número no atiende. Hay dos: **Acción fuera de horario** (días normales) y **Acción festivo fuera de horario** (festivos). Cada una puede ser:

- **Ninguna (atender igual)**: la llamada sigue su camino normal.
- **Escuchar un audio**: suena el audio que elijas en **Audio que suena** y, **Al terminar el audio**, la llamada puede **Colgar**, **Pasar a una campaña**, **Pasar a un IVR** o **Pasar al buzón**.
- **Pasar a una campaña** o **Pasar a un IVR**, directamente.

Si no tienes el horario habilitado, nada de esto se aplica (pero se guarda para cuando lo enciendas).

### El buzón de voz

Si alguna de las dos acciones termina en **Pasar al buzón**, aparece la sección **Buzón fuera de horario**. Es el mismo buzón para los días normales y para los festivos, y cada número tiene el suyo.

Así funciona para quien llama: después del audio de fuera de horario, elige si deja número y mensaje o solo número, dice si su teléfono es celular o fijo, lo teclea y, si eligió mensaje, lo graba después del tono. **No se le devuelve la llamada solo**: queda apuntado en el reporte para que alguien de tu equipo lo llame.

En esta sección puedes:

- Cambiar los audios del buzón, numerados en el orden en que suenan (menú, celular o fijo, pedir el número, grabar el mensaje, confirmaciones y despedida). Si dejas uno vacío, suena la frase del sistema.
- Fijar la **Duración máxima del mensaje (s)**. El mensaje se corta solo al llegar ahí.
- Fijar **Descartar si dura menos de (s)**. Aunque se descarte el audio, la llamada sí queda en el reporte.
- Abrir el **Reporte de buzón**: fecha, hora, número registrado y audio de cada mensaje de este número, con descarga en Excel.

Para apagar el buzón, desmarca **Buzón fuera de horario activado**: las acciones vuelven a «Colgar».

## La caja de WhatsApp

La caja verde **WhatsApp** decide qué pasa con los mensajes que llegan a uno de tus números de WhatsApp. Con doble clic se abre **Configurar la caja de WhatsApp**.

### Elegir el número

1. En **Número vinculado a esta caja**, elige uno de los números que diste de alta en [Canales](/guia/administracion/canales). Los que ya están en otra caja aparecen en gris, diciendo dónde.
2. Al guardar, el número queda fijo.

:::warning
El número de una caja no se cambia después de guardarla. Si tiene que ser otro, borra la caja y crea una nueva.
:::

Si el canal está inactivo en Canales, la caja te avisa: no entra ningún mensaje por él, configures lo que configures aquí.

### Identificar al cliente

En **Identificación del cliente** eliges por qué campos de tu base se busca a quien escribe. Por ejemplo, el celular. Puedes elegir varios y se busca por todos. Así el chat le llega al agente con la ficha del cliente ya abierta.

Sin campos aquí no se busca a nadie y el agente tiene que buscar al cliente a mano.

La casilla **Dar de alta en la base a quien no esté** viene marcada: si escribe alguien que no está en tu base, se crea solo, con el dato por el que se le buscó. Para que funcione tienes que haber elegido al menos un campo arriba.

### Horario de atención

Funciona igual que en la caja del número entrante: marca **Habilitar** y arma el horario por día, con su fila de **Festivos**. Con el horario apagado se atiende siempre.

### A dónde va lo que entra

Elige qué pasa con los mensajes:

- **En horario hábil**: **Pasar a una campaña** o **Atender con un bot**, y luego cuál.
- **Fuera de horario y festivos**: lo mismo, o **Avisar y cerrar la conversación**. En ese caso escribe el **Mensaje de fuera de horario**. Si lo dejas en blanco, la conversación se cierra sin enviar nada.

La flecha se dibuja sola en el lienzo. Para quitarla, deja el destino sin elegir.

:::info
Una conversación que ya está en curso no cambia de sitio cuando cambia el horario: el agente que la atiende la termina.
:::

Pulsa **Guardar cambios** para terminar.
