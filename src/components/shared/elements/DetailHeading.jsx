import styled from "styled-components";
import { mobile, tablet } from "../../../helpers/responsive";

const HeadingContainer = styled.div`
  gap: 0.5rem;
  display: flex;
  ${mobile({
    "flex-direction": "column",
  })};
`;
const PrimaryHeading = styled.h2`
  font-size: 1.5rem;
  ${tablet({
    "font-size": "1rem",
  })};
`;
const SecondaryHeading = styled.h3`
  font-weight: 100;
  font-size: 1.5rem;
  ${tablet({
    "font-size": "1rem",
  })};
`;
const DetailHeading = ({ primaryHeading, secondaryHeading }) => {
  return (
    <HeadingContainer>
      <PrimaryHeading>{primaryHeading}</PrimaryHeading>
      <SecondaryHeading>{secondaryHeading}</SecondaryHeading>
    </HeadingContainer>
  );
};

export default DetailHeading;
