---
sidebar_position: 8
title: Canales
description: Conecta WhatsApp, Telegram, el chat web, el correo, los SMS, las líneas telefónicas y tus números entrantes.
---

# Canales

En **Canales** das de alta todo lo que tu empresa **tiene** para comunicarse: sus números de WhatsApp, sus bots de Telegram, el chat de su página web, sus correos, el proveedor de SMS, las líneas telefónicas y los números a los que llaman tus clientes. Se configuran una sola vez; después, en [Flujos de trabajo](/guia/administracion/flujos-de-trabajo), decides qué se hace con cada uno.

La pantalla tiene una pestaña por canal: **WhatsApp**, **Telegram**, **WebChat**, **Email**, **SMS**, **Voz / telefonía** y **Rutas entrantes (DID)**. Junto al nombre de cada pestaña ves cuántas cuentas tiene.

:::info
Mientras un canal no tenga una cuenta configurada, no recibe ni envía nada.
:::

## Lo común a todas las cuentas de chat

WhatsApp, Telegram, WebChat y Email se manejan igual:

- **Nueva cuenta** abre la ventana para crear una cuenta de ese canal.
- Cada cuenta tiene un **Estado**: **Activo** o **Inactivo**. Un canal inactivo no recibe ni envía mensajes. Se cambia con el interruptor de la pestaña **General** de la cuenta.
- **Probar** comprueba la conexión con el proveedor.
- El lápiz (**Editar**) cambia la cuenta. Los datos secretos ya guardados (tokens, contraseñas) no se vuelven a mostrar: si dejas el campo vacío, se conserva el que había.
- La papelera (**Eliminar**) borra la cuenta. El canal deja de recibir y de enviar, y **no se puede restaurar** desde el panel.

La ventana de cada cuenta tiene tres pestañas: **General** (nombre y estado), **Credenciales** (los datos del proveedor) y **Bot vinculado**.

**Bot vinculado** solo te muestra qué bot atiende esa cuenta. El bot no se elige aquí, sino desde el propio bot: abre el bot en su flujo de trabajo → **Configuración** → **Canales que atiende**. Ver [Bots](/guia/administracion/bots).

## WhatsApp

Para conectar un número de WhatsApp necesitas los datos de tu app en Meta (Meta for Developers / Meta Business).

1. Entra a **Canales → WhatsApp**.
2. Pulsa **Nueva cuenta**.
3. En **General**, escribe el **Nombre del canal** (por ejemplo, «WhatsApp principal»).
4. En **Credenciales de Meta**, llena:
   - **Phone Number ID**: el identificador del número en Meta.
   - **WhatsApp Business Account ID**.
   - **Access token**: el token permanente de tu app de Meta.
   - **Verify token del webhook**: el mismo que pongas en Meta como «verify token».
   - **App Secret de Meta**: obligatorio (ver abajo).
   - Si quieres, el **Número de teléfono** y el **App ID de Meta**.
5. Copia la **URL del webhook** con **Copiar URL** y configúrala como webhook en tu app de Meta, suscrita al campo «messages».
6. Pulsa **Crear canal**.
7. Pulsa **Probar** en la cuenta para comprobar la conexión.

Con **Envío** puedes mandar un mensaje de prueba: escribe un **Número destino** y pulsa **Enviar prueba**. Se envía la plantilla **hello_world**.

### El App Secret es obligatorio

Sin el **App Secret** no se puede crear un canal de WhatsApp. Con él, Eclipta comprueba que cada mensaje que llega viene de verdad de Meta y no de alguien que conoce tu número. Sin esa comprobación, cualquiera podría meter mensajes falsos en tu cuenta y hacer que tu bot responda y gaste por ti.

**Dónde sacarlo:** en Meta for Developers, abre tu app y ve a **Configuración → Básica → Clave secreta**. Pulsa «Mostrar», cópiala y pégala en **App Secret de Meta**.

:::warning Cuentas antiguas sin App Secret
Si tu cuenta de WhatsApp se creó antes de que fuera obligatorio, sigue funcionando, pero verás un aviso: sus mensajes se aceptan sin verificar. Edita la cuenta, pega el App Secret y guarda.
:::

:::warning No cambies el Verify token por si acaso
Si ya hay un **Verify token** guardado, el campo aparece como «(guardado)». Si escribes uno distinto del que tienes en Meta, **dejarán de entrar los mensajes**. Cámbialo solo si también lo cambias en Meta.
:::

## Plantillas de WhatsApp

