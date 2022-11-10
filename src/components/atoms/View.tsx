import styled from 'styled-components/native';
import {
  color,
  ColorProps,
  flex,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

const View = styled.View<LayoutProps & SpaceProps & ColorProps & FlexboxProps & PositionProps>`
  ${layout}
  ${space}
  ${color}
  ${flex}
  ${position}
`;

export default View;
