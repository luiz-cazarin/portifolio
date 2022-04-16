import styles from './Contact.module.css'

export default function Contact () {
    return (
        <div className={styles.bodyContact}>
            {/* <div>
                <h1>Wellcome</h1>
                <h3>About me!</h3>
                <p> I has 21 years old</p>
            </div> */}
            <div className={styles.box}>
                <div className={styles.grid__icon}>
                    <a target="_blank" href='mailto:cazarin.junior@gmail.com' rel="noreferrer">
                        <div className={styles.box__icon}>
                            <div className={styles.icon}>
                                <img src='https://cdn-icons-png.flaticon.com/512/732/732026.png?w=360' alt='git'></img>
                            </div>
                            <span>Email</span>
                        </div>
                    </a>
                    <div className={styles.box__icon}>
                        <a target="_blank" href='https://www.linkedin.com/in/luiz-claudio-51582719a/' rel="noreferrer">
                            <div className={styles.icon}>
                                <img src='https://i.pinimg.com/originals/f0/9e/b1/f09eb147078e70884196578d11271362.png' alt='git'></img>
                            </div>
                            <span>Linkedin</span>
                        </a>
                    </div>
                    <a target="_blank" href='https://github.com/luiz-cazarin' rel="noreferrer">
                        <div className={styles.box__icon}>
                            <div className={styles.icon}>
                                <img src='https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png' alt='git'></img>
                            </div>
                            <span>GitHub</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}