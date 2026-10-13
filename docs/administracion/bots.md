---
sidebar_position: 7
title: Bots
description: Arma el bot que atiende tus chats con mensajes, menús, preguntas, consultas a tu base y el paso a un agente.
---

# Bots

Un **bot** atiende los chats de forma automática antes que una persona: saluda, muestra un menú, pregunta datos, consulta tu base y, cuando hace falta, pasa la conversación a un agente. Funciona en WhatsApp, Telegram, chat web y correo.

El bot se dibuja con cajas, igual que el flujo de trabajo y el IVR: cada caja es un paso de la conversación.

## Crear un bot

Los bots se crean desde el lienzo de su flujo:

1. Entra a **Flujos de Trabajo → tu flujo**.
2. Arrastra la caja **Bot** (familia **Automatización e IA**) al lienzo.
3. Haz doble clic sobre ella.

Eclipta crea el bot con un nombre provisional, por ejemplo `Bot_1294`, y abre su editor encima del lienzo. Ponle nombre a la caja en el campo **Caja**: sin nombre no se guarda.

Para tener otro bot parecido, haz clic derecho sobre la caja de un bot y elige **Duplicar**. La copia no se dibuja sola: arrastra una nueva caja **Bot** al lienzo y elígela en la lista.

## Qué chats atiende

Un bot atiende los chats de los canales que le asignes:

1. Abre el bot y pulsa **Configuración**, arriba.
2. En **Canales que atiende**, marca los canales: cada uno dice si hoy lo atiende este bot, otro bot, o ninguno («Sin bot: sus mensajes van directo al chat»).
3. Al marcar un canal que tenía otro bot, pasa a este.

Cada canal lo atiende un solo bot. Los canales se dan de alta en [Canales](/guia/administracion/canales). Facebook Messenger e Instagram <span className="proximamente">Próximamente</span>.

