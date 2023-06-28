import PropTypes from "prop-types";

function BurgerMenu({ toggle }) {
    return (
        <div
            className="h-auto w-8 flex flex-col justify-center gap-1"
            onClick={toggle}
        >
            <div className="w-8 h-1 bg-dark rounded-[1px]"></div>
            <div className="w-8 h-1 bg-dark rounded-[1px]"></div>
            <div className="w-8 h-1 bg-dark rounded-[1px]"></div>
        </div>
    );
}

BurgerMenu.propTypes = {
    toggle: PropTypes.func.isRequired,
};

export default BurgerMenu;
