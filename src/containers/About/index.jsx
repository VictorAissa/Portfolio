import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function About() {
    const about = useRef();
    const container = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to([container.current], {
                yPercent: -200,
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    scrub: 0.7,
                },
            });
        }, about);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            className="h-[120vh] sm:h-[150vh] flex flex-column justify-start items-center bg-hero-background bg-cover brightness-90 content_padding-x"
            ref={about}
        >
            <div
                className="text-lg sm:text-xl text-white w-full sm:w-[50%] sm:min-w-[430px] translate-y-[50%]"
                ref={container}
            >
                <h2 className="mb-8">About /</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero modi necessitatibus similique excepturi possimus
                    velit nulla doloribus eaque voluptas? Atque sit suscipit
                    fugiat expedita voluptate debitis, ducimus repudiandae eaque
                    facere.
                </p>
            </div>
        </section>
    );
}

export default About;
