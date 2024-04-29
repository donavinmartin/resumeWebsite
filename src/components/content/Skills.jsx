import ContentContainer from "../shared/ContentContainer";
import DetailHeading from "../shared/elements/DetailHeading";
import DetailGroup from "../shared/elements/DetailGroup";
import DetailText from "../shared/elements/DetailText";

const Skills = () => {
  const competencies = "JAVASCRIPT, SWIFT, JAVA, C#, SQL, HTML, CSS";
  const tools =
    "NPM, GIT, GITHUB, POSTMAN, CHAI, JENKINS, CYPRESS, SELENIUM, JMETER, KIBANA, AZURE DEVOPS, JIRA, CONFLUENCE";
  const frameworks =
    "REACT, NODE.JS, EXPRESS, SEQUELIZE, .NET, REACT NATIVE, ELECTRON";

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
