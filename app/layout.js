import { Inter } from 'next/font/google'
import './globals.css'
import { Righteous } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'Daniel Artur Full-stack developer',
  description: 'Minha página de portfólio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
