import Head from 'next/head'
import styles from '../styles/Home.module.scss'


export default function Contact() {
    return (
      <div className={styles.container}>
        
        <Head>
          <title>Josh Silva | Businesses</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Josh_Logo_White.png" />
        </Head>
        
        
        <main className={styles.main}>       
          <h1 className={styles.title}>
            <a>My Businesses</a>
          </h1>
          <div className={styles.grid}>
          <a href="https://www.instagram.com/encorastudios/" className={styles.card}>
            <h2>Encora Studios &rarr;</h2>
            <p></p>
          </a>

          <a href="https://www.instagram.com/spacebizplans/" className={styles.card}>
            <h2>SpaceBizPlans &rarr;</h2>
            <p></p>
          </a>

          <a
            href="https://www.facebook.com/PlatonicAcad"
            className={styles.card}
          >
            <h2>Platonic Academy &rarr;</h2>
            <p></p>
          </a>

          <a
            href="https://www.instagram.com/j_daphotophile/"
            className={styles.card}
          >
            <h2>JDaPhotophile &rarr;</h2>
            <p>Photography Account</p>
          </a>

        </div>
        </main> 
      </div>
    )
}