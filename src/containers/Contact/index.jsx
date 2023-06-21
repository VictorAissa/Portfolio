import { useState } from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import cover from "../../assets/backgrounds/contact_bg.avif";

function Contact() {
    const form = useRef();
    const [resMessage, setResMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_ijcr42k",
                "template_azyjj3v",
                form.current,
                "qiAyQSWc4yRGXZUzJ"
            )
            .then(
                (result) => {
                    setResMessage(result.text);
                },
                (error) => {
                    setResMessage(error.text);
                }
            );
        form.current[0].value = "";
        form.current[1].value = "";
        form.current[2].value = "";
    };

    return (
        <section>
            <img src={cover} alt="Bout de montagne dans le mauvais temps" />
            <form className="" ref={form} onSubmit={sendEmail}>
                <label htmlFor="nameField">Nom</label>
                <input
                    type="text"
                    placeholder="John Doe"
                    id="nameField"
                    name="user_name"
                />
                <label htmlFor="emailField">Email</label>
                <input
                    type="text"
                    placeholder="johndoe@jusloco.fr"
                    id="emailField"
                    name="user_email"
                />
                <label htmlFor="messageField">Message</label>
                <textarea
                    placeholder="Salut Victor, tu vas bien ?"
                    id="messageField"
                    name="message"
                ></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </section>
    );
}

export default Contact;
