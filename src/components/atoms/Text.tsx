import styled from 'styled-components/native';
import {
  color,
  ColorProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

const Text = styled.Text<TypographyProps & ColorProps & PositionProps & SpaceProps>`
  ${typography}
  ${color}
  ${position}
  ${space}
`;

export default Text;
