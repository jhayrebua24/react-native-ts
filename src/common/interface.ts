import { UseQueryResult } from "@tanstack/react-query";

export interface RequestResponse<T> {
  data: T;
}
export type FetchDataInterface<Type> = [Type, boolean, UseQueryResult];
export type IMutate = [(key: any) => Promise<any>, boolean];
