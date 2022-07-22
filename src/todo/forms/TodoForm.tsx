import React from "react";
import {
  Formik,
  FormikProps,
  FormikValues,
  FormikHelpers,
  ErrorMessage,
} from "formik";
import * as yup from "yup";
import { Button, Text, TextInput, View } from "react-native";
import { useQueryClient } from "@tanstack/react-query";
import { useAddTodo } from "../hooks";
import { ITodo } from "../interface";
import { styles, TODOS } from "../constants";

function TodoForm(): JSX.Element {
  const [submit, isLoading] = useAddTodo();
  const client = useQueryClient();
  const onSubmit = async (
    values: FormikValues,
    { resetForm }: FormikHelpers<any>
  ) => {
    //
    const res = await submit(values);
    const data = res.data as ITodo;
    console.log(data, "data");
    client.setQueryData([TODOS], (res: any): ITodo[] => {
      const list = res as ITodo[];

      return [
        {
          ...data,
          id: (data.id as number) + 1,
        },
        ...list,
      ];
    });
    resetForm();
  };

  return (
    <View style={styles.form}>
      <Formik
        initialValues={{
          title: "",
          completed: false,
        }}
        onSubmit={onSubmit}
        validationSchema={yup.object().shape({
          title: yup.string().required(),
        })}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
        }: FormikProps<any>) => (
          <View>
            <View>
              <Text>Title</Text>
              <TextInput
                style={styles.input}
                value={values.titleqwrwqr}
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
              />
              <Text>
                <ErrorMessage name="title" />
              </Text>
            </View>
            <Button
              onPress={handleSubmit}
              disabled={isLoading}
              title="Submit"
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

export default TodoForm;
