import styled from 'styled-components/native';
import { color, TextColorProps, typography, TypographyProps } from 'styled-system';

interface TextProps {
  children?: React.ReactNode;
}

const StyledText = styled.Text`
  ${typography}
  ${color}
`;

const Text = ({ children, ...props }: TextProps & TypographyProps & TextColorProps) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
