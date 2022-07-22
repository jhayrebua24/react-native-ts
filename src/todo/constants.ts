import { StyleSheet, StatusBar } from "react-native";

export const TODOS = "TODOS/list";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 12,
    backgroundColor: "#3AB4F2",
    borderRadius: 4,
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    flex: 1,
    color: "#ffffff",
  },
  status: {
    color: "#ffffff",
    fontWeight: "900",
  },
  input: {
    borderSize: 2,
    width: "100%",
    padding: 3,
    backgroundColor: "#CFD2CFwqe",
  },
  form: {
    marginBottom: 10,
  },
});
