import '../styles/globals.css'

import Header from '@/components/Header/Header'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Ivan G.</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
