import { TouchableOpacityProps } from 'react-native';
import { COLOR } from 'resources/constants';
import styled from 'styled-components/native';
import { layout, LayoutProps } from 'styled-system';

interface ButtonProps {
  designType: 'yellow' | 'yellowReverse' | 'yellowPale';
  sizeType?: 'small' | 'large';
  title: string;
}

const design = {
  yellow: {
    box: `background: ${COLOR.YELLOW_PC};`,
    text: `color: ${COLOR.YELLOW_OPC}`,
  },
  yellowReverse: {
    box: `background: ${COLOR.YELLOW_OPC};`,
    text: `color: ${COLOR.YELLOW_PC}`,
  },
  yellowPale: {
    box: `background: ${COLOR.YELLOW_PC};`,
    text: `color: ${COLOR.YELLOW_P}`,
  },
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
    font-size: 48px;
  `,
};

const StyledTouchableOpacity = styled.TouchableOpacity<ButtonProps & LayoutProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  ${({ designType }) => design[designType].box}
  ${({ sizeType }) => sizeType && size[sizeType]}
  ${layout}
`;

const StyledText = styled.Text<ButtonProps>`
  font-weight: 700;
  ${({ designType }) => design[designType].text}
`;

const Button = ({
  designType,
  sizeType,
  title,
  ...props
}: ButtonProps & TouchableOpacityProps & LayoutProps) => {
  return (
    <StyledTouchableOpacity designType={designType} sizeType={sizeType} {...props}>
      <StyledText designType={designType}>{title}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;
