import { useEffect, useState } from "react";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

function Contact() {
    const form = useRef();
    const reCaptcha = useRef();

    const [resMessage, setResMessage] = useState(null);
    const [isHuman, setIsHuman] = useState(false);

    // Récuperation des crédentials confidentiels nécessaires au fonctionnement de reCaptcha
    // dans le fichier .env
    const siteKey = import.meta.env.VITE_SITEKEY_RECAPTCHA;
    const serviceId = import.meta.env.VITE_SERVICEID_EMAILJS;
    const templateId = import.meta.env.VITE_TEMPLATEID_EMAILJS;
    const publicKey = import.meta.env.VITE_PUBLICKEY_EMAILJS;

    const onChange = () => {
        setIsHuman(true);
    };

    /**
     * Gestion de l'envoi du formulaire via EmailJS.
     * Paramètres de .sendForm :
     * emailjs.sendForm(serviceID, templateID, templateParams, publicKey)
     *
     * @param {Event} submit - soumission du formulaire
     */
    const sendEmail = (e) => {
        e.preventDefault();
        if (!isHuman) {
            setResMessage("On ne sait toujours pas si vous êtes humain !");
            return;
        }
        emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
            (result) => {
                if (result.text === "OK") {
                    setResMessage("C'est parti !");
                }
            },
            (error) => {
                console.log(error);
                setResMessage("Aïe, il y a eu un problème");
            }
        );
        form.current[0].value = "";
        form.current[1].value = "";
        form.current[2].value = "";
        reCaptcha.current.reset();
    };

    // Affichage des message d'erreur ou de succès déterminés dans sendEmail pendant 5s
    useEffect(() => {
        if (resMessage) {
            setTimeout(() => {
                setResMessage(null);
            }, 5000);
        }
    }, [resMessage]);

    return (
        <section
            id="contact"
            className="bg-intermediate content_padding-x py-28 sm:py-40"
        >
            <h2 className="mb-20 sm:mb-40">Contact /</h2>
            <form
                className="w-full sm:w-[60%] xl:w-[40%] flex flex-col gap-3 text-lg "
                ref={form}
                onSubmit={sendEmail}
            >
                <label htmlFor="nameField">Nom</label>
                <input
                    className="input"
                    type="text"
                    placeholder="John Doe"
                    required={true}
                    id="nameField"
                    name="user_name"
                />
                <label htmlFor="emailField">Email</label>
                <input
                    className="input"
                    type="email"
                    placeholder="johndoe@email.com"
                    required={true}
                    id="emailField"
                    name="user_email"
                />
                <label htmlFor="messageField">Message</label>
                <textarea
                    className="input h-48 sm:h-60"
                    placeholder="Salut Victor"
                    required={true}
                    id="messageField"
                    name="message"
                ></textarea>
                <ReCAPTCHA
                    sitekey={siteKey}
                    onChange={onChange}
                    ref={reCaptcha}
                    className="mb-8"
                />
                <button
                    className="self-start rounded-sm text-white bg-bright px-2 py-1 shadow-sm"
                    type="submit"
                >
                    Envoyer
                </button>
                {resMessage && (
                    <span className="self-center mt-6 ">{resMessage}</span>
                )}
            </form>
        </section>
    );
}

export default Contact;
