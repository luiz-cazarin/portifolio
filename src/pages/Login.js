import styles from './Login.module.css'

export default function Login () {
    return (
        <>
        <div className={styles.body}>        
                <div className={styles.card__login}>
                    <main className={styles.contentContainer}>
                        <section className={styles.box__text}>
                        <span>Hi, Welcome</span>
                        <h1>Login page</h1>
                        <h2>You can create a user!</h2>
                        <p>This page is responsible to make login in web-site,  if you are a visitant there no are diferences, but if you is a admin, you can create new projects and edit the website, you can vefiry this project in the git</p>
                        </section>
                        <div>
                            <div className={styles.box__form}>
                                <p className={styles.title}>Login</p>
                                <input placeholder="Username" type="text"className={styles.input__values}/>
                                <br></br>
                                <input placeholder="Password" type="password" className={styles.input__values}/>
                                <br></br>
                                <button className={styles.btn__login}>LOGIN</button>
                            </div>
                        </div>
                    </main>
                </div>
                <div className={styles.linha}>
                </div>
            </div>
        </>
    )
}