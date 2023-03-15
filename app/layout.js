import '../styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='shortcut icon' href='https://icon-library.com/images/web-designing-icon/web-designing-icon-22.jpg' />
        <title>Ivan G.</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
