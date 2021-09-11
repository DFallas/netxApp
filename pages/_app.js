import { useEffect } from "react";
import Layout from "./components/Layout"
import './styles/global.scss'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from "@material-ui/styles";

import { theme } from "./theme";

export default function App({ Component, pageProps }) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
      }, []);
    
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>

    )
  }