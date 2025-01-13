import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiZoho,
} from "react-icons/si";

const IconWrapper = ({ children, color }) => (
  <div className={`hover:scale-110 transition-transform`} style={{ color }}>
    {children}
  </div>
);

const Icons = {
  React: (props) => (
    <IconWrapper color="#61DAFB">
      <FaReact {...props} />
    </IconWrapper>
  ),
  JavaScript: (props) => (
    <IconWrapper color="#F7DF1E">
      <SiJavascript {...props} />
    </IconWrapper>
  ),
  TypeScript: (props) => (
    <IconWrapper color="#3178C6">
      <SiTypescript {...props} />
    </IconWrapper>
  ),
  HTML5: (props) => (
    <IconWrapper color="#E34F26">
      <FaHtml5 {...props} />
    </IconWrapper>
  ),
  CSS3: (props) => (
    <IconWrapper color="#1572B6">
      <FaCss3Alt {...props} />
    </IconWrapper>
  ),
  NodeJs: (props) => (
    <IconWrapper color="#339933">
      <FaNodeJs {...props} />
    </IconWrapper>
  ),
  Git: (props) => (
    <IconWrapper color="#F05032">
      <FaGitAlt {...props} />
    </IconWrapper>
  ),
  GitHub: (props) => (
    <IconWrapper color="#181717">
      <FaGithub {...props} />
    </IconWrapper>
  ),
  AWS: (props) => (
    <IconWrapper color="#FF9900">
      <FaAws {...props} />
    </IconWrapper>
  ),
  Python: (props) => (
    <IconWrapper color="#3776AB">
      <FaPython {...props} />
    </IconWrapper>
  ),
  Flask: (props) => (
    <IconWrapper color="#000000">
      <SiFlask {...props} />
    </IconWrapper>
  ),
  Django: (props) => (
    <IconWrapper color="#092E20">
      <SiDjango {...props} />
    </IconWrapper>
  ),
  FastAPI: (props) => (
    <IconWrapper color="#009688">
      <SiFastapi {...props} />
    </IconWrapper>
  ),
  PostgreSQL: (props) => (
    <IconWrapper color="#4169E1">
      <SiPostgresql {...props} />
    </IconWrapper>
  ),
  MongoDB: (props) => (
    <IconWrapper color="#47A248">
      <SiMongodb {...props} />
    </IconWrapper>
  ),
  Zoho: (props) => (
    <IconWrapper color="#C00">
      <SiZoho {...props} />
    </IconWrapper>
  ),
};

export default Icons;
