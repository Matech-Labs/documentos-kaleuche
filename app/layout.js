import Navbar from "/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Documentos Kaleuche</title>
      </head>
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
