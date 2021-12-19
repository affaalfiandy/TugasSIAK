import Head from 'next/head'
import HomePage from './home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ELXAM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap" rel="stylesheet"></link>
      </Head>
      <HomePage/>
    </div>
  )
}
