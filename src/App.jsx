import "./App.css";
import styled from "styled-components";
import { desktop } from "./helpers/responsive";
import About from "./components/content/About";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Skills from "./components/content/Skills";
import Education from "./components/content/Education";
import Experience from "./components/content/Experience";
import Projects from "./components/content/Projects";
import Contact from "./components/content/Contact";
const Container = styled.main`
  width: 90%;
  gap: 2rem;
  display: grid;
  margin: 0 auto;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
  ${desktop({
    width: "50%",
  })};
`;
const Content = styled.section`
  gap: 2.5rem;
  display: flex;
  flex-direction: column;
`;
function App() {
  return (
    <Container>
      <Header />
      <Content>
        <About />
        <Skills />
        <Experience />
        <Education />
        {/* <Projects /> */}
      </Content>
      <Footer />
    </Container>
  );
}

export default App;
