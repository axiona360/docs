---
sidebar_position: 1
title: Usuarios
description: Crea agentes, supervisores y administradores, dales su rol, su horario y gestiona sus contraseñas.
---

# Usuarios

En **Usuarios** das de alta a todas las personas que trabajan en Eclipta: agentes, supervisores y administradores. Desde aquí también entregas y cambias contraseñas, asignas horarios de trabajo (las **mallas de turno**) y defines los **tipos de pausa** que pueden usar los agentes.

La lista muestra a cada persona con su **Nombre**, su **Usuario** (el que usa para entrar), su **Extensión** y su **Rol**. Usa el buscador para encontrar a alguien por nombre, usuario o correo.

## Los roles

| Rol | Qué puede hacer |
|---|---|
| **Super Admin** | Es la cuenta principal de tu empresa. Puede hacer todo, incluidos los ajustes de marca y de almacenamiento en **Configuración**. |
| **Administrador** | Configura Eclipta: usuarios, canales, bases, formularios y flujos de trabajo. |
| **Supervisor** | Sigue la operación y revisa reportes. Lo que puede tocar depende de los permisos que le des (ver más abajo). |
| **Agente** | Atiende llamadas y chats desde su espacio de trabajo. Ver [El espacio del agente](/guia/agentes/espacio-del-agente). |

:::info
Solo puedes dar roles de tu mismo nivel o inferiores. Un administrador, por ejemplo, no puede crear un Super Admin.
:::

Si tu servicio tiene un número máximo de usuarios por rol, debajo del título verás cuántos llevas de cada uno (por ejemplo, «Agente: 8 de 10»). Cuando un rol está completo, no podrás crear más usuarios de ese rol.

## Crear un usuario

1. Entra a **Usuarios**.
2. Pulsa **Nuevo usuario**.
3. Escribe el **Nombre completo**.
4. Si quieres, escribe el **Correo** y el **Celular**. Los dos son opcionales.
5. Elige el **Rol**.
6. Decide cómo recibe la persona su contraseña:
   - Si escribiste un correo, marca **Enviar los datos de acceso a este correo**. Eclipta genera una contraseña temporal y se la envía junto con su usuario.
   - Si no, escribe tú una **Contraseña temporal** y entrégasela. Debe tener 8 caracteres o más, una mayúscula, un número y un símbolo.
7. Si quieres, pulsa el círculo de la foto (o arrastra una imagen encima) para ponerle foto. Sirven imágenes jpg, png o webp de hasta 2 MB.
8. Pulsa **Crear usuario**.

La ventana cambia a **Usuario creado** y te muestra el **Usuario de ingreso** que Eclipta generó a partir del nombre, y su **Extensión SIP**. Entrégale ese usuario a la persona y pulsa **Listo**.

:::tip
La persona tendrá que cambiar la contraseña temporal la primera vez que entre. Mientras no lo haga, en la lista aparece con la etiqueta **Debe cambiar la contraseña**.
:::

### El usuario de ingreso y la extensión

No tienes que inventarlos: Eclipta crea el **usuario de ingreso** a partir del nombre y le asigna a cada persona una **extensión** telefónica libre. La extensión aparece en la columna **Extensión** de la lista y dentro de la ficha del usuario.

## Editar un usuario

1. En la lista, pulsa el lápiz (**Editar**) de la persona.
2. Cambia lo que necesites: nombre, correo, celular, rol o foto.
3. Pulsa **Guardar cambios**.

## Los permisos del supervisor

Un supervisor solo ve y toca lo que tú le permitas. Los permisos se configuran **después** de crearlo:

1. Crea el usuario con el rol **Supervisor**.
2. Pulsa su lápiz (**Editar**).
3. En **Permisos del supervisor**, marca lo que puede hacer en cada sección: usuarios, bases de clientes, registros de clientes, formularios, flujos de trabajo, campañas, canales, plantillas de WhatsApp, reportes, papelera, etc. Puedes usar **Marcar todo** o **Quitar todo**.
4. Pulsa **Guardar cambios**.

## Contraseñas

Si alguien olvidó su contraseña, genérale una nueva:

1. En la lista, pulsa el icono de flechas en círculo (**Regenerar contraseña**) de la persona.
2. Si tiene correo, elige una opción:
   - **Enviar una nueva** a su correo.
   - **Escribir una contraseña temporal y entregarla yo**.
3. Si no tiene correo, escribe la **Contraseña temporal** y entrégasela tú.
4. Pulsa **Regenerar**.

