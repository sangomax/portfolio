import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio AGdeO | Home</title>
        <meta name="keywords" content="portfolio"/>
        <link rel="icon" href="/logo_green.ico" />
      </Head>
      <div className="content">
        <Image src="/logo_green.png" width={400} height={400}></Image>
      </div>
    </>
  )
}