Para escribirle primero a un cliente por WhatsApp (o cuando han pasado más de 24 horas desde su último mensaje), Meta exige usar una **plantilla aprobada**. Las plantillas están en **Canales → WhatsApp**, debajo de las cuentas.

### Crear una plantilla

1. Pulsa **Nueva plantilla**.
2. Paso **Configuración**: escribe el **Nombre de la plantilla** (solo minúsculas, números y guiones bajos, sin espacios; por ejemplo, «bienvenida_cliente»), elige la **Cuenta de WhatsApp**, el **Idioma** y la **Categoría** (**Marketing**, **Utilidad** o **Autenticación**).
3. Paso **Contenido**:
   - **Encabezado** (opcional): ninguno, texto, imagen, video o documento.
   - **Cuerpo**: el mensaje. Para insertar datos que cambian en cada envío (como el nombre del cliente), usa **+ Variable** y escribe un valor de ejemplo para cada una.
   - **Pie de página** (opcional).
   - **Botones** (opcional, hasta 10): respuesta rápida, URL o teléfono.
4. Paso **Vista previa**: revisa el resumen.
5. Pulsa **Enviar para revisión**.

La plantilla se envía a **Meta para su aprobación**, que puede tardar desde unos minutos hasta 24 horas. Mientras tanto aparece como pendiente.

### Sincronizar con Meta

Pulsa **Sincronizar con Meta** para traer las plantillas de tus cuentas y su estado actualizado (aprobada, pendiente o rechazada). Úsalo también para traer plantillas que creaste directamente en Meta.

Puedes filtrar la lista por estado (**Aprobadas**, **Pendientes**, **Rechazadas**) y por categoría.

### Enviar o eliminar una plantilla

- **Enviar**: escribe el **Número destino**, llena las variables y pulsa **Enviar mensaje**.
- **Eliminar**: la plantilla deja de poder enviarse desde Eclipta, pero **en Meta sigue existiendo** hasta que la borres allí. No se puede restaurar desde el panel.

## Telegram

1. En Telegram, habla con **@BotFather**, crea un bot con **/newbot** y copia el token que te da.
2. En Eclipta, entra a **Canales → Telegram** y pulsa **Nueva cuenta**.
3. Escribe el **Nombre del canal**.
4. En **Credenciales de Telegram**, pega el **Bot token**. El **Usuario del bot (@)** es opcional: se detecta solo al probar la conexión.
5. Pulsa **Crear canal**.
6. Pulsa **Probar** para validar el token, y asegúrate de que la cuenta esté **Activo**.

En Telegram no hace falta configurar nada más.

## WebChat (chat de tu página web)

1. Entra a **Canales → WebChat** y pulsa **Nueva cuenta**.
2. Escribe el **Nombre del canal** y pulsa **Crear canal**.
3. Edita la cuenta y ve a **Credenciales**. Ahí aparecen el **Widget ID** y el **Código de integración**.
4. Pulsa **Copiar** y entrega ese código a quien administra tu página web. Debe pegarlo antes de la etiqueta de cierre `</body>` de la página.

En tu sitio aparecerá un botón flotante de chat. El Widget ID y el código se generan al crear la cuenta, así que primero hay que guardarla.

## Email

1. Entra a **Canales → Email** y pulsa **Nueva cuenta**.
2. Escribe el **Nombre del canal**.
3. En **Credenciales**, llena:
   - **Correo (From)**: la dirección desde la que se envía, por ejemplo soporte@tudominio.com.
   - **Nombre del remitente** (opcional), por ejemplo «Soporte».
   - **Envío (SMTP)**: **Servidor SMTP**, **Puerto**, **Usuario SMTP** y **Contraseña SMTP**.
   - **Recepción (IMAP)**: **Servidor IMAP**, **Puerto**, **Usuario IMAP** y **Contraseña IMAP**.
4. Pulsa **Crear canal** y luego **Probar** para validar el envío.

Tu proveedor de correo te da estos datos. Si no los tienes, pídeselos a quien administra el correo de tu empresa.

:::tip Gmail
Con Gmail hay que usar una **contraseña de aplicación**, no la contraseña normal de la cuenta.
:::

## SMS

Los SMS los envían las cajas del IVR. Para eso necesitas conectar tu **proveedor de SMS** (la empresa con la que contrates el servicio). No hace falta programar nada: se conecta con la dirección y la clave que te da tu proveedor.

