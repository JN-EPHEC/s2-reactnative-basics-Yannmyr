import { StyleSheet, Text, View } from 'react-native';

const TodoItem = ({ text }) => {
  return (
    <View style={styles.item}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});

export default TodoItem;