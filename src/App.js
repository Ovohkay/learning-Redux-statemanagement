import React from "react";
import styled from "styled-components";
import LoginPage from "./Components/LoginPage";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <Center>
      <LoginPage />
      <Profile />
    </Center>
  );
};

export default App;

const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
