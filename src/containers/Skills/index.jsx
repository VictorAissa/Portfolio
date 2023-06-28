import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Icon from "../../components/Icon";
import data from "../../assets/data/data.json";

function Skills() {
    const icons = data.icons;
    const skills = useRef();
    const image = useRef();
    const title = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context((self) => {
            gsap.to(title.current, {
                scrollTrigger: {
                    trigger: skills.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: title.current,
                },
            });
            const skillsIcons = self.selector(".skill-icon");
            skillsIcons.forEach((icon, index) => {
                // gsap.from(icon, {
                //     yPercent: 200,
                //     opacity: 0,
                //     scrollTrigger: {
                //         trigger: skills.current,
                //         markers: true,
                //         start: "top top",
                //         end: "bottom bottom",
                //         scrub: true,
                //     },
                // });
                const tl = gsap.timeline();
                tl.fromTo(
                    icon,
                    {
                        // yPercent: 100,
                        yPercent: index * 200,
                        opacity: 0,
                    },
                    {
                        yPercent: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: skills.current,
                            // start: `top ${(index + 1) * 5}%`,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: true,
                        },
                    }
                );
            });
        }, skills);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="skills"
            className="h-[150vh] flex flex-col content_padding-x pt-28 sm:pt-40 pb-56 sm:pb-80 relative "
            ref={skills}
        >
            <div
                className="absolute -z-10 top-0 left-0 w-full h-full bg-skills-background bg-cover bg-center bg-no-repeat bg-fixed"
                ref={image}
            ></div>
            <h2 className="mb-[10vh]" ref={title}>
                Skills /
            </h2>
            <div className="absolute bottom-[10%] sm:bottom-[20%] flex flex-wrap gap-8 2xl:gap-16 ">
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
