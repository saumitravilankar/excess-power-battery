
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@components/Footer'
import ScrollToTop from '@components/Scrolltotop'
import NavbarTwo from '@components/NavbarTwo'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Excess Power Battery',
  description: 'Looking for inverter batteries, automotive batteries, or the best car battery? Find competitive inverter battery prices. Also, explore the best inverter for home use.',
  keywords: 'inverter batteries, inverter battery price, automotive batteries, tractor battery, car battery, inverter for home, best inverter for home, best car battery, car battery shop near me, batteries, vehicle batteries, suv car battery, 4 wheeler battery, rickshaw battery, Leading Car Battery Manufacturer, Automobile Batteries manufacturers, suppliers & exporters, inverter battery, power battery, excess battery, four wheeler battery price, jeep battery, truck battery',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarTwo />
        <ScrollToTop />
        {children}
        <Footer />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </body>
    </html>
  )
}
