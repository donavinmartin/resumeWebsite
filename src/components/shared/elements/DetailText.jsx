import styled from "styled-components";

const Text = styled.p`
  text-transform: uppercase;
`;
const DetailText = ({ text }) => {
  return <Text>{text}</Text>;
};

export default DetailText;
