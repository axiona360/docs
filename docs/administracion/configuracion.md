---
sidebar_position: 9
title: Configuración
description: Ajustes generales de tu empresa en Eclipta - chat, festivos, audios, marca y almacenamiento de grabaciones.
---

# Configuración

En **Configuración** están los ajustes generales de tu empresa: cómo se comporta el chat, qué días son festivos, los audios que suenan en los IVR, el logo de tu marca y dónde se guardan las grabaciones.

La pantalla tiene estas pestañas:

- **Chat omnicanal**
- **Festivos**
- **Audios de IVR**
- **Logos y marca blanca** (solo la ve el Super Admin)
- **Almacenamiento** (solo la ve el Super Admin)

## Chat omnicanal

### Resumen automático al cerrar

Si activas **Generar un resumen con IA cuando se cierre una conversación**, cada vez que se cierra un chat Eclipta escribe solo un resumen de tres líneas: el motivo del contacto, qué se resolvió y qué queda pendiente. Así el agente no tiene que teclearlo.

:::warning Lee esto antes de activarlo
Para generar el resumen, **el texto de las conversaciones se envía a un proveedor externo de inteligencia artificial**. Son mensajes de tus clientes: actívalo solo si tu operación y tus contratos lo permiten. Si lo desactivas, no se envía ninguna conversación nueva.
:::

### Los números del chat

Arriba ves un resumen: **Canales activos**, **Respuestas rápidas**, **Canal principal** y **Cierre por inactividad**.

### Canal de mensajería

En este bloque ajustas, entre otras cosas:

- **Cierre por inactividad (min)**: tras cuántos minutos sin mensajes se cierra una conversación.
- **Conversaciones por agente**: cuántos chats a la vez puede atender cada agente.
- **Canal activo**.

Pulsa **Guardar configuración** al terminar.

### Respuestas rápidas

Las respuestas rápidas son textos que el agente inserta en el chat escribiendo un atajo, para no reescribir lo de siempre.

1. En **Nueva respuesta rápida**, escribe el **Atajo** (por ejemplo, /saludo).
2. Escribe un **Título** y, si quieres, una **Categoría**.
3. Escribe el **Contenido del mensaje**.
4. Pulsa **Crear**.

La respuesta aparece en la lista **Respuestas rápidas**. Para borrarla, pulsa su papelera: los agentes dejarán de tenerla en el chat. Ver [Chats](/guia/agentes/chats).

## Festivos

Los festivos **apagan las campañas y los horarios de atención ese día**: por ejemplo, un número entrante que en festivo debe ir a un mensaje de «estamos cerrados».

### Traer el calendario oficial

1. Entra a **Configuración → Festivos**.
2. Pulsa **Sincronizar calendario**.
3. Confirma con **Sincronizar**.

Eclipta trae los festivos oficiales de Colombia del año en curso y del siguiente. Los que ya existan se omiten, así que puedes repetirlo sin duplicar nada.

### Agregar un festivo a mano

1. Pulsa **Agregar festivo**.
2. Elige la **Fecha**, escribe el **Nombre** y, si quieres, una **Descripción**.
3. Elige el **País**.
4. Pulsa **Crear festivo**.

Usa el selector de **Año** para ver los festivos de otro año.

Para quitar un festivo, pulsa su papelera (**Eliminar festivo**). Ese día vuelve a contar como laborable para campañas y horarios.

## Audios de IVR

Aquí está la **Biblioteca de audios de IVR**: los mensajes grabados que suenan en tus IVR (bienvenida, menús, despedidas…).

1. Entra a **Configuración → Audios de IVR**.
2. Pulsa **Subir audio**.
3. Pulsa **Seleccionar archivo .wav** y elige el archivo. Solo se admiten archivos **.wav**.
4. El **Nombre** se propone solo a partir del archivo; cámbialo si quieres. La **Descripción** es opcional.
5. Pulsa **Subir**.

Pulsa **Reproducir** en cualquier audio para escucharlo.

:::warning
Si eliminas un audio, las cajas del IVR que lo usaban se quedan sin audio y la llamada sigue adelante en silencio. Revisa tus IVR antes de borrarlo. Ver [IVR](/guia/administracion/ivr).
:::

