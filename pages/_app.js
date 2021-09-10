import Layout from "./components/Layout"
import './styles/global.scss'
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App({ Component, pageProps }) {
    return (
        <>
            <CssBaseline />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>

    )
  }