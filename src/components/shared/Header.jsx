import styled from "styled-components";
import { mobile, tablet } from "../../helpers/responsive";
const Container = styled.header`
  top: 0;
  z-index: 10;
  display: flex;
  position: sticky;
  padding: 1.5rem 0;
  align-items: center;
  background: white;
  justify-content: space-between;
  border-bottom: 1px solid #e3e3e3;
  ${mobile({
    padding: ".5rem 0",
  })};
  ${tablet({
    "justify-content": "center",
  })};
`;
const Logo = styled.h1`
  color: black;
  font-size: 3rem;
  font-family: "Reenie Beanie", cursive;
  &:hover {
    color: grey;
    cursor: pointer;
  }
`;
const NavigationsLinks = styled.ul`
  gap: 1rem;
  display: flex;
  ${tablet({
    display: "none",
  })};
`;
const NavigationLink = styled.a`
  color: black;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;
const Header = () => {
  return (
    <Container>
      <a href="#about">
        <Logo>Donavin</Logo>
      </a>
      <NavigationsLinks>
        <NavigationLink href="#about">About</NavigationLink>
        <NavigationLink href="#skills">Skills</NavigationLink>
        <NavigationLink href="#experience">Experience</NavigationLink>
        <NavigationLink href="#education">Education</NavigationLink>
        {/* <NavigationLink href="#projects">Projects</NavigationLink> */}
        {/* <NavigationLink href="#contact">Contact</NavigationLink> */}
      </NavigationsLinks>
    </Container>
  );
};

export default Header;
