import '@/styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
export default function App({ Component, pageProps }) {
  return (
    <main className={`${GeistSans.className} ${GeistMono.className}`}>
      <Analytics />
      <Component {...pageProps} />
    </main>
  )
}
