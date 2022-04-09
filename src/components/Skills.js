import styles from './Skills.module.css'

export default function Skills () {
    return (
        <div className={styles.bodySkills}>
            <div className={styles.Skills}>
                <div className={styles.col1}>
                    <img src='https://static.vecteezy.com/system/resources/previews/003/416/524/original/frontend-developer-illustration-concept-vector.jpg' alt='frontend'/>
                    <div className={styles.text} >
                        <span>Frontend</span>
                        <p>Vuejs</p>
                        <p>React</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>Vuetify</p>
                        <p>Quasar.dev</p>
                    </div>
                </div>
                <div className={styles.col2}>
                    <img src='https://static.vecteezy.com/system/resources/previews/003/416/059/original/flat-design-backend-of-developer-concept-vector.jpg' alt='backend'/>
                    <div className={styles.text} >
                        <span>Backend</span>
                        <p>Vuejs</p>
                        <p>React</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>Vuetify</p>
                        <p>Quasar.dev</p>

                    </div>
                </div>
                <div className={styles.col3}>
                    <img src='https://rethinksoft.com/img/illustration.png' alt='competencias'/>
                    <div className={styles.text} >
                        <span>Competencias</span>
                        <p>Vuejs</p>
                        <p>React</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>Vuetify</p>
                        <p>Quasar.dev</p>

                    </div>
                </div>
            </div>
        </div>
    )
}