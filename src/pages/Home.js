import styles from './Home.module.css'

export default function Home () {
    return (
        <div className={styles.home}>
            <div className={styles.text}>
                <h1>Luiz Claudio.</h1>
                <p>
                    I’m a boston-based software engineer who specializes in building
                    (and occasionaly designing) exceptional digital experiences.
                    Currently. I’m an enginner at Upstatement focused on building
                    acessible, human-centered products.
                </p>
            </div>
            <div className={styles.img}>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/front-end-developer-doing-web-designing-4152245-3444401.png" alt=''></img>
            </div>
        </div>
    )
}