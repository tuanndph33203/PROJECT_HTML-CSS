import "@/style/services.scss";
const Services = () => {
    return (
        <section className="services">
            <div className="container-fluid">
                <div className="service-list">
                    <div className="service-item">
                        <img src="./assets/image/icons/cup.svg" className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">High Quality</h4>
                            <p className="service__description">crafted from top materials</p>
                        </div>
                    </div>
                    {/*End service-item*/}
                    <div className="service-item">
                        <img src="./assets/image/icons/v.svg" className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">High Quality</h4>
                            <p className="service__description">crafted from top materials</p>
                        </div>
                    </div>
                    {/*End service-item*/}
                    <div className="service-item">
                        <img src="./assets/image/icons/ship.svg" className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">High Quality</h4>
                            <p className="service__description">crafted from top materials</p>
                        </div>
                    </div>
                    {/*End service-item*/}
                    <div className="service-item">
                        <img src="./assets/image/icons/contact.svg" className="service__image" />
                        <div className="service-info">
                            <h4 className="service__name">High Quality</h4>
                            <p className="service__description">crafted from top materials</p>
                        </div>
                    </div>
                    {/*End service-item*/}
                </div>
            </div>
        </section>
    )
}

export default Services