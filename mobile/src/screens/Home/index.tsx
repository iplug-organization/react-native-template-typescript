import React from 'react';
import styled from 'styled-components/native';
// import { connect } from 'react-redux';

interface StateProps {
  welcomeText: string;
}

type Props = StateProps;

// const Home: React.FC<Props> = ({ welcomeText }) => (
//   <Container>
//     <Text>{welcomeText}</Text>
//   </Container>
// );
export default () => (
  <Container>
    <Text>Welcome to react native template</Text>
    <Text>from IPlug Organization</Text>
  </Container>
);

// const mapStateToProps = (state: Props) => {
//   welcomeText;
// };

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #999;
`;

const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #f2f2f2;
`;
