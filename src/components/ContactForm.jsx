import React from 'react'

function ContactForm() {
    return (
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
    )
}

export default ContactForm;