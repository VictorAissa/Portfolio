import { useState } from "react";
import PropTypes from "prop-types";

function Experience({
    year,
    title,
    subtitle,
    description,
    icons,
    illustration,
    background,
    index,
}) {
    const [windowWidth] = useState(window.innerWidth);
    const desktopResolution = windowWidth > 640;
    const isEven = (number) => {
        return number % 2 === 0 ? true : false;
    };

    const itemStyle = (index) => {
        if (desktopResolution) {
            return {
                gridColumnStart: `${isEven(index) ? "1" : "2"}`,
                gridRowStart: index + 1,
                alignItems: `${isEven(index) ? "end" : "start"}`,
                background: `${background && "#ffffffd0"}`,
            };
        } else {
            return {
                gridAutoFlow: "column",
                background: `${background && "#ffffffd0"}`,
            };
        }
    };

    const alignmentStyle = (index) => {
        return !desktopResolution ? "start" : isEven(index) ? "end" : "start";
    };

    return (
        <article
            className="flex flex-col p-6 sm:p-8 opacity-100 experience-article"
            style={itemStyle(index)}
        >
            <span className="text-2xl mb-6 font-medium">{year}</span>
            <div
                className="text-xl mb-3"
                style={{ textAlign: alignmentStyle(index) }}
            >
                <span>
                    <span className="font-semibold">{title}</span>
                    <span> | </span>
                    <span>{subtitle}</span>
                </span>
            </div>
            <span style={{ textAlign: alignmentStyle(index) }}>
                {description}
            </span>
            {icons && (
                <div
                    className="flex flex-row flex-wrap gap-5 mt-5"
                    style={{ justifyContent: alignmentStyle(index) }}
                >
                    {icons.map((icon, index) => (
                        <img
                            src={icon}
                            alt=""
                            key={`icon-${index}`}
                            className="w-10"
                        />
                    ))}
                </div>
            )}
            {illustration && (
                <img
                    src={illustration}
                    alt=""
                    className="mt-5 w-full max-w-2xl"
                />
            )}
        </article>
    );
}

Experience.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    background: PropTypes.string,
    index: PropTypes.number.isRequired,
    icons: PropTypes.arrayOf(PropTypes.string),
    illustration: PropTypes.string,
};

export default Experience;
