/* eslint-disable react/no-unescaped-entities */
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function About() {
    const aboutSection = useRef();
    const aboutContainer = useRef();
    const aboutDescription = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to([aboutContainer.current], {
                yPercent: -150,
                ease: "none",
                scrollTrigger: {
                    trigger: aboutContainer.current,
                    scrub: 0.4,
                },
            });

            const spans = aboutDescription.current.querySelectorAll("span");
            spans.forEach((span, index) => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: aboutDescription.current,
                        start: "top 95%",
                    },
                });
                tl.fromTo(
                    span,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        ease: "none",
                        duration: 0.07,
                        delay: index * 0.06,
                    }
                );
            });
        }, aboutSection);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            className="h-[130vh] flex flex-column justify-start items-center bg-hero-background bg-cover brightness-90 content_padding-x"
            ref={aboutSection}
        >
            <div
                className="text-lg sm:text-xl text-white w-full sm:w-[70%] sm:min-w-[600px] translate-y-[50%]"
                ref={aboutContainer}
            >
                <h2 className="mb-8">About /</h2>
                <p ref={aboutDescription}>
                    {/* <span className="block">
                        Développeur front-end junior passionné par le code et
                        les technologies du web.
                    </span>
                    <span className="block">
                        Après quelques projets dont cette page présente un
                        échantillon je suis en mesure de créer un site simple et
                        responsive côté front en utilisant essentiellement
                        ReactJS.
                    </span>
                    <span className="block">
                        J'aspire à continuer ma formation en particulier en
                        abordant les technologies back-end et ainsi couvrir tous
                        les aspects d'une application web ou mobile.
                    </span> */}
                    <span>Développeur </span>
                    <span>front-end </span>
                    <span>junior </span>
                    <span>passionné </span>
                    <span>par </span>
                    <span>le </span>
                    <span>code </span>
                    <span>et </span>
                    <span>les </span>
                    <span>technologies </span>
                    <span>du </span>
                    <span>web.</span>
                    <span> </span>
                    <br />
                    <span>Après </span>
                    <span>quelques </span>
                    <span>projets </span>
                    <span>dont </span>
                    <span>cette </span>
                    <span>page </span>
                    <span>présente </span>
                    <span>un </span>
                    <span>échantillon </span>
                    <span>je </span>
                    <span>suis </span>
                    <span>en </span>
                    <span>mesure </span>
                    <span>de </span>
                    <span>créer </span>
                    <span>un </span>
                    <span>site </span>
                    <span>simple </span>
                    <span>et </span>
                    <span>responsive </span>
                    <span>côté </span>
                    <span>front </span>
                    <span>en </span>
                    <span>utilisant </span>
                    <span>essentiellement </span>
                    <span>ReactJS.</span>
                    <span> </span>
                    <br />
                    <span>J'aspire </span>
                    <span>à </span>
                    <span>continuer </span>
                    <span>ma </span>
                    <span>formation </span>
                    <span>en </span>
                    <span>abordant </span>
                    <span>en </span>
                    <span>particulier </span>
                    <span>les </span>
                    <span>technologies </span>
                    <span>back-end </span>
                    <span>et </span>
                    <span>ainsi </span>
                    <span>couvrir </span>
                    <span>tous </span>
                    <span>les </span>
                    <span>aspects </span>
                    <span>d'une </span>
                    <span>application </span>
                    <span>web </span>
                    <span>ou </span>
                    <span>mobile.</span>
                </p>
            </div>
        </section>
    );
}

export default About;