En la caja de WhatsApp del flujo también puedes elegir **Atender con un bot**. Ver [La caja de WhatsApp](/guia/administracion/flujos-de-trabajo#la-caja-de-whatsapp).

## El estado: que atienda chats

Junto al nombre del bot está su estado: **Activo** o **Borrador**. Pulsa para cambiarlo y luego **Guardar**. Solo un bot **Activo** atiende chats.

## El editor

A la izquierda la paleta, en el centro el dibujo. La conversación empieza siempre en la caja verde **Inicio**, que ya está puesta.

| Familia | Cajas |
|---|---|
| **Mensajes** (azul) | **Mensaje**: el bot escribe un texto. **Pedir Dato**: el bot hace una pregunta y guarda la respuesta. |
| **Menús** (morado) | **Menú Botones**, **Menú Lista** y **Menú Texto**: el cliente elige una opción. **Menú Dinámico**: las opciones salen de tus datos, por ejemplo los turnos disponibles. |
| **Lógica** (amarillo verdoso) | **Condición** y **Condición Avanzada**: deciden el camino según un dato. **Horario**: separa dentro y fuera de horario. **Guardar Variable** y **Cálculo**: guardan y calculan datos. **API Externa** y **Calcular Agregaciones API**: consultan datos de tu base o de otro sistema de tu empresa. **Delay**: espera unos segundos. |
| **Salidas** (rojo) | **Enviar Mensaje**: manda un WhatsApp, un SMS o un correo. **Transferir** y **Transferir a Agente**: pasan la conversación a una campaña o a un agente. **Cerrar Conversación**. |

### Agregar y configurar una caja

1. Arrastra la caja desde la paleta y suéltala en el dibujo. Se crea y se guarda sola.
2. Haz **doble clic** sobre la caja para configurarla.
3. Arriba, escribe su nombre en **Caja**.
4. Configura lo que pide la caja y define a dónde va cada salida (ver abajo).
5. Pulsa **Guardar** arriba a la derecha.

Para borrar una caja o una flecha, selecciónala y pulsa **Suprimir**. Eclipta te pregunta antes. En el bot, lo borrado **no se puede recuperar**.

### Probar el bot

Pulsa **Probar bot**, arriba, para conversar con él sin que nadie más lo vea. La prueba no envía mensajes de verdad: cuando el bot tendría que enviar algo por fuera, te lo indica y sigue como si se hubiera enviado.

## A dónde va cada salida

Cada caja tiene sus salidas. Por ejemplo, un **Menú Botones** tiene una por botón y una **Opción sin destino propio**; una **Condición** tiene **Verdadero** y **Falso**; **Horario** tiene **Dentro de horario** y **Fuera de horario**.

Dentro de cada caja decides qué pasa en cada salida:

| Opción | Qué hace |
|---|---|
| **Ir a una caja** | La conversación sigue a otra caja de este bot. Se dibuja la flecha. |
| **Pasar a una campaña** | La conversación pasa a los agentes de esa campaña. |
| **Pasar a un agente** | Eliges la campaña y un agente. Si ese agente no está disponible, la toma otro agente de la campaña. |
| **Pasar a otro bot** | La conversación sigue con otro bot del mismo flujo. |
| **Cerrar la conversación** | Termina el chat. |
| **Volver a mostrar el menú** | Solo en los menús. |

En todas puedes escribir un **Mensaje antes** opcional, que el bot envía antes de hacer lo que elegiste.

:::tip
Cuando una salida pasa a una campaña o a un agente, en el dibujo aparece una bolita café con el destino. Para cambiarla, cambia la salida dentro de la caja.
:::

También puedes conectar cajas arrastrando una flecha desde uno de los cuatro puntos de una caja hasta otra. Para cambiar a dónde va una salida, hazlo dentro de la caja. Arrastrando la punta de una flecha solo cambias el lado por el que se engancha.

## Algunas cajas, en detalle

### Pedir Dato

1. Escribe la **Pregunta a mostrar al usuario**, por ejemplo «¿Cuál es tu número de documento?».
2. Escribe el **Nombre de la variable donde guardar la respuesta**, por ejemplo `documento`.
3. Elige la **Validación**: **Sin validación (acepta cualquier texto)**, **Solo números** o **Email válido**.
4. Escribe el mensaje que se envía si la respuesta no vale y cuántas veces se vuelve a preguntar.

### Los menús

- **Menú Botones**: el cliente toca un botón.
- **Menú Lista**: el cliente abre una lista y elige una fila. Puedes agrupar las filas en secciones.
- **Menú Texto**: el cliente escribe su opción.
- **Menú Dinámico**: arma las opciones a partir de una lista de datos, por ejemplo los turnos disponibles que trajo una consulta. Sale por **Eligió una opción** o **Lista vacía**.

### API Externa

Sirve para consultar datos de tu base o de otro sistema de tu empresa. En **Qué consulta** eliges **La base de datos de este flujo** (por ejemplo, buscar al cliente por su documento) o **Una API externa (integración)**, que suele configurar el equipo técnico de tu empresa. Lo que encuentra queda guardado para las cajas siguientes, por ejemplo `cliente.saldo`.

### Enviar Mensaje

Manda un WhatsApp con plantilla aprobada, un SMS o un correo. Si no eliges a quién, se le envía a quien escribe, pero solo cuando la conversación es de WhatsApp: en el chat web o en Telegram no hay número de teléfono. Salidas: **Enviado** y **No se pudo enviar**.

## Los datos de la conversación (variables)

Mientras la conversación avanza, el bot va guardando datos: lo que el cliente respondió, la opción que eligió, lo que se encontró en tu base. Cada dato tiene un nombre, y puedes usarlo en tus mensajes escribiéndolo entre llaves. Por ejemplo, el mensaje `Hola {cliente.nombre}, tu saldo es {cliente.saldo}` le llega al cliente con su nombre y su saldo.

- Los datos de tu base o de otro sistema se leen con punto: `cliente.saldo`.
- Siempre tienes la fecha y la hora: `sistema.hora`, `sistema.dia_semana`, `sistema.fecha`.
- Con **Guardar Variable** guardas un dato para usarlo después; con **Cálculo** haces cuentas, por ejemplo los días de mora.

Dentro de cada caja que usa datos verás la lista de los que tiene este flujo, para elegir sin escribir de memoria.

## Configuración del bot

En **Configuración** (arriba) están los ajustes generales del bot:

- **Canales que atiende**: ver [Qué chats atiende](#qué-chats-atiende).
- **Campo de la base por el que el bot busca al cliente**: obligatorio. Por ejemplo, el teléfono.
- **Cuando el cliente no selecciona una opción válida**: el mensaje, los reintentos y qué hacer al agotarlos.
- **Tiempo de inactividad del cliente**: a los cuántos minutos se da por abandonada la conversación, con su mensaje y su acción.
- **Antes de transferir al agente**: el mensaje que recibe el cliente justo antes de pasar a un agente.
- **Horario de atención**: si lo habilitas, eliges los días y las horas, el mensaje de fuera de horario (y qué hacer), el mensaje para días festivos y la zona horaria.

Las acciones posibles son: **Solo dar el mensaje**, **Transferir a campaña**, **Cerrar sesión**, **Ir a sección del bot** o **Transferir a otro bot**.

Pulsa **Guardar configuración** para terminar. Para volver al dibujo, pulsa **Flujograma**.
