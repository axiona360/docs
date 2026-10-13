# Centro de ayuda de Eclipta (docs)

Guía de USO de Eclipta para los clientes de Axiona360: administradores, supervisores y agentes. Hecha con
**Docusaurus** (React). Responder siempre en español.

| | |
|---|---|
| Repo | `github.com/axiona360/docs` (rama `main`) |
| Se publica en | https://docs.axiona360.com.co — Worker `docs` de Cloudflare (solo archivos estáticos, `wrangler.jsonc`) |
| Contenido | `docs/` (Markdown/MDX). La portada es `src/pages/index.tsx` |
| Enlaces a los otros sistemas | `src/enlaces.ts` (login de Eclipta, web, WhatsApp) |

## Reglas del contenido

- **Nada técnico.** Ni servidores, ni bases de datos, ni API, ni nombres de columnas o ficheros. Se explica lo que
  el usuario ve y las consecuencias de lo que hace («se borra de todos los registros y no se puede recuperar»).
- Se **tutea**, como el panel de Eclipta. Pasos numerados, nombres de menús y botones **exactos** y en negrita;
  rutas de menú con flecha: **Usuarios → Tipos de pausa**.
- **No se inventa**: todo sale del código de `eclipta/frontend` (textos en `src/i18n/locales/es/*.json`). Lo que
  existe en gris o no está construido lleva `<span className="proximamente">Próximamente</span>` y va en
  `docs/proximamente.md`.
- Reglas de negocio de Axiona360: **nunca precios**, nada de «Colnexa», sin nombres de personas, y lo comercial va
  a WhatsApp.
- No se documenta la consola interna de Axiona360 (es nuestra, no del cliente).
- Los `.md` se procesan como **MDX**: llaves `{ }` y `< >` sueltas rompen el build (las variables van en `código`).
- `onBrokenLinks: 'throw'`: un enlace interno roto hace fallar el build. Las rutas son `/guia/<carpeta>/<fichero>`.
- Solo **tema oscuro** (como Eclipta). Solo **español** por ahora: un idioma se añade en `docusaurus.config.ts`
  cuando sus páginas estén traducidas (una página sin traducir bajo otro idioma se lee como un fallo).

## Cómo se trabaja

```bash
npm install
npm start          # http://localhost:3000, recarga al guardar
npm run build      # lo mismo que hace Cloudflare; falla con enlaces rotos
```

Cuando Eclipta cambia una pantalla, se actualiza su página aquí en el mismo día: una guía que describe una
pantalla que ya no existe es peor que no tener guía.

## Quién enlaza aquí

- web: menú **Plataforma → Centro de ayuda** y el pie (`src/datos.js`, `DOCS_URL`).
- corp: **Otros sistemas → Centro de ayuda** (`src/main.tsx`).
- eclipta: menú de perfil del panel y **Otros sistemas** de la consola (`frontend/src/utilidades/centroAyuda.ts`).
  En el dominio propio de un cliente no se ofrece.
