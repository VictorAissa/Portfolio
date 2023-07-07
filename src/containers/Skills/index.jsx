import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Icon from "../../components/Icon";
import data from "../../assets/data/data.json";

function Skills() {
    const icons = data.icons;
    const skills = useRef();
    const image = useRef();
    const title = useRef();
    const pinWrapper = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context((self) => {
            // Immobilisation du wrapper contenant le titre et les icônes au scroll
            gsap.timeline({
                scrollTrigger: {
                    trigger: skills.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: pinWrapper.current,
                },
            });

            // Apparition des icônes dans leur container au scroll
            const skillsIcons = self.selector(".skill-icon");
            skillsIcons.forEach((icon, index) => {
                const tl = gsap.timeline();
                tl.fromTo(
                    icon,
                    {
                        yPercent: (index + 1) * 100,
                        opacity: 0,
                    },
                    {
                        yPercent: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: skills.current,
                            start: `top ${-(index + 1) * 20}%`,
                            end: `top ${-(index + 1) * 25}%`,
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
            className="h-[400vh] flex flex-col content_padding-x pt-28 sm:pt-40 pb-56 sm:pb-80 relative "
            ref={skills}
        >
            <div
                className="absolute -z-10 top-0 left-0 w-full h-full bg-skills-background bg-cover bg-center bg-no-repeat bg-fixed"
                ref={image}
            ></div>
            <div ref={pinWrapper} className="">
                <h2 className="mb-[10vh]" ref={title}>
                    Skills /
                </h2>
                <div className="flex flex-wrap gap-8 2xl:gap-16 border-red border-opacity-100">
                    {/* Création des icônes depuis data */}
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
            </div>
        </section>
    );
}

export default Skills;
