import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Theme_basic = () => {
  return (
    <Wrapper>
      <Title>hello</Title>
    </Wrapper>
  );
};
export default Theme_basic;
