import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DropMenu from "../../components/DropMenu";
import BurgerButton from "../../components/BurgerTButton";
import arrowBlack from "../../assets/icons/arrows/short_black.png";

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const [windowWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

    const desktopResolution = windowWidth > 640;
    const projectPage = location.pathname.includes("project") ? true : false;

    // useEffect(() => {
    //     const handleScrollToTop = () => {
    //         window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    //     };

    //     window.addEventListener("popstate", handleScrollToTop);

    //     return () => {
    //         window.removeEventListener("popstate", handleScrollToTop);
    //     };
    // }, []);

    // useEffect(() => {
    //     if (location.hash) {
    //         let elem = document.getElementById(location.hash.slice(1));
    //         if (elem) {
    //             elem.scrollIntoView({ behavior: "smooth" });
    //         }
    //     } else {
    //         window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    //     }
    // }, [location]);

    // Navigation vers l'element possedant l'id ou le haut de la page si pas de # dans l'url
    useEffect(() => {
        const handleScrollToTop = () => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        };

        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1));
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            handleScrollToTop();
        }
    }, [location]);

    // Retour à la page précédente géré sans Link pour permettre d'atteindre l'element visé via son id
    const handleGoBack = () => {
        navigate(-1);
    };

    const toggleBurger = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <header
            className="w-full h-12 flex items-center justify-end px-[3%] sm:py-8 md:text-xl bg-light z-30"
            style={{
                position: !desktopResolution ? "fixed" : "static",
                top: "0",
                left: "0",
            }}
        >
            {desktopResolution ? (
                <nav className="w-full flex justify-between">
                    {projectPage && (
                        <div onClick={handleGoBack}>
                            <img
                                src={arrowBlack}
                                alt="Flèche retour"
                                className="w-5 md:w-7 inline-block rotate-180"
                            />
                        </div>
                    )}
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
