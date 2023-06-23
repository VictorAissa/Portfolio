import { useState } from "react";
import Experience from "../../components/Experience";
import data from "../../assets/data/data.json";

function Journey() {
    const [windowWidth] = useState(window.innerWidth);
    const desktopResolution = windowWidth > 640;
    const paddingY = desktopResolution ? "10rem" : "7rem";
    const lineOffset = desktopResolution ? "15rem" : "10rem";
    const journeyItems = data.journey;

    return (
        <section
            id="journey"
            className="content_padding-x relative bg-journey-background bg-cover bg-center"
            style={{
                paddingTop: paddingY,
                paddingBottom: paddingY,
            }}
        >
            <h2 className="mb-52 sm:mb-80">Parcours /</h2>
            <div
                className={`w-[3px] bg-white_transparent absolute left-[3%] sm:left-[50%] sm:-translate-x-[50%]`}
                style={{
                    height: `calc(100% - 2 * ${paddingY} - ${lineOffset})`,
                    top: `calc(${paddingY} + ${lineOffset})`,
                }}
            ></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[10%] gap-y-96">
                {journeyItems.map((item, index) => (
                    <Experience
                        key={`experience-${index}`}
                        year={item.year}
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                        icons={item.icons}
                        illustration={item.illustration}
                        background={item.background}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}

export default Journey;
