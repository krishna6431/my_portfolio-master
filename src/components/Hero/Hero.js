import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A Developer with strong passion for self-improvement. I have strong Problem Solving skills & bring energy, patience, positivity and cultural values to the team.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;