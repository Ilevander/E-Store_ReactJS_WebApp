import React from 'react';
import styled from 'styled-components';
import backgroundImage from './landingpage.png';


const Home = () => {
  return (
    <HomePageContainer>
    </HomePageContainer>
  );
};

const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background: url(${backgroundImage}) center/cover no-repeat;
  margin-top: 0; 
`;

export default Home;




