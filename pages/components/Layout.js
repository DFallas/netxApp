import styles from './layout.module.scss'
import Navbar from "./Navbar"
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
        <Head>
        <meta name="google-site-verification" content="B4Dr1GhgKYEceGHmcMHA_gVAjord2O4a3HIDpeBnHLk" />
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.container}>
        <Navbar className={`${styles.row} main`} />
        <div className={`${styles.row} ${styles.pageViewport}`}>
            
            <div className={styles.column}>
                {children}
            </div>
        </div>
        <Footer />
        </main>
        </>
    );
  }