import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Doc It  - Document Management & Decision Support",
  description: "Professional document management and decision support system",
    generator: 'Error 404'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}>
        <div className="fixed inset-0 grid-pattern opacity-50" />
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  )
}
