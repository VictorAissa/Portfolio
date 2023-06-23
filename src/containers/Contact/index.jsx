import { useEffect, useState } from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";

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
    };

    useEffect(() => {
        if (resMessage) {
            setTimeout(() => {
                setResMessage(null);
            }, 5000);
        }
    });

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
                    id="nameField"
                    name="user_name"
                />
                <label htmlFor="emailField">Email</label>
                <input
                    className="input"
                    type="text"
                    placeholder="johndoe@email.com"
                    id="emailField"
                    name="user_email"
                />
                <label htmlFor="messageField">Message</label>
                <textarea
                    className="input h-48 sm:h-60"
                    placeholder="Salut Victor, tu vas bien ?"
                    id="messageField"
                    name="message"
                ></textarea>
                <button
                    className="self-start rounded-sm text-white bg-bright px-2 py-1 "
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
