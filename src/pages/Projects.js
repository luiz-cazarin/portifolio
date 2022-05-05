import styles from './Projects.module.css'

export default function Projects () {
    const projects = [
        {
            title: 'Seja +',
            text: 'Projeto realizado na universidade para a universidade, sistema utilizado para organizar projetos sociais e projetos de extensão realizados por alunos da Universidade Católica de Brasília',
            url: null
        },
        {
            title: 'Web',
            text: 'paginas e dashboards responsivos, componentes, portfólio, formulário, utilizando JavaScript, HTML, CSS, React, Vuejs',
            url: null
        },
        {
            title: 'Blog em nodejs',
            text: 'Blog em nodejs usando banco de dados mongodb, com autentificação de usuários, paginas de postagem e controle de acesso',
            url: 'https://github.com/luiz-cazarin/BlogApp'
        },
        {
            title: 'Prototipagem',
            text: 'Protótipos de aplicativos e sites utilizando o figma',
            url: null
        },
        {
            title: 'Portfólio',
            text: 'Paginas de portfólio como este site que voce esta usando',
            url: 'https://github.com/luiz-cazarin/portifolio'
        },
        {
            title: 'devLearning',
            text: 'Site com o objetivo de ajudar outros estudantes a iniciarem sua carreira na progração',
            url: null
        },
        {
            title: 'Jogo de estratégia',
            text: 'Jogo de estratégia em tempo real inspirado em Age of Empires usando Java',
            url: 'https://github.com/luiz-cazarin/Jogo-Estrategia-em-Tempo-Real'
        },
    ]
    const listProjects = projects.map(
        (c) =>
                <div className={styles.grid__projects}>
                    <div className={styles.grid__projects_col1}>
                        <h4>
                            <a href={c.url}>{c.title}</a>
                        </h4>
                        <p>{c.text}</p>
                    </div>
                    { c.srcImg &&
                        <div className={styles.grid__projects_col2}>
                            <div className={styles.card__projects}>
                                <p>{c.srcImg}</p>
                            </div>
                        </div>
                    }
                </div>
    )

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
                <ul>
                    {listProjects}
                </ul>
            </div>
        </div>
    )
}
