import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vh;
  height: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.div`
  font-size: 36px;
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>text</Title>
    </Wrapper>
  );
}

export default App;
