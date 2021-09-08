import styles from './layout.module.scss'
export default function Navbar(props) {
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
                    <a href="/login">Server Side Rendering!</a> 
                </li>
            </ul>
        </nav>

    )
}