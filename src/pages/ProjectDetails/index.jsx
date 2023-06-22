import { useParams } from "react-router-dom";
import data from "../../assets/data/data.json";
import arrowShort from "../../assets/icons/arrows/short_black.png";

function ProjectDetails() {
    const { id } = useParams();
    const projectData = data.projects[id];

    return (
        <section className="flex flex-col gap-10 content_padding-x py-32">
            <img
                src={projectData.screenShot}
                alt=""
                className="w-[70%] max-w-[1260px] self-center"
            />

            <div className="mt-32 max-w-[1800px] ">
                <h1 className="inline-block text-4xl mb-3 capitalize">
                    {projectData.title}
                </h1>
                <span className="text-4xl"> | </span>
                <span className="text-2xl">{projectData.subtitle}</span>
                <p>{projectData.description}</p>
            </div>
            <div className="max-w-[1800px]">
                <h2 className="text-3xl mb-3 capitalize font-['work_sans'] font-normal ">
                    Problématique
                </h2>
                <p>{projectData.problem}</p>
            </div>
            <div className="max-w-[1800px]">
                <h2 className="text-3xl mb-3 capitalize font-['work_sans'] font-normal ">
                    Solution
                </h2>
                <p>{projectData.solution}</p>
            </div>
            {projectData.gitHubLink && (
                <a
                    href={projectData.gitHubLink}
                    target="_blank"
                    className=" mr-5"
                    rel="noopener noreferrer"
                >
                    <span>GitHub</span>
                    <img
                        src={arrowShort}
                        alt="Flèche droite"
                        className="w-5 inline-block -rotate-45"
                    />
                </a>
            )}

            {projectData.liveLink && (
                <a
                    href={projectData.liveLink}
                    target="_blank"
                    className=" mr-5"
                    rel="noopener noreferrer"
                >
                    <span>Live</span>
                    <img
                        src={arrowShort}
                        alt="Flèche droite"
                        className="w-5 inline-block -rotate-45"
                    />
                </a>
            )}
        </section>
    );
}

export default ProjectDetails;