La persona la cambiará al entrar por primera vez. Cada usuario también puede cambiar su propia contraseña desde [Tu perfil](/guia/primeros-pasos/tu-perfil).

## Horarios: las mallas de turno

Una **malla de turno** es el horario de trabajo de una persona: a qué hora entra y sale cada día, y sus descansos. **Fuera de su turno, un agente no recibe llamadas**, aunque esté conectado. Además, el **Reporte de sesiones** compara la hora real de entrada y salida con su malla.

### Crear una malla

1. En **Usuarios**, pulsa **Mallas de turno**.
2. Pulsa **Nueva malla**.
3. Ponle un **Nombre** (por ejemplo, «Semana 1») y, si quieres, una **Descripción** («Turno de la mañana»).
4. En la tabla, para cada día, escribe la **Entrada** y la **Salida**. Los descansos (**Break mañana**, **Almuerzo**, **Break tarde**) son opcionales: añádelos con **+ Agregar**. Un día sin horario queda como **Libre**. La fila **Festivos** dice qué se trabaja los días festivos.
5. Pulsa **Guardar**.

### Asignar una malla

1. En **Mallas de turno**, pulsa **Asignar a…** en la malla.
2. Elige **A todos los agentes**, **A todos los supervisores** (si los supervisores llevan malla) o **Solo a los que elija**, y marca a las personas.
3. Pulsa **Asignar**.

Asignar una malla **reemplaza** la que la persona tuviera. Los administradores no llevan malla.

Si cambias una malla, pulsa **Aplicar** para pasar el nuevo horario a todas las personas que la tienen. Si alguna está trabajando en ese momento, su horario cambia en el acto.

### El horario de una sola persona

1. En la lista de usuarios, pulsa el reloj (**Horario**) de la persona.
2. Elige una opción:
   - **Una malla ya creada**, y escógela en la lista.
   - **Una malla personalizada solo para** esa persona, y llena su tabla de horarios.
   - **Sin malla** (recibe llamadas siempre que esté conectado).
3. Pulsa **Guardar**.

### Ajustes de las mallas

Arriba, en la ventana **Mallas de turno**, el administrador decide:

- **La malla de turno es obligatoria para los agentes.** Si la activas, ya no se ofrece «Sin malla», y quien no tenga horario aparece en la lista con la etiqueta **Sin turno**.
- **Los supervisores también llevan malla.**
- **Malla predeterminada**: se le pone sola a cada agente nuevo.

:::info
Si eliminas una malla, las personas que la tenían **conservan su horario**: solo dejan de seguir esa malla.
:::

## Reporte de sesiones

Pulsa **Reporte de sesiones** para ver, por fechas, una fila por cada sesión de cada persona: cuándo entró y salió, cuánto duró, sus pausas y si cumplió su malla (**Llegó tarde**, **Se fue antes**, **No se conectó**…). Puedes descargarlo en Excel.

## Tipos de pausa

Los tipos de pausa son las razones que el agente elige al pausarse (almuerzo, baño, capacitación…). Ver [Pausas](/guia/agentes/pausas).

1. En **Usuarios**, pulsa **Tipos de pausa**.
2. Para crear uno, escribe el nombre en **Nuevo tipo de pausa…** y pulsa **Agregar**.
3. Para ponerle un tiempo máximo, escribe los minutos junto a la pausa y pulsa **Guardar**. Si lo dejas vacío, la pausa no tiene límite.
4. Para borrar uno, pulsa su papelera.

Las pausas marcadas como **Sistema** vienen con Eclipta y no se pueden eliminar, pero sí puedes cambiarles el tiempo máximo.

## Desconexión automática

Si un agente cierra el navegador o pierde la conexión estando en pausa o con chats abiertos, Eclipta espera un tiempo y lo desconecta. Así nadie queda «en pausa» todo el día por haberse ido del puesto.

1. En **Usuarios**, pulsa **Configuración**.
2. En **Tiempo de desconexión automática (segundos)**, escribe los segundos de espera. Con **0** se desactiva.
3. Pulsa **Guardar**.

## Quitarle el acceso a alguien

Para que una persona deje de entrar a Eclipta, elimínala:

1. En la lista, pulsa su papelera (**Eliminar**).
2. Confirma con **Enviar a la papelera**.

El usuario va a la [Papelera](/guia/administracion/papelera), desde donde puedes **restaurarlo** si te equivocaste o si vuelve a trabajar contigo.

:::info
Solo un Super Admin puede eliminar a otro Super Admin, y un Super Admin no puede eliminarse a sí mismo.
:::
