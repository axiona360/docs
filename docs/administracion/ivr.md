---
sidebar_position: 6
title: IVR
description: Arma el menú de voz que atiende tus llamadas, con audios, opciones por teclas, preguntas, encuestas y el paso a tus agentes.
---

# IVR

Un **IVR** es el menú de voz que atiende la llamada antes que una persona: «Bienvenido. Para ventas marque 1, para soporte marque 2». En Eclipta lo dibujas con cajas, igual que el flujo de trabajo: cada caja es un paso de la llamada.

Con un IVR puedes poner audios, ofrecer opciones por teclas, pedir un dato (una cédula, un número de cuenta), leerle al cliente un dato suyo, hacer una encuesta, grabar un mensaje, enviar un WhatsApp, y al final pasar la llamada a una campaña, a un agente, a otro IVR o a un número externo.

## Crear un IVR

Los IVR se crean desde el lienzo de su flujo:

1. Entra a **Flujos de Trabajo → tu flujo**.
2. Arrastra la caja **IVR** (familia **Automatización e IA**) al lienzo.
3. Haz doble clic sobre ella.

Eclipta crea el IVR con un nombre provisional, por ejemplo `IVR_1294`, y abre su editor encima del lienzo. Ponle nombre a la caja en el campo **Caja**: sin nombre no se guarda.

