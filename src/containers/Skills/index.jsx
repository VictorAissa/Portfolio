import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Icon from "../../components/Icon";
import data from "../../assets/data/data.json";
import background from "../../assets/backgrounds/skills_bg.jpg";

function Skills() {
    const [windowWidth] = useState(window.innerWidth);
    const desktopResolution = windowWidth > 640;
    const icons = data.icons;
    const skills = useRef();
    const image = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: skills.current,
                    scrub: true,
                    markers: true,
                },
            }).to(image.current, {
                yPercent: desktopResolution ? 70 : 100,
                ease: "none",
            });
        }, skills);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="skills"
            className="flex flex-col content_padding-x pt-28 sm:pt-40 pb-56 sm:pb-80 relative overflow-hidden"
            ref={skills}
        >
            <img
                src={background}
                alt=""
                className="sm:w-full h-[200vh] absolute left-0 bottom-0 -z-10"
                ref={image}
            />
            <h2 className="mb-[10vh]">Skills /</h2>
            <div className="flex flex-wrap gap-8 2xl:gap-16 ">
                {icons.map((icon, index) => (
                    <Icon
                        key={`icon-${index}`}
                        icon={icon}
                        description={icon.substring(
                            icon.lastIndexOf("/") + 1,
                            icon.lastIndexOf(".")
                        )}
                    />
                ))}
            </div>
        </section>
    );
}

export default Skills;
