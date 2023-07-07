import { useState } from "react";
import PropTypes from "prop-types";

function ExperienceItem({
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

    /**
     * Détermine si un nombre est pair, utile pour déterminer la place des items à gauche
     * ou à droite de la ligne.
     *
     * @param {Number}
     * @returns {Boolean} true si le nombre est pair / false s'il est impair
     */
    const isEven = (number) => {
        return number % 2 === 0 ? true : false;
    };

    /**
     * Gère le layout des éléments en fonction de la résolution : à gauche ou à droite de la ligne
     * sur desktop, à droite sur mobile.
     *
     * @param {Number} index - Index de l'élément créé par mapping.
     * @returns {Object} - Contenant les éléments de style gérant la disposition sur grid.
     */
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

    /**
     * Gère l'alignement à gauche ou à droite des éléments de ExperienceItem en fonction
     * du placement de ce dernier.
     *
     * @param {Number} index - Index de l'élément créé par mapping.
     * @returns {String} - Valeur de textAlign contenue dans chaque élément de ExperienceItem.
     */
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
                            alt={`icone de competence acquise n° ${index}`}
                            key={`icon-${index}`}
                            className="w-10"
                        />
                    ))}
                </div>
            )}
            {illustration && (
                <img
                    src={illustration}
                    alt="Illustration de l'experience"
                    className="mt-5 w-full max-w-2xl"
                />
            )}
        </article>
    );
}

ExperienceItem.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    background: PropTypes.string,
    index: PropTypes.number.isRequired,
    icons: PropTypes.arrayOf(PropTypes.string),
    illustration: PropTypes.string,
};

export default ExperienceItem;
