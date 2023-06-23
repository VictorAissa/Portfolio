import Icon from "../../components/Icon";
import data from "../../assets/data/data.json";

function Skills() {
    const icons = data.icons;
    return (
        <section
            id="skills"
            className="flex flex-col bg-skills-background bg-cover bg-center content_padding-x pt-28 sm:pt-40 pb-56 sm:pb-80"
        >
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
