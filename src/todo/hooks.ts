import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useGetQuery } from "../common/hooks/useHelpers";
import { FetchDataInterface, IMutate } from "../common/interface";
import { TODOS } from "./constants";

export const useGetTodos = <T>(): FetchDataInterface<T> =>
  useGetQuery<T>([TODOS], "https://jsonplaceholder.typicode.com/todos");

export const useAddTodo = (): IMutate => {
  const { mutateAsync, isLoading } = useMutation(
    payload =>
      axios.post("https://jsonplaceholder.typicode.com/todos", payload),
    {
      onSuccess: async () => {
        // alert here
      },
    }
  );
  return [mutateAsync, isLoading];
};
