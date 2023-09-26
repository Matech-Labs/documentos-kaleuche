import styles from "./page.module.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Documentos Kaleuche</title>
      </head>
      <body className={styles.bodyContainer}>
        <h1 className={styles.mainTitle}>Documentos Kaleuche</h1>
        <p>
          De está página vas a poder descargar, de primera mano, toda la
          documentación que acredita la titularidad del Fideicomiso Inmobiliario
          Nuevo Kaleuche sobre todos aquellos lotes que integraron la quiebra de
          Juan Claudio Chavanne y hoy se encuentran registrados a nombre de
          Jorge Tejerina, Marcelo Augusto Chavanne, La Vertiente Andina S.A.,
          Santiago Palmieri y Carlos Federico Chavanne. De esta forma vas a
          poder contar con todos los elementos necesarios para analizar tu
          situación.
        </p>
        <p>
          También vas a poder acceder a los informes de dominio de todos esos
          lotes.
        </p>
        <main>{children}</main>
      </body>
    </html>
  );
}
