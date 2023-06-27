import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Experience from "../../components/Experience";
import data from "../../assets/data/data.json";

function Journey() {
    const [windowWidth] = useState(window.innerWidth);
    const desktopResolution = windowWidth > 640;

    const journeyItems = data.journey;
    const journey = useRef();
    const line = useRef();
    const title = useRef();

    // Dimensions des hauteurs de padding, de point de départ de la ligne et de la ligne en pixels
    const paddingY = desktopResolution ? 160 : 112;
    const lineOffset = desktopResolution ? 240 : 160;

    const [lineHeight, setLineHeight] = useState(0);
    const [sectionHeight, setSectionHeight] = useState(0);

    useEffect(() => {
        const newSectionHeight = journey.current.getBoundingClientRect().height;
        const newLineHeight = sectionHeight - (lineOffset + 2 * paddingY);
        setSectionHeight(newSectionHeight);
        setLineHeight(newLineHeight);
    }, [lineHeight, lineOffset, paddingY, sectionHeight]);

    useLayoutEffect(() => {
        let ctx = gsap.context((self) => {
            gsap.to(line.current, {
                height: lineHeight,
                ease: "none",
                scrollTrigger: {
                    trigger: line.current,
                    scrub: 0.8,
                    start: "top 50%",
                    end: `${lineHeight} bottom`,
                },
            });
            const articles = self.selector(".experience-article");
            articles.forEach((article) => {
                gsap.from(article, {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: article,
                        scrub: true,
                        start: "50% bottom",
                        end: "bottom 60%",
                    },
                });
            });
        }, journey);

        return () => {
            ctx.revert();
        };
    }, [lineHeight, lineOffset, paddingY, sectionHeight]);

    return (
        <section
            id="journey"
            className="content_padding-x relative bg-journey-background bg-cover bg-center"
            style={{
                paddingTop: paddingY,
                paddingBottom: paddingY,
            }}
            ref={journey}
        >
            {/* <div ref={contentWrapper}> */}
            <h2 className="mb-52 sm:mb-80" ref={title}>
                Parcours /
            </h2>
            <div
                className={`w-[3px] bg-white_transparent absolute left-[3%] sm:left-[50%] sm:-translate-x-[50%]`}
                style={{
                    // height: `calc(100% - 2 * ${paddingY} - ${lineOffset})`,
                    top: `calc(${paddingY}px + ${lineOffset}px)`,
                }}
                ref={line}
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
            {/* </div> */}
        </section>
    );
}

export default Journey;
