import React from 'react';
import { DiCode, DiNodejsSmall, DiLinux } from 'react-icons/di';
// import{FaCode} from 'react-icons/fa'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { Progress, Space } from 'antd';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      {/* Programming Language Section */}

      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            <div style={{ display: 'flex' }}> <span style={{ width: "60%" }}>C++</span>
              <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} trailColor={"grey"} />
            </div><br />
            <div style={{ display: 'flex' }}> <span style={{ width: '60%' }}>Python</span>
              <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} trailColor={"grey"} />
            </div><br />
            <div style={{ display: 'flex' }}> <span style={{ width: '60%' }}>JavaScript</span>
              <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} trailColor={"grey"} />
            </div><br />
            <div style={{ display: 'flex' }}> <span style={{ width: '60%' }}>C</span>
              <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} trailColor={"grey"} />
            </div><br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* FrameWorks Section */}

      <ListItem>
        <picture>
          <DiNodejsSmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>FrameWorks & Libraries</ListTitle>
          <ListParagraph>
            <div style={{ display: 'flex' }}> <span style={{ width: "60%" }}>Next.js</span>
              <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} trailColor={"grey"} />
            </div><br />
            <div style={{ display: 'flex' }}> <span style={{ width: '60%' }}>NodeJS</span>
              <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} trailColor={"grey"} />
            </div><br />
            <div style={{ display: 'flex' }}> <span style={{ width: '60%' }}>ExpressJs</span>
              <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} trailColor={"grey"} />
            </div><br />
            <div style={{ display: 'flex' }}> <span style={{ width: '60%' }}>BootStrap</span>
              <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} trailColor={"grey"} />
            </div><br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* Tools Section */}

      <ListItem>
        <picture>
          <DiLinux size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other Tools & Platforms</ListTitle>
          <ListParagraph>
            <div style={{ display: 'flex' }}> <span style={{ width: "60%" }}>Git</span>
              <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} trailColor={"grey"} />
            </div><br />
            <div style={{ display: 'flex' }}> <span style={{ width: '60%' }}>Terminal</span>
              <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} trailColor={"grey"} />
            </div><br />
            <div style={{ display: 'flex' }}> <span style={{ width: '60%' }}>Linux</span>
              <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} trailColor={"grey"} />
            </div><br />
            <div style={{ display: 'flex' }}> <span style={{ width: '60%' }}>Windows</span>
              <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} trailColor={"grey"} />
            </div><br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;