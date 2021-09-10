import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './layout.module.scss'
import { useRouter } from 'next/dist/client/router';
import { RouterOutlined } from '@material-ui/icons';
import Link from 'next/link'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar2(props) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const router = useRouter()
    const redirect = (url)=> router.push(url)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            NextApp
          </Typography>
          
            <nav className={props.className}>
            <Link href='/'f>
                <Button color="inherit">Home</Button>
            </Link>
            <Link href='/courses/2'>
                <Button color="inherit" > Static PreRendering!</Button>
            </Link>
            <Link href='/courses/client'>
            <Button color="inherit" > Client Rendering!</Button>
            </Link>
            
            <Link href='/courses'>
            <Button color="inherit" onClick={()=> redirect('')}> Server Side Rendering!</Button>
            </Link>
            </nav>
            <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export  function Navbar(props) {
    return(
        <nav className={props.className}>
            <ul>
                <li className={styles.navTitle}>
                    <a href="/">Home </a> 
                </li>
                <li className={styles.navTitle}>
                    <a href="/courses/2">Static PreRendering!</a> 
                </li>
                <li className={styles.navTitle}>
                    <a href="/courses/client">Client Rendering!</a> 
                </li>
                <li className={styles.navTitle}>
                    <a href="/courses">Server Side Rendering!</a> 
                </li>
            </ul>
        </nav>

    )
}