import styles from './Projects.module.css'

export default function Projects () {
    const image = true;
    return (
        <div className={styles.bodyProjects}>
            <div className={styles.projects}>
                <div className={styles.title}>
                        <div className={styles.title__txt}>
                            <h1>PROJECTS</h1>
                        </div>
                        <div className={styles.title__line}>
                            <hr className={styles.line}></hr>
                        </div>
                </div>
                <div className={styles.grid__projects} >
                    <div className={styles.grid__projects_col1}>
                        <h4>Seja +</h4>
                        <p>Projeto realizado na universidade para a universidade, sistema utilizado para organizar projetos sociais e projetos de extensão realizados por alunos da Universidade Católica de Brasília</p>
                    </div>
                    <div className={styles.grid__projects_col2}>
                        {image !== null && 
                            <div className={styles.card__projects}>
                                <p> !Web Site</p>
                            </div>
                        }
                    </div>
                </div>
                <div className={styles.grid__projects} >
                    <div className={styles.grid__projects_col1}>
                        <h4>Web</h4>
                        <p>paginas e dashboards responsivos, componentes, portfólio, formulário, utilizando JavaScript, HTML, CSS, React, Vuejs</p>
                    </div>
                    <div className={styles.grid__projects_col2}>
                        <div className={styles.card__projects}>
                            <p> !Web Site</p>
                        </div>
                    </div>
                </div>
                <div className={styles.grid__projects} >
                    <div className={styles.grid__projects_col1}>
                        <h4>Blog em nodejs</h4>
                        <p>Blog em nodejs usando banco de dados mongodb, com autentificação de usuários, paginas de postagem e controle de acesso</p>
                    </div>
                    <div className={styles.grid__projects_col2}>
                        <div className={styles.card__projects}>
                            <p> !Web Site</p>
                        </div>
                    </div>
                </div>
                <div className={styles.grid__projects} >
                    <div className={styles.grid__projects_col1}>
                        <h4>Prototipagem</h4>
                        <p>Protótipos de aplicativos e sites utilizando o figma</p>
                    </div>
                    <div className={styles.grid__projects_col2}>
                        <div className={styles.card__projects}>
                            <p> !Web Site</p>
                        </div>
                    </div>
                </div>
                <div className={styles.grid__projects} >
                    <div className={styles.grid__projects_col1}>
                        <h4>Portfólio</h4>
                        <p>Paginas de portfólio como este site que voce esta usando</p>
                    </div>
                    <div className={styles.grid__projects_col2}>
                        <div className={styles.card__projects}>
                            <p> !Web Site</p>
                        </div>
                    </div>
                </div>
                <div className={styles.grid__projects} >
                    <div className={styles.grid__projects_col1}>
                        <h4>devLearning</h4>
                        <p>Site com o objetivo de ajudar outros estudantes a iniciarem sua carreira na progração</p>
                    </div>
                    <div className={styles.grid__projects_col2}>
                        <div className={styles.card__projects}>
                            <p> !Web Site</p>
                        </div>
                    </div>
                </div>
                <div className={styles.grid__projects} >
                    <div className={styles.grid__projects_col1}>
                        <h4>Jogo de estratégia</h4>
                        <p>Jogo de estratégia em tempo real inspirado em Age of Empires usando Java</p>
                    </div>
                    <div className={styles.grid__projects_col2}>
                        <div className={styles.card__projects}>
                            <p> !Web Site</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
