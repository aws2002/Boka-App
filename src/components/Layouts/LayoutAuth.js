import {
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { HStack, Center, Text, Link, View, Box } from "native-base";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function LayoutAuth({ children, createAccont }) {
  const navigation = useNavigation();
  const onLoginPressed = () => {
    navigation.navigate("login");
  };
  const onSigupPressed = () => {
    navigation.navigate("sigup");
  };
  return (
    <Box style={{ flex: 1 }} safeAreaTop="20">
      {/* <View style={{ width: "100%", height: 100 }}></View> */}

      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={{ flex: 2, padding: 20 }}>{children}</View>
      </TouchableWithoutFeedback>

      <View style={{ flex: 1 }}>
        {createAccont && (
          <View alignItems={"center"}>
            <Text fontSize={"md"}>- Login using -</Text>
          </View>
        )}
        {!createAccont && (
          <View alignItems={"center"}>
            <Text fontSize={"md"}>- Create using -</Text>
          </View>
        )}

        <HStack space={3} justifyContent="center" mt={"7"}>
          <TouchableOpacity>
            <Center h="12" w="12" bg="#1F2937" rounded="lg">
              <AntDesign name="apple1" size={25} color="#fff" />
            </Center>
          </TouchableOpacity>

          <TouchableOpacity>
            <Center h="12" w="12" bg="#EB4335" rounded="lg">
              <AntDesign name="google" size={25} color="#fff" />
            </Center>
          </TouchableOpacity>

          <TouchableOpacity>
            <Center h="12" w="12" bg="#1877F2" rounded="lg">
              <FontAwesome name="facebook-f" size={25} color="#fff" />
            </Center>
          </TouchableOpacity>
        </HStack>
        {createAccont && (
          <Text fontSize="md" textAlign={"center"} mt={6}>
            New here?
            <Text underline color={"#1E88E5"} onPress={onSigupPressed}>
              Create account
            </Text>
          </Text>
        )}
        {!createAccont && (
          <Text fontSize="md" textAlign={"center"} mt={6}>
            Already have account?
            <Text underline color={"#1E88E5"} onPress={onLoginPressed}>
              Login
            </Text>
          </Text>
        )}
      </View>
    </Box>
  );
}
