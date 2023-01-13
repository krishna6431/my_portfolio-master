import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionTitle>Contact Us</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:9519798972">+91 95-1979-8972</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:krish.iitp@gmail.com">
            krish.iitp@gmail.com
          </LinkItem>
          <LinkItem href="mailto:vermakrish921@gmail.com">
            vermakrish921@gmail.com
          </LinkItem>
          <LinkItem href="mailto:krishna_2211cs19@iitp.ac.com">
            krishna_2211cs19@iitp.ac.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Think bigger, build Smarter, solve harder</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/krishna6431">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/krishna6431">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/krishna_6431">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
