import Experience from "../../components/Experience";
import data from "../../assets/data/data.json";

function Journey() {
    const paddingY = "10rem";
    const lineOffset = "15rem";
    const journeyItems = data.journey;

    return (
        <section
            id="journey"
            className="content_padding-x relative bg-journey-background bg-cover"
            style={{
                paddingTop: paddingY,
                paddingBottom: paddingY,
            }}
        >
            <h2 className="mb-80">Parcours /</h2>
            <div
                className={`w-[3px] bg-white_transparent absolute left-[50%] -translate-x-[50%]`}
                style={{
                    height: `calc(100% - 2 * ${paddingY} - ${lineOffset})`,
                    top: `calc(${paddingY} + ${lineOffset})`,
                }}
            ></div>

            <div className="grid grid-cols-2 gap-x-[10%] gap-y-96">
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
