---
sidebar_position: 10
title: Papelera
description: Recupera lo que se eliminó por error o bórralo de forma definitiva.
---

# Papelera

Cuando eliminas un usuario, una campaña, una base o un formulario, no se pierde: va a la **Papelera**. Desde ahí puedes **restaurarlo** si te equivocaste, o **eliminarlo permanentemente** cuando estés seguro de que ya no lo necesitas.

Hay una sola papelera para todo Eclipta: la del menú **Papelera**.

## Qué va a la papelera

La papelera tiene una pestaña por cada tipo de elemento:

| Pestaña | Qué guarda |
|---|---|
| **Usuarios** | Los usuarios eliminados. |
| **Flujos** | Los flujos de trabajo eliminados. |
| **Campañas** | Las campañas eliminadas. |
| **Bases de Clientes** | Las bases eliminadas, con sus registros. |
| **Formularios** | Los formularios eliminados. |
| **Bots** | Los bots eliminados. |
| **Lienzo de flujos** | Las cajas y flechas que borraste en el lienzo de un flujo. La columna **Flujo** te dice de qué flujo son. |

En cada pestaña ves el **Nombre** de lo eliminado, **Eliminado por** (quién lo borró) y la **Fecha de eliminación**.

:::warning Lo que NO va a la papelera
Algunas cosas se borran para siempre en el momento, y su pantalla te avisa antes:

- Los **registros** de una base (uno, varios o la base vaciada).
- Los **campos y secciones** de una base o de un formulario.
- Las **cuentas de canales** (WhatsApp, Telegram, WebChat, Email), las **plantillas de WhatsApp** y los **proveedores de SMS**.

Si un tipo de elemento no tiene pestaña aquí, no se puede restaurar desde el panel.
:::

## Restaurar un elemento

1. Entra a **Papelera**.
2. Elige la pestaña del tipo de elemento.
3. Pulsa **Restaurar** en la fila.
4. Confirma con **Restaurar**.

El elemento vuelve a su pantalla de siempre, tal como estaba.

:::info Restaurar en el lienzo no publica
Si restauras una caja del **Lienzo de flujos**, vuelve al dibujo del flujo junto con sus flechas, pero **no cambia por dónde entran las llamadas** hasta que alguien publique el flujo. Ver [Flujos de trabajo](/guia/administracion/flujos-de-trabajo).
:::

:::tip
Si alguien tiene ese mismo flujo abierto con cambios sin guardar y guarda después de que restauraste, la caja restaurada puede volver a desaparecer. Si pasa, restáurala otra vez.
:::

## Eliminar permanentemente

1. En la fila del elemento, pulsa **Eliminar**.
2. Lee el aviso **Esta acción es irreversible**: se elimina el elemento y todos sus datos relacionados.
3. En **Escribe tu contraseña para confirmar**, escribe tu contraseña de acceso.
4. Pulsa **Eliminar permanentemente**.

:::warning Es definitivo
Lo que eliminas permanentemente **no se puede recuperar**. Si eliminas una base, se van también todos sus registros.
:::

## Quién puede usar la papelera

Restaurar y eliminar permanentemente son permisos separados: si no ves alguno de los dos botones, es que no tienes ese permiso. A un supervisor se los da el administrador en sus permisos (**Restaurar** y **Eliminar permanente** en la sección **Papelera**). Ver [Usuarios](/guia/administracion/usuarios#los-permisos-del-supervisor).
