import styled from "styled-components";

const Group = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;
const DetailGroup = ({ children }) => {
  return <Group>{children}</Group>;
};

export default DetailGroup;
