import Image from 'next/image'
import HeadPortfolio from '../comp/Head'

export default function Home() {
  return (
    <>
      <HeadPortfolio title="Portfolio AGdeO | Home" />
        
      <div className="content">
        <Image src="/back.gif" width={400} height={400}  className="layeredImage"></Image>
      </div>
    </>
  )
}
