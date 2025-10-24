import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, SVGICON } from '../constants/theme';

const Footer = () => {
    let update = new Date();
    return (
        <>
            <footer
                className="site-footer style-1 bg-img-fix footer-action text-center"
                style={{ backgroundImage: "url(" + IMAGES.footerbg + ")" }}
                id="footer"
            >
                <div className="footer-top d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="widget widget_about">
                                    <div className="footer-logo logo-dark mb-3">
                                        <Link>
                                            <img className='select_logo_dark' src={IMAGES.logoWhite} alt="logo" />
                                        </Link>
                                    </div>
                                    <p>A Wonderful Serenity Has Taken Possession Of My Entire Soul, Like These.</p>
                                    <h6 className="m-b15">Our Socials</h6>
                                    <div className="dz-social-icon style-1">
                                        <ul className="d-flex justify-content-center gap-3 list-unstyled">
                                            <li>
                                                <Link target="_blank" to="https://www.facebook.com/" rel="noreferrer">
                                                    <i className="fab fa-facebook-f"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link target="_blank" to="https://twitter.com/?lang=en" rel="noreferrer">
                                                    <i className="fab fa-twitter"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link target="_blank" to="https://www.instagram.com/?hl=en" rel="noreferrer">
                                                    <i className="fab fa-instagram"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link target="_blank" to="https://www.whatsapp.com/" rel="noreferrer">
                                                    <i className="fa-brands fa-whatsapp"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="widget widget_contact">
                                    <h4 className="footer-title mb-3">Contact Us</h4>
                                    <ul className="contact-info list-unstyled">
                                        <li className="mb-2">
                                            <i className="fa fa-map-marker-alt me-2"></i>
                                            1559 Alabama Ave SE, DC 20032, Washington, USA
                                        </li>
                                        <li className="mb-2">
                                            <i className="fa fa-phone-alt me-2"></i>
                                            <Link to="tel:+1-800-555-1234">+1 (800) 555-1234</Link>
                                        </li>
                                        <li className="mb-2">
                                            <i className="fa fa-envelope me-2"></i>
                                            <h6 >info@yourcompany.com</h6>
                                        </li>
                                      
                                    </ul>
                                </div>
                            </div>

                            {/* Location Section */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="widget widget_locations">
                                    <h4 className="footer-title mb-3">Locations</h4>
                                    <div>
                                        <h6>Washington</h6>
                                        <p>1559 Alabama Ave SE, DC 20032, Washington, USA</p>
                                        {SVGICON.map}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="container">
                    <div className="footer-bottom text-center mt-4">
                        <span className="copyright-text">
                            Copyright © {update.getFullYear()}{" "}
                            <Link to="https://dexignzone.com/" rel="noreferrer" target="_blank">
                                DexignZone
                            </Link>. All rights reserved.
                        </span>
                    </div>
                </div>

                {/* Background images */}
                <img className="girl-img" src={IMAGES.footergril1} alt="" />
                <img className="svg-shape-1 rotate-360" src={IMAGES.footercircle} alt="" />
                <img className="svg-shape-2 rotate-360" src={IMAGES.footercircle} alt="" />
            </footer>
        </>
    );
};

export default Footer;
