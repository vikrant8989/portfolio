import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vikrant Pratap Singh - Full Stack Engineer",
  description:
    "Portfolio of Vikrant Pratap Singh, a Full Stack Engineer specializing in nextjs technologies.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'