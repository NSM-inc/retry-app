import styled from 'styled-components/native';
import { ColorProps, LayoutProps, BorderProps, color, border, layout } from 'styled-system';

export interface TextInputProps extends ColorProps, LayoutProps, BorderProps {}

const TextInput = styled.TextInput<TextInputProps>`
  width: 100%;
  height: 48px;
  ${color}
  ${layout}
  ${border}
`;

export default TextInput;
