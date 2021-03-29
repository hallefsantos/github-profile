import 'tailwindcss/tailwind.css'
import NextNprogress from 'nextjs-progressbar'

function App({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#FCD34D"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
