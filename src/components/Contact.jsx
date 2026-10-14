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
                                        +228 90 47 61 85
                                    </span>
                                </div>

                            </a>


                            {/* <!-- Email --> */}
                            <a
                                href="mailto:shiliotoka@outlook.fr"
                                className="contact-item"
                            >

                                <div className="contact-icon email-icon">
                                    <i className="bi bi-envelope-fill"></i>
                                </div>

                                <div>
                                    <strong>Email</strong>
                                    <span>
                                        shiliotoka@outlook.fr
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
                                        Electro & Froid Solution
                                    </span>
                                </div>

                            </a>

                        </div>

                    </div>



                    {/* <!-- Formulaire --> */}


                </div>

            </div>

        </section>
    )
}

export default Contact;
