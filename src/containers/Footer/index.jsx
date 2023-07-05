import arrowShort from "../../assets/icons/arrows/short_white.png";
import pdf from "../../assets/data/Victor_LABORDE_CV.pdf";

function Footer() {
    const linkedinUrl = "https://www.linkedin.com/in/victorlaborde/";
    const githubUrl = "https://github.com/VictorAissa";
    const resumeUrl = "https://cv-json.vercel.app/";

    return (
        <footer className="bg-dark text-white font-light content_padding-x py-8">
            <ul className="flex flex-col gap-3">
                <li>victor.aissa.laborde@gmail.com</li>
                <li>
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>linkedIn/Victor</span>
                        <img
                            src={arrowShort}
                            alt="Flèche droite"
                            className="w-5 inline-block -rotate-45"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>gitHub/victor</span>
                        <img
                            src={arrowShort}
                            alt="Flèche droite"
                            className="w-5 inline-block -rotate-45"
                        />
                    </a>
                </li>
                <li id="curriculum">
                    <span className="mr-8">Curriculum</span>
                    <a
                        href={resumeUrl}
                        target="_blank"
                        className=" mr-5"
                        rel="noopener noreferrer"
                    >
                        <span>html</span>
                        <img
                            src={arrowShort}
                            alt="Flèche droite"
                            className="w-5 inline-block -rotate-45"
                        />
                    </a>
                    <a
                        href={pdf}
                        target="_blank"
                        className=" mr-5"
                        rel="noopener noreferrer"
                    >
                        <span>pdf</span>
                        <img
                            src={arrowShort}
                            alt="Flèche droite"
                            className="w-5 inline-block -rotate-45"
                        />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
