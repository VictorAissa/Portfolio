function Hero() {
    return (
        <section
            id="hero"
            className="grid grid-cols-2 py-16 content_padding-x gap-y-10"
        >
            <div className="col-start-1 row-start-1">
                <h1>
                    Victor
                    <br />
                    Laborde
                </h1>
                <span className="text-xl">Développeur web front-end</span>
            </div>
            <span className="flex col-start-2 row-start-2 justify-end px-[20%] text-6xl">
                Portfolio
            </span>
        </section>
    );
}

export default Hero;
