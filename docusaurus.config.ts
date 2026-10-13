// Centro de ayuda de Eclipta (docs.axiona360.com.co).
//
// Es documentación PARA QUIEN USA EL PRODUCTO: administradores, supervisores y agentes. Nada técnico (servidores,
// bases de datos, configuración interna). Reglas de negocio de Axiona360 que valen también aquí: nunca precios, lo
// que Eclipta todavía no hace va marcado «Próximamente», y todo lo comercial lleva a WhatsApp.
//
// Solo tema oscuro, como Eclipta (el tema claro se retiró de todos los sistemas el 2026-10-12).

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {ENLACES} from './src/enlaces';

const config: Config = {
  title: 'Centro de ayuda de Eclipta',
  tagline: 'Todo lo que necesitas para trabajar con Eclipta, paso a paso',
  favicon: 'img/favicon.svg',

  // faster en false: sus minificadores nativos (SWC) se niegan a arrancar en Windows cuando la raíz
  // C:\ da permisos amplios (ERR_SWC_NATIVE_CACHE). El build normal tarda unos segundos más y funciona en todos lados.
  future: {
    v4: true,
    faster: false,
  },

  url: 'https://docs.axiona360.com.co',
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },

  // Español primero. Las traducciones (en, fr, pt) se añaden aquí cuando estén escritas: una página sin traducir
  // se enseñaría en español bajo el selector de otro idioma, y eso se lee como un fallo.
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
    localeConfigs: {es: {htmlLang: 'es-CO', label: 'Español'}},
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'guia',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og-image.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {sidebar: {hideable: true, autoCollapseCategories: true}},
    navbar: {
      title: 'Centro de ayuda',
      logo: {alt: 'Axiona360', src: 'img/axiona360-simbolo.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'guia', position: 'left', label: 'Guía'},
        {to: '/guia/preguntas-frecuentes', label: 'Preguntas frecuentes', position: 'left'},
        {href: ENLACES.eclipta, label: 'Entrar a Eclipta', position: 'right', className: 'nav-entrar'},
        {href: ENLACES.web, label: 'axiona360.com.co', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Empezar',
          items: [
            {label: 'Bienvenido', to: '/guia/bienvenido'},
            {label: 'Entrar a Eclipta', to: '/guia/primeros-pasos/entrar'},
            {label: 'Preguntas frecuentes', to: '/guia/preguntas-frecuentes'},
          ],
        },
        {
          title: 'Según tu rol',
          items: [
            {label: 'Administrador', to: '/guia/administracion/usuarios'},
            {label: 'Supervisor', to: '/guia/supervision/tablero'},
            {label: 'Agente', to: '/guia/agentes/espacio-del-agente'},
          ],
        },
        {
          title: 'Axiona360',
          items: [
            {label: 'Entrar a Eclipta', href: ENLACES.eclipta},
            {label: 'Sitio web', href: ENLACES.web},
            {label: 'Escríbenos por WhatsApp', href: ENLACES.whatsapp},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Axiona360`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
