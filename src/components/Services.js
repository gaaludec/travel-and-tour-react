import { services } from '../data/services';

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, type, description, icon } = service;
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{type}</h4>
                <p className="service-text">{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
