
import React from "react";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import AccountVerifcation from "../screens/AccountVerifcation";
import RecoverPassword from "../screens/RecoverPassword";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="sigup"
        component={CreateAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="accountVerifcation"
        component={AccountVerifcation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="recoverPassword"
        component={RecoverPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
