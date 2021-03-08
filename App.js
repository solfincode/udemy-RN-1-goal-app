import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
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

  //add goal
  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GoalInput addGoalHandler={addGoalHandler} />
        <View style={styles.goalListContainer}>
          <Text>Goal List</Text>
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={courseGoals}
            renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
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
