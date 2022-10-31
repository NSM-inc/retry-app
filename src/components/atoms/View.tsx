import styled from 'styled-components/native';
import {
  color,
  ColorProps,
  flex,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

const View = styled.View<LayoutProps & SpaceProps & ColorProps & FlexboxProps>`
  ${layout}
  ${space}
  ${color}
  ${flex}
`;

export default View;
