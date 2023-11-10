import { NavBar } from '../components/navigation/NavBar'


import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      

      <body className={inter.className}>
        <NavBar /> {/* Include the NavBar component here */}
        {children}
      </body> 

    </html>
  )
}