1. Entra a **Canales → SMS**.
2. Pulsa **Nuevo proveedor**.
3. En **Empezar desde**, elige la forma de tu proveedor: **API HTTP genérica**, **Por URL (GET)**, **Twilio** o **Infobip**. Eclipta llena la configuración típica de ese proveedor.
4. Cambia todo lo que esté en **MAYÚSCULAS** por los datos de tu cuenta (dirección, clave, remitente). Si dejas datos de ejemplo, Eclipta te avisa: se puede guardar, pero el proveedor rechazará los envíos.
5. Deja el proveedor **Activo** y márcalo como **Predeterminado** si es el principal.
6. Pulsa **Crear proveedor**.
7. Pulsa **Probar** para enviar un SMS de prueba.

:::warning
El SMS de prueba es un SMS de verdad: tu proveedor lo cobra.
:::

El **predeterminado** es el proveedor que usan las cajas del IVR que no eligen uno. Si ningún proveedor activo es el predeterminado, esas cajas no podrán enviar SMS. Si la configuración de tu proveedor no es evidente, pídele ayuda a tu proveedor o al equipo de Axiona360.

## Voz / telefonía

Aquí se configuran las líneas telefónicas de tu empresa. Si no sabes qué poner, pídele los datos a tu proveedor de telefonía o al equipo de Axiona360.

### Troncales SIP

Una **troncal** es la línea con tu proveedor de telefonía: sin ninguna, no entran ni salen llamadas.

1. Entra a **Canales → Voz / telefonía**.
2. En **Troncales SIP**, pulsa **Nueva troncal**.
3. Llena el **Nombre**, el **Servidor (IP o dominio)**, el **Usuario** y la **Contraseña** que te dio tu proveedor. Si tu proveedor te reconoce por la dirección de tu servicio y no por usuario, déjalos vacíos.
4. Escribe el **Caller ID saliente**: el número que verán tus clientes cuando los llames.
5. Deja la troncal **Activa** y guarda. En **Avanzado** hay ajustes que normalmente no hay que tocar.

La columna de estado te dice si la línea funciona: **Registrada**, **No responde**, **Desactivada** o **Sin datos**.

:::warning
Si eliminas una troncal, las llamadas que salían por ella dejan de cursar y las que entraban por ese proveedor dejan de llegar.
:::

### Planes de marcación

Un **plan de marcación** dice qué números pueden salir por la troncal y con qué prefijo.

1. En **Planes de marcación**, elige el **País**.
2. Pulsa **Patrón personalizado**.
3. Escribe el **Nombre** (por ejemplo, «Celular Colombia»), el **Prefijo** y el **Patrón**: una **X** por cada dígito que cambia. Por ejemplo, 3XXXXXXXXX para celulares de Colombia.
4. Guarda.

Si eliminas un plan, las llamadas que encajaban con ese patrón dejan de tener por dónde salir.

## Rutas entrantes (DID): tus números entrantes

Un **DID** es un número al que llaman tus clientes. En esta pestaña tienes la lista de todos tus números y ves de un vistazo cuáles atienden llamadas y cuáles no.

### Crear un número

1. Entra a **Canales → Rutas entrantes (DID)**.
2. Pulsa **Nuevo número**.
3. Escribe el **Número**, tal como lo entrega tu proveedor, y una **Descripción** («Para qué se usa este número»).
4. Deja marcado **Número en servicio**.
5. Pulsa **Crear número**.

:::info Un número nuevo todavía no atiende
Para que un número reciba llamadas, **arrástralo al lienzo de un flujo de trabajo y publica**. Allí decides a qué IVR o campaña van las llamadas, el horario y los festivos. Ver [Flujos de trabajo](/guia/administracion/flujos-de-trabajo).
:::

### Qué dice la columna «Enrutado»

| Estado | Qué significa | Qué hacer |
|---|---|---|
| **Enruta** | Su caja está en un flujo publicado: las llamadas entran y siguen el flujo. | Nada. |
| **Enruta (sin publicar)** | Su flujo no está publicado, pero el número tiene destino propio, así que las llamadas sí entran. | Publica el flujo para que mande el flujo. |
| **Sin destino** | Su caja está en el lienzo pero no tiene destino. | Abre la caja en el flujo y elige a dónde va la llamada. |
| **No enruta** | No está en ningún flujo y no tiene destino: las llamadas no van a ninguna parte. | Arrástralo al lienzo de un flujo. |

Arriba de la lista verás cuántos números hay **sin enrutar**.

Para dejar de recibir llamadas en un número sin perder su configuración, edítalo y desmarca **Número en servicio**. Si lo eliminas, las llamadas a ese número dejan de tener a dónde ir.
