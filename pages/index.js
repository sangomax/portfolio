import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="content">
      <Image src="/logo_green.png" width={400} height={400}></Image>
    </div>
  )
}
