import React from "react";
import { IMAGES } from "../constants/theme";
import { Link } from "react-router-dom";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const lightimg = [
  { title: "Body Building", img: IMAGES.overlayBoxpic1 },
  { title: "Nutrition", img: IMAGES.overlayBoxpic2 },
];
const lightimg2 = [
  { title: "Training", img: IMAGES.overlayBoxpic3 },
  { title: "Body Toning", img: IMAGES.overlayBoxpic4 },
  {title: "Workout", img: IMAGES.overlayBoxpic6 },
];
const progressDetails = [
  { title: "SPECIFIC PREPARATION", process: "90%" },
  { title: "NUTRITION SKILLS", process: "90%" },
  { title: "CARDIO CONDITIONING", process: "90%" },
];

const Gallery = () => {
  return (
    <>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="row lightgallery"
        controls={true}
        selector=".lg-show"
      >
        {/* First row of gallery images */}
        {lightimg.map((item, ind) => (
          <div
            data-exthumbimage={item.img}
            data-src={item.img}
            className="col-lg-4 col-sm-6 m-b30 wow fadeInUp lg-show"
            key={ind}
          >
            <div className="ovarlay-box style-1 gallery">
              <img src={item.img} alt={item.title} />
              <div className="content">
                <div className="ovarlay-info">
                  <Link to={item.img}>
                    <span className="view-btn lightimg">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </Link>
                  <Link className="title" to="/services-motivation">
                    <span>{item.title}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* FITNESS text block */}
        <div className="col-lg-4 col-sm-6 d-none d-lg-block position-relative wow fadeInUp">
          <h2 className="bg-data-text style-3">
            <span>F</span>
            <span>I</span>
            <span>T</span>
            <span>N</span>
            <span>E</span>
            <span>S</span>
            <span>S</span>
          </h2>
        </div>

        {/* Expertise box */}
        <div className="col-lg-4 col-sm-6 align-self-center m-b30 wow fadeInUp">
          <div className="content-box h-100">
            <div className="section-head style-1 m-0">
              <h2 className="title">
                My Fields Of <span>Expertise</span>
              </h2>
              <p className="p-big m-b25">
                Discover the power of consistent training and mindful movement.
              </p>
              <p className="p-big m-b25">
                Every session brings you one step closer to your healthiest, strongest self.
              </p>
            </div>
            <Link to="/about-us" className="btn btn-skew btn-primary">
              <span>About Us</span>
            </Link>
          </div>
        </div>

        {/* Second row of gallery images */}
        {lightimg2.map((item, ind) => (
          <div
            className="col-lg-4 col-sm-6 m-b30 overlay-content-box wow fadeInUp lg-show"
            key={ind}
            data-exthumbimage={item.img}
            data-src={item.img}
          >
            <div className="ovarlay-box style-1">
              <img src={item.img} alt={item.title} />
              <div className="content">
                <div className="ovarlay-info">
                  <Link to="#">
                    <span className="view-btn lightimg" title="">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </Link>
                  <Link className="title" to="/services-health-coach">
                    <span>{item.title}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Progress Bars */}
        <div className="col-lg-8 col-sm-12 m-b30 order-2 order-lg-0 wow fadeInUp">
          <div className="progress-bar-wrapper1">
            {progressDetails.map((item, indexKey) => (
              <div className="progress-bx style-1" key={indexKey}>
                <div className="progress-head">
                  <h6 className="title">{item.title}</h6>
                  <span>{item.process}</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: item.process }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final single gallery image (fixed) */}
      
      </LightGallery>
    </>
  );
};

export default Gallery;
