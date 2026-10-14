import React from 'react';



const Footer = () => {
    return (
        <footer className="site-footer">

            <div className="container">

                <div className="row align-items-center">


                    {/* <!-- Logo footer --> */}
                    <div className="col-lg-4">

                        <a
                            href="#"
                            className="footer-brand"
                        >

                            <div className="footer-brand-icon">
                                ⚡
                            </div>

                            <div>
                                <strong>
                                    ELECTRO & FROID
                                </strong>

                                <span>
                                    SOLUTION
                                </span>
                            </div>

                        </a>

                    </div>


                    {/* <!-- Copyright --> */}
                    <div className="col-lg-4 text-center">

                        <p className="copyright">
                            © 2026 ELECTRO & FROID SOLUTION .
                            Tous droits réservés.
                        </p>

                    </div>


                    {/* <!-- Réseaux sociaux --> */}
                    <div className="col-lg-4">

                        <div className="footer-socials">

                            <a
                                href="#"
                                aria-label="WhatsApp"
                                className="footer-social whatsapp"
                            >
                                <i className="bi bi-whatsapp"></i>
                            </a>

                            <a
                                href="mailto:shiliotoka@outlook.fr"
                                aria-label="Email"
                                className="footer-social email"
                            >
                                <i className="bi bi-envelope-fill"></i>
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="footer-social facebook"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </footer>

    )
}

export default Footer;
