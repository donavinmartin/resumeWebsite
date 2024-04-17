import ContentContainer from "../shared/ContentContainer";
import DetailHeading from "../shared/elements/DetailHeading";
import DetailGroup from "../shared/elements/DetailGroup";
import DetailText from "../shared/elements/DetailText";

const Education = () => {
  const highlights =
    "ABET Accredited, National Centers of Academic Excellence, 3.75 GPA";
  return (
    <ContentContainer
      id="education"
      heading={"Education"}
      removeborderbottom={"true"}
    >
      {/* <DetailGroup>
        <DetailHeading
          primaryHeading={"Computer Science, BS"}
          secondaryHeading={"/ Tulsa University - Tulsa, OK"}
        />
        <DetailText text={highlights} />
      </DetailGroup> */}
      <DetailHeading
        primaryHeading={"Computer Science, BS"}
        secondaryHeading={"/ Oklahoma State University - Stillwater, OK"}
      />
    </ContentContainer>
  );
};

export default Education;
