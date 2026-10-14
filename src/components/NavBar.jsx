import React from 'react'



export default function NavBar() {
    return (
        // < !-- ==========NAVBAR =========== -->
        <header className="site-header">

            <nav className="navbar navbar-expand-lg bg-white">

                <div className="container">

                    {/* <!-- Logo --> */}
                    <a
                        href="#accueil"
                        className="navbar-brand brand-logo"
                    >

                        <div className="brand-icon">
                            <i className="bi bi-snow"></i>
                            <span className="brand-lightning">⚡</span>
                        </div>

                        <div className="brand-text">
                            <strong>ELECTRO & FROID</strong>
                            <span>SOLUTION</span>
                        </div>

                    </a>


                    {/* <!-- Bouton hamburger mobile --> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Ouvrir le menu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    {/* <!-- Menu --> */}
                    <div
                        className="collapse navbar-collapse"
                        id="mainNavbar"
                    >

                        <ul className="navbar-nav mx-auto main-menu">

                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#accueil"
                                >
                                    Accueil
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#services"
                                >
                                    Services
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#about"
                                >
                                    À Propos
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#realisations"
                                >
                                    Nos Réalisations
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#contact"
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>


                        {/* <!-- Bouton devis --> */}
                        <a
                            href="#contact"
                            className="btn quote-button"
                        >
                            Demander un devis
                        </a>

                    </div>

                </div>

            </nav>

        </header>
    )
}