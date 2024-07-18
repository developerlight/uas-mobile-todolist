import Login from "./src/pages/login";
import Dashboard from "./src/pages/dashboard";
import CreateTask from "./src/pages/createTask";
import GetTask from "./src/pages/getTask";
import Riwayat from "./src/pages/riwayat";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./src/config/firebase";

const Stack = createStackNavigator();
const insideStack = createStackNavigator();

const InsideLayout = ({ setUser, user }) => {
  return (
    <insideStack.Navigator>
      <insideStack.Screen
        name="Dashboard"
        component={() => <Dashboard setUser={setUser} user={user} />}
        options={{ headerShown: false }}
      />
      <insideStack.Screen 
        name="Create Todos" 
        component={() => <CreateTask user={user} />}
      />
      <insideStack.Screen name="Get Todos" component={GetTask} />
      <insideStack.Screen name="Riwayat Todos" component={Riwayat} />
    </insideStack.Navigator>
  );
};

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="InsideLayout"
            component={() => <InsideLayout setUser={setUser} user={user} />}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
