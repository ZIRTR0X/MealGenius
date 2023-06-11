import { createStackNavigator } from "@react-navigation/stack";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import PantryScreen from "../screens/PantryScreen";

export default function PantryNavigation() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="PantryList">
            <Stack.Screen name="PantryList" component={PantryScreen} 
                options={{
                    headerShown: false
                }}/>
            <Stack.Screen 
                name="PantryDetails"
                component={MealDetailsScreen}
                options={({ route }) => ({
                    // @ts-ignore
                    title: route?.params?.meal?.name || "Détails", 
                })}
                    />
        </Stack.Navigator> 
    );
}