// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html>
      <Head>
        <style>{`
        body { margin: 0; font-size: 14px; } *, *:before, *:after {box-sizing: border-box;} /* custom! */
        `}</style>
        <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}