Para que una llamada llegue al IVR, abre la caja del número entrante y en **A dónde va la llamada** elige **IVR** y este IVR. Ver [La caja del número entrante](/guia/administracion/flujos-de-trabajo#la-caja-del-número-entrante).

:::info
El IVR no tiene horario propio. El horario se configura en la caja del número entrante, que es por donde entra la llamada.
:::

## El estado: que atienda llamadas

Arriba, junto al nombre del IVR, está su **estado**: **Borrador**, **Activo**, **Pausado** o **Archivado**.

- Solo un IVR **Activo** atiende llamadas.
- El cambio se guarda en el momento en que lo eliges. Verás «IVR activo: ya atiende llamadas» o que no atiende llamadas.

:::warning
Si el flujo lleva a un IVR que no está **Activo**, el flujo se guarda pero no se pone en funcionamiento, y te dice por qué. Cambia el estado a **Activo** y vuelve a guardar el flujo.
:::

## El editor

El editor del IVR se parece al lienzo del flujo de trabajo: a la izquierda la paleta, en el centro el dibujo. La llamada empieza siempre en la caja verde **Inicio**, que ya está puesta. A esa caja no llega ninguna flecha.

Las cajas están agrupadas por familia:

| Familia | Cajas |
|---|---|
| **Audio** (azul) | **Reproducir**: suena un audio. **Decir Dato**: le lee al cliente un dato suyo, como su saldo o su fecha de pago. |
| **Menús** (morado) | **Menú DTMF**: opciones por teclas. **Capturar Dato**: el cliente teclea un dato. **Dato por Voz**: el cliente dice el dato en voz alta. **Grabar Mensaje**: el cliente deja un mensaje grabado. **Encuesta**: preguntas que se responden con teclas. |
| **Lógica** (amarillo verdoso) | **Condición**: decide el camino según un dato. **API / Base de datos**: consulta datos de tu base o de otro sistema de tu empresa. **Guardar Variable** y **Cálculo**: guardan y calculan datos durante la llamada. |
| **Salidas** (rojo) | **Enviar Mensaje**: manda un WhatsApp, un SMS o un correo. **Colgar**: termina la llamada. |

### Agregar y configurar una caja

1. Arrastra la caja desde la paleta y suéltala en el dibujo. Se crea y se guarda sola.
2. Haz **doble clic** sobre la caja para configurarla.
3. Arriba, escribe su nombre en **Caja**.
4. Configura lo que pide la caja y define **A dónde va** cada salida (ver más abajo).
5. Pulsa **Listo** para cerrar la ventana.
6. Pulsa **Guardar** arriba a la derecha para guardar el IVR.

Para borrar una caja o una flecha, selecciónala y pulsa **Suprimir**. Eclipta te pregunta antes. En el IVR, lo borrado **no se puede recuperar**.

### Los audios

Las cajas eligen sus audios de la lista de audios de tu empresa. Si te falta uno, súbelo primero. Ver [Configuración](/guia/administracion/configuracion).

## A dónde va cada salida

Cada caja tiene una o varias **salidas**: por ejemplo, un menú tiene una salida por cada opción, más **Si no marca nada** y **Si marca una opción incorrecta**. Dentro de cada caja, en la sección **A dónde va**, decides qué pasa en cada salida:

| Opción | Qué hace |
|---|---|
| **Ir a una caja** | La llamada sigue a otra caja de este IVR. Se dibuja la flecha. |
| **Pasar a una campaña** | La llamada entra a la cola de esa campaña. |
| **Pasar a un agente** | Eliges la campaña y un agente de esa campaña. Si ese agente no puede recibirla, la toma otro agente de la campaña. |
| **Pasar a otro IVR** | La llamada pasa a otro IVR del mismo flujo. Un IVR que no está **Activo** no atiende. |
| **Pasar a un número externo** | La llamada sale a un teléfono de fuera, por ejemplo una sede. Eliges por qué campaña sale (su línea y su plan de marcación) y qué pasa **Si no contesta**: despedirse y colgar, o volver a esta caja. |
| **Colgar la llamada** | Termina la llamada con el audio de despedida del IVR. |
| **Repetir el menú** | Solo en los menús: vuelve a sonar el menú. |

En todas puedes elegir un **Audio antes** opcional, que suena antes de hacer lo que elegiste.

:::tip
Cuando una salida pasa a una campaña o a un agente, en el dibujo aparece una bolita café con el destino. Esa bolita sale sola: para cambiarla, cambia la salida dentro de la caja.
:::

También puedes conectar cajas arrastrando una flecha desde uno de los cuatro puntos de una caja hasta otra: se usa la primera salida que esté libre. Para cambiar a dónde va una salida ya conectada, hazlo dentro de la caja, en **A dónde va**. Arrastrando la punta de una flecha solo cambias el lado por el que se engancha.

:::info
Lo que el IVR hace en cada salida se decide dentro del IVR. En el lienzo del flujo de trabajo esas salidas no se dibujan como flechas.
:::

## Las cajas, una por una

### Reproducir

Elige el **Audio** que suena. Sigue por **Siguiente paso**.

### Menú DTMF

1. Elige el **Audio del menú** («para ventas marque 1…»).
2. En **Opciones del menú**, añade una opción por cada tecla, con su descripción.
3. En **Timeout DTMF (seg)**, cuántos segundos tiene el cliente para marcar.
4. En **Si NO marca nada** y **Si marca opción incorrecta**, elige el audio y cuántas veces se le vuelve a preguntar.

Salidas: una por opción, más **Si no marca nada** y **Si marca una opción incorrecta**.

### Capturar Dato

El cliente teclea un dato, por ejemplo su cédula.

- **Variable destino**: el nombre con que se guarda, por ejemplo `cedula`.
- **Número de dígitos** y **Terminador** (por ejemplo, la tecla numeral para terminar).
- **Validación**, **Audio de error** y **Reintentos**.

Salidas: **Éxito** (lo digitó bien) y **Error** (no lo digitó o no es válido).

### Dato por Voz

El cliente dice el dato en voz alta en vez de teclearlo. El audio de la caja es la pregunta. En **Qué se espera que responda** eliges:

- **Lo que diga (texto libre)**: un nombre, una dirección, el motivo de la llamada.
- **Un número**: guarda solo las cifras. Para cédulas, cuentas, montos.
- **Sí o no**: entiende «sí», «claro», «correcto»… y «no», «negativo»…
- **Una de varias opciones**: tú escribes las opciones y sus palabras.

Puedes ajustar el **Tiempo para responder (seg)**, las **Veces que se pregunta** y el audio **Si no se entiende**. Salidas: **Entendió** y **No entendió**.

:::warning
La voz de quien llama se envía a un servicio externo para convertirla en texto, y el audio se borra en cuanto se transcribe. Si el aviso de tratamiento de datos de tu empresa no lo cubre, avísalo en la llamada.
:::

### Grabar Mensaje

Graba un mensaje del cliente en cualquier punto del IVR, por ejemplo un reclamo.

- **Tecla para terminar**: numeral, asterisco o ninguna (termina al colgar o al llegar al máximo).
- **Máximo (segundos)** y **Mínimo para guardar el audio**.
- **Pitido antes de grabar**.

La grabación queda en el **buzón del número** por el que entró la llamada, marcada «Desde el IVR» con el nombre de la caja. Salidas: **Dejó mensaje** y **No dejó mensaje**.

### Encuesta

1. Escribe el **Nombre de la encuesta** (así sale en el reporte).
2. Añade las **Preguntas, en orden**, cada una con su **Audio de la pregunta** y su tipo de **Respuesta**: **Escala del 1 al 5**, **Escala del 1 al 10**, **Sí o no** o **Una opción del 0 al 9**.

Cada respuesta se guarda al contestarla: si alguien cuelga en la tercera pregunta, quedan las dos primeras. Salidas: **Respondió todo** y **Dejó preguntas sin responder**. Los resultados están en **Encuestas**.

### Decir Dato

Le lee al cliente un dato: su saldo, su fecha de pago, su número de cuenta.

1. Si quieres, elige un **Audio antes**, por ejemplo «su saldo es».
2. En **Variable que se dice**, escribe el dato, por ejemplo `cliente.saldo`.
3. Elige **Cómo se dice**:
   - **Dígito a dígito**: «uno, cero, dos». Para cédulas, cuentas y teléfonos.
   - **Número**, **Pesos** y **Fecha**: por ahora los números y los pesos se dicen dígito a dígito, y las fechas no se dicen.
{/* INTERNO, no se muestra al cliente. Próximamente: Número, Pesos y Fecha completos (faltan las palabras grabadas); caja TTS Dinámico. */}

Si el dato está vacío, no se dice nada y la llamada sigue.

### Condición

Decide el camino según un dato. Escribe la **Variable a evaluar** (por ejemplo `cliente.saldo`) y añade **Reglas**: se revisan en orden y gana la primera que se cumpla. Hay una salida por regla, más **Ninguna coincide**.

### API / Base de datos

Sirve para consultar datos de tu base o de otro sistema de tu empresa durante la llamada. En **Qué consulta** eliges:

- **La base de datos de este flujo**: busca al cliente en tu base, por ejemplo por el número desde el que llama o por la cédula que tecleó. Los teléfonos se comparan por sus últimos 10 dígitos. Si encuentra varios registros, decides qué hacer: que solo valga uno, tomar el más reciente o traerlos todos.
- **Una API externa (integración)**: consulta otro sistema de tu empresa. Esta opción la suele configurar el equipo técnico de tu empresa.

Lo que encuentra queda guardado para usarlo en las cajas siguientes, por ejemplo `cliente.saldo`. Salidas: **Encontró** y **No encontró** (o **Éxito** y **Error**).

### Guardar Variable y Cálculo

- **Guardar Variable** guarda un valor para usarlo después: un texto fijo o armado con otros datos.
- **Cálculo** hace cuentas con fechas y números: la edad a partir de una fecha de nacimiento, los días que faltan para una fecha (o los días de mora), sumar días a una fecha, o una fórmula con números.

### Enviar Mensaje

Manda un mensaje mientras la persona está en la llamada. En **Por dónde** eliges:

- **WhatsApp**: con una **Plantilla aprobada**. Las plantillas se crean en [Canales](/guia/administracion/canales) y Meta tiene que aprobarlas.
- **SMS**: eliges el proveedor y escribes el texto. Necesitas un proveedor de SMS configurado en Canales.
- **Correo**: eliges la cuenta de correo, el destinatario, el asunto y el texto.

Salidas: **Enviado** y **No se pudo enviar**.

### Colgar

Termina la llamada. No tiene salidas ni configuración.

## Los datos de la llamada (variables)

Mientras la llamada recorre el IVR, Eclipta va guardando datos: el número desde el que llaman, lo que el cliente tecleó o dijo, lo que se encontró en tu base. Cada dato tiene un nombre, y lo puedes usar en otras cajas escribiéndolo entre llaves, por ejemplo `{cliente.nombre}`.

- Los datos de tu base o de otro sistema se leen con punto: `cliente.saldo`.
- Siempre tienes la fecha y la hora: `sistema.hora`, `sistema.dia_semana`, `sistema.fecha`.

Dentro de cada caja que usa datos verás la lista de los que tiene este flujo, para elegir sin escribir de memoria.

## Configuración del IVR

En la barra de arriba del editor, el botón **Configuración** abre los ajustes generales:

- **Descripción**.
- **Comportamiento**: **Máximo de intentos global** y **Timeout DTMF por defecto (seg)**, el tiempo para marcar que usan los menús si no dicen otro.
- **Extensión para transferir a este IVR**: el número que marca un agente para pasar una llamada a este IVR. Entre 3000 y 3999.
- **Audio de despedida**: lo que suena al colgar desde el IVR.

Pulsa **Guardar configuración**. Para volver al dibujo, pulsa **Flujograma**.
