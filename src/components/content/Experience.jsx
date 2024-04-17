import ContentContainer from "../shared/ContentContainer";
import DetailHeading from "../shared/elements/DetailHeading";

const Experience = () => {
  return (
    <ContentContainer id="experience" heading={"Experience"}>
      <DetailHeading
        primaryHeading={"QA Engineer"}
        secondaryHeading={"/ Sept 2020 - Present"}
      />
      <DetailHeading
        primaryHeading={"Software Engineer"}
        secondaryHeading={"/ Dec 2018 - Sept 2020"}
      />
      <DetailHeading
        primaryHeading={"Front-End Engineer"}
        secondaryHeading={"/ Mar 2018 - Dec 2018"}
      />
    </ContentContainer>
  );
};

export default Experience;
