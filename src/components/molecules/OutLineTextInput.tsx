import { Text, View } from 'components/atoms';
import TextInput, { TextInputProps } from 'components/atoms/TextInput';
import { COLOR } from 'resources/constants';

interface OutlineTextInputProps extends TextInputProps {
  label?: string;
}

const OutLineTextInput = ({ label, ...props }: OutlineTextInputProps) => {
  return (
    <View position="relative" width="100%" height="54px">
      {label && (
        <View position="absolute" top="-6px" left="18px" zIndex={1}>
          <Text
            fontSize="12px"
            backgroundColor={COLOR.WHITE}
            paddingLeft="2px"
            paddingRight="2px"
            zIndex={2}>
            {label}
          </Text>
        </View>
      )}
      <TextInput
        border={`1px solid ${COLOR.YELLOW_P}`}
        borderRadius="4px"
        paddingTop="14px"
        paddingBottom="14px"
        paddingLeft="16px"
        paddingRight="16px"
        {...props}
      />
    </View>
  );
};

export default OutLineTextInput;
