import { Button } from 'components/atoms';
import { useState } from 'react';
import { COLOR } from 'resources/constants';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

interface TagProps {
  isDisable?: boolean;
  children: React.ReactNode;
}

const TagButton = styled(Button)<{ isFocused: boolean }>`
  height: 26px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
  border: 1px solid ${COLOR.MAGNET};
  color: ${COLOR.MAGNET};

  ${({ isFocused }) =>
    isFocused &&
    ` background: ${COLOR.YELLOW_PC};
      color: ${COLOR.YELLOW_P};
      border: 1px solid ${COLOR.YELLOW_PC};
      
    `}

  ${space}
`;

const Tag = ({ isDisable = false, children, ...props }: TagProps & SpaceProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TagButton
      disabled={isDisable}
      onPress={() => setIsFocused(!isFocused)}
      isFocused={isFocused}
      {...props}>
      {children}
    </TagButton>
  );
};

export default Tag;
