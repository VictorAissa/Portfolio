import PropTypes from "prop-types";

function Icon({ icon, description }) {
    return (
        <figure className="flex flex-col items-center">
            <img src={icon} alt="" className="w-10 lg:w-12 2xl:w-16" />
            <span className="capitalize font-semibold mt-1">{description}</span>
        </figure>
    );
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
export default Icon;
