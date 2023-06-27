import PropTypes from "prop-types";

function BurgerMenu({ toggle }) {
    return (
        <div
            className="h-auto fixed flex flex-col justify-center gap-1"
            onClick={toggle}
        >
            <div className="w-8 h-1 bg-dark rounded-[1px] mr-8"></div>
            <div className="w-8 h-1 bg-dark rounded-[1px] mr-8"></div>
            <div className="w-8 h-1 bg-dark rounded-[1px] mr-8"></div>
        </div>
    );
}

BurgerMenu.propTypes = {
    toggle: PropTypes.func.isRequired,
};

export default BurgerMenu;
