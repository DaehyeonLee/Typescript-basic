import { useState } from "react";
import styled from "styled-components";

const Container = styled.div<ContainerPorps>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
`;

interface ContainerPorps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgcolor: string;
  bordercolor?: string;
  text?: string;
}

const Circle = ({
  bgcolor,
  bordercolor,
  text = "default text if text prop empty",
}: CircleProps) => {
  const [counter, setCounter] = useState(1);
  return (
    <Container bgColor={bgcolor} borderColor={bordercolor ?? bgcolor}>
      {text}
    </Container>
  );
};

export default Circle;
