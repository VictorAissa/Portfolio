import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Project from "../../components/Project";
import data from "../../assets/data/data.json";

function Projects() {
    const [windowWidth] = useState(window.innerWidth);
    const desktopResolution = windowWidth > 640;
    const projectsItems = data.projects;
    const projectsSection = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context((self) => {
            if (!desktopResolution) {
                const projectImages = self.selector(".project-image");

                projectImages.forEach((image) => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: image,
                            scrub: 1,
                            start: "50% 70%",
                            end: "50% 30%",
                        },
                    });
                    tl.to(image, { scale: 1.3 });
                });
            }
        }, projectsSection);
        return () => ctx.revert();
    }, [desktopResolution, projectsSection]);

    return (
        <section
            id="projects"
            className="content_padding-x py-28 sm:py-40"
            ref={projectsSection}
        >
            <h2 className="mb-36 sm:mb-52 2xl:mb-72">Projets /</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-36 sm:gap-y-56 2xl:gap-y-72">
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
