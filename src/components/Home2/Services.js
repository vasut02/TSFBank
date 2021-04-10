import React from 'react'

const Services = () => {
    return (
        <div>
            {/* services section start */}
            <section className="services" id="services">
                <div className="max-width">
                    {/* "Facebook Page Mangement", "Instagram Page Mangement", "Social Media Content Creation", "Follower growth Strategies", "E-mail Markerting" */}
                    <h2 className="title">Our Services</h2>
                    <div className="serv-content">
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-paint-brush" />
                                <div className="text">Facebook Page Mangement</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-chart-line" />
                                <div className="text">Instagram Page Mangement</div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.
                        </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-code" />
                                <div className="text">Social Media Content Creation</div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.
                        </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-code" />
                                <div className="text">Follower growth Strategies</div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.
                        </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-code" />
                                <div className="text">E-mail Markerting</div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.
                        </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Services
