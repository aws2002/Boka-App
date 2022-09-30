import { StatusBar } from "expo-status-bar";
import CustomInput from "../components/customInput";
import { globalStyles } from "../styles/global";
import { useState } from "react";
import { Text, Box, View, HStack } from "native-base";
import CustomButton from "../components/customButton";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function AccountVerifcation() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const onLoginPressed = () => {
    console.log("Login");
  };
  return (
    <Box style={{ flex: 1, paddingHorizontal: 20 }} safeAreaTop="20">
      <View style={{ width: "100%", height: 70 }}>
        <HStack>
          <MaterialIcons
            name="arrow-back-ios"
            onPress={navigation.goBack}
            size={24}
            color="#4B5563"
          />
          <Text color={"#4B5563"} fontSize={16}>
            Back
          </Text>
        </HStack>
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={{ flex: 2 }}>
        <Text style={globalStyles.text_h1}>Account verification</Text>
      <Text style={globalStyles.text_p}>
        Fill the verification code that has been sent to +1-613-555-0110
      </Text>
          
      <CustomInput
        value={code}
        setValue={setCode}
        placeholder={"0 0 0 0 0 0 0"}
        title="Confirmation code"
        secureTextEntry={false}
      />
      <Box>
        <Text fontSize={"md"}>
          Didn’t get the code?{" "}
          <Link href="">
            <Text color={"#1E88E5"}>30 Sec</Text>
          </Link>
        </Text>
      </Box>
      <Box mt={20}>
        <CustomButton text={"Get recovery code"} onPress={onLoginPressed} />
      </Box>
        </View>
      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
    </Box>
  );
}
