/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import arrowShort from "../../assets/icons/arrows/short_black.png";

function Error() {
    return (
        <section className="w-full h-full flex flex-col items-center gap-10 p-20 ">
            <h1 className="text-bright">404</h1>
            <span className="text-3xl text-center">
                Désolé, cette page n'existe pas 🤦‍♀️
            </span>
            <Link to="/" className="mt-5">
                <span className="text-lg mr-1">Homepage</span>
                <img
                    src={arrowShort}
                    alt="Flèche droite"
                    className="w-4 inline -rotate-45"
                />
            </Link>
        </section>
    );
}

export default Error;
