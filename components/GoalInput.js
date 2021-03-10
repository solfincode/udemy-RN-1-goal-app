import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = React.useState("");
  //input handler
  const inputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <SafeAreaView>
        <View>
          <TextInput
            style={styles.input}
            placeholder="goal input"
            onChangeText={inputHandler}
            value={enteredGoal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.addButton}
                onPress={addGoalHandler}
              >
                <Text style={styles.textWhite}>add</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.CancelButton}
                onPress={props.cancelHandler}
              >
                <Text style={styles.textWhite}>cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "50%",
  },
  addButton: {
    backgroundColor: "blue",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
  },
  CancelButton: {
    backgroundColor: "red",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-around",
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
