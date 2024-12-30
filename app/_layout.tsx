import { Stack } from "expo-router";
import { useFonts } from "expo-font";
export default function RootLayout() {
  const [isFontsLoaded] = useFonts({
    roboto: require("@/assets/fonts/Roboto-Regular.ttf"),
    robotoMedium: require("@/assets/fonts/Roboto-Medium.ttf"),
    robotoBold: require("@/assets/fonts/Roboto-Bold.ttf"),
  });

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
