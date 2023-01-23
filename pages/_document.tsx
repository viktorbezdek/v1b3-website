import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossorigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="w-screen overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
