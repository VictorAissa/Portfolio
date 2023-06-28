import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import DropMenu from "../../components/DropMenu";
import BurgerButton from "../../components/BurgerTButton";

function Header() {
    const location = useLocation();
    const [windowWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);
    const desktopResolution = windowWidth > 640;

    const toggleBurger = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1));
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }, [location]);

    return (
        <header
            className="w-full flex items-center justify-end px-[4%] h-12 sm:h-16 text-xl bg-light z-30"
            style={{
                position: !desktopResolution ? "fixed" : "static",
                top: "0",
                left: "0",
            }}
        >
            {desktopResolution ? (
                <nav className="flex w-full">
                    <ul className="flex w-full justify-end gap-[4%]">
                        <li>
                            <Link to="/#about">About/</Link>
                        </li>
                        <li>
                            <Link to="/#journey">Parcours/</Link>
                        </li>
                        <li>
                            <Link to="/#projects">Projets/</Link>
                        </li>
                        <li>
                            <Link to="/#skills">Skills/</Link>
                        </li>
                        <li>
                            <Link to="/#contact">Contact/</Link>
                        </li>
                        <li>
                            <Link to="/#curriculum">Curriculum/</Link>
                        </li>
                    </ul>
                </nav>
            ) : (
                <>
                    <DropMenu isOpen={isOpen} toggle={() => toggleBurger()}>
                        <li className="inside-nav_item">
                            <Link to="/#about" onClick={() => toggleBurger()}>
                                About/
                            </Link>
                        </li>
                        <li className="inside-nav_item">
                            <Link to="/#journey" onClick={() => toggleBurger()}>
                                Parcours/
                            </Link>
                        </li>
                        <li className="inside-nav_item">
                            <Link
                                to="/#projects"
                                onClick={() => toggleBurger()}
                            >
                                Projets/
                            </Link>
                        </li>
                        <li className="inside-nav_item">
                            <Link to="/#skills" onClick={() => toggleBurger()}>
                                Skills/
                            </Link>
                        </li>
                        <li className="inside-nav_item">
                            <Link to="/#contact" onClick={() => toggleBurger()}>
                                Contact/
                            </Link>
                        </li>
                        <li className="inside-nav_item">
                            <Link
                                to="/#curriculum"
                                onClick={() => toggleBurger()}
                            >
                                Curriculum/
                            </Link>
                        </li>
                    </DropMenu>
                    <BurgerButton toggle={() => toggleBurger()} />
                </>
            )}
        </header>
    );
}

export default Header;
