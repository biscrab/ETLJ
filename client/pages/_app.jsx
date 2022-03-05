import '../styles/globals.css'
import dynamic from 'next/dynamic'
import Loading from '../components/Loading.js'
import Header from '../components/header'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  const DynamicComponentWithCustomLoading = dynamic(
    () => import('../components/Loading.js'),
    { loading: () => <Loading /> }
  )

  return (
    <>
      <title>쉽게 배우는 일본어</title>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"></link>
      <script src="https://kit.fontawesome.com/ed23fb601b.js" crossOrigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.2.0/css/all.min.css" integrity="sha512-6c4nX2tn5KbzeBJo9Ywpa0Gkt+mzCzJBrE1RB6fmpcsoN+b/w/euwIMuQKNyUoU/nToKN3a8SgNOtPrbW12fug==" crossOrigin="anonymous" />
      <Header />
      <Component {...pageProps} />
      <Loading loading={loading}/>
    </>
  )
}

export default MyApp
