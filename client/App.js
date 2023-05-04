import 'react-native-gesture-handler';
import Index from './src/screens/index';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Create from './src/screens/create';
import Update from './src/screens/update';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Blogs"
                    component={Index}
                />
                <Stack.Screen
                    name="Create"
                    options={{ title: 'Create Blog' }}
                    component={Create}
                />
                <Stack.Screen
                    name="Update"
                    options={{ title: 'Update Blog' }}
                    component={Update}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyStack;