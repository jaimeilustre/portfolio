
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

import Resume from "../components/Resume";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";
import Spinner from "../components/Spinner";
import axios from "axios";

function Resumes() {
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    axios.get("/api/skills").then((response) => {
      setSkills(response.data);
    });
    axios.get("/api/experience").then((response) => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Resume - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Resume Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-skills-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="My Skills" />
            <div className="mi-skills">
              <div className="skills-container">
                {skills.map((skill) => (
                  <div className="skills">
                    <h6>{skill}</h6>
                  </div>
                  // <TrackVisibility
                  //   once
                  //   className="col-lg-6 mt-30"
                  //   key={skill.title}
                  // >
                  //   <Progress title={skill} />
                  // </TrackVisibility>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="CV" />
            <Smalltitle title="Working Experience" icon="briefcase" />
            <div className="mi-resume-wrapper">
              {workingExperience.map((workingExp) => (
                <Resume key={workingExp.id} resumeData={workingExp} />
              ))}
            </div>
            <div className="mt-30"></div>
            <Smalltitle title="Educational Qualifications" icon="book" />
            <div className="mi-resume-wrapper">
              {educationExperience.map((educatonExp) => (
                <Resume key={educatonExp.id} resumeData={educatonExp} />
              ))}
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Resumes;