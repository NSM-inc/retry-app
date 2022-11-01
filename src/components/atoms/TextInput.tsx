import styled from 'styled-components/native';

interface TextInputProps {
  designType: 'default';
}

const design = {
  default: {
    'border-width': '1',
    padding: '10px',
  },
};

const StyledTextInput = styled.TextInput<TextInputProps>`
  ${({ designType }) => design[designType]}
`;

const TextInput = ({ ...props }: TextInputProps) => {
  return <StyledTextInput {...props}>테스트</StyledTextInput>;
};

export default TextInput;
