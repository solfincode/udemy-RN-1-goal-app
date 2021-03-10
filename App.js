import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

//import component
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = React.useState([]);
  const [isAddMode, setisAddMode] = React.useState(false);

  //add goal
  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setisAddMode(false);
  };

  const onDeleteHandler = (goalID) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalID);
    });
  };

  const cancelHandler = () => {
    setisAddMode(false);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setisAddMode(true)}
        >
          <Text style={styles.textWhite}>add</Text>
        </TouchableOpacity>
        <GoalInput
          visible={isAddMode}
          addGoalHandler={addGoalHandler}
          cancelHandler={cancelHandler}
        />
        <View style={styles.goalListContainer}>
          <Text>Goal List</Text>
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                id={itemData.item.id}
                title={itemData.item.value}
                onDelete={onDeleteHandler}
              />
            )}
            style={styles.goalListContainer}
          ></FlatList>
        </View>
        {/* <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Text style={styles.textWhite}>1</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textWhite}>2</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.textWhite}>2</Text>
          </View>
        </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    flexDirection: "column",
  },
  button: {
    backgroundColor: "teal",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
  },
  box: {
    backgroundColor: "teal",
    margin: 5,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  boxContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  textWhite: {
    color: "white",
  },
  goalListContainer: {
    marginTop: 15,
    borderTopColor: "#333",
  },
});
