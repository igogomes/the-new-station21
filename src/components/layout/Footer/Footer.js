import styles from './Footer.module.css'

function Footer() {
    const currentDay = new Date();
    let currentYear = currentDay.getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>{currentYear} &copy; <span>Station21</span></div>
        </footer>
    );
}

export default Footer