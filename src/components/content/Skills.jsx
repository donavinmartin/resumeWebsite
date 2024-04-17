import ContentContainer from "../shared/ContentContainer";
import DetailHeading from "../shared/elements/DetailHeading";
import DetailGroup from "../shared/elements/DetailGroup";
import DetailText from "../shared/elements/DetailText";

const Skills = () => {
  const competencies = "JavaScript, Swift, C#, Java, C++, SQL, HTML, CSS";
  const tools =
    "Npm, Git, GitHub, Docker, Jenkins, Kibana, Heroku, Jmeter, Postman, Azure Devops, Jira, Confluence";
  const frameworks =
    "React, Redux, Node.js, Express, Sequelize, Springboot, .Net, Cypress, Selemium, React Native, Electron";

  return (
    <ContentContainer id="skills" heading={"Competencies"}>
      <DetailGroup>
        <DetailHeading primaryHeading={"Languages"} />
        <DetailText text={competencies} />
      </DetailGroup>
      <DetailGroup>
        <DetailHeading primaryHeading={"Tools & Platforms"} />
        <DetailText text={tools} />
      </DetailGroup>
      <DetailGroup>
        <DetailHeading primaryHeading={"Frameworks & Libraries"} />
        <DetailText text={frameworks} />
      </DetailGroup>
    </ContentContainer>
  );
};

export default Skills;
