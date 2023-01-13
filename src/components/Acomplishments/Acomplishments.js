import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';


const data = [
  { number: 1683, text: 'Max Rated at Codechef' },
  { number: '1561+', text: 'Scored at GeeksforGeeks', },
  { number: '200+', text: 'Problems Solved at Leetcode', },
  { number: '1500+', text: 'Lnkedin Connections', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Coding Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;