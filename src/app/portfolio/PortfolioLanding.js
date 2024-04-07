import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "../common/Components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PortfolioImage from "../../assets/portfolio_image.jpeg";

const PortfolioLanding = () => {

  return (
    <div className="portfolio-wrapper">
      <header className="header  section  section--bordered">
            <span className="meta-info">
                <span className="meta-info__item">Skylar Dryden</span> 
                <span className="meta-info__item meta-info__item--dot">•</span> 
                <span className="meta-info__item">Front-end Developer</span> 
                <span className="meta-info__item meta-info__item--dot  meta-info__item--dot-last">•</span> 
                <span className="meta-info__item"><a href="https://www.linkedin.com/in/skylar-dryden-29b914182/" target="_blank" className="meta-info__link">LinkedIn</a></span> 
            </span>
            <div className="landing-banner">
                <h1 className="heading heading--main">hello</h1>
                <LazyLoadImage 
                    src={PortfolioImage} 
                    width="100%"
                    alt="Testing"    
                    effect="blur"
                    wrapperClassName="image  image--circle  image--bordered  landing-banner__photo"
                />
            </div>
            <h2 className="heading heading--second-main">Welcome to my website</h2>
        </header>
        <main className="content">
            <section className="section  section--bordered-top  section--flex-centered">
                <div className="accolade accolade--am">
                    <div className="accolade__heading-wrapper">
                        <h2 className="accolade__heading">who<br aria-hidden="true"/> I<br aria-hidden="true"/> am</h2>
                    </div>
                    <div className="accolade__content-wrapper">
                        <p className="accolade__paragraph">I'm a Front-end Developer with 5+ years experience that specialises in component design and seamless UI flows. My passion lies in creating visually stunning interfaces and pushing the boundaries of user expectations.</p>
                    </div>
                </div>
            </section>
            <section className="section  section--bordered-top  section--flex-centered">
                <div className="accolade  accolade--do">
                    <div className="accolade__heading-wrapper">
                        <h2 className="accolade__heading">what<br aria-hidden="true"/> I<br aria-hidden="true"/> do</h2>
                    </div>
                    <div className="accolade__content-wrapper">
                        
                        <div className="card-component  card-component--light">
                            <div className="card-component__header">
                                <LazyLoadImage 
                                    src={PortfolioImage}
                                    width="100%"
                                    alt="Skylar Dryden"
                                    wrapperClassName="image  image--circle  image--bordered  card-component__image"
                                />
                                <h3 className="card-component__heading">Skylar Dryden <span className="card-component__subtext">57k followers</span></h3>
                            </div>
                            <p className="card-component__copy">This card is dynamic and responsive! Feel free to play around with the settings to test it.</p>
                        </div>
                        <div className="card-component-controls__settings-wrapper">
                            <label className="toggle-button  card-component-controls__toggle-button">
                                Dark mode
                                <input type="checkbox" className="toggle-button__checkbox  toggle-button__checkbox--colour" />
                                <span className="toggle-button__checkmark"></span>
                            </label>
                            <label className="toggle-button  card-component-controls__toggle-button">
                                Large text
                                <input type="checkbox" className="toggle-button__checkbox  toggle-button__checkbox--font" />
                                <span className="toggle-button__checkmark"></span>
                            </label>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className="section  section--bordered-top  section--flex-centered">
                <div className="accolade accolade--done">
                    <div className="accolade__heading-wrapper">
                        <h2 className="accolade__heading">what<br aria-hidden="true"/> I've<br aria-hidden="true"/> done</h2>
                    </div>
                    <div className="accolade__content-wrapper">
                        <div className="done-card">
                            <div className="done-card__header-wrapper">
                                <h3 className="done-card__header">Yuppiechef </h3>
                                <i className="done-card__icon"></i>
                            </div>
                            <p className="done-card__description">Sole Front-end Developer reponsible for maintaining the Front-end of the website, warehouse and store POS interfaces.</p>
                        </div>
                        
                        <div className="done-card">
                            <div className="done-card__header-wrapper">
                                <h3 className="done-card__header">Teach Me 2</h3>
                                <i className="done-card__icon"></i>
                            </div>
                            <p className="done-card__description">Was instrumental in redesigning the website in React.js and was involved in the early mobile development of their sister company product, Coachbit.</p>
                        </div>
                        
                        <div className="done-card">
                            <div className="done-card__header-wrapper">
                                <h3 className="done-card__header"><a href="https://github.com/Staaikies" target="_blank" className="done-card__header-link">GitHub Projects</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section  section--bordered-top  section--flex-centered">
                <div className="accolade accolade--you">
                    <div className="accolade__heading-wrapper">
                        <h2 className="accolade__heading  js-contact-success">who are<br aria-hidden="true"/> you?</h2>
                    </div>
                    <div className="accolade__content-wrapper">
                        <form action="#" className="form">
                            <div className="form-field">
                                <label className="form-label">Name:</label>
                                <input type="text" id="name" name="name" className="form-input" required/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">Email:</label>
                                <input type="email" id="email" name="email" className="form-input" required/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">Message:</label>
                                <textarea id="message" name="message" className="form-textarea" required></textarea>
                            </div>
                            <Button text="Contact me" style="primary" customClass="form-button" />
                        </form>
                    </div>
                </div>
            </section>
        </main>
        
        <footer className="footer">
            <p className="footer__paragraph">Made with HTML, CSS, JavaScript and lots of coffee ☕</p>
            <span className="meta-info">
                <span className="meta-info__item"><a href="https://www.linkedin.com/in/skylar-dryden-29b914182/" target="_blank" className="meta-info__link">LinkedIn</a></span> 
                <span className="meta-info__item meta-info__item--dot">•</span> 
                <span className="meta-info__item"><a href="https://github.com/Staaikies" target="_blank" className="meta-info__link">Github Projects</a></span>
            </span>
        </footer>
    </div>
  )
};

export default PortfolioLanding;