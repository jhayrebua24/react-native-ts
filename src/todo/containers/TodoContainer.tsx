import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import TodoDetails from "../components/TodoDetails";
import { styles } from "../constants";
import TodoForm from "../forms/TodoForm";
import { useGetTodos } from "../hooks";
import { ITodo } from "../interface";

const renderTodo = ({ item }: { item: ITodo }) => <TodoDetails data={item} />;

function TodoContainer(): JSX.Element {
  const [data, isLoading, { refetch }] = useGetTodos<ITodo[]>();

  return (
    <SafeAreaView style={styles.container}>
      <TodoForm />
      <FlatList
        data={data}
        renderItem={renderTodo}
        onRefresh={refetch}
        refreshing={isLoading}
        keyExtractor={item => item.id?.toString()}
      />
    </SafeAreaView>
  );
}

export default TodoContainer;
