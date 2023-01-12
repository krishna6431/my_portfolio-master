import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: "white" ,marginBottom:"20px" }}>
            <DiCssdeck size="3rem" />
            <Span>KrishAtIITP</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#aboutme">
            <NavLink>About Me</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/krishna6431">
          <AiFillGithub size ="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/krishna6431">
          <AiFillLinkedin size ="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://instagram.com/krishna_6431">
          <AiFillInstagram size ="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
