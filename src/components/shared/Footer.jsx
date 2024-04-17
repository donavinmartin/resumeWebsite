import styled from "styled-components";

const Container = styled.footer`
  font-size: 0.75rem;
  padding: 1.5rem 0;
  background: #efefef;
  border-radius: 5px 5px 0 0;
  text-align: center;
  font-family: "Lato", sans-serif;
`;
const Footer = () => {
  return (
    <Container>
      Copyright &copy; 2024, Donavin Martin | All Rights Reserved.
    </Container>
  );
};

export default Footer;
