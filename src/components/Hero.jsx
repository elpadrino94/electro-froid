import React from 'react'
import heroImage from '../assets/images/hero.jpg'
import Services from './Services'
import About from './About'
import Realisation from './Realisation'
import Contact from './Contact'



const Hero = () => {
    return (
        <main>


            <section
                id="accueil"
                className="hero-section"
            >

                <div className="container-fluid hero-container">

                    <div className="row g-0 align-items-stretch">


                        {/* Texte hero */}
                        <div className="col-lg-5 hero-content">

                            <div className="hero-content-inner">

                                <h1>
                                    Votre confort,
                                    <br />

                                    <span>
                                        Notre expertise.
                                    </span>
                                </h1>


                                <p>
                                    Nous réalisons tous vos travaux
                                    d’électricité et d'installation
                                    de systèmes de froid avec
                                    professionnalisme et sécurité.
                                </p>


                                {/* Boutons */}
                                <div className="hero-buttons">

                                    <a
                                        href="#services"
                                        className="btn primary-button"
                                    >
                                        <i className="bi bi-lightning-charge-fill"></i>
                                        Nos Services
                                    </a>


                                    <a
                                        href="#contact"
                                        className="btn secondary-button"
                                    >
                                        Nous Contacter
                                        <i className="bi bi-arrow-right-circle"></i>
                                    </a>

                                </div>


                                {/* Avantages */}
                                <div className="hero-features">

                                    <div className="hero-feature">

                                        <i className="bi bi-shield-check"></i>

                                        <div>
                                            <strong>
                                                Travail Sécurisé
                                            </strong>

                                            <small>
                                                Sécurité garantie
                                            </small>
                                        </div>

                                    </div>


                                    <div className="hero-feature">

                                        <i className="bi bi-award"></i>

                                        <div>
                                            <strong>
                                                Professionnels Qualifiés
                                            </strong>

                                            <small>
                                                Équipe expérimentée
                                            </small>
                                        </div>

                                    </div>


                                    <div className="hero-feature">

                                        <i className="bi bi-clock"></i>

                                        <div>
                                            <strong>
                                                Intervention Rapide
                                            </strong>

                                            <small>
                                                Disponible 7j/7
                                            </small>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Image hero */}
                        <div className="col-lg-7 hero-image">

                            <img
                                src={heroImage}
                                alt="Technicien en électricité et climatisation"
                            />

                        </div>

                    </div>

                </div>

            </section>
            <Services />
            <About />
            <Realisation />
            <Contact />
        </main>
    )
}

export default Hero
