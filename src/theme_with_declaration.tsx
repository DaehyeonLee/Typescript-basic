import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Theme_declaration = () => {
  return (
    <Container>
      <H1>HIIIIIIIIIIII type script protected!!</H1>
    </Container>
  );
};

export default Theme_declaration;
