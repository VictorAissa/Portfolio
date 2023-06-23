function About() {
    return (
        <section
            id="about"
            className="h-[100vh] sm:h-[150vh] flex flex-column justify-start items-center bg-hero-background bg-cover brightness-90 bg-cover content_padding-x"
        >
            <div className="text-lg sm:text-xl text-white w-full sm:w-[50%] sm:min-w-[430px] sm:translate-y-[50%]">
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
