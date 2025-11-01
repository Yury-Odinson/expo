import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

const lightAppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.light.background,
    card: Colors.light.background,
  },
};

const darkAppTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: Colors.dark.background,
    card: Colors.dark.background,
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const scheme = colorScheme === 'dark' ? 'dark' : 'light';
  const appTheme = scheme === 'dark' ? darkAppTheme : lightAppTheme;
  const backgroundColor = Colors[scheme].background;

  return (
    <ThemeProvider value={appTheme}>
      <SafeAreaProvider>
        <SafeAreaView style={[styles.container, { backgroundColor }]} edges={['top']}>
          <Stack
            screenOptions={{
              contentStyle: { backgroundColor },
            }}
          >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