## Logos y marca blanca

Esta pestaña solo la ve el **Super Admin**. Sirve para que Eclipta luzca con la marca de tu empresa.

### Logo

Elige qué se muestra en la cabecera:

- **Usar logo**: pulsa **Subir logo** y elige una imagen (png, jpg, webp o svg).
- **Usar texto**: escribe el **Nombre de la marca**.

Solo puede estar activa una de las dos opciones; la otra queda bloqueada.

### Pestaña del navegador

- **Título de la pestaña**: el texto que aparece en la pestaña del navegador.
- **Icono (favicon)**: pulsa **Subir favicon** para poner el icono pequeño de la pestaña.

### Derechos de autor

En **Texto al pie del inicio de sesión** escribe el texto que aparece abajo en la pantalla de entrada, por ejemplo «Mi Empresa © 2026 · Todos los derechos reservados».

:::info
El logo y el favicon se aplican en cuanto los subes. Los textos solo se aplican al pulsar **Guardar cambios**.
:::

## Almacenamiento

Esta pestaña solo la ve el **Super Admin** y trata de las **grabaciones de llamadas**.

**Tus grabaciones siempre se guardan en Eclipta**, en el espacio de tu empresa, tengas o no un destino propio configurado. Ese almacenamiento principal lo configura el equipo de Axiona360, y no tienes que hacer nada.

Lo que configuras aquí es, además, **a dónde se copian** tus grabaciones si quieres tenerlas también en tu propio almacenamiento. Tiene tres pestañas.

### Destinos remotos

Son los lugares a los que Eclipta envía una copia de tus grabaciones.

1. Pulsa **Agregar destino**.
2. Escribe un **Nombre** (por ejemplo, «Mi bucket principal»).
3. Elige el **Tipo**:
   - **Bucket (almacenamiento en la nube)**: un espacio tuyo en la nube.
   - **SFTP (su servidor)** o **FTP / FTPS**: un servidor de tu empresa, que debe ser accesible desde internet.
   - **Descarga directa (a su PC)**: no se envía nada a ningún lado; Eclipta te da un enlace para que descargues tus grabaciones cuando quieras.
   - **NAS (ruta montada)** <span className="proximamente">Próximamente</span>
4. Llena los datos de conexión que te pide (servidor, usuario, contraseña, carpeta…). Si no los tienes, pídeselos a quien administra los sistemas de tu empresa.
5. Deja marcado **Activo** y pulsa **Guardar**.

En cada destino puedes:

- **Obtener enlace** (en los de descarga directa): genera un enlace de descarga que **caduca en 24 horas**; siempre puedes pedir otro. Descargar no borra nada.
- **Importar grabaciones**: copia a ese destino las grabaciones que ya tenías. Solo se puede hacer fuera del horario de operación (por defecto, de 18:00 a 06:00), para no competir con tus llamadas. Puedes cerrar la ventana: el proceso sigue y al volver ves por dónde va.
- Editar o eliminar el destino. Si lo eliminas, las grabaciones que ya se copiaron se quedan donde están; solo se detiene el envío de las nuevas.

:::info
Las grabaciones se **copian**: quedan en tu destino y también en Eclipta. Desde aquí nunca se borra nada del respaldo de Eclipta; si necesitas que se elimine algo, pídeselo al equipo de Axiona360.
:::

### Conectar su propio almacenamiento

Aquí encuentras unas credenciales de **solo lectura** para que tu equipo de sistemas se lleve tus grabaciones a donde quiera (un NAS, un servidor propio, Google Drive, OneDrive…). La pantalla trae los pasos y los textos listos para copiar. Estas credenciales no permiten borrar ni modificar nada.

### Comprobante de respaldo

Te muestra, día por día, cuántas llamadas se grabaron, cuántas están respaldadas y cuántas están ya en tu almacenamiento.

- **En proceso** no es un fallo: son grabaciones que todavía se están subiendo.
- **Sin recuperar** sí lo es: el audio no llegó. Si ves alguna, avisa hoy mismo al equipo de Axiona360, porque todavía puede rescatarse.
