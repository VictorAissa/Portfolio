import PropTypes from "prop-types";

function DropMenu({ children, isOpen, toggle }) {
    return (
        <>
            {isOpen && (
                <div
                    className="w-full h-full fixed left-0 top-0 bg-overlay"
                    onClick={toggle}
                ></div>
            )}
            <ul
                className="fixed top-0 flex flex-col gap-5 p-7 z-30 bg-light"
                style={{
                    transform: isOpen ? "translateY(0)" : "translateY(-100%)",
                    transition: "transform 0.3s ease-in-out",
                }}
            >
                {children}
            </ul>
        </>
    );
}

DropMenu.propTypes = {
    children: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default DropMenu;
