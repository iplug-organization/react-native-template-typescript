import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { screenProps, connectProps } from '../../store/ducks/auth';

const Home: React.FC<screenProps> = ({ welcomeText }) => (
  <Container>
    <Text>{welcomeText}</Text>
  </Container>
);

const mapStateToProps = ({ auth: { welcomeText } }: connectProps) => ({
  welcomeText,
});

export default connect(mapStateToProps, {})(Home);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #999;
`;

const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #f2f2f2;
`;
