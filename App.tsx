import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "@theme/index";

import { NewUser } from "@screens/NewUser";
import { Loading } from "@components/Loading";
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <NewUser /> : <Loading />}
    </ThemeProvider>
  );
}
