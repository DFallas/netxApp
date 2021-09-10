import styles from './layout.module.scss'
import Navbar from "./Navbar"
import Footer from './Footer'
import Head from 'next/head'
import { Container, Grid } from '@material-ui/core'
import { grid } from '@material-ui/system'

export default function Layout({ children }) {
    return (
        <>
        <Head>
        <meta name="google-site-verification" content="B4Dr1GhgKYEceGHmcMHA_gVAjord2O4a3HIDpeBnHLk" />
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
                />
        </Head>
        <main className={styles.container}>
        <Container maxWidth="xl" disableGutters>
            <Grid container direction="column">
                    <Navbar className="main" />
                </Grid>
            <Grid container direction="column" >
                <grid item direction="row" xs="3">

                </grid>
                <grid item direction="row" xs="9" className={styles.pageViewport}>
                    {children}
                </grid>

            </Grid>
        </Container>

        <Footer />
        </main>
        </>
    );
  }