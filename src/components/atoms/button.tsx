import { Text } from 'react-native';
import { COLOR } from 'resources/constants';
import styled from 'styled-components/native';
import { layout, LayoutProps } from 'styled-system';

interface ButtonProps {
  designType?: 'yellow' | 'yellowReverse' | 'yellowPale';
  sizeType?: 'small' | 'large';
}

const design = {
  yellow: `
    background: ${COLOR.YELLOW_PC};
    color: ${COLOR.YELLOW_OPC};
  `,
  yellowReverse: `
    background: ${COLOR.YELLOW_OPC};
    color: ${COLOR.YELLOW_PC};
  `,
  yellowPale: `
    background: ${COLOR.YELLOW_PC};
    color: ${COLOR.YELLOW_P};
  `,
};

const size = {
  small: `
    min-width: 26px;
    height: 26px;
    border-radius: 12px;
  `,
  large: `
    min-width: 48px;
    height: 48px;
    border-radius: 12px;
  `,
};

const Box = styled.TouchableOpacity<ButtonProps & LayoutProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  ${({ designType }) => designType && design[designType]}
  ${({ sizeType }) => sizeType && size[sizeType]}
  ${layout}
`;

const Button = (props: ButtonProps) => {
  return (
    <Box onPress={() => {}}>
      <Text>Button</Text>
    </Box>
  );
};

export default Button;
