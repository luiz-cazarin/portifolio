import styles from './Skills.module.css'

export default function Skills () {
    return (
        <div className={styles.bodySkills}>
            <div className={styles.Skills}>
                <div className={styles.col1}>
                    <img className={styles.img_skills} src='https://static.vecteezy.com/system/resources/previews/003/416/524/original/frontend-developer-illustration-concept-vector.jpg' alt='frontend'/>
                    <div className={styles.text} >
                        <div className={styles.title__text}>
                            <span>Frontend</span>
                        </div>
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
                    <img className={styles.img_skills} src='https://static.vecteezy.com/system/resources/previews/003/416/059/original/flat-design-backend-of-developer-concept-vector.jpg' alt='backend'/>
                        <div className={styles.text} >
                        <div className={styles.title__text}>
                            <span>Backend</span>
                        </div>
                        <p>Java</p>
                        <p>Spring</p>
                        <p>Node</p>
                        <p>PostgreSQL</p>
                        <p>MySQL</p>
                        <p>MongoDB</p>
                        <p>CouchDB</p>
                        <p>PouchDB</p>
                        <p>FireBase</p>
                        <p>Rest</p>

                    </div>
                </div>
                <div className={styles.col3}>
                    <img className={styles.img_skills} src='https://rethinksoft.com/img/illustration.png' alt='competencias'/>
                    <div className={styles.text} >
                        <div className={styles.title__text}>
                            <span>Competencias</span>
                        </div>
                        <p>Scrum (YouTrack, Trello)</p>
                        <p>UX/UI (Figma, AdobeXD)</p>
                        <p>Desenvolvimento Web</p>
                        <p>Desenvolvimento Mobile</p>
                        <p>Test de software</p>
                        <p>Documentação de projetos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}