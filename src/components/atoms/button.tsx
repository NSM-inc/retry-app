import { Text, TouchableOpacity } from 'react-native';
import { COLOR } from 'resources/constants';
import styled from 'styled-components/native';

const Button = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
};

const Box = styled.TouchableOpacity<{ designType: string; size: string }>`
  ${({ designType }) => 'color: red'}
`;

export default Button;
