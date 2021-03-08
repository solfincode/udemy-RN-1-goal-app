import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.listItems}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    backgroundColor: "#f3f3f3",
    marginTop: 15,
  },
});

export default GoalItem;
