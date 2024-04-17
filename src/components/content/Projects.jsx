import styled from "styled-components";
import ContentContainer from "../shared/ContentContainer";
import DetailHeading from "../shared/elements/DetailHeading";
import DetailGroup from "../shared/elements/DetailGroup";
import DetailText from "../shared/elements/DetailText";
import { tablet } from "../../helpers/responsive";
const ProjectImages = styled.div`
  display: flex;
`;
const ProjectImage = styled.img`
  height: 250px;
  aspect-ratio: 16 / 9;
  background: grey;
  border-radius: 5px;
  ${tablet({
    height: "150px",
  })};
`;
const ProjectLinks = styled.div``;
const ProjectLink = styled.a``;

const Projects = () => {
  return (
    <ContentContainer
      id="projects"
      heading={"Projects"}
      removeborderbottom={"true"}
    >
      <DetailGroup>
        <DetailHeading
          primaryHeading={"Squared Away Finance"}
          secondaryHeading={"/ React, Swift, .Net"}
        />
        <DetailText text="testing" />
        <ProjectImages>
          <ProjectImage />
        </ProjectImages>
      </DetailGroup>
      <DetailGroup>
        <DetailHeading
          primaryHeading={"The Greene Room"}
          secondaryHeading={"/ React, Swift, .Net"}
        />
        <DetailText text="testing" />
        <ProjectImages>
          <ProjectImage />
        </ProjectImages>
      </DetailGroup>
    </ContentContainer>
  );
};

export default Projects;
