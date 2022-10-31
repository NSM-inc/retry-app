import styled from 'styled-components/native';
import { color, TextColorProps, typography, TypographyProps } from 'styled-system';

const Text = styled.Text<TypographyProps & TextColorProps>`
  ${typography}
  ${color}
`;

export default Text;
