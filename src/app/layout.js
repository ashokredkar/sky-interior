import './globals.css'

export const metadata = {
  title: 'DesignCo — Premium Interior & Ceiling Solutions',
  description: 'Bespoke interiors for architects and builders who demand precision, craft, and lasting elegance.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}