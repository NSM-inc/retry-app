import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLOR } from 'resources/constants';

const Button2 = () => {
  return (
    <TouchableOpacity style={styles.red} onPress={() => {}}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  red: {
    backgroundColor: COLOR.PRIME,
  },
  yellow: {},
});

export default Button2;
