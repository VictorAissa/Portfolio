import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
    const location = useLocation();
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
        <header className="flex items-center px-[4%] h-16 text-xl">
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
                    <button>Curriculum</button>
                </li>
            </ul>
        </header>
    );
}

export default Header;
