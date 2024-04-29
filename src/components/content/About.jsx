import styled from "styled-components";
import Portrait from "../../assets/pr.png";
import { laptop } from "../../helpers/responsive";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Container = styled.section`
  gap: 2rem;
  display: flex;
  padding-bottom: 2rem;
  scroll-margin-top: 25vh;
  justify-content: space-between;
  border-bottom: 1px solid #e3e3e3;
`;
const TextInformation = styled.div`
  gap: 1.5rem;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Heading = styled.h1`
  font-size: 2rem;
  font-family: "Lato", sans-serif;
  ${laptop({
    "font-size": "3rem",
  })};
`;
const Text = styled.p`
  font-size: 1.5rem;
`;

const ExternalSites = styled.div`
  gap: 1rem;
  display: flex;
`;
const ExternalLink = styled.a`
  color: black;
`;
const LinkedinIcon = styled(FaLinkedinIn)`
  font-size: 3rem;
  &:hover {
    color: #0077b5;
    cursor: pointer;
  }
`;
const GitHubIcon = styled(FaGithub)`
  font-size: 3rem;
  &:hover {
    color: #c9510c;
    cursor: pointer;
  }
`;
const ImageSection = styled.div`
  display: none;
  ${laptop({
    display: "flex",
  })};
`;
const Image = styled.img`
  width: 600px;
  height: 600px;
  border-radius: 5px;
`;
const About = () => {
  return (
    <Container id="about">
      <TextInformation>
        <Heading>Hey, I'm Donavin.</Heading>

        <Text>
          A Software Engineer with nearly ten years of experience within various
          roles in the software development lifecycle.
        </Text>

        <ExternalSites>
          <ExternalLink
            href="https://www.linkedin.com/in/donavinmartin/"
            target="_blank"
          >
            <LinkedinIcon />
          </ExternalLink>

          {/* <ExternalLink href="https://github.com/donavinmartin" target="_blank">
            <GitHubIcon />
          </ExternalLink>  */}
        </ExternalSites>
      </TextInformation>

      <ImageSection>
        <Image src={Portrait} />
      </ImageSection>
    </Container>
  );
};

export default About;
