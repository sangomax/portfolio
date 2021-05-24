import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio AGdeO | Home</title>
        <meta name="keywords" content="portfolio"/>
        <link rel="icon" href="/portfolio.ico" />
      </Head>
      <div className="content">
        <Image src="/back.gif" width={400} height={400}  className="layeredImage"></Image>
      </div>
    </>
  )
}
