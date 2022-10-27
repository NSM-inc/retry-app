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

interface ViewProps {
  children?: React.ReactNode;
}

const StyledView = styled.View`
  ${layout}
  ${space}
  ${color}
  ${flex}
`;

const View = ({
  children,
  ...props
}: ViewProps & LayoutProps & SpaceProps & ColorProps & FlexboxProps) => {
  return <StyledView {...props}>{children}</StyledView>;
};

export default View;
