import React from 'react';
import realisation1Image from '../assets/images/realisation1.jpg';
import realisation2Image from '../assets/images/realisation2.jpg';
import realisation3Image from '../assets/images/realisation4.jpg';


const Realisation = () => {
    return (
        <section
            id="realisations"
            className="realizations-section"
        >

            <div className="container">

                <div className="section-heading text-center">

                    <span className="section-label">
                        NOTRE SAVOIR-FAIRE
                    </span>

                    <h2>
                        Nos Réalisations
                    </h2>

                    <span className="heading-line"></span>

                </div>


                <div className="row g-4">

                    <div className="col-md-4">

                        <div className="realization-card">

                            <img
                                src={realisation1Image}
                                alt="Installation électrique"
                            />

                            <div className="realization-overlay">
                                <h3>
                                    Installation électrique
                                </h3>
                            </div>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div className="realization-card">

                            <img
                                src={realisation2Image}
                                alt="Installation climatisation"
                            />

                            <div className="realization-overlay">
                                <h3>
                                    Installation climatisation
                                </h3>
                            </div>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div className="realization-card">

                            <img
                                src={realisation3Image}
                                alt="Maintenance frigorifique"
                            />

                            <div className="realization-overlay">
                                <h3>
                                    Maintenance frigorifique
                                </h3>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}


export default Realisation;
