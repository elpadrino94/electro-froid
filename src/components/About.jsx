import React from 'react'
import aboutImage1 from '../assets/images/about1.jpg'


const About = () => {
    return (
        <section
            id="about"
            className="about-section"
        >

            <div className="container">

                <div className="row align-items-center g-5">


                    {/* <!-- Texte --> */}
                    <div className="col-lg-6">

                        <div className="about-content">

                            <span className="section-label">
                                À PROPOS
                            </span>

                            <h2>
                                À Propos de Nous
                            </h2>

                            <span className="heading-line"></span>


                            <p>
                                ELEC & FROID SERVICES est une
                                entreprise spécialisée dans les
                                travaux d'électricité et les systèmes
                                de froid et de climatisation.
                            </p>

                            <p>
                                Nous mettons notre savoir-faire au
                                service des particuliers,
                                professionnels et entreprises pour
                                garantir des solutions fiables,
                                économiques et durables.
                            </p>


                            {/* <!-- Statistiques --> */}
                            <div className="company-stats">


                                <div className="company-stat">

                                    <i className="bi bi-people"></i>

                                    <div>
                                        <strong>5+</strong>
                                        <span>
                                            Années d'expérience
                                        </span>
                                    </div>

                                </div>


                                <div className="company-stat">

                                    <i className="bi bi-check-circle"></i>

                                    <div>
                                        <strong>200+</strong>
                                        <span>
                                            Projets réalisés
                                        </span>
                                    </div>

                                </div>


                                <div className="company-stat">

                                    <i className="bi bi-people"></i>

                                    <div>
                                        <strong>Clients</strong>
                                        <span>
                                            Notre priorité
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* <!-- Image --> */}
                    <div className="col-lg-6">

                        <div className="about-image-wrapper">

                            <img
                                src={aboutImage1}
                                alt="Technicien effectuant une maintenance"
                                className="about-image"
                            />

                            <div className="image-decoration"></div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}


export default About;
