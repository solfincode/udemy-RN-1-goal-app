import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = React.useState("");
  //input handler
  const inputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="goal input"
        onChangeText={inputHandler}
        value={enteredGoal}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={props.addGoalHandler.bind(this, enteredGoal)}
      >
        <Text style={styles.textWhite}>add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "teal",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
  },
  input: {
    borderColor: "teal",
    height: 40,

    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },

  textWhite: {
    color: "white",
  },
});

export default GoalInput;
