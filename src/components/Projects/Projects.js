import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider divider />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, demo, code }) => {
        return (<BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>TechStack</TitleContent>
            <TagList>
              {
                tags.map((tag, idx) => {
                  return (<Tag key={idx}>{tag}</Tag>)
                })
              }
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={code}>Code</ExternalLinks>
            <ExternalLinks href={demo}>Live Demo</ExternalLinks>
          </UtilityList>
        </BlogCard>)
      })}
    </GridContainer>
  </Section>
);

export default Projects;

