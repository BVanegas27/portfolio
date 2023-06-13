import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/BVanegas27",
      logo: logoGithub,
    },
    {
      name: "Linkedind",
      link: "https://www.linkedin.com/in/brandon-vanegas-/",
      logo: logoLinkeind,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UC6KII7pqnFgsZ6_RuNKe8LQ",
      logo: logoYoutube,
    },
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>👋🏼 Hello, i'm</p>
            <p>Brandon Vanegas</p>
            <p>FrontEnd student</p>
          </S.Title>
          <S.DescriptionText>
            Estudiante FrontEnd, con conocimients básicos en html, css, java y react.
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img src="/public/img/Fondos_-8.jpeg" alt="BrandonVanegas" />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};
export default AboutMe;
