import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {Header, BrandDisplay} from '../components/index';

export default function Home() {
  return (
    <div className='w-screen h-screen' >
    <Header />
    <BrandDisplay/>
    </div>
  )
}
