import PropTypes from "prop-types";

function DropMenu({ children, isOpen, toggle }) {
    return (
        <div>
            {/* Gestion de l'overlay : apparent et cliquable si isOpen === true */}
            <div
                className="w-full h-full fixed left-0 top-0 bg-overlay"
                style={{
                    opacity: isOpen ? "1" : "0",
                    pointerEvents: isOpen ? "auto" : "none",
                    transition: "opacity 0.5s ease",
                }}
                onClick={toggle}
            ></div>

            {/* Gestion du menu retractable : caché si isOpen === false */}
            <ul
                className="fixed top-0 right-0 flex flex-col gap-5 p-7 z-30 bg-light"
                style={{
                    transform: isOpen ? "translateY(0)" : "translateY(-100%)",
                    transition: "transform 0.5s ease",
                }}
            >
                {children}
            </ul>
        </div>
    );
}

DropMenu.propTypes = {
    children: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default DropMenu;
