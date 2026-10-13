import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import {ENLACES} from '../enlaces';

type Tarjeta = {titulo: string; texto: string; enlace: string};

// Por dónde empezar según quién eres. Cada tarjeta lleva a la primera página de su parte de la guía.
const ROLES: Tarjeta[] = [
  {
    titulo: 'Soy administrador',
    texto: 'Crea usuarios, conecta tus canales, arma tus bases y formularios y dibuja los flujos que atienden tus llamadas y chats.',
    enlace: '/guia/administracion/usuarios',
  },
  {
    titulo: 'Soy supervisor',
    texto: 'Sigue en tiempo real a tus agentes y tus colas, revisa las gestiones y escucha las grabaciones.',
    enlace: '/guia/supervision/tablero',
  },
  {
    titulo: 'Soy agente',
    texto: 'Atiende llamadas y chats desde un solo lugar: el teléfono, la ficha del cliente y el formulario de la gestión.',
    enlace: '/guia/agentes/espacio-del-agente',
  },
];

const TEMAS: Tarjeta[] = [
  {titulo: 'Entrar por primera vez', texto: 'Tu usuario, tu contraseña, el idioma y el recorrido guiado.', enlace: '/guia/primeros-pasos/entrar'},
  {titulo: 'Flujos de trabajo', texto: 'El lienzo donde decides por dónde entra cada llamada y cada chat.', enlace: '/guia/administracion/flujos-de-trabajo'},
  {titulo: 'Campañas', texto: 'Entrantes, salientes y callback: la cola, los agentes y los reportes.', enlace: '/guia/administracion/campanas'},
  {titulo: 'Canales', texto: 'WhatsApp, Telegram, chat web, correo, SMS y telefonía.', enlace: '/guia/administracion/canales'},
  {titulo: 'Reportes y grabaciones', texto: 'Dónde ver cada gestión, oír las llamadas y descargar a Excel.', enlace: '/guia/supervision/reportes'},
  {titulo: 'Preguntas frecuentes', texto: 'Respuestas cortas a lo que más nos preguntan.', enlace: '/guia/preguntas-frecuentes'},
];

function Grupo({items, destacado}: {items: Tarjeta[]; destacado?: boolean}) {
  return (
    <div className={destacado ? styles.rejillaRoles : styles.rejilla}>
      {items.map((t) => (
        <Link key={t.enlace} to={t.enlace} className={destacado ? styles.tarjetaRol : styles.tarjeta}>
          <Heading as="h3">{t.titulo}</Heading>
          <p>{t.texto}</p>
        </Link>
      ))}
    </div>
  );
}

export default function Inicio(): ReactNode {
  return (
    <Layout title="Inicio" description="Guía de uso de Eclipta, el contact center omnicanal de Axiona360.">
      <header className={styles.portada}>
        <div className={styles.corona} aria-hidden="true" />
        <div className="container">
          <p className={styles.antetitulo}>Centro de ayuda</p>
          <Heading as="h1" className={styles.titulo}>
            Aprende a usar Eclipta
          </Heading>
          <p className={styles.subtitulo}>
            Guías paso a paso para administradores, supervisores y agentes. Sin tecnicismos: lo que ves en la pantalla
            y qué hacer con ello.
          </p>
          <div className={styles.botones}>
            <Link className={styles.botonPrincipal} to="/guia/bienvenido">
              Empezar la guía
            </Link>
            <Link className={styles.botonSecundario} href={ENLACES.eclipta}>
              Entrar a Eclipta
            </Link>
          </div>
        </div>
      </header>
      <main className="container">
        <section className={styles.seccion}>
          <Heading as="h2">¿Quién eres?</Heading>
          <Grupo items={ROLES} destacado />
        </section>
        <section className={styles.seccion}>
          <Heading as="h2">Temas más consultados</Heading>
          <Grupo items={TEMAS} />
        </section>
        <section className={styles.ayuda}>
          <div>
            <Heading as="h2">¿No encuentras lo que buscas?</Heading>
            <p>Escríbenos y te ayudamos.</p>
          </div>
          <Link className={styles.botonPrincipal} href={ENLACES.whatsapp}>
            Escríbenos por WhatsApp
          </Link>
        </section>
      </main>
    </Layout>
  );
}
