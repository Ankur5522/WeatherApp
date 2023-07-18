import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItems from "./src/components/ErrorItem";

const App = () => {
  const [loading, error, weather] = useGetWeather();

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItems />
      ) : (
        <ActivityIndicator size={"large"} color={"blue"} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default App;
