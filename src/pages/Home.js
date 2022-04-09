import Skills from '../components/Skills'
import styles from './Home.module.css'

export default function Home () {
    return (
        <div className={styles.bodyhome}>
            <div className={styles.home}>
                <div className={styles.text}>
                    <h2>Hi, my name is</h2>
                    <h1>Luiz Claudio.</h1>
                    <h3>I’m a software developer</h3>
                    <p>
                        I’m a boston-based software engineer who specializes in building
                        (and occasionaly designing) exceptional digital experiences.
                        Currently. I’m an enginner at Upstatement focused on building
                        acessible, human-centered products.
                    </p>
                </div>
                <div className={styles.img}>
                    <img src="https://img.freepik.com/free-vector/devops-team-abstract-concept-vector-illustration-software-development-team-member-agile-workflow-devops-team-model-it-teamwork-project-management-integrated-practice-abstract-metaphor_335657-2299.jpg?w=3000" alt=''></img>
                </div>
            </div>
            <hr className={styles.line}></hr>
            <Skills></Skills>
        </div>
    )
}