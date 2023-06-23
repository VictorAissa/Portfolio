import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Project({ year, title, cover, icons, index }) {
    const [windowWidth] = useState(window.innerWidth);
    const desktopResolution = windowWidth > 640;
    const articleWidth = desktopResolution ? 35 : 80;
    const figureHeight = articleWidth * 0.6;

    return (
        <article
            className=" justify-self-center max-w-[490px]"
            style={{
                width: articleWidth + "vw",
            }}
        >
            <Link to={`/project/${index}`}>
                <figure
                    className="relative max-h-[294px] rounded-sm overflow-hidden"
                    style={{
                        background: `url('${cover}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: figureHeight + "vw",
                    }}
                >
                    <div className="w-full h-full absolute top-0 left-0 z-10 gradient"></div>
                    <figcaption className="absolute left-[5%] bottom-[7%] z-20 text-white leading-none">
                        <span
                            style={{
                                fontSize: "clamp(1rem, 1.5vw, 1.7rem)",
                            }}
                        >
                            {year}
                        </span>
                        <br />
                        <span
                            style={{
                                fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
                            }}
                        >
                            {title}
                        </span>
                    </figcaption>
                </figure>
            </Link>
            <div className="flex flex-row flex-wrap gap-5 mt-5">
                {icons.map((icon, index) => (
                    <img
                        src={icon}
                        alt=""
                        key={`icon-${index}`}
                        className="w-8 sm:w-10"
                    />
                ))}
            </div>
        </article>
    );
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    icons: PropTypes.arrayOf(PropTypes.string).isRequired,
    cover: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

export default Project;
