import React from 'react';


const Contact = () => {
    return (
        <section
            id="contact"
            className="contact-section"
        >

            <div className="container">

                <div className="row g-5">


                    {/* <!-- Informations de contact --> */}
                    <div className="col-lg-4">

                        <div className="contact-info">

                            <span className="section-label">
                                CONTACT
                            </span>

                            <h2>
                                Contactez-nous
                            </h2>

                            <span className="heading-line"></span>


                            {/* <!-- WhatsApp --> */}
                            <a
                                href="#"
                                className="contact-item"
                            >

                                <div className="contact-icon whatsapp-icon">
                                    <i className="bi bi-whatsapp"></i>
                                </div>

                                <div>
                                    <strong>WhatsApp</strong>
                                    <span>
                                        +228 90 00 00 00
                                    </span>
                                </div>

                            </a>


                            {/* <!-- Email --> */}
                            <a
                                href="mailto:contact@electrofroid.tg"
                                className="contact-item"
                            >

                                <div className="contact-icon email-icon">
                                    <i className="bi bi-envelope-fill"></i>
                                </div>

                                <div>
                                    <strong>Email</strong>
                                    <span>
                                        contact@electrofroid.tg
                                    </span>
                                </div>

                            </a>


                            {/* <!-- Facebook --> */}
                            <a
                                href="#"
                                className="contact-item"
                            >

                                <div className="contact-icon facebook-icon">
                                    <i className="bi bi-facebook"></i>
                                </div>

                                <div>
                                    <strong>Facebook</strong>
                                    <span>
                                        Elec & Froid Services
                                    </span>
                                </div>

                            </a>

                        </div>

                    </div>



                    {/* <!-- Formulaire --> */}
                    <div className="col-lg-8">

                        <form
                            action="#"
                            method="POST"
                            className="contact-form"
                        >

                            <div className="row g-3">


                                {/* <!-- Nom --> */}
                                <div className="col-md-6">

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Votre nom"
                                        name="name"
                                        required
                                    />

                                </div>


                                {/* <!-- Email --> */}
                                <div className="col-md-6">

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Votre email"
                                        name="email"
                                        required
                                    />

                                </div>


                                {/* <!-- Téléphone --> */}
                                <div className="col-md-6">

                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Votre téléphone"
                                        name="phone"
                                    />

                                </div>


                                {/* <!-- Sujet --> */}
                                <div className="col-md-6">

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Sujet"
                                        name="subject"
                                    />

                                </div>


                                {/* <!-- Message --> */}
                                <div className="col-12">

                                    <textarea
                                        className="form-control message-input"
                                        rows="5"
                                        placeholder="Votre message"
                                        name="message"
                                        required
                                    ></textarea>

                                </div>


                                {/* <!-- Bouton --> */}
                                <div className="col-12">

                                    <button
                                        type="submit"
                                        className="btn primary-button submit-button"
                                    >
                                        <i className="bi bi-send-fill"></i>
                                        Envoyer le message
                                    </button>

                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact;
