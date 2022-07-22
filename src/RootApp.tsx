import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import TodoContainer from "./todo";

function RootApp(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = React.useMemo(
    () => ({
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      height: "100%",
    }),
    [isDarkMode]
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <TodoContainer />
    </SafeAreaView>
  );
}

export default RootApp;
