import axios from "axios";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { FetchDataInterface } from "../interface";

export const useGetQuery = <T,>(
  key: QueryKey,
  url: string
): FetchDataInterface<T> => {
  const result = useQuery(key, () =>
    axios.get(url).then(res => res?.data as T)
  );
  const { data, isLoading } = result;
  return [(data || {}) as T, isLoading, result];
};
