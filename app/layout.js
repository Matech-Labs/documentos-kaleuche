import styles from "./page.module.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Documentos Kaleuche</title>
      </head>
      <body className={styles.bodyContainer}>
        <h1 className={styles.mainTitle}>Documentos Kaleuche</h1>
        <main>{children}</main>
      </body>
    </html>
  );
}
