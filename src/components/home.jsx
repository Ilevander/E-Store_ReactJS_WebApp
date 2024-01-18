import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomePageContainer>
      <WelcomeMessage>
        <h1>Welcome to My Store</h1>
        <p>Explore our wide range of products and find the perfect items for you.</p>
      </WelcomeMessage>
    </HomePageContainer>
  );
};

export default Home;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const WelcomeMessage = styled.div`
  text-align: center;
  max-width: 600px;
  margin-bottom: 30px;

  h1 {
    color: #333;
    font-size: 2em;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    font-size: 1.2em;
  }
`;
