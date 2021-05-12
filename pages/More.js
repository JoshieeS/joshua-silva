import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Layout'
import {Code} from '@chakra-ui/react'

export default function About() {
    return (
      <div className={styles.container}>
        
        <Head>
          <title>Contact</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        
        <main className={styles.main}>       
          <h1 className={styles.title}>
            More Interesting Stuff
          </h1>
         </main> 
        </div>
    )
}