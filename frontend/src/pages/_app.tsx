import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/auth'
import { SafeHydrate } from '../components/noSSR'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </SafeHydrate>
  )
}

export default MyApp
