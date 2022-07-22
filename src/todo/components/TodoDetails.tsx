import React from "react";
import { Text, View } from "react-native";
import { styles } from "../constants";
import { ITodo } from "../interface";

interface Props {
  data: ITodo;
}

function TodoDetails({ data }: Props): JSX.Element {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.status}>
        {data.completed ? "Completed" : "Not completed"}
      </Text>
    </View>
  );
}

export default TodoDetails;
