import 'tailwindcss/tailwind.css'
import Layout from '../components/Layouts'
import '../public/index.css'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

