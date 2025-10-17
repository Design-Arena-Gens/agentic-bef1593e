import type { Metadata } from 'next'
import { Montserrat, Lato } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['700', '800', '900']
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Get Your Free $100 Crumbl Gift Card | Limited Time Offer',
  description: 'Complete a quick survey and claim your $100 Crumbl gift card today. Limited spots available!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${lato.variable} font-sans`}>{children}</body>
    </html>
  )
}
