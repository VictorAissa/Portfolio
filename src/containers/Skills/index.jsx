import Icon from "../../components/Icon";
import data from "../../assets/data/data.json";

function Skills() {
    const icons = data.icons;
    return (
        <section className="flex flex-col bg-intermediate content_padding-x pt-40 pb-60">
            {/* <div className="w-full h-full absolute top-0 left-0 bg-cover_lightning"></div> */}
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
