import React from "react";



const Services = () => {
    return (
        <section
            id="services"
            className="services-section"
        >

            <div className="container">

                {/* <!-- Titre section --> */}
                <div className="section-heading text-center">

                    <h2>
                        Nos Services
                    </h2>

                    <span className="heading-line"></span>

                </div>


                <div className="row g-4">


                    {/* <!-- Service 1 --> */}
                    <div className="col-12 col-md-6 col-lg-3">

                        <article className="service-card">

                            <div className="service-icon electricity-icon">
                                <i className="bi bi-lightning-charge-fill"></i>
                            </div>

                            <h3>
                                Installations
                                <br />
                                Électriques
                            </h3>

                            <p>
                                Installation complète et
                                mise aux normes de vos
                                réseaux électriques.
                            </p>

                        </article>

                    </div>


                    {/* <!-- Service 2 --> */}
                    <div className="col-12 col-md-6 col-lg-3">

                        <article className="service-card">

                            <div className="service-icon cooling-icon">
                                <i className="bi bi-snow2"></i>
                            </div>

                            <h3>
                                Climatisation
                            </h3>

                            <p>
                                Installation, entretien et
                                dépannage de systèmes
                                de climatisation.
                            </p>

                        </article>

                    </div>


                    {/* <!-- Service 3 --> */}
                    <div className="col-12 col-md-6 col-lg-3">

                        <article className="service-card">

                            <div className="service-icon cooling-icon">
                                <i className="bi bi-box-seam"></i>
                            </div>

                            <h3>
                                Froid Commercial
                            </h3>

                            <p>
                                Installation et maintenance
                                de chambres froides et
                                équipements frigorifiques.
                            </p>

                        </article>

                    </div>


                    {/* Service 4 */}
                    <div className="col-12 col-md-6 col-lg-3">

                        <article className="service-card">

                            <div className="service-icon electricity-icon">
                                <i className="bi bi-wrench-adjustable"></i>
                            </div>

                            <h3>
                                Dépannage &
                                <br />
                                Maintenance
                            </h3>

                            <p>
                                Intervention rapide pour
                                tous vos dépannages
                                électriques et froid.
                            </p>

                        </article>

                    </div>

                </div>

            </div>

        </section>
    )
}


export default Services;
