
import React, { Suspense, useEffect, useState } from "react";

import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";

import Spinner from "../components/Spinner";

import axios from "axios";


function About() {
  
  const [information, setInformation] = useState("");

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>About - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template About Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-about-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="About Me" />
            <div className="row align-items-center">
              <div className="col-lg-6">
                {/* <div className="mi-about-image">
                  <ProgressiveImage
                    src={information.aboutImage}
                    placeholder="/images/about-image-placeholder.png"
                  >
                    {(src) => (
                      <img
                        src={src}
                        alt="aboutimage"
                        onClick={() => handleToggler(!toggler)}
                      />
                    )}
                  </ProgressiveImage>
                  <span className="mi-about-image-icon">
                    <Icon.ZoomIn />
                  </span>
                  <FsLightbox
                    toggler={toggler}
                    sources={[information.aboutImageLg]}
                  />
                </div> */}
              </div>
              <div className="col-lg-6">
                <div className="mi-about-content">
                  {/* <h3>
                    I am <span className="color-theme">{information.name}</span>
                  </h3> */}
                  <p>
                    {information.detailedContent1}
                  </p>
                  <p>
                    {information.detailedContent2}
                  </p>
                  <p>
                    {information.detailedContent3}
                  </p>
                  <ul>
                    {!information.fullName ? null : (
                      <li>
                        <b>Full Name</b> {information.fullName}
                      </li>
                    )}
                    {/* {!information.age ? null : (
                      <li>
                        <b>Age</b> {information.age} Years
                      </li>
                    )} */}
                    {!information.phone ? null : (
                      <li>
                        <b>Phone</b> {information.phone}
                      </li>
                    )}
                    {/* {!information.nationality ? null : (
                      <li>
                        <b>Nationality</b> {information.nationality}
                      </li>
                    )}
                    {!information.language ? null : (
                      <li>
                        <b>Languages</b> {information.language}
                      </li>
                    )} */}
                    {!information.email ? null : (
                      <li>
                        <b>Email</b> {information.email}
                      </li>
                    )}
                    {!information.address ? null : (
                      <li>
                        <b>Address</b> {information.address}
                      </li>
                    )}
                    {/* {!information.freelanceStatus ? null : (
                      <li>
                        <b>Freelance</b> {information.freelanceStatus}
                      </li>
                    )} */}
                  </ul>
                  <a href={information.cvfile} className="mi-button">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mi-service-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="Services" />
            <div className="mi-service-wrapper">
              <div className="row mt-30-reverse">
                {services.map((service) => (
                  <div
                    className="col-lg-4 col-md-6 col-12 mt-30"
                    key={service.title}
                  >
                    <Service content={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Reviews" />
            <div className="row justify-content-center">
              <div className="col-12">
                <Slider className="mi-testimonial-slider" {...sliderSettings}>
                  {reviews.map((review) => (
                    <Testimonial key={review.id} content={review} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div> */}
      </Suspense>
    </Layout>
  );
}

export default About;