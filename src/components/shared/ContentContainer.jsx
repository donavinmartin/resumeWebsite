import styled from "styled-components";
import { laptop, tablet } from "../../helpers/responsive";

const Container = styled.section`
  display: grid;
  padding-bottom: 2.5rem;
  scroll-margin-top: 25vh;
  grid-template-columns: 1fr 2fr;
  border-bottom: ${(props) =>
    props.removeborderbottom ? "none" : "1px solid #e3e3e3"};
  ${tablet({
    gap: "1rem",
    display: "flex",
    "flex-direction": "column",
  })};
`;
const Heading = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
`;
const DetailsContainer = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;
`;
const ContentContainer = ({ id, heading, children, removeborderbottom }) => {
  return (
    <Container id={id} removeborderbottom={removeborderbottom}>
      <Heading>{heading}</Heading>
      <DetailsContainer>{children}</DetailsContainer>
    </Container>
  );
};

export default ContentContainer;
