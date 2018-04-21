import React, { Component, Fragment } from 'react';
import styled, { injectGlobal, keyframes } from 'styled-components';

injectGlobal`
  body {
    padding: 0;
    margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Button danger>Hello</Button>
        <Button>Hello</Button>
        <Anchor href="https://blog.flynndev.xyz">Go to Blog</Anchor>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? '#e74c3c' : '#2ecc71')};
  ${props => {
    if (props.danger) {
      return `animation: ${rotation} 2s linear infinite`;
    }
  }};
`;

const Anchor = Button.withComponent('a').extend`
  text-decoration: none;
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default App;
