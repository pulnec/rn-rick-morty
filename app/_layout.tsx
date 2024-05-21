import 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './home';
import { ToastProvider } from 'react-native-toast-notifications'
import Detail from './detail';

export default function RootLayout() {

  const Stack = createNativeStackNavigator();

  return (
    <ToastProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{
            title: 'Rick and Morty'
          }} component={Home} />

          <Stack.Screen name="Detail" options={{
            headerBackTitleVisible: false,
            title: 'Información'
          }} component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
}
