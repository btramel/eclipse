import '@/styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
export default function App({ Component, pageProps }) {
  return (
    <main className={`${GeistSans.className} ${GeistMono.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
