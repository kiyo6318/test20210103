import '../styles/globals.css'
import {Container} from 'next/app'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
