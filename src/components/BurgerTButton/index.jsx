import PropTypes from "prop-types";

function BurgerMenu({ toggle }) {
    return (
        <div
            className="h-auto fixed flex flex-col justify-center gap-1"
            onClick={toggle}
        >
            <div className="w-10 h-2 bg-dark rounded-sm mr-8"></div>
            <div className="w-10 h-2 bg-dark rounded-sm mr-8"></div>
            <div className="w-10 h-2 bg-dark rounded-sm mr-8"></div>
        </div>
    );
}

BurgerMenu.propTypes = {
    toggle: PropTypes.func.isRequired,
};

export default BurgerMenu;
