import styled from 'styled-components/native';
import { color, ColorProps, typography, TypographyProps } from 'styled-system';

const Text = styled.Text<TypographyProps & ColorProps>`
  ${typography}
  ${color}
`;

export default Text;
