import Project from "../../components/Project";
import data from "../../assets/data/data.json";

function Projects() {
    const projectsItems = data.projects;

    return (
        <section id="projects" className="content_padding-x py-40">
            <h2 className="mb-52 2xl:mb-72">Projets /</h2>

            <div className="grid grid-cols-2 gap-y-56 2xl:gap-y-72">
                {projectsItems.map((project, index) => (
                    <Project
                        key={`project-${index}`}
                        year={project.year}
                        title={project.title}
                        cover={project.cover}
                        icons={project.icons}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
