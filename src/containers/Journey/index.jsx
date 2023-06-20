import Experience from "../../components/Experience";
import data from "../../assets/data/data.json";

function Journey() {
    const paddingY = "10rem";
    const lineOffset = "15rem";
    const journeyItems = data.parcours;

    return (
        <section
            id="journey"
            className={`grid grid-cols-2 gap-x-[10%] gap-y-96 content_padding-x relative bg-journey-background bg-cover`}
            style={{
                paddingTop: paddingY,
                paddingBottom: paddingY,
                gridTemplateRows: `repeat(calc(${journeyItems.length} + 1), auto)`,
            }}
        >
            <div
                className={`w-[3px] bg-white_transparent absolute left-[50%] -translate-x-[50%]`}
                style={{
                    height: `calc(100% - 2 * ${paddingY} - ${lineOffset})`,
                    top: `calc(${paddingY} + ${lineOffset})`,
                }}
            ></div>
            <h2 className="col-start-1 row-start-1 col-span-2">Parcours /</h2>
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
        </section>
    );
}

export default Journey;
