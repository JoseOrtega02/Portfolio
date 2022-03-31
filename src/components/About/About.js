import React from "react";
import { stackList } from "../../data/ProjectData";
import avatar from "../../Assets/avataaars.png"
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={avatar}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>José Ortega</strong> and my goal is learning how to Programming like a expert. Actually i am learning the tecnology of React, hope to become a good programer in this one. I want to enter in this industry because i want to learn more for people with more experience, work in real projects, and meet people who like to programming too.Thanks for your se my projects.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
