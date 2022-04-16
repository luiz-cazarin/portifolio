import Skills from '../components/Skills'
import styles from './Home.module.css'
// import { images } from '../constants';

export default function Home () {
    return (
        <div className={styles.bodyHome}>
            <div className={styles.home}>
                <div className={styles.text}>
                    <h2>Hello, my name is</h2>
                    <h1>Luiz Claudio.</h1>
                    <h3>I’m a software developer</h3>
                    <p>
                    I'm studying the seventh semester in Computer Science at the  Catholic University of Brasília, and I'm always looking for new challenges, ways to grow, learn and evolve.
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