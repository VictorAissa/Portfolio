import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

function Hero() {
    const hero = useRef();
    const textLine1 = useRef();
    const textLine2 = useRef();
    const textLine3 = useRef();
    const textLine4 = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                [
                    textLine1.current,
                    textLine2.current,
                    textLine3.current,
                    textLine4.current,
                ],
                {
                    y: 100,
                    skewY: 7,
                },
                {
                    y: 0,
                    ease: "power4.out",
                    skewY: 0,
                    duration: 1.8,
                    delay: 1,
                    stagger: {
                        amount: 0.8,
                    },
                }
            );
        }, hero);
        return () => ctx.revert();
    }, [hero]);

    return (
        <section
            id="hero"
            className="flex flex-col py-16 content_padding-x gap-y-10"
            ref={hero}
        >
            <div className="h-[150px] sm:h-[240px] ">
                <h1>
                    <span className="block w-full h-14 sm:h-[5.5rem] relative overflow-hidden text-lines">
                        <span className="absolute" ref={textLine1}>
                            Victor
                        </span>
                    </span>
                    <span className="block w-full h-14 sm:h-[5.4rem] relative overflow-hidden text-lines">
                        <span className="absolute" ref={textLine2}>
                            Laborde
                        </span>
                    </span>
                </h1>
                <span className="block relative h-7 overflow-hidden">
                    <span
                        className="text-lg sm:text-xl absolute text-lines"
                        ref={textLine3}
                    >
                        Développeur web front-end
                    </span>
                </span>
            </div>
            <span className="flex w-full h-9 sm:h-14 justify-end px-[10%] relative overflow-hidden">
                <span
                    className="absolute text-4xl sm:text-6xl text-lines"
                    ref={textLine4}
                >
                    Portfolio
                </span>
            </span>
        </section>
    );
}

export default Hero;
